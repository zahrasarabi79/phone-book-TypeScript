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
const inquirer_1 = __importDefault(require("inquirer"));
const server_1 = __importDefault(require("./DB/server"));
const Delete_1 = __importDefault(require("./CRUD/Delete"));
const UpdateName_1 = __importDefault(require("./CRUD/UpdateName"));
const UpdatePhone_1 = __importDefault(require("./CRUD/UpdatePhone"));
const ADD_1 = __importDefault(require("./CRUD/ADD"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield server_1.default.creatTable();
    const inquirerOptions = [
        {
            name: "phonebook",
            type: "list",
            message: "what do you want?",
            choices: ["add number", "update number", "update name", "delete number"],
        },
    ];
    let inquirerResult = yield inquirer_1.default.prompt(inquirerOptions);
    const total = {
        "add number": ADD_1.default,
        "update number": UpdatePhone_1.default,
        "update name": UpdateName_1.default,
        "delete number": Delete_1.default,
    };
    yield total[inquirerResult.phonebook].dataQuestions();
}))();
