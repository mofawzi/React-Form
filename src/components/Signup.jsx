import React from "react";
import useForm from "../hooks/useForm";
import validate from "../validateInfo";
import "./Form.css";

const Signup = ({ submitForm }) => {
  const { values, changeHandler, submitHandler, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={submitHandler}>
        <h1>
          Get started with us today! Create your account by filling out he info
          below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username{" "}
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={changeHandler}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email{" "}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={changeHandler}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={changeHandler}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password{" "}
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-input"
            placeholder="Enter your password"
            value={values.password2}
            onChange={changeHandler}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? <a href="#">Login here</a>
        </span>
      </form>
    </div>
  );
};

export default Signup;
