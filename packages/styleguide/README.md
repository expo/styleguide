# @expo/styleguide

Expo's styleguide components for use on the web.

## Usage

1. Install `@expo/styleguide` package
2. Import global CSS file from the package in your main stylesheet:
   ```css
   @import "@expo/styleguide/dist/global.css";
   ```

## Development

### Get started

1. Install dependencies with `yarn`.
2. Build everything with `yarn build`.
3. Develop with `yarn dev`.

### Changing Tailwind styles

In order to see changes made to the exported **tailwind.js** config:

- Change a value in **packages/styleguide/tailwind.js**
- Run yarn tsc in **packages/styleguide**
- Navigate to **example-web** and restart the dev server