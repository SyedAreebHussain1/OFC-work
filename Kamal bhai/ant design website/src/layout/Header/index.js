import React from 'react';
import "../../App.css"
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
const AppHeader = () => (
    <Header>
        <div className='container-fluid'>
            <div className='header'>
                <div className="logo" >
                    <i className='fas fa-bolt'></i>
                    <a style={{ textDecoration: 'none' }} href='https://www.google.com/'>Tech</a>
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={[
                        { label: "Home", key: "1" },
                        { label: "About", key: "2" },
                        { label: "Features", key: "3" },
                        { label: "How it works", key: "4" },
                        { label: "FAQ", key: "5" },
                        { label: "Contact", key: "6" },
                        // { label: "Signout", key: "signout", danger: true },
                    ]}
                />
            </div>
        </div>
    </Header>
);
export default AppHeader;