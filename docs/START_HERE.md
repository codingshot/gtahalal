# Start here — Dunya contributors

Dunya is a public, original, nonviolent Muslim life-simulation game concept. **Current phase: early 3D blockout, extensive draft specifications and unverified interactive work in [PR #62](https://github.com/ummahbuild/gtahalal/pull/62). No verified public playable release.**

Read the [canonical requirements index](REQUIREMENTS_INDEX.md) before starting new work. Existing issues and PRs were transferred intact to `ummahbuild/gtahalal`.

## Fast path by role
- **Claude or coding agents:** [CLAUDE.md](../CLAUDE.md), [Claude execution plan](CLAUDE_EXECUTION_PLAN.md), [handoff checklist](CLAUDE_HANDOFF_CHECKLIST.md).
- **Developers:** [Architecture](NEXTJS_THREEJS_ARCHITECTURE.md), [roadmap](ROADMAP.md), [engineering audit](REQUIREMENTS_AUDIT_2026-11-20.md).
- **Narrative writers:** [World bible](MAIN_CAMPAIGN_WORLD_BIBLE.md), [industry chapters](INDUSTRY_CAMPAIGN_REQUIREMENTS.md), [story audit](STORY_LOGIC_AUDIT.md).
- **Islamic reviewers:** [Islamic policy](ISLAMIC_CONTENT_POLICY.md), [source ledger](ISLAMIC_SOURCE_LEDGER.md), [review contract](CONTENT_REVIEW_AND_ACCEPTANCE.md).
- **Cultural reviewers:** [Cities](WORLD_CITIES.md), [characters](CHARACTERS_AND_STORIES.md).
- **Safety/legal reviewers:** [Defender](ISLAMIC_DEFENDER.md), [detention](DETENTION_AND_DISPLACEMENT_STORY.md), [sensitive story modes](STORY_MODE_EXPANSION.md).

## Repo reality
The intended monorepo is apps/game (Vite + React Three Fiber), apps/web (Next.js), apps/studio (Next.js), shared packages. Draft PR #62 adds additional packages, an initial interactive slice and a missing studio manifest, but remains unmerged. Do not assume these all build: the last audit found a missing studio manifest, placeholder lint/test scripts and non-frozen CI installation. See issue #26.

## Contribution workflow
1. Pick one scoped issue, confirm it isn't duplicated.
2. For documentation work, follow CLAUDE.md and avoid gameplay implementation.
3. Identify source claims and approval requirements.
4. Make a focused change and attach exact file links and checks performed.
5. Open a PR; do not claim a religious ruling or feature is approved merely because docs exist.

## Quality gates
No private data, no copied Rockstar IP, no unlicensed assets, no unsourced Islamic claims, no real-world defamation, no coercion, no offensive violence, no false claims of passing tests.
