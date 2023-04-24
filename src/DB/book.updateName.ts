import { IPerson } from "../CRUD/ADD";
import Books from "./schema/books";
const updateNameOf = async (data:IPerson) => {
  try {
    await Books.update(
      {
        name: `${data.name}`,
      },
      {
        where: { phone: `${data.phone}` },
      }
    );
  } catch (err) {
    console.error("the problem is: " + (err as Error).message);
  }
};
export default { updateNameOf };
