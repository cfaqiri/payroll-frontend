import { useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./AuthForm.module.css";


const RegisterForm = () => {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        username: enteredUsername,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <section className={classes.auth}>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
          <Link to="/login" className={classes.toggle}>
            Login with existing account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
