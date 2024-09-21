import React, { useState } from "react";
import { InputText } from "./components/InputText.jsx";
import { InputEmail } from "./components/InputEmail.jsx";
import { InputRadio } from "./components/InputRadio.jsx";
import { Textarea } from "./components/Textarea.jsx";
import { InputCheckbox } from "./components/InputCheckbox.jsx";

export const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    queryType: "",
    checkbox: false,
    message: "",
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(formData.name.trim().length < 2){
      newErrors.name = 'This field is required';
    } 
    if(formData.lastName.trim().length < 2){
      newErrors.lastName = 'This field is required';
    }
    if(!emailRegex.test(formData.email)){
      newErrors.email = 'Please enter a valid email address';
    }
    if(!formData.queryType === ""){
      newErrors.queryType = 'Please select a query type';
    }
    if(!formData.checkbox){
      newErrors.checkbox = 'To submit this form, please consent to being contacted';
    }

    return newErrors;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if(Object.keys(validationErrors).length > 0){
      setError(validationErrors);
      return
    }

    alert('Success✅')

    setFormData({
      name: "",
      lastName: "",
      email: "",
      queryType: "",
      checkbox: false,
      message: "",
    });


    setError({});
  };

  return (
    <>
      <h1 className="title">Contact Us</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__input form__input--names">
          <div className="form__input__box--names">
            <InputText
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="First name *"
              required
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
          </div>

          <div className="form__input__box--names">
            <InputText
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              label="Last Name *"
              required
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
          </div>
        </div>
        <div className="form__input form__input--email">
          <InputEmail
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email *"
            required
          />
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>

        <div className="form__input form__input--radio">
          <label htmlFor="form-label">Query Type *</label>
          <div className="form-radio">
            <InputRadio
              id="General Enquiry"
              name="queryType"
              value="General Enquiry"
              checked={formData.queryType === 'General Enquiry'}
              onChange={handleChange}
              label="General Enquiry"
            />
          </div>

          <div className="form-radio">
            <InputRadio
              id="Support Request"
              name="queryType"
              value="Support Request"
              checked={formData.queryType === 'Support Request'}
              onChange={handleChange}
              label="Support Request"
            />
          </div>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>

        <div className="form__input form__input--message">
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            label="Message *"
            required
          />
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>

        <div className="form__input form__input--checkbox">
          <InputCheckbox
            id="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
            label="I consent to being contacted by the team *"
          />
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
        
        <div className="form__submit">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
