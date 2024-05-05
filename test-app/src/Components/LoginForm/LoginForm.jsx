import { useState } from "react";
import "./LoginForm.css";
import validation from "./inputValidation";
import credentials from "./credentials";

export default function LoginForm() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setError] = useState({});

  function handleButtonClick(e) {
    e.preventDefault();

    let errors = validation(values);
    setError(errors);
    const hasValidationErrors = Object.keys(errors).length !== 0;

    if (!hasValidationErrors) {
      if (
        values.username === credentials["username"] &&
        values.password === credentials["password"]
      ) {
        alert("Login successful");
        window.location.href = "login_success.html";
      } else {
        alert("The provided password is wrong");
      }
    }
  }

  return (
    <form className="form">
      <span className="icon"></span>

      <div className="input-box">
        <span className="icon-user"></span>
        <input
          type="text"
          placeholder="USERNAME"
          value={values.username}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        {errors.username && <p className="error-message">{errors.username}</p>}
      </div>

      <div className="input-box">
        <span className="icon-password"></span>
        <input
          type="password"
          placeholder="PASSWORD"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>

      <button
        className="submit-button"
        type="submit"
        onClick={(e) => handleButtonClick(e)}
      >
        LOGIN
      </button>

      <div className="forgot-password">
        <a href="/">Forgot password?</a>
      </div>
    </form>
  );
}
