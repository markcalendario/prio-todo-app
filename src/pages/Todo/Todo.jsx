import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.jsx";
import Button from "@/components/Button/Button.jsx";
import EmptySection from "@/components/EmptySection/EmptySection.jsx";
import AddTaskModal from "@/components/Modal/Collections/AddTaskModal/AddTaskModal.jsx";
import Navbar from "@/components/Navbar/Navbar.jsx";
import TaskCard from "@/components/TaskCard/TaskCard.jsx";
import useModal from "@/hooks/useModal.jsx";
import Tasks from "@/services/tasks.js";
import { Fragment, useCallback, useEffect, useState } from "react";
import "./Todo.css";

function TodoPage() {
  return (
    <Fragment>
      <Navbar />
      <Todo />
    </Fragment>
  );
}

function Todo() {
  const [taskType, setTaskType] = useState("pending");
  const [tasks, setTasks] = useState(null);

  const fetchTasks = useCallback(() => {
    const task = new Tasks();

    switch (taskType) {
      case "pending":
        setTasks(task.getPendingTasks());
        break;
      case "important":
        setTasks(task.getImportantTasks());
        break;
      case "finished":
        setTasks(task.getFinishedTasks());
        break;
      case "missing":
        setTasks(task.getMissingTasks());
        break;
    }
  }, [taskType]);

  const handleTaskTypeChange = (value) => {
    setTaskType(value);
    fetchTasks();
  };

  const taskTabs = [
    { name: "Pending", value: "pending" },
    { name: "Important", value: "important" },
    { name: "Finished", value: "finished" },
    { name: "Missing", value: "missing" }
  ];

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (!tasks) return;

  return (
    <Fragment>
      <section id="todo">
        <div className="container">
          <div className="wrapper">
            <Header fetchTasks={fetchTasks} />
            <BreadCrumb
              initialActive={taskTabs[0].name}
              data={taskTabs}
              handleSelect={handleTaskTypeChange}
            />
            <RenderTasks tasks={tasks} fetchTasks={fetchTasks} />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

function Header({ fetchTasks }) {
  const [isVisible, toggleAddTaskModal] = useModal(false);

  return (
    <Fragment>
      <AddTaskModal
        isVisible={isVisible}
        toggleModal={toggleAddTaskModal}
        onSuccess={fetchTasks}
      />
      <div className="header">
        <h1>🕐 Your To-do List</h1>
        <p>List of tasks you need to complete.</p>
        <Button className="add-task-btn" onClick={toggleAddTaskModal}>
          <i className="fas fa-plus" /> Add Task
        </Button>
      </div>
    </Fragment>
  );
}

function RenderTasks({ tasks, fetchTasks }) {
  const renderTasks = () => {
    return tasks.map((task) => (
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        targetDate={task.targetDate}
        onDeleteSuccess={fetchTasks}
        onFinishSuccess={fetchTasks}
      />
    ));
  };

  if (!tasks.length) {
    return (
      <EmptySection title="Hooray!" description="Take some time to rest." />
    );
  }

  return <div className="tasks">{renderTasks()}</div>;
}

export default TodoPage;
