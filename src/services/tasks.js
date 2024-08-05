import { getCurrentDateAndTime, isDateInPast } from "@/utils/date.js";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export default class Tasks {
  tasks = [];

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  getPendingTasks() {
    return this.tasks.filter((task) => task.status === "pending");
  }

  getImportantTasks() {
    return this.tasks.filter(
      (task) => task.isImportant === true && task.status === "pending"
    );
  }

  getFinishedTasks() {
    return this.tasks.filter((task) => task.status === "finished");
  }

  getMissingTasks() {
    return this.tasks.filter((task) => {
      const targetDate = dayjs(task.targetDate, "YYYY-MM-DD");
      const isMissing = dayjs().isAfter(targetDate, "day");
      const isPending = task.status === "pending";
      return isMissing && isPending;
    });
  }

  createPendingTask(title, description, targetDate) {
    if (!title || !description || !targetDate) {
      alert("All fields are required.");
      return false;
    }

    if (isDateInPast(targetDate)) {
      alert("You cannot create task for past dates.");
      return false;
    }

    const newTask = {
      id: uuidv4(),
      createdTimestamp: getCurrentDateAndTime(),
      title: title,
      description: description,
      targetDate: targetDate,
      isImportant: false,
      status: "pending"
    };

    const updatedTasks = JSON.stringify([...this.tasks, newTask]);
    localStorage.setItem("tasks", updatedTasks);
    return true;
  }

  createImportantTask(title, description, targetDate) {
    if (!title || !description || !targetDate) {
      alert("All fields are required.");
      return false;
    }

    if (isDateInPast(targetDate)) {
      alert("You cannot create task for past dates.");
      return false;
    }

    const newTask = {
      id: uuidv4(),
      createdTimestamp: getCurrentDateAndTime(),
      title: title,
      description: description,
      targetDate: targetDate,
      isImportant: true,
      status: "pending"
    };

    const updatedTasks = JSON.stringify([...this.tasks, newTask]);
    localStorage.setItem("tasks", updatedTasks);
    return true;
  }

  setTaskFinish(taskId) {
    const updatedTasks = [...this.tasks];

    for (const task of updatedTasks) {
      if (task.id === taskId) {
        task.status = "finished";
      }
    }

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  setTaskPending(taskId) {
    const updatedTasks = [...this.tasks];

    for (const task of updatedTasks) {
      if (task.id === taskId) {
        task.status = "pending";
      }
    }

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  deleteTask(taskId) {
    const updatedTasks = this.tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  deleteAllTask() {
    localStorage.removeItem("tasks");
  }

  editTask(
    targetTaskId,
    newTitle,
    newDescription,
    newTargetDate,
    newIsImportant
  ) {
    // Validation
    if (
      !newTitle ||
      !newDescription ||
      !newTargetDate ||
      typeof newIsImportant !== "boolean"
    ) {
      alert("All fields are required.");
      return false;
    }

    // Past date validation
    if (isDateInPast(newTargetDate)) {
      alert("You cannot set this task for past dates.");
      return false;
    }

    // Task existence validation
    const taskIndex = this.tasks.findIndex((task) => task.id === targetTaskId);

    if (taskIndex === -1) {
      alert("Task not found.");
      return false;
    }

    // Updating
    const updatedTasks = [...this.tasks];

    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      title: newTitle,
      description: newDescription,
      targetDate: newTargetDate,
      isImportant: newIsImportant
    };

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    return true;
  }

  setAllTasksToDone() {
    const updatedTasks = [...this.tasks];

    for (const task of updatedTasks) {
      task.status = "finished";
    }

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  setAllTasksToUndone() {
    const updatedTasks = [...this.tasks];

    for (const task of updatedTasks) {
      task.status = "pending";
    }

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
}
