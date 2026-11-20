# Generations Saga — future data contracts and review matrix
Specification only; do not implement runtime state.

## Separate conceptual domains
Character: fictional identifier, age band, abilities, preferences, consent settings.
Kinship: relationship type, biological/legal/guardianship distinctions, jurisdiction and privacy.
Household: residence, shared resources, dependent support and mutually agreed duties.
Life events: marriage, separation, birth, guardianship, illness, death, funeral and relocation.
Estate: ownership, liabilities, beneficiary claims, probate stage, trust/waqf restrictions.
Education: lessons, language, mentors, accessibility and source approval.
Narrative: story flags, alternate branches, player consent, review status and content warnings.

## Proposed state invariants
1. Never infer marriage, guardianship, or inheritance from mere household membership.
2. Death changes living status, not ownership instantly.
3. Minors' interests require independent safeguarding and jurisdictional oversight.
4. Funeral logistics, prayer ritual and estate settlement are separate systems.
5. Narrative decisions cannot alter real-world religious validity or guarantee salvation.
6. No real family genealogy, personal legal records or minors' information collected.
7. Contested legal or fiqh scenario must show uncertainty, not definitive verdict.
8. Consent/skip options persist across mature story content.
9. Character transitions cannot erase the agency of surviving spouses or dependents.

## Review owners by domain
Nikah: Islamic family-law scholar + jurisdictional marriage lawyer.
Pregnancy/childhood: child-safeguarding reviewer + qualified clinician for health claims.
Education: teacher + Islamic reviewer for religious content.
Elder care: elder-rights/accessibility expert + clinician where needed.
Janazah: qualified imam/scholar + funeral professional + local public-health/legal reviewer.
Estate: faraid scholar + probate lawyer + accountant/tax reviewer if financial claims.
City and culture: local community reviewers.
Security/privacy: data-protection reviewer.

## Release gate
A scenario can be narratively complete but not publishable. Require traceable claim ID, source, scope, date, reviewer, jurisdiction, consent and accessibility before public release. Tests of future logic must include unusual family constellations and failure paths.
