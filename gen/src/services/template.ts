import * as fs from "fs";

export class TemplateService {
  private templates: string[] = [];

  constructor() {
  }

  /**
   * Get all templates including the full extension.
   */
  public async getTemplates(): Promise<string[]> {
    if (this.templates.length > 0) {
      return this.templates;
    }

    this.templates = await fs.promises.readdir("./templates");
    return this.templates;
  }

  /**
   * All templates without the extension. 
   */
  public async getTemplatesNames(): Promise<string[]> {
    return (await this.getTemplates()).filter((t) => t.includes(".template")).map((t) => t.split(".template")[0]);
  }

  /**
   * Gets the default name for a template. (e.g. "component.template.js" -> "component.js")
   */
  public async getDefaultNameFromTemplate(template: string): Promise<string> {
    const templates = await this.getTemplates();
    const defaultName = templates.filter((t) => t.includes(template))[0].replace(".template", "");
    return defaultName;
  }

  public async generateFileFromTemplate(template: string, name: string): Promise<void> {
    const cwd = process.cwd();
    const templates = await this.getTemplates();
    const templatePath = `${__dirname.split("\\").slice(0, -1).join("\\")}\\templates\\${templates.filter((t) => t.includes(template))[0]}`;

    const templateData = fs.readFileSync(templatePath, "utf-8");

    fs.writeFile(`${cwd}/${name}`, templateData, (err) => {
      if (err) {
        throw err;
      }
    })
  }
}