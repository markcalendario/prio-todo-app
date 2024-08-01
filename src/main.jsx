import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import TodoPage from "./pages/Todo/Todo.jsx";
import "./styles/main.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <TodoPage />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
