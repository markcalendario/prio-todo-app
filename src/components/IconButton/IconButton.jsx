import "./IconButton.css";

export default function IconButton({ icon, onClick, tooltip }) {
  return (
    <button className="icon-button" onClick={onClick} title={tooltip}>
      <i className={icon + " fa-fw"} />
    </button>
  );
}
