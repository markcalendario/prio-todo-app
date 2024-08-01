import IconButton from "../IconButton/IconButton.jsx";
import "./TaskCard.css";

export default function TaskCard({
  id,
  title,
  description,
  absoluteTimestamp
}) {
  return (
    <div className="task-card" data-aos="fade-up" data-aos-delay="100">
      <div className="context">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="date">{absoluteTimestamp}</p>
      </div>
      <div className="options">
        <IconButton icon="fas fa-check" />
        <IconButton icon="fas fa-pen-to-square" />
        <IconButton icon="fas fa-times" />
      </div>
    </div>
  );
}
