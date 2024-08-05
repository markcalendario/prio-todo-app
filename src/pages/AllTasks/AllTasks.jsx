import ControlBar from "@/components/ControlBar/ControlBar.jsx";
import EmptySection from "@/components/EmptySection/EmptySection.jsx";
import TaskCard from "@/components/TaskCard/TaskCard.jsx";
import Content from "@/layouts/Dashboard/Content/Content.jsx";
import Dashboard from "@/layouts/Dashboard/Dashboard.jsx";
import Main from "@/layouts/Dashboard/Main/Main.jsx";
import Tasks from "@/services/tasks.js";
import { useCallback, useEffect, useState } from "react";
import "./AllTasks.css";

export default function AllTasks() {
  const [allTasks, setAllTasks] = useState([]);

  const fetchAllTasks = useCallback(() => {
    const tasks = new Tasks();
    const all = tasks.getAllTasks();

    setAllTasks(all);
  }, []);

  const renderAllTasks = () => {
    if (!allTasks.length) {
      return (
        <EmptySection title="Wohoo!" description="Take some time to rest." />
      );
    }

    return allTasks.map((task) => (
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        targetDate={task.targetDate}
        createdTimestamp={task.createdTimestamp}
        isImportant={task.isImportant}
        onEditSuccess={fetchAllTasks}
        onSetToPendingSuccess={fetchAllTasks}
        onDeleteSuccess={fetchAllTasks}
        onFinishSuccess={fetchAllTasks}
      />
    ));
  };

  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);

  return (
    <Dashboard>
      <Main>
        <Content
          title="All Tasks"
          description="List of all your tasks."
          className="all-task">
          <ControlBar onSuccess={fetchAllTasks} />
          <div className="tasks-list">{renderAllTasks()}</div>
        </Content>
      </Main>
    </Dashboard>
  );
}
