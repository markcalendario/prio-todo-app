import "./Main.css";

export default function Main({ children }) {
  return (
    <div className="main">
      <div className="container">
        <div className="wrapper">{children}</div>
      </div>
    </div>
  );
}
