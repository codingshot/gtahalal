---
name: sunnah-source-validation
description: Validate Sunnah.com hadith citations, grading, scope and application before Dunya content release.
---
# Sunnah.com hadith validation

## Steps
1. Break story claims into precise propositions and find the exact hadith, not merely a keyword match.
2. Open https://sunnah.com/{collection}:{number}; confirm collection, reference numbering, Arabic/translation and in-book citation. Hadith numbering can differ across editions.
3. Inspect chapter context, variant narrations, attribution and grade where provided. Sahih collections and other collections require different grading treatment; site availability alone is not authentication.
4. Distinguish text, scholarly explanation, legal-school inference and fictional adaptation. Identify if the cited hadith actually supports the proposed mechanic.
5. Capture canonical URL, collection, number, chapter, narrator, grade and grading authority if available, translation rights, context and retrieval date.
6. Flag contradictory narrations, disputed interpretation, unsupported inference and source mismatches for qualified review.
7. Do not automatically call an action haram, sunnah or wajib from one isolated report. Public content requires editorial and scholarly approval.

## Example audit
Sahih Muslim 362 concerns certainty versus doubt about loss of wudu; it does not mean a person must literally hear a sound or smell something in every case. Model definite event separately from uncertainty.

## Failure handling
If page cannot be retrieved, grade cannot be established, or license is unclear: pending review, never silently approved.

## Required output
claim_id, hadith_url, collection, reference, chapter, grade, grading_source, claim_class, context_notes, reviewer_needed, release_decision.
