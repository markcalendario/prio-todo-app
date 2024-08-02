import IconButton from "@/components/IconButton/IconButton.jsx";
import "./Navbar.css";

export default function Navbar({ toggleSidebarVisibility }) {
  return (
    <nav className="navbar">
      <div className="fluid-container">
        <div className="brand">
          <h1>Prio.</h1>
        </div>
        <div className="hamburger">
          <IconButton icon="fas fa-bars" onClick={toggleSidebarVisibility} />
        </div>
      </div>
    </nav>
  );
}
