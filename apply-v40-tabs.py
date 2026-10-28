from pathlib import Path
import re
import sys

root = Path(".")
index = root / "index.html"
css = root / "section-tabs-v40.css"
js = root / "section-tabs-v40.js"

if not index.is_file():
    sys.exit("ERROR: index.html not found. Run this script from the repository root.")
if not css.is_file() or not js.is_file():
    sys.exit("ERROR: section-tabs-v40.css or section-tabs-v40.js is missing. Extract the complete ZIP into the repository root.")

html = index.read_text(encoding="utf-8")
changed = False

if "section-tabs-v40.css" not in html:
    if "</head>" not in html:
        sys.exit("ERROR: </head> not found; index.html was not changed.")
    html = html.replace("</head>", '  <link rel="stylesheet" href="section-tabs-v40.css?v=4.0">\n</head>', 1)
    changed = True

if "section-tabs-v40.js" not in html:
    if "</body>" not in html:
        sys.exit("ERROR: </body> not found; index.html was not changed.")
    html = html.replace("</body>", '  <script src="section-tabs-v40.js?v=4.0"></script>\n</body>', 1)
    changed = True

if changed:
    index.write_text(html, encoding="utf-8")
    print("Updated index.html references.")
else:
    print("Asset references already present; index.html unchanged.")

sw = root / "sw.js"
if sw.is_file():
    source = sw.read_text(encoding="utf-8")
    match = re.search(r'(?m)^(\s*const\s+CACHE\s*=\s*["\'])([^"\']+)(["\'];?\s*)$', source)
    if match and not match.group(2).endswith("-tabs-v40"):
        replacement = match.group(1) + match.group(2) + "-tabs-v40" + match.group(3)
        sw.write_text(source[:match.start()] + replacement + source[match.end():], encoding="utf-8")
        print("Bumped service-worker cache key.")
    else:
        print("NOTE: Cache key not changed automatically; inspect sw.js before deploying.")

print("Next: git diff --check && git status --short")
