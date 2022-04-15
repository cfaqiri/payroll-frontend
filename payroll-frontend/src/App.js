import { Redirect, Route, Switch } from "react-router-dom";

import AuthContext from "./contexts/auth-context";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { useContext } from "react";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <AuthPage />
        </Route>
        <Route path="/profile">
          {isLoggedIn && <ProfilePage />}
          {!isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
