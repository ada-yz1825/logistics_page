"""Check the static pages and their local asset references before publishing."""

from html.parser import HTMLParser
from pathlib import Path
import re
import json
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
errors = set()
checked = set()


def check_reference(value, base):
    url = urlsplit(value)
    if url.scheme or url.netloc or not url.path:
        return
    target = (base / unquote(url.path)).resolve()
    if not target.is_relative_to(ROOT) or not target.is_file():
        errors.add(f"Missing local reference: {value} (from {base.relative_to(ROOT)})")
    checked.add(target)


class References(HTMLParser):
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if value and key in {"src", "href"}:
                check_reference(value, ROOT)


for name in ("index.html", "map.html"):
    path = ROOT / name
    if not path.is_file():
        errors.add(f"Missing page: {name}")
        continue
    text = path.read_text()
    References().feed(text)
    # Generated HTML and JavaScript also contain asset paths as string literals.
    for value in re.findall(r'''["'](assets/[^"'${}\s]+)["']''', text):
        check_reference(value, ROOT)

for path in (ROOT / "assets/map").glob("*.js"):
    for value in re.findall(r'''["'](assets/[^"'${}\s]+)["']''', path.read_text()):
        check_reference(value, ROOT)

# Every service needs a valid scene, route, resource roles and field-level evidence.
data_text = (ROOT / "assets/map/data.js").read_text()
data = json.loads(data_text.partition("=")[2].strip().removesuffix(";"))
for node_id, node in data["nodes"].items():
    if not node.get("sources") or any(key not in data["sources"] for key in node["sources"]):
        errors.add(f"Missing facility evidence: {node_id}")
for profile_id, profile in data.get("operationProfiles", {}).items():
    if len(profile.get("steps", [])) != 3 or not all(profile["steps"]):
        errors.add(f"Incomplete internal operation sequence: {profile_id}")
    if not profile.get("sources") or any(key not in data["sources"] for key in profile["sources"]):
        errors.add(f"Missing operation evidence: {profile_id}")
for node_id, node in data["nodes"].items():
    for direction in ("outbound", "inbound", "through"):
        if node.get("operations", {}).get(direction) not in data.get("operationProfiles", {}):
            errors.add(f"Missing operation sequence {direction}: {node_id}")
scene_ids = {scene["id"] for scene in data["scenes"]}
mode_ids = set()
for mode in data["modes"]:
    name = mode["id"]
    if name in mode_ids or mode["scene"] not in scene_ids:
        errors.add(f"Invalid or duplicate service mode: {name}")
    mode_ids.add(name)
    if not mode.get("capabilities") or not mode.get("resourceCoordinator"):
        errors.add(f"Missing service capabilities or organizer: {name}")
    settlement = mode.get("settlement", {})
    if not all(settlement.get(field) for field in ("basis", "payment", "sources")):
        errors.add(f"Incomplete settlement fields: {name}")
    for key in mode["sources"] + settlement.get("sources", []):
        if key not in data["sources"]:
            errors.add(f"Missing evidence source {key}: {name}")
    if len(mode.get("segments", [])) != len(mode["path"]) - 1 or not all(mode.get("segments", [])):
        errors.add(f"Missing movement segment names: {name}")
    if not mode.get("path") or len(mode["path"]) < 2:
        errors.add(f"Incomplete service path: {name}")
    if "customsHold" in mode.get("scenarios", []):
        if not mode.get("crossborder") or mode.get("customsNode") not in mode["path"]:
            errors.add(f"Invalid border hold location: {name}")
    for node, profile in mode.get("operationOverrides", {}).items():
        if node not in data["nodes"] or profile not in data["operationProfiles"]:
            errors.add(f"Invalid operation override {node}: {name}")
    nodes = mode["path"] + [node for pair in mode.get("aux", []) for node in pair]
    for key in nodes:
        if key not in data["nodes"] or not data["nodes"][key].get("resource"):
            errors.add(f"Missing facility or resource role {key}: {name}")

for key, source in data["sources"].items():
    if not all(source.get(field) for field in ("name", "url", "scope")):
        errors.add(f"Incomplete source description: {key}")
if errors:
    raise SystemExit("\n".join(sorted(errors)))
print(f"Validated two pages and {len(checked)} local references; {len(mode_ids)} service modes.")
