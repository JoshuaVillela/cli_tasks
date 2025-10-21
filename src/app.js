import readline from "readline";
import {
  createTask,
  listTasks,
  getTaskbyId,
  getTaskbyStatus,
  updateTask,
  updateStatus,
  deleteTask
} from "./controllers/task.controller.js";
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
  let res, id, title, description, status;
  switch (true) {
    case exec.startsWith("add"):
      title = await pregunta(ln, "Title:");
      description = await pregunta(ln, "Description:");
      console.log(createTask({ title, description }));
      break;
    case exec.includes("list"):
      id = exec.split(" ")[1] || 0;
      id === 0
        ? (res = listTasks())
        : !isNaN(id)
        ? (res = getTaskbyId(id))
        : (res = getTaskbyStatus(id));
      console.log(res);
      break;
    case exec.includes("update"):
      try {
        id = exec.split(" ")[1] || 0;
        if (id == 0) throw new Error("we need an Id to update a task");
        description = await pregunta(ln, "Description:");
        res = updateTask({ id, description });
        console.table(res);
      } catch (error) {
        console.error("Error updating task:", error);
      }
      break;
    case exec.includes("mark-"):
      try {
        let text = exec.split("mark-")[1];
        [status, id] = text.split(" ");
        if ((status !== "done" && status !== "in-progress") || id === undefined)
          throw new Error(
            "Status must be 'done' or 'in-progress' or id should be provided"
          );
        res = updateStatus({ id, status });
        console.log(res);
      } catch (error) {
        console.error("Error updating task status:", error);
      }
      break;
    case exec.includes("delete"):
      try {
        id = exec.split(" ")[1]||0
        if(id===0){throw new Error("Id should be provided")}
        res=deleteTask(id)
        console.log(res)
      } catch (error) {
        console.error("Error updating task status:", error);
      }
      break;
    case exec.startsWith("exit"):
      console.log("See you soon");
      break;
    case exec.startsWith("--help"):
      console.log(
        "Available commands: \n\tadd: add task\n\tlist: list tasks\n\tupdate: update task\n\tdelete: delete task by id\n\tlist <id> or <status>: list task by id or status\n\tmark-in-progress: to update status of task \n\tmark-done: to update status of task"
      );
      break;
    default:
      console.log("Invalid option, please use --help to learn about options");
      break;
  }
};
