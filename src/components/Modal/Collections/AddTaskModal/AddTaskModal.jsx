import Button from "@/components/Button/Button.jsx";
import Input from "@/components/Input/Input.jsx";
import useTasks from "@/hooks/useTasks.jsx";
import { useState } from "react";
import Modal from "../../Modal.jsx";
import "./AddTaskModal.css";

export default function AddTaskModal({ isVisible, toggleModal }) {
  if (!isVisible) return;

  const [_, createTask] = useTasks();
  const [newTaskData, setNewTaskData] = useState({
    title: "",
    description: "",
    target: ""
  });

  const handleCreateTask = () => {
    const { title, description, target } = newTaskData;
    createTask(title, description, target);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setNewTaskData((prev) => {
      const updated = { ...prev, [name]: value };
      return updated;
    });
  };

  return (
    <Modal
      className="add-task-modal"
      title="Add New Task"
      description="Create new task in your to-do list."
      toggleModal={toggleModal}>
      <Input
        id="title"
        name="title"
        placeholder="Title"
        onChange={handleInputChange}
        value={newTaskData.title}
      />
      <Input
        id="description"
        name="description"
        placeholder="Description"
        onChange={handleInputChange}
        value={newTaskData.description}
      />
      <Input
        id="target"
        name="target"
        type="date"
        placeholder="Target Date"
        onChange={handleInputChange}
        value={newTaskData.target}
      />
      <div className="buttons">
        <Button className="create-btn" onClick={handleCreateTask}>
          Create
        </Button>
        <Button className="create-as-important-btn">
          <i className="fas fa-star"></i> Create as Important
        </Button>
      </div>
    </Modal>
  );
}
