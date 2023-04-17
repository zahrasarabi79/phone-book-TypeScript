import book from "./books";
import { Sequelize } from "sequelize";
import { Ibook } from "./books";
// console.log(book)
const tables: Ibook[] = [book];
interface Itbls{
  // books:object;
}
let tbls:Itbls= {};
function makeTablesFromSchemas(sequelize:Sequelize) {
  return tables.map(({ name, columns, conf }) => {
    tbls[name] = sequelize.define(name, columns, conf);
  });
}
// export
export default {
  makeTablesFromSchemas,
  tbls,
  tables,
};
