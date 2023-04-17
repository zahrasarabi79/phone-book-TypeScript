
import { IPerson } from "../CRUD/ADD";
import common from "./Common";
import  DB  from "../DB/book.updateName";
async function dataQuestions() {
  let data:IPerson = await common.questions(
    "write a new name for previous number:",
    "What is your previous number?"
  );
  await DB.updateNameOf(data);
}

export default { dataQuestions };
