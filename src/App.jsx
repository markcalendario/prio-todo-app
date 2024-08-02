import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FinishedTasks from "./pages/FinishedTasks/ImportantTasks.jsx";
import ImportantTasks from "./pages/ImportantTasks/ImportantTasks.jsx";
import MissingTasks from "./pages/MissingTasks/MissingTasks.jsx";
import PendingTasks from "./pages/PendingTasks/PendingTasks.jsx";
import "./styles/main.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PendingTasks />
    },
    {
      path: "/important",
      element: <ImportantTasks />
    },
    {
      path: "/finished",
      element: <FinishedTasks />
    },
    {
      path: "/missing",
      element: <MissingTasks />
    }
  ]);

  useEffect(() => {
    Aos.init();
  }, []);

  return <RouterProvider router={router} />;
}
