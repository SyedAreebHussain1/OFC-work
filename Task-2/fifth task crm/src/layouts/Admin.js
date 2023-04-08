/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  useLocation,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar/container/AdminNavbar";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import routes from "routes/routes.js";
// import routesRep from "routes/routes-representative";
// import routesAccount from "routes/routes-account";

// import routesDoc from "routes/routes-documentation";

// import routesDev from "routes/routes-dev";

// import routesCustomerCounter from "routes/routes-customerCounter";
// import routesCashierCounter from "routes/routes-cashierCounter";
// import routesFormIssue from "routes/routes-formIssue";
// import routesVerificationCounter from "routes/routes-verificationCounter";
// import routesDocManager from "routes/routes-documentationManager";
// import routesSalesManager from "routes/routes-salesManager";
// import routesDataEntry from "routes/routes-dataEntry";
// import routesReceiptAgent from "routes/routes-ReceiptAgent";
// import Register from "views/examples/Register.js";routesVerificationCounter
import userRoutes from "routes/UserRoutes";
import { connect } from "react-redux";
const Admin = (props) => {
  // const [role, setRole] = useState(null);
  // const [routesToRedner, setRoutesToRedner] = useState(null);
  const mainContent = React.useRef(null);
  const location = useLocation();
  let history = useHistory();

  // const [auth, setAuth] = useState({
  //   token: null,
  //   teamid: null,
  //   roleid: null,
  // });
  // useEffect(() => {
  //   if (props.navMenuList) {
  //     console.log(userRoutes(props.navMenuList));
  //   }
  // }, [props.navMenuList]);
  // useEffect(() => {
  //   setRole(parseInt(localStorage.getItem("roleid")));
  // }, [true]);
  // useEffect(() => {
  //   if (role !== null && role !== undefined && role !== "") {
  //     // if (role === 3) setRoutesToRedner(routesRep);
  //     // else
  //     // if (role === 1) setRoutesToRedner(routes);
  //     // else
  //     if (role === 5) setRoutesToRedner(routes);
  //     else if (role === 6) setRoutesToRedner(routesDoc);
  //     else if (role === 7) setRoutesToRedner(routesAccount);
  //     else if (role === 8) setRoutesToRedner(routesDocManager);
  //     else if (role === 3) setRoutesToRedner(routesSalesManager);
  //     else if (role === 9) setRoutesToRedner(routesDataEntry);
  //     else if (role === 10) setRoutesToRedner(routesReceiptAgent);
  //     // else if (role === 12) setRoutesToRedner(routesCashierCounter);
  //     else setRoutesToRedner(routesDev);

  //     // if (role === 3) setRoutesToRedner(routesRep);
  //     // else if (role === 1) setRoutesToRedner(routes);
  //     // else if (role === 5) setRoutesToRedner(routes);
  //     // else if (role === 6) setRoutesToRedner(routesDoc);
  //     // else if (role === 7) setRoutesToRedner(routesAccount);
  //     // else if (role === 9) setRoutesToRedner(routesFormIssue);
  //     // else if (role === 10) setRoutesToRedner(routesVerificationCounter);
  //     // else if (role === 11) setRoutesToRedner(routesCustomerCounter);
  //     // else if (role === 12) setRoutesToRedner(routesCashierCounter);
  //     // else setRoutesToRedner(routesDev);
  //     // if (role !== null && role !== undefined && role !== "") {
  //     //   if (role === 3) setRoutesToRedner(routesRep);
  //     //   else if (role === 5) setRoutesToRedner(routes);
  //     //   else if (role === 6) setRoutesToRedner(routesDoc);
  //     //   else if (role === 7) setRoutesToRedner(routesAccount);
  //     //   else if (role === 9) setRoutesToRedner(routesFormIssue);
  //     //   else if (role === 10) setRoutesToRedner(routesVerificationCounter);
  //     //   else if (role === 11) setRoutesToRedner(routesCustomerCounter);
  //     //   else if (role === 12) setRoutesToRedner(routesCashierCounter);
  //     //   else setRoutesToRedner(routesDev);
  //   }
  // }, [role]);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    // if (routes !== false) {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      //  else if (prop.subNav) {
      //   return prop.subNav.map((item, index) => {
      //     return (
      //       <Route
      //         path={item.layout + item.path}
      //         component={item.component}
      //         key={index}
      //       />
      //     );
      //   });
      // }
    });
    // }
  };

  // const getBrandText = (path) => {
  //   for (let i = 0; i < routes.length; i++) {
  //     if (
  //       props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
  //       -1
  //     ) {
  //       return routes[i].name;
  //     }
  //   }
  //   return "Dashboard";
  // };
  // const [routes, setroutes] = useState('initialState')
  useEffect(() => {
    if (props.navMenuList == null) {
      history.push("/auth/login");
    }
  }, [props.navMenuList]);
  return (
    <>
      <Sidebar
        {...props}
        routes={
          userRoutes(props.navMenuList)
          // role === 5
          //   ? routes
          //   : role === 6
          //   ? routesDoc
          //   : role === 7
          //   ? routesAccount
          //   : role === 8
          //   ? routesDocManager
          //   : role === 3
          //   ? routesSalesManager
          //   : role === 9
          //   ? routesDataEntry
          //   : role === 10
          //   ? routesReceiptAgent
          //   : routesDev
          // role === 3
          //   ? routesRep
          //   : role === 5
          //   ? routes
          //   : role === 6
          //   ? routesDoc
          //   : role === 7
          //   ? routesAccount
          //   : role === 9
          //   ? routesFormIssue
          //   : role === 10
          //   ? routesVerificationCounter
          //   : role === 11
          //   ? routesCustomerCounter
          //   : role === 12
          //   ? routesCashierCounter
          //   : routesDev
        }
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/square-pro-1.png").default,
        }}
      />

      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          // brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(userRoutes(props.navMenuList))}
          {/* <Redirect from="*" to="/auth/login" /> */}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  navMenuList: state.login.navMenuList,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
