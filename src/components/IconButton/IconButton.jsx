import "./IconButton.css";

export default function IconButton({ icon, onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      <i className={icon + " fa-fw"} />
    </button>
  );
}
