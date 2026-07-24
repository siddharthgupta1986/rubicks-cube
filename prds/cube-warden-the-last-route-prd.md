# Cube Warden: The Last Route Product Requirements Document

> Superseded for campaign development by
> `cube-warden-archive-prd.md`. This document remains as the historical contract
> for the illustrated route implementation.

## Product summary

Cube Warden transforms Cube Academy into a story-first puzzle adventure. Aya,
the last Cube Warden, must cross the Broken Archive and restore twelve cube
seals before the pursuing Void Wraiths overtake her.

The experience borrows the forward pressure and environmental tension of a
corridor action game without combat, graphic violence, or copyrighted
characters and imagery. The cube remains the game: movement, story, and danger
give each puzzle a reason to matter.

## Goals

- Replace the crowded opening experience with one obvious story action.
- Teach a complete beginner from the first face turn through a full solve.
- Make progress visible through an authored map and persistent checkpoints.
- Create tension through move-based pursuit rather than a mandatory timer.
- Preserve every existing Academy mode and tool inside a secondary Field Kit.
- Keep the app static, dependency-free, accessible, and usable from disk.

## Audience and tone

- Primary audience: beginners who benefit from a guided reason to learn.
- Secondary audience: returning players who want a structured campaign.
- Tone: mysterious, urgent, heroic, and family-safe.
- Failure is suspenseful but not graphic. Aya is overtaken by shadow, the scene
  fades, and the encounter restarts.
- Names, artwork, dialogue, and enemies are original to Cube Warden.

## Story

The Broken Archive once kept six districts in balance through twelve cube
seals. The seals have been scrambled and the Archive is collapsing into shadow.
Aya carries the final Warden compass and follows its single remaining route to
the Dawn Vault. Void Wraiths consume the light behind her. Each restored seal
opens the next passage and pushes the Wraiths back long enough for Aya to run.

## Core loop

1. Begin or continue the route from the title scene.
2. See Aya's position and the next seal on the authored map.
3. Watch Aya travel to the next node.
4. Read a short briefing and enter the cube encounter.
5. Make legal cube turns while objective progress and pursuit are evaluated.
6. Request a hint when needed, accepting one pursuit step.
7. Restore the seal, record the result, and advance to the next checkpoint.
8. If pursuit fills, retry the same encounter without losing campaign progress.

## Information architecture

### Title

- Product name: Cube Warden.
- Subtitle: The Last Route.
- One dominant action: Begin the Route or Continue the Route.
- A compact menu button opens New Game, Settings, Accessibility, and Field Kit.
- Returning players see their current sector and encounter below the action.

### Map

- The map fills the primary viewport and presents one authored route.
- All twelve nodes are visible as completed, current, or ahead.
- Apparent side passages are decorative and cannot be selected.
- Aya moves automatically from the previous node to the current node.
- Reduced motion replaces traversal with an immediate position update.
- A text route summary exposes the same state to assistive technology.

### Briefing

- Names the sector, location, immediate cube goal, and story stakes.
- Offers one primary Enter Seal action and one Back to Map action.
- Defines notation or orientation before relying on it.

### Encounter

- Shows the physical cube, objective, progress, move count, pursuit, hints, and
  pause action.
- Hides unrelated Academy and legacy controls.
- Manual buttons, keyboard turns, gamepad turns, and cube dragging remain
  available.
- Dragging changes only the view angle.

### Victory and failure

- Victory shows the restored seal, move count, target comparison, and Continue.
- Failure shows that the Wraiths reached the chamber and offers Retry Seal.
- Neither state removes completed encounters.
- The final victory opens the Dawn Vault epilogue and allows campaign replay.

### Field Kit

The Field Kit is available through the title or pause menu and contains the
existing Journey, Practice, Vault, Missions, Daily Challenge, Speedrun, Guided
Solve, Replays, Algorithms, state tools, themes, camera, input help, feedback,
achievements, and local multiplayer.

## Campaign

| # | Sector | Encounter | Objective | Teaching purpose |
| --- | --- | --- | --- | --- |
| 1 | Ash Gate | Gatehouse | Reproduce a short sequence | Face names and clockwise turns |
| 2 | Ash Gate | Compass Hall | Reverse a short sequence | Inverse notation and move history |
| 3 | Glass Quarter | Chapel Steps | Place two white edges | White-edge orientation |
| 4 | Glass Quarter | Mirror Bridge | Complete the white cross | Cross alignment |
| 5 | Sunken Stacks | Lantern Rooms | Place a white corner | Corner orientation |
| 6 | Sunken Stacks | Flooded Archive | Complete the first layer | First-layer recognition |
| 7 | Iron Depths | Gearworks | Insert one middle edge | Left and right insertion |
| 8 | Iron Depths | Furnace Passage | Complete the middle layer | Repeated edge insertion |
| 9 | Star Tower | Observatory | Form the yellow cross | Last-layer edge orientation |
| 10 | Star Tower | Clock Tower | Orient the yellow face | Last-layer corner orientation |
| 11 | Warden Keep | Warden's Door | Position final pieces | Last-layer permutation |
| 12 | Warden Keep | Dawn Vault | Solve the complete cube | Full guided solve |

Each encounter uses a deterministic sequence of legal turns. Completion is
checked from sticker position and normal data, not from matching one prescribed
move sequence. Hint text may recommend an algorithm, but alternate valid states
that satisfy the objective count.

## Pursuit and hints

- Pursuit has five labeled segments: Distant, Searching, Closing, Near, Reached.
- Every encounter provides a progress score from zero to its goal score.
- Pursuit advances when a move lowers progress.
- Four consecutive moves without progress advance pursuit and reset the
  stagnation counter.
- Each requested hint advances pursuit once.
- Progress increases clear the stagnation counter but do not remove pursuit.
- Failure occurs at five pursuit steps.
- Hint one restates orientation, hint two identifies the next piece or pattern,
  and hint three provides a recommended algorithm.
- There is no mandatory real-time countdown.

## Checkpoint and history contract

- Encounter setup uses valid face turns and is recorded in normal move history.
- The index immediately after setup becomes the encounter checkpoint.
- Every player move is recorded normally.
- Retry applies the inverse of moves after the checkpoint with `record = false`,
  truncates only those player moves, and preserves the legal setup history.
- Leaving Story restores the solved cube by inversing all recorded story moves
  before entering another workflow.
- Solve, when available outside Story, continues to reverse every recorded move.
- Story setup and retry never change sticker colors directly.

## State and persistence

Storage key: `rubiks-cube.story.v1`.

```text
{
  version: 1,
  currentEncounterId: string,
  completedEncounterIds: string[],
  bestMoveCounts: { [encounterId]: number },
  retries: number,
  storyCompleted: boolean,
  updatedAt: string
}
```

- Missing or malformed state recovers to encounter one.
- Unknown encounter IDs are discarded.
- Completed IDs are deduplicated and constrained to known encounters.
- Best move counts must be positive finite integers.
- Existing Academy, mission, speedrun, replay, and settings storage is retained.
- New Game requires confirmation and resets only Story data.

## Internal encounter contract

```text
{
  id: string,
  sector: string,
  location: string,
  narrative: string,
  objective: string,
  setupMoves: Move[],
  validatorId: string,
  progressId: string,
  targetMoves: number,
  pressureBudget: 5,
  hints: [string, string, string]
}
```

Validators and progress evaluators read the 54-sticker model. Content data does
not contain DOM nodes or mutate cube state.

## Visual direction and assets

- Full-screen illustrated map with six visually distinct sectors.
- Warm torchlight, blue-black shadow, mineral teal, warning red, and physical
  cube colors form a varied palette.
- Aya is a readable light-bearing silhouette; Void Wraiths are abstract shadow
  forms with no resemblance to existing franchise characters.
- Required local raster assets live in `assets/cube-warden/`: title backdrop,
  route map, Aya token, Wraith silhouettes, and encounter atmosphere.
- Artwork contains no text so interface copy remains accessible HTML.
- Images receive responsive crops and reduced-motion alternatives.

## Accessibility

- Use native buttons and controls with visible labels.
- Keep focus inside open menus and return it to the invoking control on close.
- Announce encounter entry, progress, pursuit changes, victory, and failure.
- Pair every color state with text, icons, shape, or position.
- Support keyboard, touch, mouse, and existing gamepad turn controls.
- Respect `prefers-reduced-motion` for walking, pursuit, and transitions.
- Maintain visible focus indicators and a logical focus order.
- Support a 320px viewport without horizontal scrolling.

## Success criteria

- First load presents one dominant story action and no utility wall.
- A new player can understand and complete the first two encounters without
  prior notation knowledge.
- Refresh resumes at the correct encounter without corrupting other progress.
- All twelve encounters can be completed and the epilogue reached.
- Alternative valid cube states satisfy state-based objectives.
- Pursuit, hints, failure, retry, and checkpoints behave deterministically.
- Every existing feature remains reachable through Field Kit.
- Story and legacy timers, counters, overlays, and histories do not leak.
- Direct-file and localhost operation both work without network requests.
- Existing cube invariants and accessibility behavior remain intact.

## Non-goals

- No combat, weapons, free-roaming movement, procedural map, or branching story.
- No accounts, backend, cloud saves, telemetry, or network multiplayer.
- No external runtime dependency, build system, or package manager.
- No replacement of the sticker model or shortcut color mutation.
- No deletion or automatic conversion of existing Academy progress.

## Delivery

- Create one GitHub epic and twelve independently mergeable child issues.
- Each child receives at least one focused pull request.
- Merge in dependency order and validate merged `main` after each child.
- Add a campaign QA document before release readiness is declared.
