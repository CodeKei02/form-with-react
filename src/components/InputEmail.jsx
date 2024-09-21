export const InputEmail = ({id, name, value, onChange, label}) => {
  return (
    <div className="form__input">
      <label htmlFor={id} className="form-label">{label}</label>
          <input 
            type="email" 
            className="input"
            name={name}
            value={value}
            onChange={onChange}
            />
    </div>
  )
}
