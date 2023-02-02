# @expo/styleguide

This package is meant for use in the DOM.

## Get started

Install

```bash
yarn add @expo/styleguide

# or

npm install @expo/styleguide
```

Then in a React component:

```tsx
import { colors, shadows, ... } from "@expo/styleguide";
```

## Changing styles in `tailwind.config`

In order to see changes made to the exported **tailwind.js** config: 

- Change a value in **packages/styleguide/tailwind.js**
- Run `yarn tsc` in **packages/styleguide**
- Navigate to **examples/web** and restart the dev server