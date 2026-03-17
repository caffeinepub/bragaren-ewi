# Bragaren EWI

## Current State
Landing page with brutalist design, black/off-white palette, existing sections for hero, services, value prop, and footer. Typography uses Space Grotesk + JetBrains Mono.

## Requested Changes (Diff)

### Add
- Logo SVG (house/building line drawing) in footer, matching the uploaded screenshot
- Section 2: Material Breakdown (black background, 2-col split with B&W wall texture image + technical specs)
- Section 3: Structural Phases timeline (white background, 5 steps connected by 3px black line)
- Snap-scroll behavior on hero CTA
- CHISINAU / MOLDOVA top-right header in monospaced font

### Modify
- Complete redesign to strict black (#000000) and white (#FFFFFF) only — no grays, no off-white
- Hero: white background, centered black box with white text "EXTERIOR THERMAL INTEGRITY."
- Footer: black background, "ESTABLISH YOUR THERMAL BARRIER.", contact grid (CALL + EMAIL), large white CTA button with instant color-flip hover
- Typography: Inter Tight / heavy weight for headers, JetBrains Mono for details
- All borders: 2px solid, sharp 0px border-radius throughout
- Grid/document aesthetic with visible section borders

### Remove
- Any off-white or gray tones
- Generic service tiles and marquee from previous version
- Filler adjectives (Expert, Professional, Quality)

## Implementation Plan
1. Rewrite App.tsx with 4 sections: Hero, Material Breakdown, Structural Phases, Footer
2. Generate B&W textured wall image for Section 2 left column
3. Recreate logo SVG as inline component matching the uploaded screenshot
4. Implement snap-scroll container
5. Apply Inter Tight + JetBrains Mono fonts via Google Fonts
6. Strict 0px border-radius, 2px borders, pure #000/#FFF palette
