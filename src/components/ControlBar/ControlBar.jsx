import useModal from "@/hooks/useModal.jsx";
import Tasks from "@/services/tasks.js";
import { Fragment } from "react";
import Button from "../Button/Button.jsx";
import AddTaskModal from "../Modal/Collections/AddTaskModal/AddTaskModal.jsx";
import DeleteAllTaskModal from "../Modal/Collections/DeleteAllTaskModal/DeleteAllTaskModal.jsx";
import "./ControlBar.css";

export default function ControlBar({ onSuccess }) {
  const [isAddTaskModalOpen, toggleAddTaskModalOpen] = useModal(false);
  const [isDeleteAllTasksModalOpen, toggleDeleteAllTasksModalOpen] =
    useModal(false);

  const handleMarkAllTaskDone = () => {
    const tasks = new Tasks();
    tasks.setAllTasksToDone();
    onSuccess();
  };

  const handleMarkAllTaskUndone = () => {
    const tasks = new Tasks();
    tasks.setAllTasksToUndone();
    onSuccess();
  };

  return (
    <Fragment>
      <AddTaskModal
        isVisible={isAddTaskModalOpen}
        toggleModal={toggleAddTaskModalOpen}
        onSuccess={onSuccess}
      />

      <DeleteAllTaskModal
        isVisible={isDeleteAllTasksModalOpen}
        toggleModal={toggleDeleteAllTasksModalOpen}
        onSuccess={onSuccess}
      />

      <div className="control-bar">
        <div className="left">
          <Button onClick={toggleAddTaskModalOpen} className="add-task-btn">
            <i className="fas fa-plus" /> Add Task
          </Button>
        </div>
        <div className="right">
          <Button onClick={handleMarkAllTaskDone} className="add-task-btn">
            <i className="fas fa-check-double fa-fw" />
          </Button>
          <Button onClick={handleMarkAllTaskUndone} className="add-task-btn">
            <i className="fas fa-redo fa-fw" />
          </Button>
          <Button
            onClick={toggleDeleteAllTasksModalOpen}
            className="add-task-btn">
            <i className="fas fa-trash fa-fw" />
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
