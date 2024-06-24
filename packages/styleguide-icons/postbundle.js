// Flatten package structure
const fs = require('node:fs');
const path = require('node:path');

fs.cpSync(path.resolve(__dirname, 'dist'), path.resolve(__dirname), { recursive: true });

fs.rmSync('./dist', { recursive: true });
