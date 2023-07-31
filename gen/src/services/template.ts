import * as fs from "fs";

export class TemplateService {
    constructor() {
    }

    /**
     * Get all templates including the full extension.
     */
    public async getTemplates(): Promise<string[]> {
        const templates = await fs.promises.readdir("./templates");
        return templates;
    }

    /**
     * All templates without the extension. 
     */
    public async getTemplatesNames(): Promise<string[]> {
      const templates = (await this.getTemplates()).filter((t) => t.includes(".template")).map((t) => t.split(".template")[0]);
      return templates;
    }
}