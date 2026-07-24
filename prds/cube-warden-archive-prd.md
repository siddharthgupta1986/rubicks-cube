# Cube Warden: The Living Archive Product Requirements Document

## Status

Authoritative replacement for the campaign experience described in
`cube-warden-the-last-route-prd.md`. The existing Rubik's Cube engine and Field
Kit remain part of the product.

## Product summary

Cube Warden is a high-resolution, first-person dark-fantasy exploration game
built around a complete interactive 3×3 Rubik's Cube. The player walks through
one continuous 3D Archive, avoids patrolling Void Wraiths, discovers twelve cube
seals, and solves increasingly advanced cube objectives to change the world and
open the path to the Dawn Vault.

The game uses original local assets and native browser APIs. It remains a
dependency-free static app that works from `index.html` without installation,
a backend, or a network connection.

## Product principles

1. **Walk through a place.** Progress happens in a freely navigable 3D world,
   not on an illustrated route or level-selection screen.
2. **The cube changes the world.** Every required gate is resolved by a legal
   Rubik's Cube objective, and success causes a visible environmental change.
3. **Tension while moving, safety while learning.** Wraiths threaten exploration;
   seal focus pauses pursuit and provides unlimited puzzle time.
4. **Readable danger.** Detection, search, pursuit, and capture are communicated
   clearly and never depend on omniscient enemy knowledge.
5. **Beginner to full solve.** A complete beginner can learn through the twelve
   seals and finish with a full cube solve.
6. **No disposable shell.** Field Kit tools, cube invariants, accessibility,
   local persistence, and direct-file use remain supported.

## Audience and tone

- Primary: players new to Rubik's Cubes who want a game-driven reason to learn.
- Secondary: returning cube players who want atmospheric exploration and
  performance goals.
- Tone: mysterious, urgent, heroic, high-resolution dark-fantasy realism.
- Failure: suspenseful but family-safe. Capture uses shadow, sound, and a fade;
  there is no gore, death animation, weapon, or combat.

## Core loop

1. Begin or continue at the latest restored seal.
2. Explore unlocked Archive passages in first person.
3. Read environmental landmarks and avoid Wraith patrols.
4. Discover the next ordered cube seal.
5. Enter safe seal focus at its physical location.
6. Solve the seal with legal cube turns and optional unpenalized hints.
7. Watch the seal cause a persistent world change.
8. Explore the newly opened space and repeat.
9. Restore all twelve seals and enter the Dawn Vault.

## World structure

### Continuous Archive

- One connected world contains six visually distinct sectors and twelve seals.
- Players can revisit any unlocked space.
- Optional side rooms reward observation without changing mandatory seal order.
- Locked geometry and Wraith placement guide progress without an abstract map
  selector.
- The world can be represented as authored sector data and loaded incrementally,
  but traversal must appear continuous to the player.

### Sectors and seal sequence

| # | Sector | Seal | Cube objective | Required world change |
| --- | --- | --- | --- | --- |
| 1 | Ash Gate | Gatehouse | Reproduce a short sequence | Raise the entry portcullis |
| 2 | Ash Gate | Compass Hall | Reverse a short sequence | Rotate the compass bridge |
| 3 | Glass Quarter | Chapel Steps | Place two white edges | Restore the glass stair |
| 4 | Glass Quarter | Mirror Bridge | Complete the white cross | Extend the mirror bridge |
| 5 | Sunken Stacks | Lantern Rooms | Place a white corner | Drain the lantern corridor |
| 6 | Sunken Stacks | Flooded Archive | Complete the first layer | Open the archive sluice |
| 7 | Iron Depths | Gearworks | Insert one middle edge | Start the gear lift |
| 8 | Iron Depths | Furnace Passage | Complete the middle layer | Cool the furnace door |
| 9 | Star Tower | Observatory | Form the yellow cross | Align the star lens |
| 10 | Star Tower | Clock Tower | Orient the yellow face | Release the clock stair |
| 11 | Warden Keep | Warden's Door | Position final pieces | Unseal the keep |
| 12 | Warden Keep | Dawn Vault | Solve the complete cube | Restore the Archive |

### Optional discoveries

- Side rooms may contain lore fragments, viewpoints, map-table reveals,
  accessibility-safe refuges, or cosmetic cube finishes.
- Optional content cannot be required to understand a seal objective.
- Optional interactions save immediately and never invalidate a seal checkpoint.

## Native WebGL presentation

### Renderer

- Render the Archive as a genuine 3D environment using native WebGL.
- Support textured walls, floors, ceilings, doors, props, fog, particles,
  emissive seal light, and animated objects.
- Use local shader source, geometry data, and image assets only.
- Scale the drawing buffer for device pixel ratio with a bounded quality ceiling.
- Provide quality levels that preserve gameplay geometry and visibility.
- If WebGL is unavailable, show a useful compatibility explanation and retain
  access to the Field Kit.

### Visual direction

- High-resolution stylized dark-fantasy realism; no deliberate pixelation.
- Original material language: blackened iron, carved stone, wet glass, mineral
  teal, warm seal gold, and blue-black Wraith shadow.
- Each sector must be identifiable by architecture and lighting, not color alone.
- Motion includes doors, bridges, lifts, mechanisms, fog, particles, Wraith
  animation, camera locomotion, seal activation, and capture transitions.

### Camera and movement

- Ground-based walking, turning, strafing, and sprinting.
- No jumping, crouching, climbing, weapons, combat, or vertical aiming.
- Solid collision prevents crossing closed walls and doors.
- Supported input: WASD, arrow keys, mouse/pointer turning, touch controls, and
  gamepad.
- Movement must be frame-rate independent.
- Camera bob, motion blur-like effects, and view sway must be reduced or disabled
  under reduced-motion settings.

## Void Wraith system

### States

1. **Patrol:** follows an authored route.
2. **Detection:** line of sight or close proximity triggers clear warning.
3. **Pursuit:** moves toward Aya while sight is maintained.
4. **Search:** investigates the last known position after sight is broken.
5. **Return:** resumes the patrol after the search expires.

### Fairness rules

- Walls and closed doors block line of sight.
- Wraiths never receive Aya's position without a valid detection event.
- Detection has synchronized visual, audio, and non-audio HUD cues.
- Refuges and seal focus pause Wraith simulation.
- Capture returns Aya to the latest restored seal and preserves all completed
  cube progress.
- Accessibility options provide slower Wraiths and a no-chase exploration mode.

## Cube seal experience

### Entering focus

- A nearby seal shows an interaction prompt with its name and objective.
- Activating it suspends movement and Wraith simulation.
- The camera anchors to the seal and the existing CSS 3D cube enters focus over
  the still-visible, darkened Archive.
- Focus has an explicit accessible exit action that returns to exploration at
  the same position.

### Puzzle rules

- All setup and player actions use valid face turns on the 54-sticker model.
- State-based validators accept alternate solutions that satisfy the objective.
- Setup history, manual turns, retry, and Solve retain exact reversal semantics.
- Hints are unlimited and do not advance pursuit.
- Move count and target comparison are optional performance feedback only.

### Resolution

- Completion persists the seal, best move count, checkpoint, and world change.
- The cube recedes, exploration resumes, and the world change animates in view.
- A textual live announcement describes the same change.
- Solved seals remain visibly restored and cannot be replayed accidentally during
  the active campaign.

## Persistence

### Campaign record

Use a new versioned storage key and leave `rubiks-cube.story.v1` untouched.

```text
rubiks-cube.archive.v2
{
  version: 2,
  checkpointSealId: string,
  completedSealIds: string[],
  bestMoveCounts: { [sealId]: number },
  discoveries: string[],
  accessibility: {
    pursuit: "standard" | "slow" | "off"
  },
  storyCompleted: boolean,
  updatedAt: string
}
```

- New campaigns start at the Archive entrance.
- Refresh, reopen, or capture restores the checkpoint position belonging to the
  latest completed seal, not an arbitrary corridor position.
- World changes derive from completed seals and are never stored as an
  independent contradictory state.
- Sanitize all loaded data and fall back without rewriting malformed records.
- Field Kit, Academy, mission, replay, speedrun, settings, and legacy Story
  records remain independent.

## Interface

### Title

- One primary Begin/Continue action enters the 3D campaign.
- New Game requires confirmation and resets only the v2 Archive campaign.
- Field Kit and settings remain available without entering the world.

### Exploration HUD

- Minimal HUD: current objective, interaction prompt, detection/pursuit status,
  optional landmark direction, and pause control.
- Do not show a permanent minimap by default.
- All essential threat state uses text/shape/sound combinations rather than
  color alone.

### Pause and settings

- Pause suspends movement and Wraith simulation.
- Controls, quality, audio, reduced motion, pursuit accessibility, New Game,
  Field Kit, and Return to Game are reachable.
- Opening another workflow routes through the shared runtime cleanup contract.

## Accessibility

- Full keyboard operation without pointer lock is possible.
- Pointer lock is optional and exits predictably.
- Touch targets are at least 44×44 CSS pixels.
- Reduced motion disables camera bob, strong view sway, rapid particles, and
  nonessential transition motion.
- No-chase mode preserves exploration and story completion.
- Captions/text cues accompany all necessary audio.
- Seal focus keeps visible focus indicators, live announcements, and native
  controls.
- The UI works at 320 CSS pixels without horizontal scrolling.
- Canvas-only information has an equivalent DOM status representation.

## Performance

- Target 60 FPS on a current desktop browser at the default quality level.
- Maintain a playable 30 FPS target on representative mobile hardware.
- Clamp frame delta after tab suspension.
- Pause rendering work that does not affect the current view or active state.
- Avoid per-frame DOM mutation except bounded HUD updates.
- Reuse buffers, typed arrays, matrices, and path data where practical.

## Explicit non-goals

- Combat, weapons, damage systems, gore, loot statistics, or enemy killing.
- Network play, accounts, backend services, telemetry, or cloud saves.
- Procedural campaign generation or randomized mandatory seal order.
- External runtime libraries, package managers, build systems, or CDN assets.
- Replacing the 54-sticker cube model or directly recoloring stickers.
- Exact-position corridor saves.
- Automatic migration that unlocks the new campaign from legacy Story progress.

## Release acceptance criteria

1. A new player can enter the Archive and move through a rendered 3D Gatehouse.
2. Movement, collision, sprint, mouse, touch, keyboard, and gamepad work without
   changing cube state.
3. The world contains all six sectors and twelve ordered seal locations.
4. Every seal can be entered, solved through legal moves, persisted, and seen to
   change the world.
5. The complete twelve-seal sequence reaches a playable Dawn Vault epilogue.
6. Wraith patrol, detection, pursuit, search, return, capture, refuge, slow mode,
   and no-chase mode behave deterministically.
7. Refresh and capture restore the latest valid seal checkpoint and world state.
8. Legacy Story and Field Kit records remain untouched.
9. Direct `index.html` and localhost play require no network request.
10. WebGL compatibility failure preserves useful Field Kit access.
11. Keyboard-only, reduced-motion, no-audio, and 320px flows remain usable.
12. Shuffle followed by Solve still restores six solid-color faces.
13. `node --check cube.js`, HTML parsing, `git diff --check`, and campaign fixture
    checks pass.
14. The required browser interaction sequence in `AGENTS.md` passes.

## Superseded requirements

The following requirements from the former route campaign are intentionally
superseded:

- illustrated route as the primary viewport;
- automatic movement between fixed nodes;
- decorative, inaccessible side passages;
- separate briefing and encounter screens;
- move-based pursuit and hint penalties;
- prohibition on free-roaming movement.
