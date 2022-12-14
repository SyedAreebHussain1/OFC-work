/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {
  useLocation,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components
// import AuthNavbar from "components/Navbars/AuthNavbar.js";
// import AuthFooter from "components/Footers/AuthFooter.js";
import routes from "routes/routes.js";
import authRoutes from "routes/AuthRoutes";
import Picture from "../assets/img/lg.jpg";
import { connect } from "react-redux";
import { useEffect } from "react";
const Auth = ({ navMenuList }) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const history = useHistory();
  React.useEffect(() => {
    document.body.style.backgroundImage = `url('${Picture}')`;
    document.body.style.backgroundSize = "cover";
    return () => {
      document.body.style.backgroundImage = `url('')`;
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  useEffect(() => {
    if (navMenuList !== null) {
      history.push("/admin/index");
    }
  }, [navMenuList]);

  return (
    <>
      <div className="main-content" ref={mainContent}>
        {/* <AuthNavbar /> */}
        <div className="py-6 py-lg-6">
          {/* <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container> */}
          <div className="separator separator-bottom separator-skew zindex-100">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg> */}
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(authRoutes)}
              {/* <Route path="/auth/forget" /> */}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
      {/* <AuthFooter /> */}
    </>
  );
};
const mapStateToProps = (state) => ({
  navMenuList: state.login.navMenuList,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
