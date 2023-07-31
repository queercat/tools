#!/usr/bin/env node
import yargs from 'yargs';

import { fileCommand } from './commands/file';
import { listCommand } from './commands/list';
import { TemplateService } from './services/template';

export const affix = (key: string, val: any) => {
  module.exports[key] = val;
}

export const acquire = <T>(key: string): T => {
  return module.exports[key] as T;
}

const main = async () => {
  yargs.scriptName('gen')
    .usage('Usage: $0 <command> [args]')
    .help()
    .alias('h', 'help')
    .alias('v', 'version')
    .command(fileCommand)
    .command(listCommand)
    .demandCommand()

  affix('TemplateService', new TemplateService());

  await yargs.parse();
}

main();
