import { IPerson } from "../CRUD/ADD";
import table from "./schema/schema.bootstrap";
import server from "./server";

const insertData = async (data:IPerson) => {
  const datainput:IPerson= {
    name: `${data.name}`,
    phone: `${data.phone}`,
  };
  // console.log(datainput.name)
  try {
    await server.database.models.books.create(datainput);
    console.log("done");

  } catch (error) {
    console.log(error);
  }
};
export default { insertData };
