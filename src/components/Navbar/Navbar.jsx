import { useState } from "react";
import Button from "../Button/Button.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsDrawerVisible((prev) => !prev);
  };

  return (
    <nav className="nav">
      <div className="fluid-container">
        <div className="wrapper">
          <div className="brand">
            <h1 className="logo">Prio</h1>
          </div>
          <div className={"links" + (isDrawerVisible ? " open" : "")}>
            <a href="https://markkennethcalendario.web.app/" target="_balnk">
              Portfolio
            </a>
            <a href="https://github.com/markcalendario" target="_blank">
              GitHub
            </a>
          </div>
          <Button className="hamburger" onClick={handleHamburgerClick}>
            <i className="fas fa-bars" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
