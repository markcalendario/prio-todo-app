import useModal from "@/hooks/useModal.jsx";
import { Fragment } from "react";
import Button from "../Button/Button.jsx";
import AddTaskModal from "../Modal/Collections/AddTaskModal/AddTaskModal.jsx";
import "./AddTaskBar.css";

export default function AddTaskBar({ onSuccess }) {
  const [isAddTaskModalOpen, toggleAddTaskModal] = useModal(false);

  return (
    <Fragment>
      <AddTaskModal
        isVisible={isAddTaskModalOpen}
        toggleModal={toggleAddTaskModal}
        onSuccess={onSuccess}
      />
      <div className="add-task-bar">
        <Button onClick={toggleAddTaskModal} className="add-task-btn">
          <i className="fas fa-plus" /> Add Task
        </Button>
      </div>
    </Fragment>
  );
}
