import { IPerson } from "../CRUD/ADD";
import common from "./Common"
import DB from "../DB/book.updateNumber"
async function dataQuestions() {
  let data:IPerson = await common.questions(
    "What is your name?",
    "write a new number "
  );
  await DB.updateNumberOf(data);
}
export default {dataQuestions}