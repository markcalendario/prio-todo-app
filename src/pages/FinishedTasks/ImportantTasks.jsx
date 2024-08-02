import EmptySection from "@/components/EmptySection/EmptySection.jsx";
import TaskCard from "@/components/TaskCard/TaskCard.jsx";
import Content from "@/layouts/Dashboard/Content/Content.jsx";
import Dashboard from "@/layouts/Dashboard/Dashboard.jsx";
import Main from "@/layouts/Dashboard/Main/Main.jsx";
import Tasks from "@/services/tasks.js";
import { useCallback, useEffect, useState } from "react";

export default function FinishedTasks() {
  const [finishedTasks, setFinishedTasks] = useState([]);

  const fetchFinishedTasks = useCallback(() => {
    const tasks = new Tasks();
    const finished = tasks.getFinishedTasks();

    setFinishedTasks(finished);
  }, []);

  const renderFinishedTasks = () => {
    if (!finishedTasks.length) {
      return (
        <EmptySection title="Wohoo!" description="Take some time to rest." />
      );
    }

    return finishedTasks.map((task) => (
      <TaskCard
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        targetDate={task.targetDate}
        onDeleteSuccess={fetchFinishedTasks}
        onFinishSuccess={fetchFinishedTasks}
        onSetToFinishedSuccess={fetchFinishedTasks}
      />
    ));
  };

  useEffect(() => {
    fetchFinishedTasks();
  }, [fetchFinishedTasks]);

  return (
    <Dashboard>
      <Main>
        <Content
          title="Finished Tasks"
          description="List of tasks you finished.">
          {renderFinishedTasks()}
        </Content>
      </Main>
    </Dashboard>
  );
}
