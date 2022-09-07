const path = require('path');

function indexTemplate(paths) {
  const exportEntries = paths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = basename.replace('Svg', '');
    return `export { ${exportName} } from './${basename}'`
  })
  return exportEntries.join('\n')
}

module.exports = indexTemplate;