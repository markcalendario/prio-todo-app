import TodoBox from "@/components/TodoBox/TodoBox.jsx";
import "./Todo.css";

function TodoPage() {
  return (
    <section id="todo">
      <div className="container">
        <div className="wrapper">
          <Header />
          <TodoBox />
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>🕐 Your To-do List</h1>
      <p>List of tasks you need to complete.</p>
    </div>
  );
}

export default TodoPage;
