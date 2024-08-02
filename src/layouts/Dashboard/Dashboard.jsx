import { useCallback, useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar/Navbar.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

export default function Dashboard({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const shouldSidebarShow = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    setIsSidebarVisible(isMobile ? false : true);
  }, []);

  const onResize = (evt) => {
    const isMobile = evt.target.innerWidth <= 768;
    setIsSidebarVisible(isMobile ? false : true);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    shouldSidebarShow();
  }, [shouldSidebarShow]);

  return (
    <section className="dashboard">
      <Navbar toggleSidebarVisibility={toggleSidebarVisibility} />
      {isSidebarVisible && <Sidebar />}
      {children}
    </section>
  );
}
