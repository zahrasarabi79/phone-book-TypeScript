"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function questions(massage1, massage2) {
    const inquirerquestion = [
        {
            name: "name",
            type: "input",
            message: massage1,
        },
        {
            name: "phone",
            type: "input",
            message: massage2,
        },
    ];
    return inquirer_1.default.prompt(inquirerquestion);
}
exports.default = { questions };
