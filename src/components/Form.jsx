import React, { useState } from "react";
import Signup from "./Signup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-content-left">
          <img src="img/img-2.svg" alt="Form image" className="form-img" />
        </div>

        {!isSubmitted ? <Signup submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;
