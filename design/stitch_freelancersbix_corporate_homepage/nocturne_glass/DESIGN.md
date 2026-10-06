---
name: Nocturne Glass
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#a9c9f5'
  on-secondary: '#0c3256'
  secondary-container: '#28486e'
  on-secondary-container: '#98b7e3'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#d3e4ff'
  secondary-fixed-dim: '#a9c9f5'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#28486e'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  whiteout: '#ffffff'
  haze: '#f5f5f5'
  ink: '#1b1b1b'
  black-void: '#000000'
  twilight-blue: '#426188'
  signal-blue: '#2b7fff'
typography:
  headline-xl:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 84px
    letterSpacing: 0.02em
  headline-xl-mobile:
    fontFamily: Anton
    fontSize: 44px
    fontWeight: '900'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 52px
    fontWeight: '900'
    lineHeight: 56px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '900'
    lineHeight: 36px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3.25rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3.25rem
  space-3xl: 5rem
  space-4xl: 7.5rem
---

# Air — Style Reference
> midnight sky through glass sculpture
**Theme:** dark
## Tokens — Colors
| Name | Value | Token | Role |
|------|-------|-------|------|
| Whiteout | `#ffffff` | `--color-whiteout` | Primary text on dark surfaces, nav button borders, hairline strokes, card surfaces over photographic backgrounds |
| Haze | `#f5f5f5` | `--color-haze` | Card surfaces, input fields, subtle button fills on dark backgrounds — the off-white layer that sits above the dark canvas |
| Ink | `#1b1b1b` | `--color-ink` | Body and heading text on light surfaces, button borders on light cards |
| Black Void | `#000000` | `--color-black-void` | Navigation borders, link underlines, deepest contrast layer on white surfaces |
| Twilight Blue | `#426188` | `--color-twilight-blue` | Heading text on dark backgrounds — the only chromatic text color, a desaturated steel blue that reads as cool and atmospheric rather than vivid |
| Signal Blue | `#2b7fff` | `--color-signal-blue` | Blue text accent for links, tags, and emphasized short phrases. Do not promote it to the primary CTA color |
## Tokens — Typography
### Control — Primary interface typeface · `--font-control`
- **Substitute:** Inter, system-ui
- **Weights:** 500 + 400
### Control Compressed — Ultra-large display headlines · `--font-control-compressed`
- **Substitute:** Anton, Druk Wide
- **Weights:** 900
### Control Cursive — Italic accent for emphasis within headlines · `--font-control-cursive`
- **Substitute:** Caveat, Reenie Beanie
- **Weights:** 400, 500
### Spacing Scale
4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 52px, 64px, 80px, 120px
### Border Radius
cards: 12px, pills: 9999px, images: 11px, inputs: 4px, buttons: 8px
