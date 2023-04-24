import { IPerson } from "../CRUD/ADD";
import Books from "./schema/books";

const insertData = async (datainput:IPerson) => {
  try {
    await Books.create({
      name:datainput.name,
      phone:datainput.phone
    });

    console.log("done");

  } catch (error) {
    console.log(error);
  }
};
export default { insertData };
