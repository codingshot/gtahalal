# Dunya — Purification, salah and evidence engine
Status: design specification, not a fatwa or implemented feature. Qualified multi-school reviewers required.

## State model
PurificationState = unknown | valid | invalid | requires_review. Track last simulated wudu, verified events, player-selected fiqh profile, evidence, uncertainty and UI notifications. Avoid storing real player worship history in cloud analytics.

## Event handling
- Passing wind: if definitely occurred in simulation, wudu invalid; cite Sahih Muslim 362 (doubt versus certainty) and relevant Bukhari hadith; merely hearing a sound or having uncertainty should not force invalidation.
- Toilet use/urination/defecation: invalid; Qur'an 5:6 and 4:43 context; show water or tayammum guidance based on approved jurisprudential rules.
- Sleep: **not every nap invalidates wudu**; classify deep sleep/loss of awareness and school-specific exceptions. Do not infer automatically from a short rest animation.
- Vomiting, bleeding, touching private parts, skin contact and other disputed matters: requires school-specific decision tables; do not make universal assertions.
- Farting is handled discreetly, without humiliation, comedy scoring or sound effects designed to mock religious practice.
- Wudu alert: “Your character may need wudu before salah” with actions [Why?] [Evidence] [Review details] [Make wudu] [Dismiss]. Show exact citation, translation attribution, source context, school differences and last reviewed date. Never imply an app determines actual purity.
- State transitions must be deterministic, replayable and tested; uncertain evidence never silently flips state to invalid.

## Prayer curriculum
Learn-to-pray module: purification prerequisites, prayer times, qibla, intention, takbir, standing, recitation, ruku, sujud, sitting, salam, common mistakes, accessibility and approved school-specific variations. No prayer-speed leaderboard. Qur'an 4:103 and 5:6 research leads.
Tahajjud module: optional nighttime prayer education, sleep and timing distinctions, voluntary rak'ah learning and sincere intention. Review Bukhari/Muslim night-prayer narrations before writing claims; no guaranteed divine rewards.
Congregation, Jumu'ah and traveler prayer modules require separate fiqh review and contextual prerequisites.
Educational simulation cannot certify that a real prayer is valid.

## Content schema
ruleId, trigger, preconditions, fiqhProfile, resultingState, certainty, primaryEvidence[{provider,canonicalUrl,reference,quoteRights}], secondaryExplanation, reviewerIds, reviewedAt, reviewStatus, localization, accessibilityAlternative, notificationCopy, tests.

## QA cases
Definite wind invalidates; uncertain sensation does not; short doze prompts review instead of automatic invalidation; deep sleep applies chosen reviewed school profile; toilet use invalidates; prayer start with unknown state shows guidance; offline evidence cache; RTL and screen-reader citations; no embarrassing notifications in public co-op.
