# Styleguide UI

## Get started

1. Install dependencies with `yarn`.
2. Build everything with `yarn build`.

### Icons

We generate all icon files based on our Figma icons. The process is:

1. Make a call to Figma to get all the icons from a specific doc. To do this, you'll need to:
  a. Duplicate the **.env.example** file, and name the copy: **.env**.
  b. Inside it, define a `FIGMA_TOKEN` with a personal access token from Figma. Click on your avatar in Figma in the top right > Settings > Account tab. The personal access token settings are near the bottom.
2. Once we get every component from the icons pages specified in **figma.config.js**, we optimize them all with SVGO.
3. After that, we use SVGR to create React components of each icon. The outputter is defined in **figma.config.js**, and we use a custom template in **svgr-icon-template.js**. These components are stored in **tmp**.
4. Finally, we use `rollup` to build our final package. These files are saved in **dist**.

