import { func, pregunta, ln } from "./app.js";

export const index = async () => {
  let exec;
  console.clear()
  do {
    exec = await pregunta(ln, "Task-cli: ");
    await func(exec)
    await new Promise(resolve => setTimeout(resolve,2000))
  } while (exec !== "exit");

  ln.close();
  console.clear()
  process.exit()
};
index();
