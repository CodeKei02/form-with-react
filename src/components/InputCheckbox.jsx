export const InputCheckbox = ({id, name, value, onChange, label}) => {
  return (
    <>
      <input 
        id={id}
        type="checkbox"
        className="checkbox"
        name={name}
        value={value}
        onChange={onChange}
     />
    <label htmlFor={id}>{label}</label>
    </>
  )
}
