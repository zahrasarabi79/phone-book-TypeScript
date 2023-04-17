"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const book = {
    name: "books",
    columns: {
        name: {
            type: sequelize_1.DataTypes.STRING,
            unique: true,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
        },
    },
    conf: {
        timestamps: false,
    },
};
const spre = { book };
// console.log(spre);
exports.default = Object.assign({}, book);
