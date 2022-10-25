import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Breadcrumb, Col, Dropdown, Menu, Row } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import Notification from "../Notification/Notification";
import { GET_ASSIGN_MODULE_SUCCESS } from "../../constants/adminProfileConstants";

const profile = [
  <svg
    width="30"
    height="30"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
    ></path>
  </svg>,
];

const Header = ({ name }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  let routeName = name.split("/")[name.split("/").length - 1];
  let adminProfile = localStorage.getItem("adminProfile");
  let userName;

  if (adminProfile) {
    let { firstName, lastName } = JSON.parse(adminProfile);
    userName = `${firstName} ${lastName}`.toUpperCase();
  }

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      localStorage.clear();
      dispatch({ type: GET_ASSIGN_MODULE_SUCCESS, payload: null });
      history.push("/auth/sign-in");
    }
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Logout",
          key: "1",
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );
  return (
    <>
      <Notification />
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/user/dashboard">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {routeName === "add_project"
                ? "Project Registration"
                : routeName === "dashboard"
                ? "Dashboard"
                : routeName === "add_user"
                ? "Add Employee"
                : routeName === "assignModule"
                ? "Assign Module"
                : routeName === "settings"
                ? "Settings"
                : routeName === "addFeature"
                ? "Add Feature"
                : routeName === "addPlot"
                ? "Add Plot"
                : routeName === "project_request"
                ? "Project Request"
                : routeName === "customer_list"
                ? "Customer List"
                : routeName === "agent_list"
                ? "Agent List"
                : routeName === "add_agency"
                ? "Agency Registration"
                : routeName === "agency_list"
                ? "Agency List"
                : routeName === "plot_request"
                ? "Plot Request"
                : routeName === "support_chat"
                ? "Support Conversation"
                : ""}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {routeName === "add_project"
                ? "PROJECT REGISTRATION"
                : routeName === "dashboard"
                ? "DASHBOARD"
                : routeName === "add_user"
                ? "ADD EMPLOYEE"
                : routeName === "assignModule"
                ? "ASSIGN MODULE"
                : routeName === "settings"
                ? "SETTINGS"
                : routeName === "addFeature"
                ? "ADD FEATURE"
                : routeName === "addPlot"
                ? "ADD PLOT"
                : routeName === "project_request"
                ? "PROJECT REQUEST"
                : routeName === "customer_list"
                ? "CUSTOMER LIST"
                : routeName === "agent_list"
                ? "AGENT LIST"
                : routeName === "add_agency"
                ? "AGENCY REGISTRATION"
                : routeName === "agency_list"
                ? "AGENCY LIST"
                : routeName === "plot_request"
                ? "PLOT REQUEST"
                : routeName === "support_chat"
                ? "SUPPORT CONVERSATION"
                : ""}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          {/* <Badge size="small" count={4}> */}
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              href="#pablo"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {profile}
            </a>
          </Dropdown>
          <h4 style={{ marginRight: "5px" }}>{userName}</h4>

          {/* </Badge> */}

          {/* <Dropdown.Button
            overlay={menu}
            placement="bottomLeft"
            icon={<UserOutlined />}
            style={{ marginTop: "-7px" }}
          >
            {userName}
          </Dropdown.Button> */}
        </Col>
      </Row>
    </>
  );
};

export default Header;
