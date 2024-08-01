import IconButton from "../IconButton/IconButton.jsx";
import "./TaskCard.css";

export default function TaskCard({
  id,
  title,
  description,
  status,
  targetDate
}) {
  const renderStatusBasedOptions = () => {
    if (status === "pending") {
      return <IconButton icon="fas fa-check" />;
    }

    return <IconButton icon="fas fa-redo" />;
  };

  return (
    <div className="task-card" data-aos="fade-up" data-aos-delay="100">
      <div className="context">
        <h1 className={"title" + (status === "finished" ? ` strike` : "")}>
          {title}
        </h1>
        <p className="description">{description}</p>
        <p className="date">{targetDate}</p>
      </div>
      <div className="options">
        <IconButton icon="fas fa-pen-to-square" />
        {renderStatusBasedOptions()}
        <IconButton icon="fas fa-times" onClick={handleDeleteTask} />
      </div>
    </div>
  );
}
