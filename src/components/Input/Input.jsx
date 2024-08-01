import "./Input.css";

export default function Input({
  id,
  name,
  value,
  type,
  onChange,
  defaultValue,
  placeholder
}) {
  return (
    <div className="input">
      {placeholder && <p className="placeholder">{placeholder}</p>}
      <input
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}
