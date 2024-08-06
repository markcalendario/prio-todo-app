import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllTasks from "./pages/AllTasks/AllTasks.jsx";
import FinishedTasks from "./pages/FinishedTasks/FinishedTasks.jsx";
import ImportantTasks from "./pages/ImportantTasks/ImportantTasks.jsx";
import MissingTasks from "./pages/MissingTasks/MissingTasks.jsx";
import PendingTasks from "./pages/PendingTasks/PendingTasks.jsx";
import "./styles/main.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/pending",
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
    },
    {
      path: "/",
      element: <AllTasks />
    }
  ]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Fragment>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </Fragment>
  );
}
