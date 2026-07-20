# Agent instructions

## Project scope

This is a static, dependency-free web app. Keep it usable by opening `index.html` directly from disk; do not introduce a server, build system, package manager, or network dependency unless the user explicitly requests one.

## Before editing

1. Read `README.md` and `DEVELOPMENT.md`.
2. Inspect the relevant HTML, CSS, and JavaScript before changing it.
3. Preserve existing user changes that are unrelated to the request.

## Architecture

- `index.html` contains semantic structure and control elements only.
- `styles.css` owns responsive styling and CSS 3D transforms.
- `cube.js` owns all puzzle state and UI behavior.

The cube state is modeled as 54 stickers with a 3D position and normal vector. Face turns rotate only stickers in the selected layer. Keep that model as the source of truth; do not update sticker colors directly as a shortcut.

## Non-negotiable behavior

- Shuffle must use valid face turns.
- Solve must exactly reverse every recorded turn, including manual turns and Tutor Mode practice moves.
- Dragging changes the viewing angle only; it must not mutate puzzle state.
- Every face has a 3×3 grid, including faces not currently visible.
- Tutor content must remain understandable for a complete beginner.

## Validation after changes

Run these checks:

```bash
node --check cube.js
python3 - <<'PY'
from html.parser import HTMLParser
HTMLParser().feed(open('index.html', encoding='utf-8').read())
print('HTML parsing check passed')
PY
```

Also test this interaction sequence in a browser:

1. Drag the cube until at least three different faces are visible.
2. Make at least one manual face turn.
3. Shuffle, then Solve; verify the cube returns to six solid-color faces.
4. Open Tutor Mode, navigate forward/backward, and run one practice move.
5. Check a narrow viewport (320px minimum) for clipping or horizontal scrolling.

## Accessibility

- Use native buttons and form controls.
- Keep visible labels and meaningful `aria-*` text in sync with behavior.
- Preserve keyboard focus indicators and `prefers-reduced-motion` support.
- Do not convey necessary information by color alone.
