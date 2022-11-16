import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/img/square-pro-1.png";
import { connect } from "react-redux";
import {
  CheckNotification,
  ReadNotificationAction,
  UpdateNotificationStatus,
} from "../middleware";
import { meetingnotifications } from "config/api/URL";
import moment from "moment";
import img from "../../../../assets/img/admin123.png";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  Badge,
  // InputGroupAddon,
  // InputGroupText,
  // Input,
  // InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import { useHistory } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { networkPoll } from "socket/Networkpolling";
// import axios from "axios";
// import { meetingnotifications } from "config/api/URL";
// import swal from 'sweetalert';

const AdminNavbar = (props) => {
  let history = useHistory();

  let timer;
  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];

  // this function sets the timer that logs out the user after 10 secs
  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      // clears any pending timer.
      resetTimer();
      // Listener clean up. Removes the existing event listener from the window
      events.forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
      // logs out user
      // autoLogOut();
    }, 1800000); // 10000ms = 10secs. You can change the time.
  };

  // this resets the timer if it exists.
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  // when component mounts, it adds an event listeners to the window
  // each time any of the event is triggered, i.e on mouse move, click, scroll, keypress etc, the timer to logout user after 30 mins of inactivity resets.
  // However, if none of the event is triggered within 30 mins, that is app is inactive, the app automatically logs out.
  useEffect(() => {
    events.forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);
  const SOCKET_URL = "https://backendcrm.squarepro.net";
  let socket = socketIOClient(`${SOCKET_URL}`, networkPoll);
  let role_name = localStorage.getItem("user_role_name");
  const autoLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("roleid");
    localStorage.removeItem("teamid");
    localStorage.removeItem("auth");
    localStorage.removeItem("user_role_name");
    // let path = "/auth/login";
    // history.push(path);
    // location.href = ("../");
    redirectToLogin();
  };
  const redirectToLogin = () => {
    // if (
    //   // localStorage.teamid === undefined &&
    //   // localStorage.roleid === undefined &&
    //   localStorage.auth === undefined
    // ) {
    let path = "/auth/login";
    history.push(path);
    // }
  };

  const removeData = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("roleid");
    localStorage.removeItem("teamid");
    localStorage.removeItem("auth");
    localStorage.removeItem("user_role_name");
    localStorage.clear();
    // location.href = ("../");
  };
  if (
    localStorage.teamid === undefined &&
    localStorage.roleid === undefined &&
    localStorage.auth === undefined
  ) {
    let path = "/auth/login";
    history.push(path);
  }
  let localStore = parseInt(localStorage.teamid);
  useEffect(() => {
    props.CheckNotification(Body, onSuccess, onFailure);
  }, [true]);

  const onSuccess = () => {};
  const onFailure = () => {
    // window.alert("Fail");
  };
  const onSuccessRead = () => {
    props.CheckNotification(Body, onSuccess, onFailure);
  };
  const onFailureRead = () => {
    // window.alert("Fail");
  };
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationData, setNotificationData] = useState(null);
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
    teamid: localStore,
    Agentname: "",
    status_name: "",
  });
  // useEffect(() => {
  //   let token = localStorage.getItem("auth");

  //   axios({
  //     method: "post",
  //     url: meetingnotifications,
  //     data: Body,
  //   }).then((res, err) => {
  //     if (res.data.status === true) {
  //       // setData(res.data.response);

  //       setCount(res.data.count);
  //     } else {
  //     }
  //   });
  // }, [true]);

  // var style = {
  //   boxShadow:
  //     "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
  //   borderRadius: "3%",
  //   overflowY: "scroll",
  //   height: "350px",
  //   padding: "10px",
  //   marginRight: "290px",
  // };
  var style = {
    boxShadow:
      "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: "3%",
    overflowY: "scroll",
    overflow: "hidden",
    height: "350px",
    // width: "300px",
    // wordWrap: "break-word",
    padding: "10px",
    marginLeft: "40%",
  };

  var style1 = {
    boxShadow:
      "3px 3px 3px 3px rgba(0, 0, 0, 0.08), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: "3%",
    // padding: '5px'
  };
  const handleNotification = () => {
    props.CheckNotification(Body, onSuccess, onFailure);
  };
  const handleChangeStatus = (id) => {
    let body = {
      NotifyId: id,
    };
    props.UpdateNotificationStatus(body, onSuccess, onFailure);
  };
  const handleNotificationRoute = (path) => {
    history.push(`${path}`);
    props.ReadNotificationAction(onSuccessRead, onFailureRead);
  };

  useEffect(() => {
    setNotificationCount(props.Data?.unReadCount);
    setNotificationData(props.Data?.response);
  }, [props.Data]);

  useEffect(() => {
    socket.on(`notification-${role_name}-count`, (count) => {
      setNotificationCount(count);
    });
    socket.on(`notification-${role_name}`, (data) => {
      let socketNotifiacation = [data];
      setNotificationData([...socketNotifiacation, ...notificationData]);
    });
  }, [notificationData]);
  let userName = localStorage.getItem("user_role_name");
  let userID = localStorage.getItem("Userid");
  let username = localStorage.getItem("username");

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-black bold-lg text-uppercase d-none d-lg-inline-block"
            to="/admin/dashboard"
          >
            {props.brandText}
          </Link>
          {/* <Link style={{marginBottom:'-30px', marginLeft:'-150px'}}>
          <img src={logo} style={{ marginRight:900,marginTop:40, height:50}}></img> </Link> */}
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              {/* <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                 <Input placeholder="Search" type="text" />
              </InputGroup> */}
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <div
              className="wallet-card"
              style={{
                color: "black",
                padding: "15px",
                backgroundColor: "white",
                marginTop: "2%",
                textAlign: "center",
                borderRadius: "30px",
                // borderColor: "#054D87",
                // borderWidth: "2px",
                // borderStyle: "solid",
                fontWeight: 600,
                letterSpacing: "2px",
                fontSize: "14px",
              }}
            >
              Welcome, {userName} <br />
              {/* <hr style={{ marginBottom: "0px" }} /> */}
              <span style={{ fontSize: "10px", color: "grey" }}>
                ID: <span style={{ fontWeight: "bold" }}>{userID}</span>
              </span>
            </div>
            <UncontrolledDropdown style={{ marginTop: "15px" }} nav>
              <DropdownToggle
                // style={{ marginLeft: "35%" }}
                nav
                className="nav-link-icon mr--4"
              >
                {" "}
                <i
                  style={{ fontSize: "26px" }}
                  className="ni ni-bell-55 text-yellow"
                />
                <Badge
                  color=""
                  style={{
                    backgroundColor: "red",
                    padding: "3px",
                    fontSize: "12px",
                    color: "white",
                    position: "absolute",
                    left: 24,
                    top: 0,
                  }}
                >
                  {notificationCount}
                </Badge>
              </DropdownToggle>

              <DropdownMenu
                style={style}
                // style={{ marginLeft: "10%" }}
                aria-labelledby="navbar-default_dropdown_1"
                className="dropdown-menu-arrow"
                right
              >
                <DropdownItem className="text-center">
                  Notifications
                </DropdownItem>
                {/* {notificationSocket()} */}
                <div
                  // onScroll={onScroll}
                  // ref={listInnerRef}
                  style={{
                    height: "280px",
                    overflowY: "auto",
                  }}
                >
                  {notificationData !== null &&
                    notificationData !== undefined &&
                    notificationData.map((item, i) => {
                      return (
                        <div>
                          <DropdownItem
                            onClick={() => {
                              handleNotificationRoute(
                                item?.CRMRoutes?.RouteName
                              );
                            }}
                            style={
                              item?.isRead === false
                                ? { backgroundColor: "rgba(112,181,249,0.2)" }
                                : { backgroundColor: "white" }
                            }
                            key={i}
                          >
                            <h4>{item?.Title}</h4>
                            <div className={"d-flex justify-content-between"}>
                              <p>
                                {/* {moment(item.createdAt).format(
                                  "MMMM Do YYYY, h:mm:ss a"
                                )} */}
                                {item?.Body}
                              </p>
                            </div>
                            <div className={"d-flex justify-content-between"}>
                              <span>
                                {moment(item?.Datetime).format(
                                  "MMMM Do YYYY, h:mm:ss a"
                                )}
                              </span>
                            </div>
                          </DropdownItem>
                          <DropdownItem divider></DropdownItem>
                        </div>
                      );
                    })}
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center"></Media>
              </DropdownToggle>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      // src={require("../../../../assets/img/logo.jpg").default}
                      src={img}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold"></span>
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
                <DropdownItem>
                  <i className="ni ni-circle-08" />
                  <span>{username}</span>
                </DropdownItem>
                <DropdownItem onClick={removeData} href="/auth/login">
                  <i className="ni ni-user-run" />
                  <span onClick={removeData}>Logout</span>
                </DropdownItem>
                {/* <DropdownItem href="/auth/forget">
                  <i className="ni ni-ni ni-lock-circle-open" />
                  <span>Forget Password</span>
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.getNotifications.isLoading,
  isError: state.getNotifications.isError,
  Data: state.getNotifications.Data,
  Error: state.getNotifications.Error,
});
const mapDispatchToPrpos = (dispatch) => {
  //UpdateNotificationStatus
  return {
    CheckNotification: (body, onSuccess, OnFailure) =>
      dispatch(CheckNotification(body, onSuccess, OnFailure)),
    UpdateNotificationStatus: (body, onSuccess, OnFailure) =>
      dispatch(UpdateNotificationStatus(body, onSuccess, OnFailure)),
    ReadNotificationAction: (onSuccessRead, onFailureRead) =>
      dispatch(ReadNotificationAction(onSuccessRead, onFailureRead)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AdminNavbar);
