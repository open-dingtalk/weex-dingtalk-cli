#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');
program
  .version(package.version)
  .usage('<command> [options]')
  .parse(process.argv)
