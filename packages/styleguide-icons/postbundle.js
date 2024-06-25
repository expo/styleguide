const fs = require('node:fs');
const path = require('node:path');

// Flatten package structure.
fs.cpSync(path.resolve(__dirname, 'dist'), path.resolve(__dirname), { recursive: true });
fs.rmSync('./dist', { recursive: true });

console.log('');

// Replace all index files content.
fs.readdirSync(path.resolve(__dirname), { withFileTypes: true })
  .reduce((acc, dirent) => {
    const directoryPath = path.resolve(__dirname, dirent.name);
    if (dirent.isDirectory()) {
      const files = fs.readdirSync(directoryPath).map((fileName) => path.join(directoryPath, fileName));
      return acc.concat(files);
    }
    return acc.concat(directoryPath);
  }, [])
  .filter((file) => ['index.js', 'index.d.ts'].includes(path.basename(file)))
  .forEach((indexFile) => {
    // Overwrite the index file with an empty file.
    fs.writeFileSync(indexFile, '');
    console.log(`🧹 Cleared: \x1b[36m${indexFile.replace(__dirname, '')}\x1b[0m`);
  });

console.log('');
