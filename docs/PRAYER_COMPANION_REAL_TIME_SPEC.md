# Dunya — Prayer Companion and real-life synchronization
Status: product and religious-review specification only. No prayer engine, live geolocation, alerts or animation implemented.

## Three distinct modes
1. Learn Mode: optional guided lessons in purification, qibla, salah postures, recitation and accommodations; reviewed school-specific instruction. Never claim a simulated prayer fulfills actual salah.
2. World Mode: fictional city-pack local time, simulated prayer schedule, NPC prayer-space navigation and optional animation; never silently substitute real-world prayer times.
3. Real-Life Prayer Mode: explicit opt-in to selected location and prayer-time method; local device clock, next prayer countdown, 'I'm going to pray' pause and optional post-prayer return. The game does not monitor, verify or score the person's actual worship.

## Prayer times
- Fajr, Dhuhr, Asr, Maghrib, Isha; sunrise separately, not a sixth obligatory prayer.
- Calculation requires latitude/longitude or manually chosen city, IANA time zone, date, calculation authority/method, madhhab-specific Asr convention, high-latitude handling and optional local mosque adjustments.
- Prefer authoritative local mosque calendars when available and explain disagreements; never imply one global timetable is universally correct.
- Show source, method, selected city, time zone, last refresh, uncertainty and a correction option. DST, travel, midnight, offline mode and clock drift are explicit test cases.
- For real-life sync, ask location permission only when needed; manual city entry must work. Do not store precise location or real prayer history in analytics. No push notifications without explicit opt-in.
- Distinguish 'prayer time has entered' from 'prayer completed'. No automatic claims that a prayer was missed or accepted.

## Qibla / Ka'bah direction
- World Mode: compute direction from fictional map coordinates to the modeled Ka'bah location in the game's coordinate convention; treat fictional city scaling explicitly.
- Real-Life Mode: calculate initial great-circle bearing from user's selected coordinates toward the Ka'bah; heading visualization depends on calibrated compass/gyro permission and device magnetic interference. Offer text bearing and map fallback when heading unreliable.
- No claim that visual arrow alone guarantees exact real-world alignment. If direction cannot be determined, show reviewed guidance on reasonable effort and uncertainty.
- Sacred sites are not arcade targets or collectible objects.

## Wudu, water and tayammum
- Search for clean accessible water, wudu stations, safe taps and permission to use facilities; avoid wasting water or trespassing.
- Water available but medically harmful, water inaccessible or absent: open a school-specific tayammum education path, not an unconditional shortcut.
- Tayammum involves qualifying clean earth/ground material according to reviewed jurisprudence; do not treat contaminated soil, trash, arbitrary dirty surfaces or every material as valid.
- Conditions for use, sequence, hands/face, expiry, renewed water access and other school differences require qualified fiqh review. No real-world certification.
- Existing simulated PurificationState unknown/valid/invalid/requires_review remains separate from actual user's state; never infer actual wudu from an avatar.

## 'I'm going to pray' quick mode
1. Player taps persistent accessible action or keyboard/controller shortcut.
2. Game shows selected prayer and clock source, asks whether to pause or optionally let avatar begin a respectful idle-to-prayer animation.
3. Save game state locally and suspend nonessential missions, timers, audio, combat/encounters and social notifications. No ads or engagement nudges.
4. Show simple 'Prayer break' screen with optional silent timer/clock; no camera, microphone or worship tracking. Do not time-limit the user's salah.
5. On return, player chooses Resume, Learn More or Continue Later. Never ask 'Did you really pray?' or award points for completion.
6. If an online session cannot pause, place avatar in safe non-disruptive idle state and clearly warn about multiplayer persistence; do not imply protection from threats without an implemented mechanism.

## Tasbih and prayer beads
- Optional digital tasbih counter with manual increment, decrement, reset, tactile/screen-reader feedback, configurable noncompetitive target and local-only storage.
- Optional rendered misbaha beads, left/right-hand accessibility, reduced-motion mode, audio-free use and no compulsory count or leaderboard.
- Common adhkar counts, wording, prayer-after dhikr and permissible aids differ in context and interpretation; every preset requires source/fiqh review. Counter is a convenience, not evidence of spiritual reward or prayer validity.
- No recording of actual dhikr history in analytics or public profiles.

## Acceptance and negative cases
- Clock wrong or offline -> warn, never assert exact prayer time.
- Selected city changed or crossing time zone -> recompute with user confirmation and method transparency.
- Compass unavailable -> numeric bearing and map fallback.
- No water and no approved tayammum guidance -> show 'needs review', never improvise a ruling.
- User presses quick prayer during quest -> local state saved and resumable; if not technically possible, warn and offer safe exit.
- No forced religious prompts, gamified piety, prayer-speed scores, ads, real worship surveillance or false validity claims.
- Reviewer gates: qualified scholar for times, qibla, tayammum, wudu and dhikr; accessibility, privacy and technical reviewers.
