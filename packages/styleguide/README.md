# @expo/styleguide

Expo's styleguide and components for use on the web.

## Usage

1. Install Expo Styleguide package:
   ```shell
   yarn add @expo/styleguide
   ```
2. Import global CSS files from the package in your JS(X)/TS(X) code:
   ```jsx
   import "@expo/styleguide/dist/expo-theme.css";
   ```
   or import it the main stylesheet file:
   ```css
   @import "@expo/styleguide/dist/expo-theme.css";
   ```
3. Add `'./node_modules/@expo/styleguide/dist/**/*.{js,ts,jsx,tsx}'` to the Tailwind `content` paths.

### Tailwind theme

For the Styleguide we use our custom Tailwind theme, which is based on the default TW theme, with the following differences:
* only valid media screen scopes are: `xs:`, `sm:`, `md:`, `lg:` and `xl:`
* there is a custom `hocus:` scope which is a shorthand for hover and focus states
* typography elements are predefined as a `heading-[size]` styles sets
* `icon-[size]` are custom component classes defined for icons sizing 

## Development

### Get started

1. Install dependencies with `yarn`.
2. Build everything with `yarn build`.
3. Develop with `yarn dev`.

### Changing Tailwind theme

In order to see changes made to the exported **tailwind.js** config:

- Change a value in **packages/styleguide/tailwind.js**
- Run `yarn build` in **packages/styleguide**
- Navigate to **example-web** and restart the dev server