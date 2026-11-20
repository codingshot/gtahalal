# Dunya content and implementation acceptance contract

## Mission record
Required: id, version, titleKey, category, cityPackId, protagonistEligibility, storyModes, objectives, triggers, NPC consent, sourceRefs, reviewStatus, accessibilityAlternatives, safetyFlags, assets, localization, testFixtures.

## Review lifecycle
Draft -> source research -> content editor -> qualified Islamic reviewer -> local cultural reviewer if applicable -> safety/accessibility QA -> approved -> released. Any substantive change resets approval. Public bundle must exclude unapproved entries.

## Source records
Canonical Quran.com or Sunnah.com URL, exact reference, contextual explanation, translation/audio licensing, hadith grade if applicable, jurisprudence differences, reviewer identity/qualification, review timestamp and decision. Automated validation is not a fatwa.

## Engine requirements
Deterministic replay-safe quest state, idempotent triggers, versioned save migration, uncertainty handling. No scoring of divine rewards. 'HARAM' overlay only for specifically reviewed cases; accidental harm and uncertain rulings use neutral feedback. Every evidence panel links to original source and context.

## Issue definition of done
User story; acceptance scenarios; tests with reproducible commands; screenshots for UI; security/privacy review; accessibility alternatives; source approval; asset provenance; performance measurements; documentation. No placeholder lint/test scripts count as verification.

## Commercial safeguards
No advertising in prayer/Qur'an experiences; clear sponsor labels; no purchase of blessings; charity only through verified processors after legal review, with separate simulated and real currencies, fees and receipts.
