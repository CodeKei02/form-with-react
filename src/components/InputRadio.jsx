export const InputRadio = ({
  id,
  label,
  name,
  value,
  checked,
  onChange
}) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label forhtml={id} className="form-label">
        {label}
      </label>
    </>
  );
};
