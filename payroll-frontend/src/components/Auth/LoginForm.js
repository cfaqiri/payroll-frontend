import { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../contexts/auth-context";

import classes from "./AuthForm.module.css";

const LoginForm = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      body: JSON.stringify({
        username: enteredUsername,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        authCtx.login(data.token);
        history.replace("/");
      });
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required ref={usernameInputRef} />
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
          <button>Login</button>
          <Link to="/register" className={classes.toggle}>
            Create new account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
