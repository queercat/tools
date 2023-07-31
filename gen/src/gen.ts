#!/usr/bin/env node
import yargs from 'yargs';

import { fileCommand } from './commands/file';

const main = async () => {
  yargs.scriptName('gen')
    .usage('Usage: $0 <command> [args]')
    .help()
    .alias('h', 'help')
    .alias('v', 'version')
    .command(fileCommand)
    .demandCommand()

  await yargs.parse();
}

main();
