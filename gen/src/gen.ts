#!/usr/bin/env node
import yargs from 'yargs';

yargs.scriptName('gen');
yargs.usage('Usage: $0 <command> [args]');
yargs.help();

const argv = yargs.argv;

console.log(argv);

// Add testing package with yarn.
// yarn add -D jest ts-jest @types/jest