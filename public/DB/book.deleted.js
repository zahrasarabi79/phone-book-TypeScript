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
const schema_bootstrap_1 = __importDefault(require("./schema/schema.bootstrap"));
const deletedData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const distroy = yield schema_bootstrap_1.default.tbls.books.destroy({
            where: {
                name: `${data.name}`,
            },
        });
        console.log(typeof schema_bootstrap_1.default.tbls);
        if (distroy === 0) {
            console.log("unnnSuccessfully record deleted.");
        }
        else {
            console.log("Successfully record deleted.");
        }
    }
    catch (error) {
        console.error("the problem is: " + error.message);
    }
});
exports.default = { deletedData };
