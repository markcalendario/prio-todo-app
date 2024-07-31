import "./EmptySection.css";

export default function EmptySection({ title, description }) {
  return (
    <div className="empty-section">
      <img src="/assets/illustrations/star.svg" alt="empty" />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
}
