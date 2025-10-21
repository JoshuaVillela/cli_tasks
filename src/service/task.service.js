import fs from "fs";

export const _createTask = (title, desc) => {
  try {
    let tasks, objNewTask;
    if (fs.existsSync("./tasks.json")) {
      tasks = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      objNewTask = {
        id: newId,
        title: title,
        description: desc,
        status: "to-do",
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      };
      tasks.push(objNewTask);
    } else {
      tasks = [
        {
          id: 1,
          title: title,
          description: desc,
          status: "to-do",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
      ];
    }
    fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 2));
    return "Task created successfully";
  } catch (error) {
    console.error("Error creating task:", error);
    return "Failed to create task";
  }
};

export const _listTasks = () => {
  try {
    if (fs.existsSync("./tasks.json")) {
      const tasks = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));
      console.table(tasks);
      return "Listed successfully";
    } else {
      return "No tasks found";
    }
  } catch (error) {
    console.error("Error listing tasks:", error);
    return "Failed to list tasks";
  }
};

export const _getTaskbyId = (id) => {
  try {
    id = parseInt(id);
    if (fs.existsSync("./tasks.json")) {
      const tasks = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));
      const task = tasks.find((el) => el.id === id);
      task != undefined ? console.table(task) : null;
      return task != undefined ? "Listed successfully" : "No task found";
    } else {
      return "No task found";
    }
  } catch (error) {
    console.error("Error listing tasks:", error);
    return "Failed to list tasks";
  }
};

export const _getTaskbyStatus = (status) => {
  try {
    if (fs.existsSync("./tasks.json")) {
      const tasks = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));
      const task = tasks.filter((el) => el.status === status);
      task != undefined ? console.table(task) : null;
      return task != undefined ? "Listed successfully" : "No tasks found";
    } else {
      return "No tasks found";
    }
  } catch (error) {
    console.error("Error listing tasks:", error);
    return "Failed to list tasks";
  }
};

export const _updateTask = (id, description) => {
  try {
    id = parseInt(id);
    console.log(id, description)
    if (fs.existsSync("./tasks.json")) {
      let tasks = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));
      let index = tasks.findIndex((el) => el.id === id);
      if (index === -1) throw new Error("Task not found");
      tasks[index].description = description;
      fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 2));
      console.table(tasks[index]);
      return "Task updated successfully";
    } else {
      return "There are not tasks";
    }
  } catch (error) {
    console.error("Error updating tasks:", error);
    return "Failed to list tasks";
  }
};
export const _updateStatus = (id, status) => {
  try {
    id = parseInt(id);
    if (fs.existsSync("./tasks.json")) {
      let tasks = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));
      let index = tasks.findIndex((el) => el.id === id);
      if (index === -1) throw new Error("Task not found");
      tasks[index].status = status;
      fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 2));
      console.table(tasks[index]);
      return "Task updated successfully";
    } else {
      return "There are not tasks";
    }
  } catch (error) {
    console.error("Error updating tasks:", error);
    return "Failed to list tasks";
  }
};

export const _deleteTask = (id, status) => {
  try {
    id = parseInt(id);
    if (fs.existsSync("./tasks.json")) {
      let tasks = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));
      let index = tasks.findIndex((el) => el.id === id);
      if (index === -1) throw new Error("Task not found");
      tasks.splice(index,1)
      fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 2));
      return "Task deleted successfully";
    } else {
      return "There are not tasks";
    }
  } catch (error) {
    console.error("Error updating tasks:", error);
    return "Failed to list tasks";
  }
};



