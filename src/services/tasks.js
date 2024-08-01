import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export default class Tasks {
  tasks = [];

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  getPendingTasks() {
    return this.tasks.filter((task) => task.status === "pending");
  }

  getImportantTasks() {
    return this.tasks.filter((task) => task.isImportant === true);
  }

  getFinishedTasks() {
    return this.tasks.filter((task) => task.status === "finished");
  }

  getMissingTasks() {
    return this.tasks.filter((task) => {
      const targetDate = dayjs(task.targetDate, "YYYY-MM-DD");
      const isMissing = dayjs().isAfter(targetDate);
      const isPending = task.status === "pending";
      return isMissing && isPending;
    });
  }

  createPendingTask(title, description, targetDate) {
    if (!title || !description || !targetDate) {
      alert("All fields are required.");
      return false;
    }

    const newTask = {
      id: uuidv4(),
      creationTimestamp: dayjs().format("YYYY-MM-DD"),
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
}
