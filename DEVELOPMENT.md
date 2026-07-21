# Development guidelines

## HTML

- Use semantic elements and valid, lowercase HTML.
- Keep page text in `index.html`; keep dynamic lesson data in `cube.js`.
- Give interactive controls clear labels and stable IDs only when JavaScript needs them.
- Prefer `hidden` for sections that are conditionally shown.

## CSS

- Keep visual rules in `styles.css`; do not add inline styles except for dynamic values that JavaScript must update (the cube view transform is the intended exception).
- Use the existing custom properties for shared colors and sizes.
- Preserve `transform-style: preserve-3d`, face `translateZ` positioning, `perspective`, and `backface-visibility`; these create the physical cube view.
- Design mobile-first and test down to 320px wide. Avoid fixed widths that cause horizontal scrolling.
- Respect `prefers-reduced-motion` for new animation.

## JavaScript

- Use modern browser JavaScript only; keep the app free of dependencies and external requests.
- Wrap new behavior in the existing IIFE and use `const` by default.
- Keep state mutation in named functions. Rendering should derive the DOM from state rather than becoming a second state store.
- Record any user-visible cube move in `history`; use `record = false` only while replaying the inverse solution.
- Do not use `innerHTML` for dynamic strings. Build DOM nodes with `document.createElement` and `textContent`.
- Maintain keyboard operation and live status messages for any new workflow.

## Tutor content

- Explain one goal at a time in plain language.
- Define notation before relying on it.
- Include an orientation instruction whenever an algorithm needs one.
- Keep algorithms as arrays of standard moves (`U`, `R`, `F`, `D`, `L`, `B`, optionally followed by `'` or `2`).
- Treat practice actions as real moves so the existing Solve button can undo them.

## Definition of done

- The requested behavior works without a backend or package installation.
- The cube can still be dragged and all six faces render correctly.
- Shuffle → Solve restores the exact solved state.
- Open Missions, start a card, use a manual turn and Solve, then switch to Shuffle, Guided solve, and Speedrun; mission status must not leak into those workflows.
- The HTML parser and JavaScript syntax checks pass.
- Documentation is updated if the public behavior or file layout changes.
