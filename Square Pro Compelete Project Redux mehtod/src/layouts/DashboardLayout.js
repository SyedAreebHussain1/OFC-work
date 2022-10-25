import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Layout, Menu } from "antd";

import LOGO from "../assets/images/squarepro1White.png";
import Header from "../components/Header/Header";
import adminRoutes from "../routes/AdminRoutes";

import ScrollToTop from "../components/ScrollToTop";

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, isview) {
  return {
    key,
    icon,
    isview,
    label,
  };
}

const DashboardLayout = () => {
  const { modules } = useSelector((state) => state.adminProfileReducer);
  const history = useHistory();

  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([]);

  let { pathname } = useLocation();
  let currentYear = new Date().getFullYear();
  // let path = pathname.replace(/\//g, " / ");

  useEffect(() => {
    if (modules !== null) {
      adminRoutes(modules);
    } else if (modules == null) {
      history.push("/auth/sign-in");
    }
  }, [modules]);

  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.layout === "/user") {
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

  const handleClick = (menuItem) => {
    history.push(menuItem.key);
  };

  useEffect(() => {
    const tempArr = [];
    adminRoutes(modules)?.map((route) => {
      if (route.isview) {
        tempArr.push(
          getItem(
            route.name,
            route.layout + route.path,
            route.icon,
            route.isview
          )
        );
      }
    });
    setItems(tempArr);
  }, [adminRoutes, pathname]);

  return (
    <Layout hasSider>
      <Sider
        breakpoint="lg"
        collapsedWidth={collapsed ? "80" : "0"}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          // top: 100,
          bottom: 0,
          // borderTopRightRadius: "15px",
        }}
        width="250"
      >
        <div className={collapsed ? "mini-logo" : "logo"}>
          <img
            alt="example"
            src={LOGO}
            className={collapsed ? "mini-logo" : "logo"}
          />
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={[pathname]}
          mode="inline"
          items={items}
          onClick={handleClick}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: collapsed ? 100 : 200,
        }}
      >
        <Content
          style={{
            margin: "24px 64px 0",
            // margin: "24px 16px 0",
            overflow: "initial",
            height: "100%",
          }}
        >
          <Header name={pathname} />
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: "100vh",
            }}
          >
            <ScrollToTop />
            <Switch>
              {getRoutes(adminRoutes(modules))}
              <Redirect from="*" to="/user/dashboard" />
            </Switch>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Square One ©{currentYear} Property Dealers
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
