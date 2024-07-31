import React from "react";
import ReactDOM from "react-dom/client";
import TodoPage from "./pages/Todo/Todo.jsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoPage />
  </React.StrictMode>
);
