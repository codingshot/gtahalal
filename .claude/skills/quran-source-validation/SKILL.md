---
name: quran-source-validation
description: Validate Quran.com citations and the scope of Qur'anic claims for Dunya narrative and educational content.
---
# Quran.com source validation

## Trigger
Use whenever a story, quest, tooltip, dialogue or policy cites a Qur'anic verse or tafsir.

## Steps
1. Extract each atomic claim, separating exact verse content, tafsir, fiqh inference, legal claim and game-design decision.
2. Open the exact canonical verse at https://quran.com/{surah}/{ayah}; verify surah, ayah, Arabic reference and translation attribution. Never infer verification from URL shape alone.
3. Read neighboring verses and tafsir where interpretive context matters. Do not treat an isolated verse as a universal ruling without qualified review.
4. Record source ID, canonical URL, translation edition/license, retrieval date, claim-to-text match, context and uncertainty. Link rather than copy substantial licensed translation text.
5. Classify claim as directly-supported, contextual-interpretation, disputed, unsupported or pending.
6. Escalate rulings and contested applications to qualified reviewers; do not issue fatwas or make definitive 'haram' overlays automatically.
7. Emit a structured evidence record and a clear pass/warn/block decision. Block public publication of unreviewed normative claims.

## Failure handling
Unavailable site, conflicting translations, unknown licensing or missing context => pending, not verified. Never fabricate Arabic text or tafsir.

## Required output
claim_id, source_url, surah, ayah, translation, claim_class, context_notes, review_status, reviewer_needed, evidence_checked_at, release_decision.
