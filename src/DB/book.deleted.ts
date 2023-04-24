import { IPerson } from "../CRUD/ADD";
import Books from "./schema/books";
const deletedData = async (data:IPerson) => {
  try {
    const distroy = await Books.destroy({
      where: {
        name: `${data.name}`,
      },
    });

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
