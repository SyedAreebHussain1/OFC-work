import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AppRoute from "../../routes/AppRoutes";

//
const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Files", "9", <FileOutlined />),
// ];
const SiteBar = () => {
  const location = useLocation();
  console.log("location", location.pathname);
  const [collapsed, setCollapsed] = useState(false);
  const [urlName, setUrlName] = useState();
  console.log("urlName", urlName);
  const navigate = useNavigate();
  const menuChange = ({ key }) => {
    console.log("key", key);
    if (key == "signout") {
      //TODO, sign out feature here
    } else {
      navigate(key);
    }
  };
  useEffect(() => {
    if (location.pathname == "/") {
      setUrlName("Dashboard");
    } else if (location.pathname == "/about") {
      setUrlName("About");
    } else if (location.pathname == "/contact") {
      setUrlName("Contact");
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
            { label: "Home", key: "/", icon: <HomeOutlined /> },
            { label: "About", key: "/about", icon: <PieChartOutlined /> },
            { label: "Contact", key: "/contact", icon: <DesktopOutlined /> },
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
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
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
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Bill is a cat. */}
            <h4>{urlName?.toUpperCase()}</h4> 
            <AppRoute />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2202 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default SiteBar;