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
- Define Story encounters as data with legal setup moves, validator and progress IDs, three hints, a target move count, and a pressure budget.
- Sanitize `rubiks-cube.archive.v2` through `archive-state.js` before use. Invalid campaign data must fall back without deleting or rewriting legacy Story or Cube Academy records.
- Route Story, Field Kit, Missions, Speedrun, Guided Solve, Daily Challenge, replay, and two-player transitions through the centralized cleanup contract.
- Route Archive title, exploration, seal focus, pause, capture, epilogue, and Field Kit changes through `setArchiveRuntimePhase`; keep `data-archive-phase` in sync for diagnostics.
- Keep authored Archive solids and seal positions in `archiveWorld`; every route gate must name its prerequisite with `opensWith` so collision, animation, persistence, and diagnostics share one source of truth.
- Keep Wraith state and timing in `archive-wraith.js`; exploration may signal the simulation, but rendering and DOM status must derive from snapshots rather than becoming a second AI state store.
- Retry must reverse only moves made after the active Story checkpoint. Leaving Story must restore solved state through legal inverse moves.
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
- First run, refresh resume, New Game, all twelve Story victories, hint pressure, capture, retry, and the epilogue follow the PRD.
- Every Story setup is composed of legal turns; alternate state-valid solutions count even when they differ from the target move count.
- Campaign progress survives refresh in `rubiks-cube.archive.v2`, while malformed records fall back safely and legacy Story and Academy data remain untouched.
- Story map nodes expose current, completed, and ahead status in text and with non-color visual cues.
- Opening or leaving Field Kit, Missions, Speedrun, Guided Solve, Daily Challenge, replay, and two-player modes clears incompatible runtime state.
- The cube can still be dragged and all six faces render correctly.
- Shuffle → Solve restores the exact solved state.
- Open Missions, start a card, use a manual turn and Solve, then switch to Shuffle, Guided solve, and Speedrun; mission status must not leak into those workflows.
- State format fixture checks: export a solved state, make turns and export again, import both successfully, and reject malformed JSON, wrong versions, duplicate stickers, invalid colors, and incorrect color counts without changing the cube.
- Input compatibility checks: use lowercase and uppercase keyboard turns, undo, focused form controls, Shuffle, Solve, Guided solve, Missions, Speedrun, and a connected/disconnected gamepad where available.
- Camera compatibility checks: apply every preset, drag afterward, use arrow keys, inspect all six faces, switch themes, and verify a 320px viewport has no clipping or horizontal scroll.
- Camera presets must never change sticker serialization or move history; compare exported state before and after each view action.
- Feedback compatibility checks: toggle vibration on supported and unsupported devices, verify reduced-motion defaults it off, and confirm rapid sequences do not issue vibration calls more often than the throttle allows.
- Scramble studio checks: changing constraints only changes the preview; malformed lengths are clamped, generated moves never repeat a face consecutively, and Apply is the only action that changes stickers or history.
- Custom scramble workflow checks: apply a studio scramble, Solve it, then use Daily challenge, Speedrun, Missions, Guided solve, State export/import, and keyboard turns; verify each workflow starts from its own state and malformed previews never partially apply.
- The HTML parser and JavaScript syntax checks pass.
- `node tests/archive-state-fixtures.js` passes all thirteen progress states, refresh, capture-spawn, completion, malformed-data, and storage-isolation cases.
- `git diff --check` passes.
- Both direct `index.html` and localhost operation are checked, with no runtime network dependency.
- Documentation is updated if the public behavior or file layout changes.
