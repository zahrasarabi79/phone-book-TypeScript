import server  from "./server";
import { IPerson } from "../CRUD/ADD";
import Books from "./schema/books";
const updateNumberOf = async (data:IPerson) => {
  try {
    await Books.update(
      {
        phone: `${data.phone}`,
      },
      {
        where: { name: `${data.name}` },
      }
    );
  } catch (err) {
    console.error("the problem is: " +(err as Error).message);
  }
};
export default { updateNumberOf };
