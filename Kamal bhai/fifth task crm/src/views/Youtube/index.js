import React, { useState, useRef, useEffect } from "react";

import Picture from "../../assets/img/back.png";
import Logo from "../../assets/img/newlogo.png";
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
// import NotificationAlert from "react-notification-alert";
import validate from "../../components/Utilities Component/ValidationWrapper";
import axios from "axios";
import { InsertNewUser } from "../../config/api/URL";
import { Alert } from "bootstrap";
const Login = (props) => {
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const [body, setBody] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    Leadsource: "",
    Dashboarduserid:null,
  });
  const OnChange = (value, name) => {
    setBody({
      ...body,
      [name]: value,
    });
  };
  const CheckFields = (name) => {
    //
    if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", body.user_email),
      });
    } else if (name === "phoneNumber") {
      setError({
        ...error,
        phoneError: validate("phoneNumber", body.user_phone),
      });
    } else if (name === "fullname") {
      setError({
        ...error,
        nameError: validate("fullName", body.user_name),
      });
    }
  };
  //method import
  const ValidateLogin = () => {
    axios({
      method: "post",
      url: "http://squarepro.net/CallRecordingAPI/insertnewuser",
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.data.status === true) {
        setBody(res.data.response);
     
        window.alert("Success")
      } else {
     
      }
    });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const param = queryParams.get("source");
    setBody({ ...body, Leadsource: param });
 
  }, [true]);

 

  return (
    <>
      {/* <NotificationAlert ref={notify} py-6 py-lg--18/> */}
      
      <Col lg="5" md="7" py-5>
      <Card  className="bg-secondary shadow border-1 bg-pic">
          <CardBody className="px-lg-5 py-lg-2">
          <Col className="col-auto">
                <div className="icon icon-shape  text-red ">
                  <i className="fab fa-youtube" />
                </div>
              </Col>
            <div className="text-center text-muted mb-4">
              
              <img height='150px' src={Logo}  /> <br />
              <small>Youtube</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name"
                    type="text"
                    onBlur={() => CheckFields("fullname")}
                    value={body.user_name}
                    onChange={(e) => OnChange(e.target.value, "user_name")}
                  />
                </InputGroup>
                {error.nameError !== "" && error.nameError !== null && (
                  <small>
                    <span style={{ color: "red" }}>
                      <i className="fas fa-exclamation-circle"></i>
                      {error.nameError}
                    </span>
                  </small>
                )}
              </FormGroup>
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
                    value={body.user_email}
                    onChange={(e) => OnChange(e.target.value, "user_email")}
                  />
                </InputGroup>
                {error.emailError !== "" && error.emailError !== null && (
                  <small>
                    <span style={{ color: "red" }}>
                      <i className="fas fa-exclamation-circle"></i>
                      {error.emailError}
                    </span>
                  </small>
                )}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-mobile-button" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="0312-xxx-xxxx"
                    type="number"
                    onBlur={() => CheckFields("phoneNumber")}
                    value={body.user_phone}
                    onChange={(e) => OnChange(e.target.value, "user_phone")}
                  />
                </InputGroup>
                {error.phoneError !== "" && error.phoneError !== null && (
                  <small style={{ marginTop: "2px" }}>
                    <span style={{ color: "red" }}>
                      <i className="fas fa-exclamation-circle"></i>
                      {error.phoneError}
                    </span>
                  </small>
                )}
              </FormGroup>
              <div className="text-center">
                <Button
                  className="my--2 my-lg-1"
                  color="success"
                  type="button"
                  onClick={() => ValidateLogin()}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default Login;
