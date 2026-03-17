# BRAGAREN_EWI Landing Page

## Current State
New project — no existing application files.

## Requested Changes (Diff)

### Add
- Brutalist-Minimalist single-page landing for Roman Bragaren EWI business
- Fixed navigation with logo and mailto CTA
- Hero section with oversized typography and Safety Orange (#FF4F00) accents
- Animated marquee ticker with service keywords
- Services grid (3 tiles: Insulation, Finishing, Reinforcement) with hover animations
- Value proposition section with icons (Shield, Zap)
- Full-width orange CTA section
- Footer with contact email and copyright
- Space Grotesk + JetBrains Mono fonts
- Framer Motion animations (marquee, hover states)

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Install framer-motion dependency
2. Set up Google Fonts (Space Grotesk, JetBrains Mono) in index.html/index.css
3. Build App.tsx as single-page landing with all sections
4. ServiceTile component with framer-motion hover
5. Animated marquee strip
6. All sections: Nav, Hero, Marquee, Services, Value Prop, CTA, Footer
