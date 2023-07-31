import { CommandModule } from "yargs";
import { TemplateService } from "../services/template";
import { acquire } from "../gen";

export const fileCommand: CommandModule = {
  command: "file",
  describe: "Generate a file from a specified template",
  builder: {
    name: {
      alias: "n",
      describe: "Name of the file",
      type: "string",
    },
    template: {
      alias: "t",
      describe: "Template to use",
      type: "string",
      demandOption: true,
    },
  },
  handler: async (argv) => {
    const template = argv.template as string;
    const _templateService = acquire<TemplateService>("TemplateService");

    const templates = (await _templateService.getTemplates()).filter((t) => t.includes(".template")).map((t) => t.split(".template")[0]);

    if (!templates.includes(template)) {
      console.log(`Template ${template} not found`);
      return;
    }


  }
};