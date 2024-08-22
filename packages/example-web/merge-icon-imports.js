// Since removal of barrel files from the @expo/styleguide-icons, in order to
// display all icons we are automatically generating a file with all exports on
// the side of example-web.
const fs = require('node:fs');
const { join } = require('node:path');

const base = '../styleguide-icons';
const dirs = ['custom', 'duotone', 'outline', 'solid'];

async function run() {
  const files = [
    ...(await Promise.all(
      dirs.map((directory) =>
        fs.promises
          .readdir(join(base, directory))
          .catch((error) => {
            console.error(error.message);
            process.exit(1);
          })
          .then((files) =>
            files
              .filter((file) => file.endsWith('.js'))
              .filter((file) => !file.startsWith('index'))
              .map((file) => {
                const iconName = file.replaceAll('.js', '').split('/').at(-1);
                return `export { ${iconName} } from '@expo/styleguide-icons/${directory}/${iconName}';`;
              })
          )
      )
    )),
  ].flat();

  const content = files.join('\n');
  await fs.promises.writeFile('common/icon-imports.ts', content);
}

run();
