import server  from "./server";
import { IPerson } from "../CRUD/ADD";
const updateNumberOf = async (data:IPerson) => {
  try {
    await server.database.models.books.update(
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
