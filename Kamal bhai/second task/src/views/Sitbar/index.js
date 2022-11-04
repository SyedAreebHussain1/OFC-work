

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
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AppRoute from "../../routes/AppRoutes";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const SiteBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
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
          onClick={({ key }) => {
            if (key == "signout") {
              //TODO, sign out feature here
            } else {
              navigate(key);
            }
          }}
          items={[
            { lebel: "Home", key: "/", icon: <HomeOutlined /> },
            { lebel: "About", key: "/about", icon: <PieChartOutlined /> },
            { lebel: "Contact", key: "/contact", icon: <DesktopOutlined /> },
            {
              lebel: "Signout",
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
            <Breadcrumb.Item>B</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
            <AppRoute />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default SiteBar;

function Con() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </div>
  );
}











// import {
//   DesktopOutlined,
//   FileOutlined,
//   HomeOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Breadcrumb, Layout, Menu } from "antd";
// import React, { useState } from "react";
// import "./style.css";
// import Formm from "../Form";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// const { Header, Content, Footer, Sider } = Layout;
// const SiteBar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const navigate = useNavigate();
//   return (
//     <div style={{display:'flex',flexDirection:'none'}} >
//         <Menu
//         //   theme="dark"
//           onClick={({key}) => {
//             if (key == "signout") {
//               //TODO, sign out feature here
//             } else {
//               navigate(key);
//             }
//           }}
//           items={[
//             { lebel: "Home", key: "/", icon: <HomeOutlined /> },
//             { lebel: "About", key: "/about", icon: <PieChartOutlined /> },
//             { lebel: "Contact", key: "/contact", icon: <DesktopOutlined /> },
//             {
//               lebel: "Signout",
//               key: "signout",
//               icon: <DesktopOutlined />,
//               danger: true,
//             },
//           ]}
//         />
//       <Con/>
//     </div>
//   );
// };

// export default SiteBar;