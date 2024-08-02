import IconButton from "@/components/IconButton/IconButton.jsx";
import "./Navbar.css";

export default function Navbar() {
  const toggleSidebarVisibility = () => {
    const sidebar = document.getElementById("dashboard-sidebar");
    const isVisible = sidebar.style.display !== "none";

    if (isVisible) {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "flex";
    }
  };

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
