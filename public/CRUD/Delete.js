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
const Common_1 = __importDefault(require("./Common"));
const book_deleted_1 = __importDefault(require("../DB/book.deleted"));
const dataQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    return confirmDelete(yield Common_1.default.questions("what is your name?", "what is your phone?"));
});
function confirmDelete(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteQuestion = [
            {
                name: "delete",
                type: "confirm",
                message: "Do you want to delete this person?",
            },
        ];
        return selectConfirm(yield inquirer_1.default.prompt(deleteQuestion), data);
    });
}
function selectConfirm(ResultOfquestionDelete, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return ResultOfquestionDelete.delete
            ? book_deleted_1.default.deletedData(data)
            : console.log("Delete contact canceled");
    });
}
exports.default = { dataQuestions };
