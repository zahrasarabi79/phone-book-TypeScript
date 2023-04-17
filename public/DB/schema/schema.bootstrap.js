"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = __importDefault(require("./books"));
// console.log(book)
const tables = [books_1.default];
let tbls = {};
function makeTablesFromSchemas(sequelize) {
    return tables.map(({ name, columns, conf }) => {
        tbls[name] = sequelize.define(name, columns, conf);
    });
}
// export
exports.default = {
    makeTablesFromSchemas,
    tbls,
    tables,
};
