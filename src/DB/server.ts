import { Sequelize } from "sequelize";
import schema from "./schema/schema.bootstrap";
import table from "./schema/schema.bootstrap"

const database= creatDbInstance();

/*best practice*/
function creatDbInstance() {
  return new Sequelize("pgs", "root", "102030", {
    host: "localhost",
    dialect: "mysql",
    logging: false, //اینجا خط های کوئری داخل ترمینال کنسول لاگ گرفته نمیشه
  });
}
const creatTable = async () => {
  try {
    await database.authenticate(); //
    schema.makeTablesFromSchemas(database);
     //call schema to build table automaticly
    await database.sync();

  } catch (error ) {
    return console.log(error);
  }
};
creatTable();
export default{creatTable, creatDbInstance, database };
// module.exports = { creatTable, creatDbInstance, database };

