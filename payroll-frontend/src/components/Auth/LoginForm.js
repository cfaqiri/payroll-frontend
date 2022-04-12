import { useRef } from "react";

const LoginForm = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

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
    }).then((response) => {
      // Remind myself why I'm returning this
      console.log(response);
      return response.json();
    }).then((data) => {
      console.log(data.token);
    });
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required ref={usernameInputRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <button>Login</button>
      </form>
    </section>
  );
};

export default LoginForm;