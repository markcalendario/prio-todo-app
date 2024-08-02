import "./Dashboard.css";
import Navbar from "./Navbar/Navbar.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

export default function Dashboard({ children }) {
  return (
    <section className="dashboard">
      <Navbar />
      <Sidebar />
      {children}
    </section>
  );
}
