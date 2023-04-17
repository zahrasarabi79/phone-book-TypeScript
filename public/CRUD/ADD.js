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
const Common_1 = __importDefault(require("./Common"));
const book_controller_1 = __importDefault(require("../DB/book.controller"));
function dataQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield Common_1.default.questions("what is your name?", "what is your phone?");
        yield book_controller_1.default.insertData(data);
    });
}
exports.default = { dataQuestions };
