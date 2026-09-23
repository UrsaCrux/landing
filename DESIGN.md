# Design Overview for Ursa Crux

## Identity & Naming
- **Official Name:** **Club de Cohetería Ursa Crux** (always use this full name; never use legacy names like "Club de Cohetería UC" or abbreviations like "CCUC").
- **Short Name:** **Ursa Crux** (acceptable in conversational copy once the full name has been established).
- **Institution:** Student initiative at Pontificia Universidad Católica de Chile (San Joaquín campus, Santiago, Chile).

---

## Colors & Atmosphere

### Core Palette
- **Background:** `#02000A` — Deep cosmic void, pure pitch-black space background across all pages.
- **Text & Foreground:** `#FFFFFF` — Pure white for all typography, body text, subtitles, pillar/team descriptions, and white elements (avoid low-contrast grayed-out or washed-out text).
- **Primary (Deep Purple):** `#4E3571` — Used for subtle structural elements, dark card surfaces, deep space radial gradients, scrollbars, and selection.
- **Accent (Rocket Orange):** `#F56C27` — High-energy propulsion flame color used for CTAs (`.btn-glow`), badge highlights, active indicators, and rocket flame details.
- **Lighter Primary (Lavender / Machined Titanium):** `#C5AAEA` — Used sparingly for subtle metallic borders, card hover highlights, and gradient transitions.

### Luminous Highlights & Glow Technique
- **Dual-Nature Purple:** Purple should be used in two distinct ways:
  1. *Deep & Grounded (`#4E3571`):* Structural, quiet, and unobtrusive space atmosphere.
  2. *Luminescent Horizon Glow (Bright Electric Purple / Violet):* Inspired by the razor-sharp atmospheric rim of a planet against deep space (similar to planetary limb glow photography). Use intense, bright violet/purple glow highlights (e.g., `#8A5CFF` or luminous violet gradients) for sharp glowing edges, planetary arcs, or atmospheric light bleeding into the `#02000A` void.
- **Orange Rocket Glow:** Accent glows (`rgba(245, 108, 39, 0.35)`) used on `.btn-glow` and propulsion elements to evoke engine burn and launch power.

---

## Logo & Asset Usage

### 1. Hero Main Logo (`/public/logo_wide.png`)
- **Format:** High-resolution transparent PNG (`3793 x 1061`), featuring the rocket circle emblem on the left and bold metallic "URSA CRUX" + orange "— CLUB DE COHETERÍA —" on the right.
- **Placement:** Hero section as the primary visual banner/title.
- **Sizing:** Large, taking approximately 50% of the viewport width on desktop (`w-[85vw] sm:w-[70vw] md:w-[50vw] max-w-[850px]`).
- **Rules:**
  - **No bobbing/floating animations:** Keep the logo stable and grounded (do not apply `animate-float`).
  - **No duplicate text heading:** Because `logo_wide.png` already incorporates the club name, do not render a large visible text title directly beneath it. Keep a semantic `<h1 className="sr-only">Club de Cohetería Ursa Crux</h1>` for accessibility and SEO.

### 2. Badge & Icon Logo (`/public/logo2.jpg` / `logo2.jpeg`)
- **Format:** Square circular badge logo.
- **Placement:** Navigation bar header icon (`width={44} height={44}`), footer branding icon (`width={40} height={40}`), and browser favicon (`/public/logo2.jpg`).
- **Legacy Asset:** `logo1.jpeg` was the previous black-and-white CCUC sketch; do not use it.

---

## Aesthetic Keywords & Tone
- **Keywords:** Polymer, Machined Metal, Carbon Fiber, Machined Aluminium, Professional, Space, Astronomy, Space Exploration, Project, Design, Propulsion, Rocket Science, Student Initiative, Motivation and drive.
- **Design Philosophy:** Minimalistic, "Only the necessary". Unconvoluted. Clean. Straightforward. Professional yet approachable. Avoid cluttered card effects, excessive bouncy micro-animations, or extraneous visual noise.

---

## Language & Copy
- **Language:** 100% Latin American Spanish throughout (Chilean collegiate context, clear and natural tone).