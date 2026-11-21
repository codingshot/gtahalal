# Act I player experience — requirements for implementers
Status: future gameplay expansion; **do not mistake this document for completed code**. The authoritative fuller script exists on draft [PR #62](https://github.com/ummahbuild/gtahalal/pull/62) under `docs/PLAYER_STORY_ACT_ONE.md`.

## Core player promise
In the fictional Bayhaven district, the player can choose Ahmed or Fatimah, understand why a neighborhood needs help, speak to residents without being forced into a quest, and make a concrete improvement to the community pantry. Choices must feel meaningful without punitive religious scoring.

## Minimal release slice (priority M1)
- Load a readable original neighborhood, walk with keyboard and touch inputs, and follow the character with camera collision/occlusion handling.
- Three persistent named NPCs: Sara near plaza, Amina at pantry, Bilal near bicycle workshop. NPC positions, dialogue, relationship state and availability must share a single versioned source of truth.
- Dialogue interaction has one repeat-safe accept path and one nonjudgmental decline path.
- Journal presents the current objective: **Speak to Sara** → **Find Amina** → **Confirm handoff** → **Review neighborhood outcome**.
- Basic map shows player, quest anchor, accessible route and nearby locations without real GPS.
- Save/load restores character selection, objective, position, inventory and any accepted decision.
- Show fictional currency separately from charity, actual money and religious rewards.
- Captions, keyboard focus, scalable text and touch input are essential.

## Starter NPC sample copy
**Sara (intro):** “Welcome to Bayhaven. I’m Sara. We could use a hand keeping the pantry running. Interested?”
- “Tell me what needs doing.” → Listen to Sara’s explanation.
- “Can I look around first?” → Show nearby places without accepting the mission.
- “Not right now.” → Exit politely, mission stays available.

**Amina (pantry):** “Thanks for coming. Before we distribute anything, let’s check the count and make sure everyone can use the entrance.”
- “I’ll check the supplies.” → Inventory objective.
- “Let’s check the accessible route.” → Map/route objective.
- “Can we return to this later?” → Save current progress.

**Bilal (street):** “Delivery vans keep blocking the curb ramp. A better loading spot would help everyone.”
- “Show me the problem.” → Highlight route inspection.
- “We should ask the city for permission.” → Optional civic follow-up.

All sample dialogue requires writing, accessibility and cultural review; it is not religious instruction.

## Gameplay acceptance
1. Sara can be declined and approached again without corrupting quest state.
2. Completing the pantry task twice cannot duplicate inventory, currency or other rewards.
3. Quest can be completed by either protagonist.
4. NPC conversations cannot activate through solid walls.
5. Player can find an accessible route; impossible routes show a useful explanation.
6. Pause or loss of browser focus prevents unintended character movement.
7. Save migration handles missing, old and damaged state without exposing private data.
8. All displayed mission copy corresponds to actual functionality; otherwise mark “Coming later”.

## Later Act I branches
Read the draft PR script for the full five-episode arc. Rumor investigation, grocery supply agreements, city permits, accessible road improvements, and lasting pantry governance are **not yet implemented**. Keep them scoped to future milestones instead of implying they are available.
