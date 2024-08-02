import "./SidebarLink.css";

export default function SidebarLink({ href, icon, text, target }) {
  return (
    <a href={href} className="link" target={target}>
      <i className={"icon fa-fw" + (icon ? ` ${icon}` : "")} />
      <span className="text">{text}</span>
    </a>
  );
}
