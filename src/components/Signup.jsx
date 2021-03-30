import React from "react";
import useForm from "../hooks/useForm";

const Signup = () => {
  const { values, changeHandler } = useForm;
  return (
    <div>
      <div className="form-content-right">
        <form className="form">
          <h1>
            Get started with us today! Create your account by filling out he
            info below.
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
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password{" "}
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={changeHandler}
            />
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
          </div>

          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          <span className="form-input-login">
            Already have an account? <a href="#">Login here</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
