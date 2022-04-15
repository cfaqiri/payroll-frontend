import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../contexts/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    console.log(authCtx.isLoggedIn);
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Payroll</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
