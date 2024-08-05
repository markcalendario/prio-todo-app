import ControlBar from "@/components/ControlBar/ControlBar.jsx";
import EmptySection from "@/components/EmptySection/EmptySection.jsx";
import TaskCard from "@/components/TaskCard/TaskCard.jsx";
import Content from "@/layouts/Dashboard/Content/Content.jsx";
import Dashboard from "@/layouts/Dashboard/Dashboard.jsx";
import Main from "@/layouts/Dashboard/Main/Main.jsx";
import Tasks from "@/services/tasks.js";
import { useCallback, useEffect, useState } from "react";
import "./PendingTasks.css";

export default function PendingTasks() {
  const [pendingTasks, setPendingTasks] = useState([]);

  const fetchPendingTasks = useCallback(() => {
    const tasks = new Tasks();
    const pending = tasks.getPendingTasks();

    setPendingTasks(pending);
  }, []);

  const renderPendingTasks = () => {
    if (!pendingTasks.length) {
      return (
        <EmptySection title="Wohoo!" description="Take some time to rest." />
      );
    }

    return pendingTasks.map((task) => (
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        targetDate={task.targetDate}
        createdTimestamp={task.createdTimestamp}
        isImportant={task.isImportant}
        onEditSuccess={fetchPendingTasks}
        onSetToPendingSuccess={fetchPendingTasks}
        onDeleteSuccess={fetchPendingTasks}
        onFinishSuccess={fetchPendingTasks}
      />
    ));
  };

  useEffect(() => {
    fetchPendingTasks();
  }, [fetchPendingTasks]);

  return (
    <Dashboard>
      <Main>
        <Content
          title="Pending Tasks"
          description="List of tasks you need to finish."
          className="pending-task">
          <ControlBar onSuccess={fetchPendingTasks} />
          <div className="tasks-list">{renderPendingTasks()}</div>
        </Content>
      </Main>
    </Dashboard>
  );
}
