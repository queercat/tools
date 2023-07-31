#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acquire = exports.affix = void 0;
const yargs_1 = __importDefault(require("yargs"));
const file_1 = require("./commands/file");
const list_1 = require("./commands/list");
const template_1 = require("./services/template");
const affix = (key, val) => {
    module.exports[key] = val;
};
exports.affix = affix;
const acquire = (key) => {
    return module.exports[key];
};
exports.acquire = acquire;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yargs_1.default.scriptName('gen')
        .usage('Usage: $0 <command> [args]')
        .help()
        .alias('h', 'help')
        .alias('v', 'version')
        .command(file_1.fileCommand)
        .command(list_1.listCommand)
        .demandCommand();
    (0, exports.affix)('TemplateService', new template_1.TemplateService());
    yield yargs_1.default.parse();
});
main();
