// Copy package.json to dist
const fs = require('fs');
const path = require('path');

const packageJson = require('./package.json');

fs.writeFileSync(path.resolve(__dirname, 'dist', 'package.json'), JSON.stringify(packageJson, null, 2));
