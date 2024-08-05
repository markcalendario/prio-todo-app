import IconButton from "@/components/IconButton/IconButton.jsx";
import "./Navbar.css";

export default function Navbar({ toggleSidebarVisibility }) {
  return (
    <nav className="navbar">
      <div className="fluid-container">
        <div className="hamburger">
          <IconButton
            icon="fas fa-bars fa-fw"
            onClick={toggleSidebarVisibility}
          />
        </div>
        <div className="brand">
          <h1>LexMeet</h1>
        </div>
      </div>
    </nav>
  );
}
