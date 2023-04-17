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
const table = require("./schema/schema.bootstrap");
const deletedData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const distroy = yield table.tbls.books.destroy({
            where: {
                name: `${data.name}`,
            },
        });
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
module.exports = { deletedData };
//*bad practice*////
// function deletedData(data) {
//   con.sync().then(() => {
//     book
//       .destroy({
//         where: {
//           name: `${data.name}`,
//         },
//       })
//       .then((row) => {
//         if (row === 0) {
//           console.log("unnnSuccessfully deleted record.");
//         } else {
//           console.log("Successfully deleted record.");
//         }
//       })
//       .catch((error) => {
//         console.error("the problem is: " + error.message);
//       });
//   });
// }
