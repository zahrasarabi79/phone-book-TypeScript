import { IPerson } from "../CRUD/ADD";
import table from "./schema/schema.bootstrap"
const deletedData = async (data:IPerson) => {
  try {
    const distroy = await table.tbls.books.destroy({
      where: {
        name: `${data.name}`,
      },
    });
    console.log(typeof table.tbls)

    if (distroy === 0) {
      console.log("unnnSuccessfully record deleted.");
    } else {
      console.log("Successfully record deleted.");
    }
  } catch (error) {
    console.error("the problem is: " +(error as Error).message);
  }
};
export default{deletedData}
