"""Publish only the map page; keep the original page in the repository."""

from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "_site"
SITE.mkdir(exist_ok=True)

page = (ROOT / "map.html").read_text()
page = page.replace('<a href="index.html">原流程图 ↗</a>', "")
for name in ("index.html", "map.html"):
    (SITE / name).write_text(page)

assets = SITE / "assets"
assets.mkdir(exist_ok=True)
for name in ("map", "icons-3d"):
    shutil.copytree(ROOT / "assets" / name, assets / name, dirs_exist_ok=True)
shutil.copy2(ROOT / "assets/brand-logo.png", assets / "brand-logo.png")
(SITE / ".nojekyll").touch()
print("Prepared map website: index.html and map.html serve the same map page.")
