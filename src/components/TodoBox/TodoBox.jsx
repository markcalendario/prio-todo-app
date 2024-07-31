import TaskCard from "../TaskCard/TaskCard.jsx";
import "./TodoBox.css";

export default function TodoBox() {
  return (
    <div className="todo-box">
      <aside className="todo-sidebar">
        <button className="active">Tasks</button>
        <button>Important</button>
        <button>Finished</button>
        <button>Missing</button>
      </aside>
      <div className="todo-tasks">
        {/* <EmptySection title="All tasks complete." description="Nice work!" /> */}
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="7 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="25 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="7 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="25 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="7 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="25 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="7 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="25 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="7 days ago"
        />
        <TaskCard
          title="Grocery"
          description="Buy 700 garlic and 500 tomatoes."
          absoluteTimestamp="25 days ago"
        />
      </div>
    </div>
  );
}
