import Button from "@/components/Button/Button.jsx";
import Tasks from "@/services/tasks.js";
import Modal from "../../Modal.jsx";
import "./DeleteTaskModal.css";

export default function DeleteTaskModal({
  isVisible,
  toggleModal,
  taskId,
  onSuccess
}) {
  if (!isVisible) return;

  const handleDeleteTask = () => {
    const task = new Tasks();
    task.deleteTask(taskId);
    onSuccess();
    toggleModal();
  };

  return (
    <Modal
      className="delete-task-modal"
      title="Delete this task?"
      description="Do you really want to delete this task?"
      toggleModal={toggleModal}>
      <div className="buttons">
        <Button className="delete-btn" onClick={handleDeleteTask}>
          Delete Task
        </Button>
        <Button className="cancel-btn" onClick={toggleModal}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
