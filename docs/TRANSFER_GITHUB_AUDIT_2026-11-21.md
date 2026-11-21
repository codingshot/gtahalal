# Dunya transfer audit — 21 November 2026

Canonical repository: https://github.com/ummahbuild/gtahalal
Status: organization transfer inspected through the connected GitHub API; repository id `1465065567`, default branch `main`.

## Confirmed findings
- Existing issue numbers #1–#61 are preserved in the transferred organization.
- The pre-existing unverified implementation draft is [PR #62](https://github.com/ummahbuild/gtahalal/pull/62), based on `main`, head branch `feat/m0-foundation-first-slice`.
- Main branch README links still referenced the former owner; this PR rewrites those links and expands the player story/roadmap.
- Main branch currently has `apps/game/src/WorldPreview.tsx` procedural 3D preview and the three-app architecture target.
- Main branch is missing `apps/studio/package.json`, `pnpm-lock.yaml`, and new player-story/map docs from PR #62.
- Workflow on `main` still uses `pnpm install --no-frozen-lockfile` with automatic push/PR triggers. PR #62 proposes manual-only verification to conserve CI minutes.
- `CLAUDE.md`, `AGENTS.md`, roadmap and contributor docs previously described documentation-only phase, despite an already authorized gameplay implementation initiative; this PR clarifies current branch reality.

## Status categories
**Present on main:** README and source policies; main industry, family, educational and city design documents; original procedural preview; scaffolding for web and studio routes.

**Draft in PR #62, not merged:** typed game-core/content packages, studio manifest, player movement, NPC interactions, starter quest, local save, basic collision, landing-page improvements, player-facing Act I script, map requirements, local agent audits and manual CI.

**Still missing or unverified:** lockfile, clean build, test execution evidence, browser screenshots, accessible doorway/interior, realistic characters, full quest engine, approved Islamic instructions, mobile performance, deployments.

**Duplicated/overlapping:** Previous issue/requirements descriptions overlap; avoid creating new issues when issue #1, #3, #12, #26, #36, #58, #61 or the other preserved issues cover work.

## Changes in this documentation PR
- Replace stale README links with canonical organization owner.
- Rewrite README around the world premise, actual implementation states and story features.
- Add canonical `REQUIREMENTS_INDEX.md`, `PROJECT_MILESTONES_AND_ISSUE_MAP.md`, and `ACT_I_PLAYER_EXPERIENCE_REQUIREMENTS.md`.
- Improve START_HERE, ROADMAP, CLAUDE.md and AGENTS.md for accurate agent onboarding.
- Update existing GitHub issues rather than duplicating them.

## Next merge criteria
PR #62 must remain draft until actual frozen install/typechecks/tests/build/browser QA succeed. This documentation PR is independently reviewable and should not be described as production gameplay.
