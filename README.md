# Cube Warden: The Last Route

A dependency-free story puzzle game built around a fully interactive 3x3 Rubik's Cube. Guide Aya along a fixed route through the Broken Archive, restore twelve cube seals, and stay ahead of the Void Wraiths.

## Run it

No build, package install, or backend is needed.

Open [index.html](index.html) directly in a modern browser, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.

## Features

- A story-first opening with one primary Begin or Continue action.
- Six illustrated sectors and twelve sequential, checkpointed encounters.
- Deterministic legal setup moves and state-based objectives that accept alternate valid solutions.
- A five-step pursuit system, three-level hints, family-safe failure, and checkpoint retry.
- Versioned `rubiks-cube.story.v1` progress that remains separate from Cube Academy data.
- Original local artwork under `assets/cube-warden/`; the game makes no network requests.
- Six-face CSS 3D cube; drag to inspect every side.
- Clockwise and counter-clockwise turns for all six faces.
- Legal randomized shuffles and deterministic reversal-based solving.
- A Field Kit containing the eight-step beginner lesson, Journey, Practice, Vault, Missions, Speedrun, replay, algorithm, state, and input tools.
- Responsive 320px layouts, keyboard and gamepad controls, live announcements, non-color status cues, and reduced-motion support.

## Project structure

| File | Responsibility |
| --- | --- |
| `index.html` | Accessible page structure and controls. |
| `styles.css` | Responsive layout, 3D cube presentation, and theme. |
| `cube.js` | Cube state, Story campaign, encounters, turns, persistence, and Field Kit behavior. |
| `assets/cube-warden/` | Original local story artwork and generation metadata. |
| `prds/cube-warden-the-last-route-prd.md` | Authoritative product and game design contract. |
| `prds/cube-warden-the-last-route-qa.md` | Campaign, regression, accessibility, and release test matrix. |
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

For a functional check, begin the route and restore the Gatehouse signal with `R U R' U'`. Then open the Field Kit, shuffle the cube, and press **Solve**. The cube must return to the solved state.

## License

No license has been selected for this project yet.
