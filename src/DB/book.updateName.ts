import server  from "./server";
import { IPerson } from "../CRUD/ADD";
const updateNameOf = async (data:IPerson) => {
  try {
    await server.database.models.books.update(
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
