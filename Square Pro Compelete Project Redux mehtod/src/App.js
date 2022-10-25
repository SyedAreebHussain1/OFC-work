import { Switch, Route, Redirect } from "react-router-dom";

import "antd/dist/antd.css";
import "./assets/css/styles.css";

import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import { useSelector } from "react-redux";

function App() {
  const { modules } = useSelector((state) => state.adminProfileReducer);
  return (
    <div>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout />} />
        <Route path="/user" render={(props) => <DashboardLayout />} />

        {modules === null ? (
          <Redirect from="*" to="/auth/sign-in" />
        ) : (
          <Redirect from="*" to="/user/dashboard" />
        )}
      </Switch>
    </div>
  );
}

export default App;
