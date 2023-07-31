import yargs, { Argv, Options, options } from "yargs";

export const fileCommand = {
  command: "file",
  describe: "Generate a file",
  builder: {
    name: {
      alias: "n",
      describe: "Name of the file",
      type: "string",
    } satisfies Options,
    template: {
      alias: "t",
      describe: "Template to use",
      type: "string",
      demandOption: true,
    } satisfies Options,
  },
  handler: (argv: any) => {
    // log the cwd to see where we are.
    console.log(process.cwd());
  }
};