import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard.jsx";
import "./TodoBox.css";

export default function TodoBox() {
  const [activeTab, setActiveTab] = useState("pending");

  const handleTaskTypeClick = (evt) => {
    setActiveTab(evt.target.name);
  };

  const renderTaskTypeTabs = () => {
    const tabs = ["pending", "important", "finished", "missing"];

    return tabs.map((tab) => (
      <button
        key={tab}
        name={tab}
        className={activeTab === tab ? "active" : ""}
        onClick={handleTaskTypeClick}>
        {tab}
      </button>
    ));
  };

  return (
    <div className="todo-box">
      <aside className="todo-sidebar">{renderTaskTypeTabs()}</aside>
      <div className="todo-tasks">
        {/* <EmptySection title="All tasks complete." description="Nice work!" /> */}
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="7 days ago"
        />
      </div>
    </div>
  );
}
