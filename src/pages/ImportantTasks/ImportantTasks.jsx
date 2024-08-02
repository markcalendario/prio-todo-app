import EmptySection from "@/components/EmptySection/EmptySection.jsx";
import TaskCard from "@/components/TaskCard/TaskCard.jsx";
import Content from "@/layouts/Dashboard/Content/Content.jsx";
import Dashboard from "@/layouts/Dashboard/Dashboard.jsx";
import Main from "@/layouts/Dashboard/Main/Main.jsx";
import Tasks from "@/services/tasks.js";
import { useCallback, useEffect, useState } from "react";

export default function ImportantTasks() {
  const [importantTasks, setImportantTasks] = useState([]);

  const fetchImportantTasks = useCallback(() => {
    const tasks = new Tasks();
    const important = tasks.getImportantTasks();

    setImportantTasks(important);
  }, []);

  const renderImportantTasks = () => {
    if (!importantTasks.length) {
      return (
        <EmptySection title="Wohoo!" description="Take some time to rest." />
      );
    }

    return importantTasks.map((task) => (
      <TaskCard
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        targetDate={task.targetDate}
        onDeleteSuccess={fetchImportantTasks}
        onFinishSuccess={fetchImportantTasks}
        onSetToImportantSuccess={fetchImportantTasks}
      />
    ));
  };

  useEffect(() => {
    fetchImportantTasks();
  }, [fetchImportantTasks]);

  return (
    <Dashboard>
      <Main>
        <Content
          title="Important Tasks"
          description="List of important tasks you need to accomplish.">
          {renderImportantTasks()}
        </Content>
      </Main>
    </Dashboard>
  );
}
