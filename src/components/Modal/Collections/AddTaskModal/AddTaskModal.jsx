import Button from "@/components/Button/Button.jsx";
import Input from "@/components/Input/Input.jsx";
import Modal from "../../Modal.jsx";
import "./AddTaskModal.css";

export default function AddTaskModal({ isVisible, toggleModal }) {
  if (!isVisible) return;

  return (
    <Modal
      className="add-task-modal"
      title="Add New Task"
      description="Create new task in your to-do list."
      toggleModal={toggleModal}>
      <Input id="title" name="title" placeholder="Title" />
      <Input id="description" name="description" placeholder="Description" />
      <Input id="target" name="target" type="date" placeholder="Target Date" />
      <div className="buttons">
        <Button className="create-btn">Create</Button>
        <Button className="create-as-important-btn">
          <i className="fas fa-star"></i> Create as Important
        </Button>
      </div>
    </Modal>
  );
}
