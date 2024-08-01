import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(() => {
    const tasksFromStorage = localStorage.getItem("tasks");
    if (tasksFromStorage) {
      setTasks(JSON.parse(tasksFromStorage));
    }
  }, []);

  const createTask = useCallback(
    (title, description, targetDate) => {
      if (!title) {
        alert("Title is required.");
        return;
      }

      if (!description) {
        alert("Description is required.");
        return;
      }

      if (!targetDate) {
        alert("Target date is required.");
        return;
      }

      const newTask = {
        id: uuidv4(),
        title,
        description,
        targetDate,
        isImportant: false
      };

      const updatedTasks = [...tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    },
    [tasks]
  );

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return [tasks, createTask];
}
