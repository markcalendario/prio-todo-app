import "./Sidebar.css";
import SidebarLink from "./SidebarLink/SidebarLink.jsx";

export default function Sidebar() {
  return (
    <aside id="dashboard-sidebar" className="sidebar">
      <p className="label">Tasks</p>
      <SidebarLink href="pending" icon="fas fa-clock" text="Pending" />
      <SidebarLink href="important" icon="fas fa-fire" text="Important" />
      <SidebarLink href="finished" icon="fas fa-check-circle" text="Finished" />
      <SidebarLink href="missing" icon="fas fa-warning" text="Missing" />

      <hr />

      <p className="label">Links</p>
      <SidebarLink
        href="https://markkennethcalendario.web.app"
        icon="fas fa-link"
        text="Portfolio"
      />
      <SidebarLink
        href="https://markkennethcalendario.web.app"
        icon="fab fa-github"
        text="GitHub"
      />
    </aside>
  );
}
