import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    FolderAddOutlined,
    ProjectOutlined,
    UserAddOutlined,
    SettingOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import "./Sitebar.css"
import AppRoute from '../AppRoute';

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
    getItem('DASHBOARD', '1', <PieChartOutlined />),
    getItem('PLOT REQUEST', '2', <ProjectOutlined />),
    getItem('PROJECT REGISTRATION', '3', <FolderAddOutlined />),
    getItem('ADD EMPLOYEE', '4', <UserAddOutlined />),
    getItem('PROJECT REQUEST', '5', <ProjectOutlined />),
    getItem('AGENCY LIST', '6', <UnorderedListOutlined />),
    getItem('SUPPORT CONVERSATION', '7'),
    // getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),
    getItem('CUSTOMER LIST', '8', <UnorderedListOutlined />),
    getItem('AGENT LIST', '9', <UnorderedListOutlined />),
    getItem('SETTINGS', '10', <SettingOutlined />),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),
];
const Sitebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    {/* <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                /> */}

                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Pages</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            minHeight: 360,
                            fontWeight: 'bold'
                        }}
                    >
                        <Content
                            style={{
                                margin: '0 16px',
                            }}
                        >
                            <AppRoute />
                        </Content>
                    </div>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Square One ©2022 Property Dealers
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};
export default Sitebar;