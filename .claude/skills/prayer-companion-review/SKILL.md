---
name: prayer-companion-review
description: Audit Dunya prayer times, qibla, water/tayammum, tasbih and real-life prayer-break requirements for technical accuracy, privacy and Islamic review.
---
# Prayer Companion audit
1. Read CLAUDE.md, docs/WUDU_PRAYER_RULE_ENGINE.md, docs/PRAYER_COMPANION_REAL_TIME_SPEC.md, docs/PRAYER_COMPANION_SOURCE_REVIEW.md.
2. Separate fictional world clock from real local clock and from authoritative prayer schedule. Never claim an unverified timetable.
3. Audit date, IANA timezone, calculation method, Asr setting, high-latitude handling, DST, travel, offline and clock errors.
4. Check qibla bearing assumptions, compass calibration, permissions, and accessible non-sensor fallback.
5. Audit purification certainty, clean water access, tayammum eligibility and school-specific material rules. Never suggest arbitrary dirty ground is valid.
6. Review quick mode for state saving, safe pause, no forced timer, no worship tracking and no 'prayer completed' assertion.
7. Review tasbih for opt-in manual counting, no competitive piety, local-only data and source-reviewed preset wording.
8. Use Quran/Sunnah validation skills to trace claims. Separate source text verified, contextualized, scholar-approved and released.
9. Report exact gaps, severity, acceptance tests and reviewers. Do not implement game logic until authorized.
