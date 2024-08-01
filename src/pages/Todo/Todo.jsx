import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.jsx";
import Button from "@/components/Button/Button.jsx";
import AddTaskModal from "@/components/Modal/Collections/AddTaskModal/AddTaskModal.jsx";
import Navbar from "@/components/Navbar/Navbar.jsx";
import TaskCard from "@/components/TaskCard/TaskCard.jsx";
import { Fragment } from "react";
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
  const taskTabs = [
    { name: "Pending", value: "pending" },
    { name: "Important", value: "important" },
    { name: "Finished", value: "finished" },
    { name: "Missing", value: "missing" }
  ];

  return (
    <Fragment>
      <AddTaskModal />
      <section id="todo">
        <div className="container">
          <div className="wrapper">
            <Header />
            <BreadCrumb
              initialActive={taskTabs[0].name}
              data={taskTabs}
              handleSelect={() => {}}
            />
            <Tasks />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>🕐 Your To-do List</h1>
      <p>List of tasks you need to complete.</p>
      <Button className="add-task-btn">
        <i className="fas fa-plus" /> Add Task
      </Button>
    </div>
  );
}

function Tasks() {
  return (
    <div className="tasks">
      <TaskCard
        title="Do assignments"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam, est reiciendis."
        absoluteTimestamp="An hour ago."
      />
      <TaskCard
        title="Do assignments"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam, est reiciendis."
        absoluteTimestamp="An hour ago."
      />
      <TaskCard
        title="Do assignments"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam, est reiciendis."
        absoluteTimestamp="An hour ago."
      />
    </div>
  );
}

export default TodoPage;
