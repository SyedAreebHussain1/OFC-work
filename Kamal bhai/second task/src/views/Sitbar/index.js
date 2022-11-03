import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import "./style.css";
import Formm from "../Form";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const SiteBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{display:'flex',flexDirection:'none'}} >
        <Menu
        //   theme="dark"
          onClick={({key}) => {
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
        ></Menu>
      <Con/>
    </div>
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
