import React, { useState, useEffect, } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import newwlogoo from 'assets/img/squarepro1.png'
import { meetingnotifications } from "config/api/URL";
import axios from "axios";
import { useHistory } from "react-router-dom";


// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Input,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Badge,

} from "reactstrap";
import { BorderStyle } from "@material-ui/icons";

// var ps;

const Sidebar = (props) => {

  const removeData = () => {

    
    localStorage.removeItem('roleid');
    localStorage.removeItem('teamid');
    localStorage.removeItem('auth');
    // location.href = ("../");    
  };
  let history = useHistory();
  if (localStorage.teamid === undefined && localStorage.roleid === undefined && localStorage.auth === undefined) {
    let path = '/auth/login';
    history.push(path)
  }

  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [Body, setBodyAPI] = useState({
    id: "",
    Taskid: "",
    Datetime: "",
    status_id: "",
    Note: "",
    Meetingdatetime: "",
    orderstatus: "",
    logtype: "",
    CallOutcome: "",
    Dashboarduserid: "",
    teamid: null,
    Agentname: "",
    status_name: ""
  });
  useEffect(() => {
    
    axios({
      method: "post",
      url: meetingnotifications,
      data: Body,
    }).then((res, err) => {
      if (res.data.status === true) {
        setData(res.data.response);
    
        setCount(res.data.count)
      } else {
       
      }
    });
  }, [true]);
  var style = {
    boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: '3%',
    'overflowY': 'scroll',
    height: '350px',
    padding: '10px',
  }
  var style1 = {
    boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.08), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: '3%',
    // padding: '5px'
  }
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  // const activeRoute = (routeName) => {
  //   return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  // const closeCollapse = () => {
  //   setCollapseOpen(false);
  // };
  const [subnav, setSubnav] = useState("");

  const showSubnav = (value) => setSubnav(value);
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {

      if (prop.isView === true) {
        return (
          <NavItem>
            <NavLink
              to={prop.layout + prop.path}
              tag={NavLinkRRD}
              activeClassName="active"
              style={{ fontWeight: "bold" ,color:"white", }}
              onClick={() => {
                if (prop.subNav) {
                  if (subnav === prop.name) {
                    showSubnav("");
                  } else {
                    showSubnav(prop.name);
                  }
                }
              }}
              data-toggle={prop.subNav ? "collapse" : "none"}
              className="toggleicon"
              aria-expanded={true}
            >
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
            {subnav === prop.name &&
              prop.subNav?.map((navSub) =>

              (
                <div className="collapse show">
                  <ul className="nav-sm flex-column nav">
                    <NavItem>
                      <NavLink
                        style={{ fontWeight: "bold" ,color:"white", }}
                        to={navSub.layout + navSub.path}
                        tag={NavLinkRRD}
                      >
                        <i className={navSub.icon} />
                        {navSub.name}
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
              )
              )}
          </NavItem>
        );
      }
    });
  };
  const { routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-black"
      expand="md"
      style={{backgroundColor:'#054d87',
    color:'white'}}
      id="sidenav-main"

    >
      <Container fluid>
        {/* Toggler */}
        <button

          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              style={{width : "50%"}}
              src={newwlogoo}
            />
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none flex flex-row" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <Badge style={{ fontSize: '15px', color: 'red' }}><i className="ni ni-bell-55 text-yellow" />{count}</Badge>
            </DropdownToggle>
            <DropdownMenu style={style}
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem className="text-center">Notification</DropdownItem>
              {data !== null && data !== undefined &&
                data.map((opt, index) => {
                  const onlyDate = () => {
                    return opt.Meetingdatetime.split('T')[0]
                  }
                  return (
                    <div>
                      <DropdownItem href={(opt.orderstatus === 8) ? "/admin/lead" : ""} style={style1} key={index}> <h4>{opt.status_name}</h4> <p>Mr.{opt.Agentname} meeting with client</p> <span>{onlyDate(opt.Meetingdatetime)}</span>  </DropdownItem>
                      <DropdownItem divider></DropdownItem>
                    </div>
                  )
                })}
              {/* <DropdownItem>Something else here</DropdownItem>  */}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">

              </Media>
            </DropdownToggle>
            <DropdownToggle className="pr-0" nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/logo.jpg")
                        .default
                    }
                  />
                </span>
                <Media className="ml-2 d-md-none d-lg-block">
                  <span className="mb-0 text-sm font-weight-bold">

                  </span>
                </Media>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              {/* <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider /> */}
              <DropdownItem onClick={removeData} href="/auth/login" >
                <i className="ni ni-user-run" />
                <span onClick={removeData}>Logout</span>
              </DropdownItem>
              <DropdownItem href="/auth/forget" >
                <i className="ni ni-ni ni-lock-circle-open" />
                <span >Forget Password</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={newwlogoo} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={newwlogoo} />
                    </a>
                  )}

                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
            </InputGroup>
          </Form>
          <hr  style={{backgroundColor:'white', borderTop: "2px solid black"}}  className="my-1"  />
          <ul  style={{color : "yellow"}} className="navbar-nav">{createLinks(routes)}</ul>
          <hr  className="my-1" />
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
