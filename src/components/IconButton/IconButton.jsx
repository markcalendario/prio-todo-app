import "./IconButton.css";

export default function IconButton({ icon }) {
  return (
    <button className="icon-button">
      <i className={icon + " fa-fw"} />
    </button>
  );
}
