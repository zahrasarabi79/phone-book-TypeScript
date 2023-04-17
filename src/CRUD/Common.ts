import inquirer from 'inquirer';
function questions(massage1:string, massage2:string) {
  interface Iinquirerquestion{
    name: string;
    type: string;
    message:string; 
  }
  const inquirerquestion:Iinquirerquestion[] = [
    {
      name: "name",
      type: "input",
      message: massage1,
    },
    {
      name: "phone",
      type: "input",
      message: massage2,
    },
  ];
  return inquirer.prompt(inquirerquestion);
}
export default{ questions}
