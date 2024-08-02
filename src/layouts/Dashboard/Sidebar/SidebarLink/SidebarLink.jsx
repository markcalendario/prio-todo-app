import { useLocation } from "react-router-dom";
import "./SidebarLink.css";

export default function SidebarLink({ href, icon, text, target }) {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={"link" + (isActive ? " active" : "")}
      target={target}>
      <i className={"icon fa-fw" + (icon ? ` ${icon}` : "")} />
      <span className="text">{text}</span>
    </a>
  );
}
