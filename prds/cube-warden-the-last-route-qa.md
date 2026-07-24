# Cube Warden: The Last Route - QA and Release Readiness

## Purpose

This document is the release checklist for the Story campaign defined in
`prds/cube-warden-the-last-route-prd.md`. A release is ready only when the
campaign, cube invariants, legacy Field Kit workflows, accessibility, and
direct-file operation remain intact together.

## Required Static Checks

Run from the repository root:

```bash
node --check cube.js
python3 - <<'PY'
from html.parser import HTMLParser
HTMLParser().feed(open('index.html', encoding='utf-8').read())
print('HTML parsing check passed')
PY
git diff --check
```

Also confirm that `index.html`, `styles.css`, and `cube.js` contain no runtime
HTTP dependencies. Localhost is a test transport, not an application
requirement.

## Campaign Matrix

Each row starts from the authored deterministic setup. The sequence shown is a
legal accepted path used during the integrated browser run on 2026-07-23.
State-based objectives may complete before the full setup inverse is entered.

| # | Encounter | Accepted test sequence | Result |
| --- | --- | --- | --- |
| 1 | Gatehouse | `R U R' U'` | Victory in 4 moves |
| 2 | Compass Hall | `U R U' R'` | Solved in 4 moves |
| 3 | Chapel Steps | `F U R U'` | Two white edges in 4 moves |
| 4 | Mirror Bridge | `L L U R U' R' F F` | White cross in 8 moves |
| 5 | Lantern Rooms | `F` | White corner objective in 1 move |
| 6 | Flooded Archive | `L D' L' F U' F' R U' R'` | First layer in 9 moves |
| 7 | Gearworks | `F'` | Middle edge objective in 1 move |
| 8 | Furnace Passage | `L U L' F U' F' U R U U R'` | Middle layer in 11 moves |
| 9 | Observatory | `F U R U' R' F'` | Yellow cross in 6 moves |
| 10 | Clock Tower | `R U U R' U' R U' R'` | Yellow face in 8 moves |
| 11 | Warden's Door | `L' U R U' L U R'` | Final positions in 7 moves |
| 12 | Dawn Vault | `L D L' D' F F U R U' R'` | Full solve in 10 moves |

Integrated result: all twelve encounter victories persisted, the restored route
reported a 73-move best total, and the "Dawn returns" epilogue rendered.

## Story State And Failure

- First run: title shows one Begin action and starts at Gatehouse.
- Resume: refresh after route entry; Continue returns to the saved encounter.
- Storage: verify valid `rubiks-cube.story.v1` records retain encounter,
  completion IDs, best moves, retries, completion state, and timestamp.
- Malformed storage: invalid JSON, wrong types, unknown encounter IDs, and
  impossible completion arrays must use sanitized defaults without touching
  Academy, replay, mission, or preference keys.
- New Game: confirmation resets Story only and returns to Gatehouse.
- Hint ladder: each encounter reveals at most three ordered hints and charges
  one pressure step per request.
- Stagnation: four consecutive non-progress moves charge pressure.
- Regression: a move that lowers objective progress charges pressure.
- Capture: pressure at five shows the family-safe failure scene and preserves
  the encounter checkpoint.
- Retry: only post-checkpoint moves are legally inverted; pressure, hints,
  move count, and stagnation reset.
- Dawn Vault: the legal inverse path completes at pressure 4 of 5. This guards
  against an unwinnable authored final checkpoint.

## Cube And Field Kit Regression

- Drag changed the camera to a custom transform without changing cube state.
- Keyboard `R` changed puzzle state and produced a live status announcement.
- Shuffle used legal moves, enabled Solve, and changed the cube state.
- Solve reversed the complete recorded shuffle and restored six solid faces.
- Tutor moved from lesson 1 to lesson 2 and back.
- Tutor practice made a real cube move, enabled Solve, and remained reversible.
- Open every Field Kit destination and verify Story timers, checkpoint history,
  pursuit state, mission state, speedrun clocks, replay state, and two-player
  state do not leak across handoffs.
- Repeat Shuffle -> Solve after a Story move, Tutor practice move, manual turn,
  and custom scramble.

## Accessibility And Responsive Matrix

- The game menu is a named modal dialog; focus enters it, Tab stays inside,
  Escape closes it, and focus returns to the opener.
- Story turns expose full face and direction names, not notation alone.
- The current map checkpoint uses `aria-current="step"`.
- Route nodes show numbers and use dashed, solid, and double borders so state is
  not communicated by color alone.
- Pursuit and objective changes update polite live regions.
- Reduced motion removes meaningful travel and pursuit animation delay.
- Mouse, touch, keyboard, and gamepad inputs never mutate camera and puzzle
  state at the same time.
- At 320x720, document width equals viewport width on title and map screens.
- Check title, map, briefing, encounter, failure, victory, epilogue, pause, and
  Field Kit for clipping, overlap, unreadable controls, and focus loss.

Hardware-dependent gamepad connection and vibration checks require a compatible
local device; their unavailable state must remain understandable and harmless.

## Direct File And Localhost

1. Open `index.html` directly and complete Gatehouse.
2. Refresh and confirm Continue resumes the Story.
3. Serve the repository with `python3 -m http.server 8000`.
4. Repeat title, map, one encounter, Field Kit, Shuffle, Solve, and 320px checks.
5. Confirm all images, CSS, and JavaScript load from repository-relative paths.

## Release Gate

- All static checks pass on merged `main`.
- All twelve child issues are closed by one independently reviewable PR each.
- The parent epic links the PRD and a checked task list.
- Merged `main` passes the static checks in a clean detached worktree.
- GitHub Pages reports its final build as successful when Pages is enabled.
