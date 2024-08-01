import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.jsx";
import Button from "@/components/Button/Button.jsx";
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
  return (
    <section id="todo">
      <div className="container">
        <div className="wrapper">
          <Header />
          <Tasks />
        </div>
      </div>
    </section>
  );
}

function Header() {
  const taskTabs = [
    { name: "Pending", value: "pending" },
    { name: "Important", value: "important" },
    { name: "Finished", value: "finished" },
    { name: "Missing", value: "missing" }
  ];

  return (
    <div className="header">
      <h1>🕐 Your To-do List</h1>
      <p>List of tasks you need to complete.</p>
      <Button className="add-task-btn">
        <i className="fas fa-plus" /> Add Task
      </Button>
      <BreadCrumb
        initialActive={taskTabs[0].name}
        data={taskTabs}
        handleSelect={() => {}}
      />
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
