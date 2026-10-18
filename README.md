# Phone Scanning App Animations

A responsive, mobile-first feature showcase for a document scanning app, built with React, TypeScript, and Vite. Five tabs pair feature descriptions with animated phone scenes:

- Document Scanner
- Sign & Stamp
- Batch Scanning
- Advanced Filters
- Export & Share

## Features

- Animated phone entrances and fade-out transitions when switching features. Returning to a feature replays its animation.
- Dedicated scene layers for signatures and stamps, stacked scan pages, brightness and contrast controls, and exported file formats. Document Scanner uses the shared phone entrance without additional layers.
- Animated selection rings around tab icons.
- Mobile layouts with horizontally scrollable tabs and desktop layouts starting at 768px.
- Keyboard navigation using Left/Right arrows, Home, and End, with linked ARIA tabs and panels and visible focus indicators.
- Support for `prefers-reduced-motion`: scenes appear without animation and feature changes happen immediately.

This is a frontend animation demo. Scanning, editing, and exporting are illustrated through local assets; the Learn More button currently has no action.

## Implementation

Animations use CSS keyframes and transitions, with shared Sass mixins and timing constants. Component styles use SCSS Modules, and SVG tab icons are imported as React components through SVGR. No animation library or backend is required.

```text
src/
  assets/features/             Phone images, scene layers, and tab icons
  components/
    feature-showcase/         Feature selection and transition coordination
    feature-content/          Feature copy and shared phone container
    feature-tabs/             Scrollable tabs and keyboard navigation
    feature-scenes/           Feature-specific animated overlays
    tab-icon/                 SVG icons and animated selection rings
  constants/                  Feature content and scene mapping
  styles/                     Shared animations, colors, typography, and breakpoints
  types/                      Shared feature types
```

Edit feature copy and assets in `src/constants/features.ts`. Scene components are mapped in `src/constants/featureScenes.ts`, and shared animation timings live in `src/styles/animations/_animation-timing-constants.scss`. The `@/` import alias points to `src/`.

## Development

Install Node.js and npm before running the commands below. Code quality tools include ESLint, TypeScript, Stylelint, and Prettier.

Install dependencies:

```sh
npm ci
```

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite.

Run lint and type checks:

```sh
npm run lint
```

Format the code:

```sh
npm run format
```

Create a production build:

```sh
npm run build
```

The build runs TypeScript checks and writes production assets to `dist/`.

Preview the production build:

```sh
npm run preview
```
