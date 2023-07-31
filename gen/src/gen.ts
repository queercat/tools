#!/usr/bin/env node
import yargs from 'yargs';

import { fileCommand } from './commands/file';

yargs.scriptName('gen')
  .usage('Usage: $0 <command> [args]')
  .help()
  .alias('h', 'help')
  .alias('v', 'version')
  .command(fileCommand)
  .demandCommand()

const main = async () => {
  const argv = await yargs.argv;
}

main();
