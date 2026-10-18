# Conventions

- Component folders are kebab-case; `.tsx` files stay PascalCase, e.g. `feature-content/FeatureContent.tsx`. Stylesheets are kebab-case too. Scene components live in `src/components/feature-scenes/`.
- Component styles are kebab-case SCSS Modules next to the component, e.g. `feature-content/feature-content.module.scss`, imported as `styles`. Keep the `.module` suffix: Vite needs it to scope class names.
- Use a leading underscore only for Sass partials that are `@use`d by other stylesheets (e.g. `styles/_breakpoints.scss`), never for files imported from TypeScript.
- Define colors as CSS custom properties in `src/styles/colors.scss` (loaded in `main.tsx`) and use `var(--color-*)`; no hex values in component styles.
- Reuse the global `type-*` typography classes and the `breakpoints.desktop` mixin (`@include breakpoints.desktop { … }`); build mobile-first.
- Keep component-specific props and types beside their component. Shared types live in `src/types/`; shared constants and static feature data live in `src/constants/`. Keep local constants local.
- Import across folders with the `@/` alias (maps to `src/`). Same-folder imports may use `./`; do not use `../`. Keep the alias configured consistently in Vite and the relevant TypeScript config.
- Verify with `npm run lint` and `npm run build`.
- Always use braces for `if`/`else` blocks; no braceless single-line `if`/`else`.
- Write helpers and handlers (e.g. `handleKeyDown`) as `function` declarations, not arrow functions assigned to variables. Inline callbacks (`.map(…)`, `onClick={() => …}`) may be arrows. ESLint enforces this and braces (`curly`, `func-style`).
- Leave a blank line after a `const`/`let` declaration block, before the next non-declaration statement (ESLint `padding-line-between-statements`).
