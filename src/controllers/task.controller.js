import {
  _createTask,
  _listTasks,
  _getTaskbyId,
  _getTaskbyStatus,
  _updateTask,
  _updateStatus,
  _deleteTask
} from "../service/task.service.js";
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

export const updateTask = (req) => {
  try {
    const { id, description } = req;
    return _updateTask(id, description);
  } catch (error) {
    console.error("Error getting task by status:", error);
  }
};

export const updateStatus = (req) => {
  try {
    const { id, status } = req;
    return _updateStatus(id, status)
  } catch (error) {
    console.error("Error updating status: ", error);
  }
};

export const deleteTask = (id) => {
  try {
    return _deleteTask(id)
  } catch (error) {
    console.error("Error updating status: ", error);
  }
};
