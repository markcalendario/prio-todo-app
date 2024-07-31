import { useState } from "react";
import "./BreadCrumb.css";

export default function BreadCrumb({ initialActive, data, handleSelect }) {
  const [activeCrumb, setActiveCrumb] = useState(initialActive);

  const handleCrumbSelect = (name, value) => {
    setActiveCrumb(name);
    handleSelect(value);
  };

  const renderCrumbs = () => {
    return data.map(({ name, value }) => (
      <button
        key={name}
        name={name}
        onClick={() => handleCrumbSelect(name, value)}
        className={activeCrumb === name ? "active" : ""}>
        {name}
      </button>
    ));
  };

  return <div className="bread-crumb">{renderCrumbs()}</div>;
}
