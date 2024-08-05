import Button from "@/components/Button/Button.jsx";
import Tasks from "@/services/tasks.js";
import Modal from "../../Modal.jsx";
import "./DeleteAllTaskModal.css";

export default function DeleteAllTaskModal({
  isVisible,
  toggleModal,
  taskId,
  onSuccess
}) {
  if (!isVisible) return;

  const handleDeleteAllTask = () => {
    const task = new Tasks();
    task.deleteAllTask(taskId);
    onSuccess();
    toggleModal();
  };

  return (
    <Modal
      className="delete-all-task-modal"
      title="Delete all tasks?"
      description="Do you really want to delete all task?"
      toggleModal={toggleModal}>
      <div className="buttons">
        <Button className="delete-btn" onClick={handleDeleteAllTask}>
          Delete All Task
        </Button>
        <Button className="cancel-btn" onClick={toggleModal}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
