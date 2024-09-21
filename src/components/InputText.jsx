export const InputText = ({ id, name, value, onChange, label }) => {
  return (
    <>
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="input input-name"
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
