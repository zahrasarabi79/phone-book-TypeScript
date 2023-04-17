import inquirer from "inquirer";
import { IPerson } from "../CRUD/ADD";
import common from "./Common";
import DB from "../DB/book.deleted";
const dataQuestions = async () =>
  confirmDelete(
    await common.questions("what is your name?", "what is your phone?")
  );
interface deleteQuestion {
  name: string;
  type: string;
  message: string;
}
interface ResultOfquestionDelete {
  delete: boolean;
}
async function confirmDelete(data: IPerson) {
  const deleteQuestion: deleteQuestion[] = [
    {
      name: "delete",
      type: "confirm",
      message: "Do you want to delete this person?",
    },
  ];
  return selectConfirm(await inquirer.prompt(deleteQuestion), data);
}
async function selectConfirm(
  ResultOfquestionDelete: ResultOfquestionDelete,
  data: IPerson
) {
  return ResultOfquestionDelete.delete
    ? DB.deletedData(data)
    : console.log("Delete contact canceled");
}
export default { dataQuestions };
