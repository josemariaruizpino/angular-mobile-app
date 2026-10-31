# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Existing codebase: Angular 19 standalone components, signals, SCSS, service worker (PWA), deployed to GitHub Pages (`/angular-mobile-app/` base href).

## Users
Competitive Magic: The Gathering players (Pauper and Modern) who open the app on their phone between tournament rounds to check sideboard plans for the matchup they are about to play. Time is short, attention is divided, lighting and connectivity at venues are poor. Intended as a public product for a broad audience of players.

## Product Purpose
"Fase de Pensar": sideboard strategy for competitive Pauper and Modern. For each archetype it gives In/Out plans per matchup, difficulty ratings, gameplay tips, key cards, maybeboard options and pro tips, plus a directory of community players ("pilotos") with links to their decklists and profiles. Success: a player finds the right matchup plan in seconds and sideboards correctly.

## Positioning
Matchup-first sideboard plans (explicit cards in/out with reasons per opposing deck) rather than generic decklists or metagame stats; built mobile-first for use at the table.

## Operating Context
Used at tournaments on a phone, often between rounds, possibly with weak connectivity (hence the PWA/service worker). Also used for prep at home. Content is currently static data held in Angular services (sideboard decks, players); no backend.

## Capabilities and Constraints
- Routes: home, sideboard list (format switcher Pauper/Modern, search), sideboard detail by slug, players list/detail, explore, activity, settings; theme service (light/dark).
- Formats: `pauper` and `modern`; archetype types Aggro, Control, Midrange, Combo, Ramp; matchup difficulty favorable/even/unfavorable.
- UI copy is currently Spanish; multilingual support (English) is planned, so strings should not be assumed permanently Spanish.
- Some route titles still read "MinimalApp" (leftover scaffold naming). Explore and activity screens may be scaffold remnants; their status is undecided.
- Scope may grow beyond Pauper/Modern; undecided.

## Brand Commitments
Name: "Fase de Pensar" (hero) / "SIDEBOARD" (section branding). Which is the product name versus a section name is undecided.

## Evidence on Hand
Real archetype data and matchup plans in `src/app/core/services/sideboard.service.ts`; real player profiles in `src/app/core/services/players.service.ts`. No testimonials, usage metrics or user research exist; do not fabricate them.

## Product Principles
- Speed to the answer: the matchup plan must be reachable in very few taps.
- Glanceable at the table: In/Out lists readable at a glance, one-handed, in poor light.
- Works offline at the venue.
- Strategic credibility: advice carries reasons, not bare card lists.
- Built to extend: more formats, languages and contributors later.

## Accessibility & Inclusion
No product-specific standard established. Mobile one-handed use, touch targets and readability in dim venues are practical requirements.
