import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="form-content-right">
        <form className="form">
          <h1>Get started with us today! Create your account by filling out he info below.</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">Username </label>
              <input type="text" id="username" name="username" className="form-input" placeholder="Enter your username"/>
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">Email </label>
              <input type="text" id="email" name="email" className="form-input" placeholder="Enter your email"/>
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">Password </label>
              <input type="text" id="password" name="password" className="form-input" placeholder="Enter your password"/>
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">Confirm Password </label>
              <input type="text" id="password2" name="password2" className="form-input" placeholder="Enter your password"/>
          </div>

          <button className="form-input-btn" type="submit">Sign up</button>
          <span className="form-input-login">Already have an account? <a href="#">Login here</a></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
