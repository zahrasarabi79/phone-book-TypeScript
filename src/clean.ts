import inquirer from "inquirer";
import DB from "./DB/server";
import deleted from "./CRUD/Delete";
import updatename from "./CRUD/UpdateName";
import updatNumber from "./CRUD/UpdatePhone";
import add from "./CRUD/ADD";

interface IInquirerOptions {
  name: string;
  type: string;
  message: string;
  choices: string[];
}
(async () => {
  await DB.creatTable();
  const inquirerOptions: IInquirerOptions[] = [
    {
      name: "phonebook",
      type: "list",
      message: "what do you want?",
      choices: ["add number", "update number", "update name", "delete number"],
    },
  ];
  
  type option = {
    dataQuestions: () => Promise<void>;
  };
  let inquirerResult = await inquirer.prompt(inquirerOptions);
  const total: Record<string, option> = {
    "add number": add,
    "update number": updatNumber,
    "update name": updatename,
    "delete number": deleted,
  };
  await total[inquirerResult.phonebook].dataQuestions();
})();
