import { CommandModule } from "yargs";
import { acquire } from "../gen";
import { TemplateService } from "../services/template";

export const listCommand: CommandModule = {
  command: "list",
  describe: "List all templates",
  builder: {},
  handler: async (argv) => {
    const _templateService = acquire<TemplateService>("TemplateService");
    const templates = await _templateService.getTemplatesNames();

    console.log("Available templates:")
    templates.forEach((t) => console.log(" ", t));
  }
};