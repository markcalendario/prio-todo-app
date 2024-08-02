import Button from "@/components/Button/Button.jsx";
import Input from "@/components/Input/Input.jsx";
import Tasks from "@/services/tasks.js";
import { useState } from "react";
import Modal from "../../Modal.jsx";
import "./EditTaskModal.css";

export default function EditTaskModal({
  isVisible,
  toggleModal,
  onSuccess,
  taskData: initialTaskData
}) {
  if (!isVisible) return null;

  const [taskData, setTaskData] = useState({
    id: initialTaskData.id,
    title: initialTaskData.title,
    description: initialTaskData.description,
    targetDate: initialTaskData.targetDate,
    isImportant: initialTaskData.isImportant
  });

  const handleInputChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleUpdateTask = () => {
    const tasks = new Tasks();
    const isEdited = tasks.editTask(
      taskData.id,
      taskData.title,
      taskData.description,
      taskData.targetDate,
      taskData.isImportant
    );

    if (isEdited) {
      onSuccess();
      toggleModal();
    }
  };

  return (
    <Modal
      className="edit-task-modal"
      title="Edit Task"
      description="Update your task details."
      toggleModal={toggleModal}>
      <Input
        id="title"
        name="title"
        placeholder="Title"
        onChange={handleInputChange}
        value={taskData.title}
      />
      <Input
        id="description"
        name="description"
        placeholder="Description"
        onChange={handleInputChange}
        value={taskData.description}
      />
      <Input
        id="targetDate"
        name="targetDate"
        type="date"
        placeholder="Target Date"
        onChange={handleInputChange}
        value={taskData.targetDate}
      />
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            name="isImportant"
            checked={taskData.isImportant}
            onChange={handleInputChange}
          />{" "}
          Important
        </label>
      </div>
      <div className="buttons">
        <Button className="update-btn" onClick={handleUpdateTask}>
          Update
        </Button>
      </div>
    </Modal>
  );
}
