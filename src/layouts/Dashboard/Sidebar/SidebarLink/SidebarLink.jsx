import "./SidebarLink.css";

export default function SidebarLink({ href, icon, text }) {
  return (
    <a href={href} className="link">
      <i className={"icon fa-fw" + (icon ? ` ${icon}` : "")} />
      <span className="text">{text}</span>
    </a>
  );
}
