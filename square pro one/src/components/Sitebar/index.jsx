import { Link, Navigate, useNavigate } from "react-router-dom";
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
import React, { useState } from 'react';
import "./Sitebar.css"
import AppRoute from "../AppRoute"
import Dashboard from "../Pages/Dashboard";
import PlotRequest from "../Pages/PlotRequest";
import ProjectRegistration from "../Pages/ProjectRegistration";
import AddEmpolyee from "../Pages/AddEmpolyee";
import ProjectRequest from "../Pages/ProjectRequest";
import AgencyList from "../Pages/AgencyList";
import SupportConverstion from "../Pages/SupportConverstion";
import CustomerList from "../Pages/CustomerList";
import AgentList from "../Pages/AgentList";
import Settings from "../Pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {HomeIcon} from '@mui/icons-material'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';


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
    getItem('CUSTOMER LIST', '8', <UnorderedListOutlined />),
    getItem('AGENT LIST', '9', <UnorderedListOutlined />),
    getItem('SETTINGS', '10', <SettingOutlined />),
]

const Sitebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [count, setCount] = useState('Dashboard')
    const navigate = useNavigate()
    // const [link, setLink] = useState()
    console.log(items[0].label)
    console.log(items[0].key)
    console.log(items)
    // console.log('c', items[0].icon)
    const fun = (route) => {
        navigate(route)
        if (route == '/') {
            setCount('Dashboard')
        } else if (route == '/user/plot_request') {
            setCount('Plot Request')
        } else if (route == '/user/add_project') {
            setCount('Project Registration')
        } else if (route == '/user/add_user') {
            setCount('Add Employee')
        } else if (route == '/user/project_request') {
            setCount('Project Request')
        } else if (route == '/user/agency_list') {
            setCount('Agency List')
        } else if (route == '/user/support_chat') {
            setCount('Support Converation')
        } else if (route == '/user/customer_list') {
            setCount('Customer List')
        } else if (route == '/user/agent_list') {
            setCount('Agent List')
        } else if (route == '/user/settings') {
            setCount('Settings')
        }
    }
    return (
        <div>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="logo" />
                    <div style={{ width: '40%', marginLeft: '25%' }}>
                        {/* <img style={{ width: '100%' }} src="https://img.favpng.com/8/17/5/real-estate-house-graphic-design-estate-agent-logo-png-favpng-v3AsWCsV33g7E3CqgmLw4ts5r.jpg" alt="" /> */}
                        <HomeIcon sx={{ fontSize: 80 }} component={HomeIcon} />
                        {/* <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button> */}
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
                    //  items={items}
                    >
                        {/* {items.map((val, i) => {
                                return <Menu.Item key={i} onClick={() => fun("/user/plot_request")}>{val.label} {val.key} </Menu.Item>
                            })} */}
                        {/* <Link to='/'> */}
                        <Menu.Item key='1' onClick={() => fun('/')}>{items[0].icon} {items[0].label}</Menu.Item>
                        <Menu.Item key='2' onClick={() => fun('/user/plot_request')}>{items[1].icon} {items[1].label}</Menu.Item>
                        <Menu.Item key='3' onClick={() => fun('/user/add_project')}>{items[2].icon} {items[2].label}</Menu.Item>
                        <Menu.Item key='4' onClick={() => fun('/user/add_user')}>{items[3].icon} {items[3].label}</Menu.Item>
                        <Menu.Item key='5' onClick={() => fun('/user/project_request')}>{items[4].icon} {items[4].label}</Menu.Item>
                        <Menu.Item key='6' onClick={() => fun('/user/agency_list')}>{items[5].icon} {items[5].label}</Menu.Item>
                        <Menu.Item key='7' onClick={() => fun('/user/support_chat')}>{items[6].icon} {items[6].label}</Menu.Item>
                        <Menu.Item key='8' onClick={() => fun('/user/customer_list')}>{items[7].icon} {items[7].label}</Menu.Item>
                        <Menu.Item key='9' onClick={() => fun('/user/agent_list')}>{items[8].icon} {items[8].label}</Menu.Item>
                        <Menu.Item key='10' onClick={() => fun('/user/settings')}>{items[9].icon} {items[9].label}</Menu.Item>
                    </Menu>
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
                        <Breadcrumb.Item> {count} </Breadcrumb.Item>
                    </Breadcrumb>
                    <div>{count}</div>
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
                                height:'520px',
                                overflow:'scroll'
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
