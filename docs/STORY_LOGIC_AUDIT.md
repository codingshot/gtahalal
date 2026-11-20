# Story-line logic audit — initial findings and corrective requirements

## Severity definitions
BLOCKER: false authoritative claim, unlawful or discriminatory branch, unsafe action, unlicensed material. MAJOR: contradictory state, impossible transition, no safe exit, inaccessible completion. MINOR: weak motivation or unclear feedback. EDITORIAL: style/continuity.

| Story | Current logic gap | Severity | Corrective requirement | Test |
|---|---|---|---|---|
| Street dawah | NPC consent and exit conditions not formalized | MAJOR | Consent before discussion; withdrawal ends dialogue without penalty | NPC declines -> conversation ends |
| Defender | Attack-vs-defense and accidental harm insufficiently specified | BLOCKER | Immediate threat and necessity gate; victim not punished; deliberate attack ends story | Unprovoked action blocked; retreat stops force |
| Wudu | Nap and doubtful wind can be conflated | BLOCKER | Separate definite events from doubt; school-profile review | Doubt preserves known purity; uncertain sleep requires review |
| Interfaith protection | Emergency alert could become vigilante combat | BLOCKER | Prioritize calling emergency services, evacuation, accessible aid | Nonviolent success route |
| Slander | Named organization could be fictionalized as proven wrongdoer | BLOCKER | Use invented group or verified historical source with attribution | No unsupported real-entity accusations |
| Extremist recruitment | 'Detect feds' could become appearance profiling | BLOCKER | Evaluate harmful request, not identity; refuse and report credible threat | Same safe result for any NPC identity |
| Eid butchery | Graphic DIY slaughter could undermine welfare and safety | BLOCKER | Educational welfare/food safety/professional oversight only | No cutting simulation |
| Nikah | Contract and mutual obligations vary by school/jurisdiction | MAJOR | Reviewable fiqh profile + civil-law matrix; consent for both | Unreviewed path cannot publish |
| Detention | Random destination could contradict immigration law | BLOCKER | Only approved legally contextualized branches; maintain agency | No destination without eligibility/legal review |
| Parking | Failing to find parking may punish accessibility | MAJOR | Transit/dropoff and disability accommodations | Accessible alternative succeeds |
| Recitation | Public rankings could shame beginners | MAJOR | Private learning feedback; qualified judging only for opt-in event | No public piety ranking |
| Mosque atlas | Real buildings may be inaccurately reproduced | MAJOR | License/provenance and local review | Unapproved model blocked |

## Cross-story dependencies
- Source claim -> review record -> approved scenario -> city pack -> protagonist eligibility -> optional niyyah -> branch choice -> consequence -> persistence -> evidence panel.
- Changes to evidence or jurisdiction invalidate prior review and require reapproval.
- Do not mix player moral worth with community reputation or divine judgment.
- Consent, privacy, safety and accessibility checks apply at every scene transition.
- Religious rules, civil law and fictional mechanics must be separate layers, not a single hardcoded 'halal' boolean.

## Next Claude tasks (docs only)
1. Build story-by-story branch coverage tables and trace IDs for all current modes.
2. Create detailed evidence ledger entries with exact claim spans and source context.
3. Define review matrix for fiqh schools, countries, facility types and age suitability.
4. Convert each blocker into acceptance criteria without duplicating existing GitHub issues.
