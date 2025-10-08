import { clear } from "console";
import readline from "readline";

export const pregunta = (rl, pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, resolve);
  });
};

export const index = async () => {
  const ln = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let exec;
  do {
    exec = await pregunta(ln, "Task-cli: ");
    console.log(exec);
    await new Promise((resolve) => setTimeout(resolve, 10000));
  } while (exec !== "exit");

  ln.close();
};
index();
