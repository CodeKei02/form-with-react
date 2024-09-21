export const Textarea = ({id, name, value, onChange, label}) => {
  return (
    <>
      <label id={id} className="form-label">{label}</label>
      <textarea
        id={id}
        className="form-message"
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
