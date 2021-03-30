export default function validateInfo(values) {
  let errors = {};

  // Username Validation
  if (!values.username.trim()) {
    errors.username = "Username is required!";
  }

  // Email Validation
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // Password Validation
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  // Password Validation
  if (!values.password2) {
    errors.password2 = "Password is required!";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
