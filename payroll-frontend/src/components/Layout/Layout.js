import { Fragment } from "react";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation>
        <main>{props.children}</main>
      </MainNavigation>
    </Fragment>
  );
};

export default Layout;