import readline from "readline";
import { createTask, listTasks, getTaskbyId, getTaskbyStatus } from "./controllers/task.controller.js";
export const pregunta = (rl, pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, resolve);
  });
};
export const ln = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const func = async (exec) => {
  let res
  switch (true) {
    case exec.startsWith("add"):
      const tittle = await pregunta(ln, "Tittle:");
      const description = await pregunta(ln, "Description:");
      console.log(createTask({ tittle, description }));
      break;
    case exec.includes("list"):
      let id = exec.split(" ")[1] || 0
      id === 0 ? res = listTasks() : !isNaN(id) ? res = getTaskbyId(id) : res = getTaskbyStatus(id)
      console.log(res);
      break;
    case exec.startsWith("exit"):
      console.log("See you soon");
      break;
    case exec.startsWith("--help"):
      console.log(
        "Available commands: \n\tadd: add task\n\tlist: list tasks\n\tupdate: update task\n\tdelete: delete task by id\n\tlist <id>: list task by id"
      );
      break;

    default:
      console.log("Invalid option, please use --help to learn about options");
      break;
  }
};
