import common from "./Common";
import DB from "../DB/book.controller";
 export interface IPerson {
  name: string;
  phone: string;
}
async function dataQuestions(){
  let data:IPerson = await common.questions(
    "what is your name?",
    "what is your phone?"
  );
  await DB.insertData(data);
}

export default{dataQuestions};
