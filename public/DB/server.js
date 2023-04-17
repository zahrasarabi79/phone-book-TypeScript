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
const sequelize_1 = require("sequelize");
const schema_bootstrap_1 = __importDefault(require("./schema/schema.bootstrap"));
const database = creatDbInstance();
/*best practice*/
function creatDbInstance() {
    return new sequelize_1.Sequelize("pgs", "root", "102030", {
        host: "localhost",
        dialect: "mysql",
        logging: false, //اینجا خط های کوئری داخل ترمینال کنسول لاگ گرفته نمیشه
    });
}
const creatTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database.authenticate(); //
        schema_bootstrap_1.default.makeTablesFromSchemas(database);
        //call schema to build table automaticly
        yield database.sync();
    }
    catch (error) {
        return console.log(error);
    }
});
creatTable();
exports.default = { creatTable, creatDbInstance, database };
// module.exports = { creatTable, creatDbInstance, database };
