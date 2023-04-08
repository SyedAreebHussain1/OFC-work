import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardFilled,
  DashboardOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppRoute from "../../routes/AppRoutes";
import HomeIcon from "@mui/icons-material/Home";

////
const { Header, Content, Footer, Sider } = Layout;

const SiteBar = () => {
  const location = useLocation();
  // console.log("location", location.pathname);
  const [collapsed, setCollapsed] = useState(false);
  const [urlName, setUrlName] = useState();
  // console.log("urlName", urlName);
  const navigate = useNavigate();
  const menuChange = ({ key }) => {
    // console.log("key", key);
    if (key == "signout") {
      //TODO, sign out feature here
    } else {
      navigate(key);
    }
  };
  useEffect(() => {
    if (location.pathname == "/") {
      setUrlName("Dashboard");
    } else if (location.pathname == "/user/registration") {
      setUrlName("User regsitration form");
    } else if (location.pathname == "/user/data") {
      setUrlName("User Data");
    }
     else if (location.pathname == "/user/todo") {
      setUrlName("User todo");
    }
  }, [menuChange]);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div style={{ width: "40%", marginLeft: "25%" }}>
          <HomeIcon
            sx={{ fontSize: 50 }}
            // component={HomeIcon}
          />
        </div>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          // onClick={({ key }) => {
          //   // console.log(key)
          //   if (key == "signout") {
          //     //TODO, sign out feature here
          //   } else {
          //     navigate(key);
          //   }
          // }}
          onClick={menuChange}
          items={[
            { label: "DASHBOARD", key: "/", icon: <DashboardOutlined /> },
            { label: "RESGISTRATION", key: "/user/registration", icon: <PieChartOutlined /> },
            { label: "DATA", key: "/user/data", icon: <DesktopOutlined /> },
            { label: "TODO", key: "/user/todo", icon: <DesktopOutlined /> },
            {
              label: "Signout",
              key: "signout",
              icon: <DesktopOutlined />,
              danger: true,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        /> */}
        <Content
          style={{
            margin: "0 16px",
            height: "520px",
            overflow: "scroll",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Page</Breadcrumb.Item>
            <Breadcrumb.Item>{urlName}</Breadcrumb.Item>
          </Breadcrumb>
          <h6>{urlName?.toUpperCase()}</h6>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Bill is a cat. */}
            {/* <h4>{urlName?.toUpperCase()}</h4>  */}
            <AppRoute />
          </div>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Square One ©2022 Property Dealers
        </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};
export default SiteBar;
