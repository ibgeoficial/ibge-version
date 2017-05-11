#!/usr/bin/env node

let exec = require('child_process').exec;
let writeFile = require('fs').writeFile;

let outputFile = process.argv[2] || "./version.json";

let child = exec('git describe --abbrev=0 --tags', (error, stdout, stderr) => {
    writeFile(outputFile, `"${stdout.trim()}"`);
});