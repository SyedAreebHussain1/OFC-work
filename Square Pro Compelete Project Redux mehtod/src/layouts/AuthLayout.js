import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { requestForToken } from "../config/firebase";
import authRoutes from "../routes/AuthRoutes";

const AuthLayout = () => {
  const { modules } = useSelector((state) => state.adminProfileReducer);
  const history = useHistory();

  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.layout === "/auth") {
        return (
          <Route
            path={route.layout + route.path}
            component={route.component}
            key={key}
            exact
          />
        );
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    requestForToken();
  }, []);

  useEffect(() => {
    if (modules !== null) {
      history.push("/user/dashboard");
    }
  }, [modules]);

  return (
    <>
      <Switch>
        {getRoutes(authRoutes)}
        <Redirect from="*" to="/auth/sign-in" />
      </Switch>
    </>
  );
};

export default AuthLayout;
