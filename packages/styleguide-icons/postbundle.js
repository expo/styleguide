const fs = require('node:fs');
const path = require('node:path');

// Flatten package structure.
fs.cpSync(path.resolve(__dirname, 'dist'), path.resolve(__dirname), { recursive: true });
fs.rmSync('./dist', { recursive: true });

// Remove index files from @expo/styleguide-icons package.
fs.readdirSync(path.resolve(__dirname), { withFileTypes: true })
  .reduce((acc, dirent) => {
    const directoryPath = path.join(path.resolve(__dirname), dirent.name);
    if (dirent.isDirectory()) {
      const files = fs.readdirSync(directoryPath).map((fileName) => path.join(directoryPath, fileName));
      return acc.concat(files);
    }
    return acc.concat(directoryPath);
  }, [])
  .filter((file) => ['index.js', 'index.d.ts', 'index.ts'].includes(path.basename(file)))
  .forEach((indexFile) => {
    // Overwrite the index file with an empty file.
    fs.writeFileSync(indexFile, '');
    console.log(`Removed: ${indexFile}`);
  });
