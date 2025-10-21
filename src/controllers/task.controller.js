import { _createTask, _listTasks, _getTaskbyId, _getTaskbyStatus } from "../service/task.service.js";
export const createTask = (req) => {
  try {
    const { title, description } = req;
    return _createTask(title, description);
  } catch (error) {
    console.error("Error creating task:", error);
  }
};
export const listTasks = () => {
  try {
    return _listTasks();
  } catch (error) {
    console.error("Error listing tasks:", error);
  }
};
export const getTaskbyId = (id) => {
  try {
    return _getTaskbyId(id);
  } catch (error) {
    console.error("Error getting task by ID:", error);
  }
};

export const getTaskbyStatus = (status) => {
  try {
    return _getTaskbyStatus(status);
  } catch (error) {
    console.error("Error getting task by status:", error);
  }
};