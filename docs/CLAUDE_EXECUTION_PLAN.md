# Claude-friendly documentation-first execution plan

## Current mandate
Documentation, schemas as prose/examples, architecture decisions, templates and issue grooming only. **No gameplay logic, game assets, NPC AI, combat, multiplayer or payment integration.** A proposed requirement is not an implemented feature.

## Workflow for each task
1. Read CLAUDE.md and relevant domain spec.
2. Inspect existing file and open issues; avoid duplicates.
3. State scope, assumptions and out-of-scope changes in 3–5 lines.
4. Make one small documentation/harness change, no unrelated refactors.
5. Check references and markdown links; run only available validation and state results accurately.
6. Update issue acceptance criteria and changelog if appropriate.
7. Return a concise handoff with evidence, unresolved reviews and next action.

## Stack ownership
- apps/game: Vite, TypeScript, React, Three.js/React Three Fiber, Rapier, Zustand (future runtime only).
- apps/web: Next.js App Router and landing/community.
- apps/studio: Next.js editorial/source-review portal.
- packages/content: future city, scenario, citation and mission manifests.
- packages/game-core: future deterministic state machine.
- docs: product specifications, ADRs, security, legal and religious content review.
- .github: issues, PR review and CI. Existing missing/placeholder scripts are blockers, not success.

## Task order
DOC-01 inventory actual repo files, issue statuses and blockers.
DOC-02 finalize product glossary, mode taxonomy, named actor and sensitive-event policy.
DOC-03 write reviewable scenario templates and approval states.
DOC-04 add story requirements for interfaith protection, slander, extremist recruitment, Eid, parking and marriage.
DOC-05 add source and cultural review matrix with exact Quran.com/Sunnah.com references marked unverified until checked.
DOC-06 write architecture decision record on Vite game vs Next.js host and three-app boundaries.
DOC-07 expand issue templates for scenario, legal/scholarly review and asset licensing.
DOC-08 document future testing matrix and performance budgets without claiming tests passed.
Only after explicit implementation authorization: fix monorepo CI blockers, then prototype original city and approved quests.

## Scenario template
ID; title; player persona; city; age suitability; narrative purpose; triggers; NPC roles; user choices; peaceful resolution; optional alternatives; negative/failure conditions; safety risks; Quran/hadith source candidates; translation rights; scholarly review; legal review; cultural review; accessibility; localization; privacy; acceptance tests; approval state; implementation status.

## Acceptance and handoff
- Every feature is labeled proposed/approved/implemented/tested separately.
- Each sensitive scenario has neutral fictional framing, safe exit, reviewed evidence, no group profiling and no blanket claim of religious law.
- No personal data in commits or screenshots.
- No issue marked done solely because a document exists.
- At least one clear next issue and exact file path per proposed work item.
