# Dunya — prioritized implementation and GitHub issue map
Status: roadmap and issue reconciliation for the transferred repository, not a verified build.

| Milestone | Actual outcome required | Existing issues | Proof needed |
|---|---|---|---|
| **M0** Reliable foundation | All apps install and build with reproducible pnpm lockfile; meaningful tests and CI budget controls | [#1](https://github.com/ummahbuild/gtahalal/issues/1), [#12](https://github.com/ummahbuild/gtahalal/issues/12), [#26](https://github.com/ummahbuild/gtahalal/issues/26) | Frozen clean checkout, scripts, screenshots and tests |
| **M1** One playable neighborhood | Ahmed/Fatimah, movement, camera, NPCs, one complete pantry quest, accessible path, local saves | [#2](https://github.com/ummahbuild/gtahalal/issues/2), [#3](https://github.com/ummahbuild/gtahalal/issues/3), [#8](https://github.com/ummahbuild/gtahalal/issues/8), [#58](https://github.com/ummahbuild/gtahalal/issues/58), [#61](https://github.com/ummahbuild/gtahalal/issues/61), [draft #62](https://github.com/ummahbuild/gtahalal/pull/62) | Browser input/video, save tests, collision/door tests |
| **M2** Living world | NPC routines, time, weather, world state, simple inventory and economy | [#14](https://github.com/ummahbuild/gtahalal/issues/14), [#5](https://github.com/ummahbuild/gtahalal/issues/5) | Deterministic state transitions, gameplay budgets |
| **M3** Worship and learning | Optional, source-reviewed salah/wudu, qibla, dhikr and learning activities | [#15](https://github.com/ummahbuild/gtahalal/issues/15)–[#17](https://github.com/ummahbuild/gtahalal/issues/17), [#54](https://github.com/ummahbuild/gtahalal/issues/54)–[#57](https://github.com/ummahbuild/gtahalal/issues/57) | Scholar evidence and interaction/accessibility tests |
| **M4** Industry campaign | Eleven chapters linked through sustainable institutions and decisions | [#36](https://github.com/ummahbuild/gtahalal/issues/36)–[#39](https://github.com/ummahbuild/gtahalal/issues/39) | Five or more full missions per chapter, state regression |
| **M5** Generations | Optional family, elderly care, janazah/estate and legal succession | [#40](https://github.com/ummahbuild/gtahalal/issues/40)–[#50](https://github.com/ummahbuild/gtahalal/issues/50) | Consent, fiqh/legal gates, alternate paths |
| **M6** Cities | Licensed, culturally reviewed packs and accessible transportation | [#5](https://github.com/ummahbuild/gtahalal/issues/5), [#10](https://github.com/ummahbuild/gtahalal/issues/10), [#19](https://github.com/ummahbuild/gtahalal/issues/19), [#60](https://github.com/ummahbuild/gtahalal/issues/60) | Connectivity, collision, performance and local review |
| **M7** Co-op | Moderated sessions and safe persistence | [Roadmap](ROADMAP.md) | Network, abuse prevention, load and privacy QA |

## Stop expanding unverified surface area
- M0 must establish at least one reproducible developer environment.
- M1 must be genuinely playable and verified before increasing city count.
- Religious content cannot be promoted by a story-writing agent without qualified human review.
- Gameplay features, documented designs and wish-list proposals must have separate statuses.

## Draft PR #62
The branch `feat/m0-foundation-first-slice` and PR survived the transfer. It contains additional world and story implementation, but is still **draft**. Missing lockfile, unverified build and browser QA block merge. Review it; do not reproduce its commits blindly in main.

## Next three executable tasks
1. Generate `pnpm-lock.yaml` from the actual workspace on a network-enabled development environment; perform frozen install/typecheck/test/build and fix any failures.
2. Run Playwright browser walkthrough of Sara → Amina, revisit/decline branches, movement, collision and saved state; capture screenshots on desktop and touch sizes.
3. Implement one accessible doorway and home/pantry interior, then validate the map graph and restore state from both sides of the transition.

Before opening an issue, search existing issue titles and comments. Expand the closest issue with test cases rather than duplicating it.
