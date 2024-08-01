import IconButton from "../IconButton/IconButton.jsx";
import "./Modal.css";

export default function Modal({
  className,
  title,
  description,
  children,
  toggleModal
}) {
  return (
    <div className="modal-backdrop">
      <div
        className={"modal-box" + (className ? ` ${className}` : "")}
        data-aos="fade-up">
        <div className="head">
          <div className="texts">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="close">
            <IconButton icon="fas fa-times" onClick={toggleModal} />
          </div>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
}
