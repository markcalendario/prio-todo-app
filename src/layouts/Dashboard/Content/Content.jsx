import "./Content.css";

export default function Content({ title, description, children, className }) {
  return (
    <div className="dashboard-content">
      <div className="dashboard-content-head">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={"body" + (className ? ` ${className}` : "")}>
        {children}
      </div>
    </div>
  );
}
