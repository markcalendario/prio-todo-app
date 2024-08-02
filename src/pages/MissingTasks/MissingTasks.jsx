import EmptySection from "@/components/EmptySection/EmptySection.jsx";
import TaskCard from "@/components/TaskCard/TaskCard.jsx";
import Content from "@/layouts/Dashboard/Content/Content.jsx";
import Dashboard from "@/layouts/Dashboard/Dashboard.jsx";
import Main from "@/layouts/Dashboard/Main/Main.jsx";
import Tasks from "@/services/tasks.js";
import { useCallback, useEffect, useState } from "react";
import "./MissingTasks.css";

export default function MissingTasks() {
  const [missingTasks, setMissingTasks] = useState([]);

  const fetchMissingTasks = useCallback(() => {
    const tasks = new Tasks();
    const missing = tasks.getMissingTasks();

    setMissingTasks(missing);
  }, []);

  const renderMissingTasks = () => {
    if (!missingTasks.length) {
      return (
        <EmptySection title="Great!" description="You have no missing tasks." />
      );
    }

    return missingTasks.map((task) => (
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        targetDate={task.targetDate}
        createdTimestamp={task.createdTimestamp}
        isImportant={task.isImportant}
        onEditSuccess={fetchMissingTasks}
        onSetToPendingSuccess={fetchMissingTasks}
        onDeleteSuccess={fetchMissingTasks}
        onFinishSuccess={fetchMissingTasks}
      />
    ));
  };

  useEffect(() => {
    fetchMissingTasks();
  }, [fetchMissingTasks]);

  return (
    <Dashboard>
      <Main>
        <Content
          title="Missing Tasks"
          description="List of tasks you're missing.">
          <div className="tasks-list">{renderMissingTasks()}</div>
        </Content>
      </Main>
    </Dashboard>
  );
}
