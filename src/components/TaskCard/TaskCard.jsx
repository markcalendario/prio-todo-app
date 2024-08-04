import useModal from "@/hooks/useModal.jsx";
import Tasks from "@/services/tasks.js";
import { getRelativeDate, getRelativeDateTimeFromUnix } from "@/utils/date.js";
import { Fragment } from "react";
import IconButton from "../IconButton/IconButton.jsx";
import DeleteTaskModal from "../Modal/Collections/DeleteTaskModal/DeleteTaskModal.jsx";
import EditTaskModal from "../Modal/Collections/EditTaskModal/EditTaskModal.jsx";
import "./TaskCard.css";

export default function TaskCard({
  id,
  title,
  description,
  status,
  targetDate,
  createdTimestamp,
  isImportant,
  onDeleteSuccess,
  onFinishSuccess,
  onSetToPendingSuccess
}) {
  const [isDelTaskVisible, toggleIsDelTaskVisible] = useModal(false);
  const [isEditTaskVisible, toggleIsEditTaskVisible] = useModal(false);

  const renderStatusBasedOptions = () => {
    if (status === "pending") {
      return <IconButton icon="fas fa-check" onClick={handleSetTaskDone} />;
    }

    return <IconButton icon="fas fa-redo" onClick={handleSetTaskPending} />;
  };

  const handleSetTaskDone = () => {
    const tasks = new Tasks();
    tasks.setTaskFinish(id);
    onFinishSuccess();
  };

  const handleSetTaskPending = () => {
    const tasks = new Tasks();
    tasks.setTaskPending(id);
    onSetToPendingSuccess();
  };

  return (
    <Fragment>
      <DeleteTaskModal
        taskId={id}
        isVisible={isDelTaskVisible}
        toggleModal={toggleIsDelTaskVisible}
        onSuccess={onDeleteSuccess}
      />

      <EditTaskModal
        isVisible={isEditTaskVisible}
        toggleModal={toggleIsEditTaskVisible}
        onSuccess={onDeleteSuccess}
        taskData={{
          id: id,
          title: title,
          description: description,
          targetDate: targetDate,
          isImportant: isImportant
        }}
      />

      <div className="task-card" data-aos="fade-up" data-aos-delay="100">
        <div className="top">
          {isImportant && (
            <p className="tab important">
              <i className="fas fa-fire fa-fw" /> Important
            </p>
          )}
          <p className="tab target-date">{getRelativeDate(targetDate)}</p>
        </div>

        <div className="context">
          <h1 className={"title" + (status === "finished" ? ` strike` : "")}>
            {title}
          </h1>
          <p className="description">{description}</p>
        </div>

        <div className="bottom">
          <p className="creation-date">
            {getRelativeDateTimeFromUnix(createdTimestamp)}
          </p>
        </div>

        <div className="options">
          <IconButton
            icon="fas fa-pen-to-square"
            onClick={toggleIsEditTaskVisible}
          />
          {renderStatusBasedOptions()}
          <IconButton icon="fas fa-times" onClick={toggleIsDelTaskVisible} />
        </div>
      </div>
    </Fragment>
  );
}
