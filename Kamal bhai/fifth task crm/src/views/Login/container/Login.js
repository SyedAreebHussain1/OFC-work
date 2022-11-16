import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../assets/img/newlogo.png";
import Picture from "../../../assets/img/back.png";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import Forget from "../../Forget/container/Forget";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "config/api/URL";
import swal from "sweetalert";
import SquarePro from "../../../assets/img/square-pro-1.png";
import { connect } from "react-redux";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import firebase from "config/firebase";
import HtmlPrint from "views/HtmlReciept/HtmlPrint";
import { useReactToPrint } from "react-to-print";
import TransferRequest from "views/HtmlReciept/TransferRequest/TransferRequest";
import TransferReceipt from "views/HtmlReciept/TransferReceipt/TransferReceipt";

const Login = (props) => {
  //hooks import
  let history = useHistory();
  const notify = useRef(null);
  const [body, setBody] = useState({
    email: "",
    password: "",
    fcm: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  //option for notify alert
  let options = {
    place: "tr",
    message: (
      <div>
        <div>
          Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
          every web developer.
        </div>
      </div>
    ),
    type: "danger",
    icon: "now-ui-icons ui-1_bell-55",
    autoDismiss: 7,
  };
  //method import
  const ValidateLogin = () => {
    if (body.email !== "" && body.password !== "") {
      setIsLogin(true);
      props.CheckUserLogin(body, OnSuccess, OnFailure);
    } else {
      swal("Sorry!", "Please Enter Email and Password", "error");
    }
  };
  // useEffect(() => {
  //
  //   if (body.email !== undefined && body.email !== null && body.email !== "" &&
  //     body.password !== undefined && body.password !== null && body.password !== "" &&
  //     body.fcm !== undefined && body.fcm !== null && body.fcm !== ""
  //   ) {
  //

  //   }
  // }, [body])

  const Notify = () => {
    swal("Sorry!", "Incorrect Email or Password", "error");
  };

  // const OnSuccess = () => {
  //   const msg=firebase.messaging();
  //   msg.requestPermission().then(()=>{

  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   });

  //   swal("Congratulations!", "You have Logged in successfully", "success");
  //   swal({
  //     title: "Congratulations!",
  //     text: "You have Logged in successfully",
  //     icon: "success",
  //     // buttons : true,
  //   }).then((isOk) => {
  //     if (isOk) {
  //       setSignal(true);
  //     }
  //   });

  //   SaveData();
  // };
  const onSuccessMenuFetch = (res) => {
    localStorage.setItem("assignModules", JSON.stringify(res));
    setSignal(true);
  };
  const onFailureMenuFetch = (e) => {
    swal("Sorry!", e.message, "error");
    setIsLogin(false);
  };
  const OnSuccess = (res) => {
    // console.log(res);
    // swal("Congratulations!", "You have Logged in successfully ", "success");
    // swal({
    //   title: "Congratulations!",
    //   text: "You have Logged in successfully",
    //   icon: "success",
    //   // buttons : true,
    // }).then((isOk) => {
    //   if (isOk) {
    //     setSignal(true);
    //   }
    // });
    props.navMenuMiddleware(
      res[0].token,
      onSuccessMenuFetch,
      onFailureMenuFetch
    );
    // SaveData();
  };
  const OnFailure = (e) => {
    swal("Sorry!", e.message, "error");
    setIsLogin(false);
    // Notify();
  };
  const SaveData = () => {};
  useEffect(() => {
    if (props.Data !== null && props.Data !== undefined) {
      let values = {
        token: props.Data[0].token,
        teamid: props.Data[0].teamid,
        roleid: props.Data[0].roleid,
        user_role_name: props.Data[0].user_role_name,
        username: props.Data[0].username,
        Userid: props.Data[0].Userid,
      };
      localStorage.setItem("auth", values.token);
      localStorage.setItem("teamid", values.teamid);
      localStorage.setItem("roleid", values.roleid);
      localStorage.setItem("user_role_name", values.user_role_name);
      localStorage.setItem("Userid", values.Userid);
      localStorage.setItem("username", values.username);
      // if (values.token === '' && values.teamid === '' && values.roleid === '') {
      //   let path = "/auth/login";
      // history.push(path);
      // }
      // else {
      //   let path = "/admin/index";
      // history.push(path);
      // }
    }
  }, [props.Data]);

  const Verify = () => {
    let token = localStorage.getItem("auth");
    //let token =
    //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGVfaWQiOjEsIkRhc2hib2FyZHVzZXJpZCI6MywiZW1haWwiOiJtLWZhcmF6LmlxYmFsQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJuYW1lIjoiZmFyYXoiLCJwaG9uZU5vIjoiMDMwMDIxNDEyNTgiLCJzdGF0dXNfaWQiOjQsIkRlc2NyaXB0aW9uIjoiIiwiRGF0ZXRpbWUiOiIyMDIxLTA1LTEyVDA2OjU5OjAwLjAwMFoiLCJ0ZWFtaWQiOm51bGx9LCJpYXQiOjE2MjU2Mzg0NjQsImV4cCI6MTYyNTcyNDg2NH0._Tj68itdEbCkoH1ZpfzTZtRxMlxsCIfQ07u2sm6Ew5c";
    axios
      .post(`${BASEURL}Dashboarduserloginveryfy`, null, {
        headers: {
          Authorization: `Bearer${token}`,
        },
      })
      .then((res) => {});
  };
  const [signal, setSignal] = useState(false);
  useEffect(() => {
    if (signal === true) {
      setIsLogin(false);
      let path = "/admin/index";
      history.push(path);
    }
  }, [signal]);
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("token") !== undefined &&
  //     localStorage.getItem("token") !== null
  //   ) {
  //     let path = "admin/index";
  //     history.push(path);
  //   }
  // }, [true]);

  const OnChange = (value, name) => {
    setBody({
      ...body,
      [name]: value,
    });
  };
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });
  const CheckFields = (name) => {
    if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", body.email),
      });
    } else if (name === "password") {
      setError({
        ...error,
        passwordError: validate("password", body.password),
      });
    }
  };
  const onKeyPressed = (e) => {
    if (e.key === "Enter") {
      ValidateLogin();
    }
  };

  localStorage.setItem("token", props.Data);

  useEffect(() => {
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true]);

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};

  useEffect(() => {
    if (props.GetUserJWTLogin === false) {
      localStorage.removeItem("auth");
      window.location.href = "/auth/login";
    }
  });
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      {/* <HtmlPrint ref={componentRef} /> */}
      {/* <TransferRequest ref={componentRef} /> */}
      {/* <div>
       
        <TransferReceipt ref={componentRef} />
      </div>
      <div>
        <Button color="success" onClick={handlePrint} size="sm">
          Print &nbsp;
          <i class="fas fa-print"></i>
        </Button>
      </div> */}

      <NotificationAlert ref={notify} />
      <Col lg="7" md="7"></Col>

      <Col className="mt-5" lg="5" md="7">
        <Card className="customLogin">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <img height="150px" src={Logo} /> <br />
              <small style={{ fontWeight: "bold", color: "black" }}>
                Sign In
              </small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    onBlur={() => CheckFields("email")}
                    value={body.email}
                    onChange={(e) => OnChange(e.target.value, "email")}
                  />
                </InputGroup>
                {error.emailError !== "" && error.emailError !== null && (
                  <small>
                    <span style={{ color: "red" }}>
                      {error.emailError}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    onBlur={() => CheckFields("password")}
                    value={body.password}
                    onChange={(e) => OnChange(e.target.value, "password")}
                    //onKeyPress={(e) => onKeyPressed(e)}
                    onKeyDown={(e) => onKeyPressed(e)}
                  />
                </InputGroup>
                {error.passwordError !== "" && error.passwordError !== null && (
                  <small style={{ marginTop: "2px" }}>
                    <span style={{ color: "red" }}>
                      {error.passwordError}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
              </FormGroup>
              <div className="text-center">
                <Button
                  style={{ backgroundColor: "#0E517E", color: "white" }}
                  className="my-4"
                  type="button"
                  onClick={ValidateLogin}
                  // onClick={ValidateLogin}
                  disabled={isLogin}
                >
                  {isLogin ? "Loading..." : "Sign in"}
                </Button>
              </div>
            </Form>
            <Row className="mt-3 text-center">
              <Col xs="12">
                <a className="text-light" href="./Forget">
                  <small style={{ color: "black", fontWeight: "bold" }}>
                    Forgot password?
                  </small>
                </a>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

// export default Login;

const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Login);
