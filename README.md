# Interactive Rubik's Cube

A dependency-free, browser-based 3×3 Rubik’s Cube with a draggable 3D view, manual face turns, shuffle/solve controls, and a beginner Tutor Mode.

## Run it

No build, package install, or backend is needed.

Open [index.html](index.html) directly in a modern browser, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.

## Features

- Six-face CSS 3D cube; drag to inspect every side.
- Clockwise and counter-clockwise turns for all six faces.
- Legal randomized shuffles and deterministic reversal-based solving.
- An eight-step beginner lesson, including common move algorithms and practice controls.
- Responsive layout, keyboard-operable controls, and live status announcements.

## Project structure

| File | Responsibility |
| --- | --- |
| `index.html` | Accessible page structure and controls. |
| `styles.css` | Responsive layout, 3D cube presentation, and theme. |
| `cube.js` | Cube-state model, turns, animations, dragging, and Tutor Mode. |
| `AGENTS.md` | Instructions for coding agents working in this repository. |
| `DEVELOPMENT.md` | Coding conventions and validation checklist. |

## Quick checks

```bash
node --check cube.js
python3 - <<'PY'
from html.parser import HTMLParser
HTMLParser().feed(open('index.html', encoding='utf-8').read())
print('HTML parsing check passed')
PY
```

For a functional check, shuffle the cube, then press **Solve**. The cube must return to the solved state.

## License

No license has been selected for this project yet.
