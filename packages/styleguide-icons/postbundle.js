// Copy package.json to dist
const fs = require('node:fs');
const path = require('node:path');

fs.writeFileSync(
  path.resolve(__dirname, 'dist', 'package.json'),
  fs.readFileSync(path.resolve(__dirname, 'package.json'))
);
