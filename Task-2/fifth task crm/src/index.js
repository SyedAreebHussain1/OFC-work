import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "react-notification-alert/dist/animate.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { Provider } from "react-redux";
// import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
// import "react-bootstrap-table/dist/react-bootstrap-table.min.js";

// import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";
import Login from "views/Login/container/Login";

{
  /* <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>
<link rel="stylesheet" href="./dist/react-bootstrap-table.min.css"></link> */
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        {/* <Route path="/auth/tempelate" component={Login} /> */}
        {localStorage.teamid === undefined &&
        localStorage.auth === undefined ? (
          <Redirect from="*" to="/auth/login" />
        ) : (
          <Redirect from="*" to="/admin/index" />
        )}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
