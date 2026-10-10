"""Check the static pages and their local asset references before publishing."""

from html.parser import HTMLParser
from pathlib import Path
import re
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

if errors:
    raise SystemExit("\n".join(sorted(errors)))
print(f"Validated two pages and {len(checked)} local references.")
