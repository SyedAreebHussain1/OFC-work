import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../assets/img/newlogo.png";
import Picture from "../../../assets/img/back.png";
import '../../../assets/css/bg-style.css'
// reactstrap components
import { connect } from "react-redux";
import {JwtDashboard} from "../../../store/helpers/JwtTimer/middleware";
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
import { Updatepassword } from "../../../config/api/URL";
import axios from "axios";
import swal from 'sweetalert';
const ResetPassword = (props) => {
  //hooks import

  const notify = useRef(null);

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
  // const ValidateLogin = () => {
  //
  //   props.CheckUserLogin(body, OnSuccess, OnFailure);
  // };

  const Notify = () => {
    notify.current.notificationAlert(options);
  };
  const OnSuccess = () => {
    SaveData();
  };

  const SaveData = () => {
    
  };
  const [body, setBody] = useState({
    password: "",
    // Confirm: "",
  });

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
        emailError: validate("signupPassword", body.Create),
      });
    } else if (name === "password") {
      setError({
        ...error,
        passwordError: validate("signupPassword", body.Confirm),
      });
    }
  };
  const OnFailure = () => {
    Notify();
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const param = queryParams.get("param");
    setbody1(param);
   
  }, [true]);

  if (body.Create != body.Confirm) {
  } else {
    body.password = body.Create;
  }
  const [data, setData] = useState(null);
  const [body1, setbody1] = useState();

  axios({
    method: "put",
    url: Updatepassword,
    data: body,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearar ${body1}`,
      // "Authorization" :  `bearar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE3LCJpYXQiOjE2MjY0Mjk3OTF9.waJj6bOyunzubmXU2NTsFWPuIffXarmXM4rbRvBjl8A`,
    },
  }).then((res, err) => {
    if (res.data.status === true) {
      setData(res.data.response);
    } else {
     
    }
  });

  const ForgetEmail = () => {
 
    if (body.Create == body.Confirm) {
      swal("Congratulations!", "Password has been changed", "success");
    }
    else {
      swal("Sorry!", "Passwords did not match", "error");
    }


  }

  useEffect(() => {
    props.JwtDashboard( OnSuccessJwt, OnFailureJwt)
  },[true])
  
 
  
  const OnSuccessJwt = ()=>{}
  const OnFailureJwt = ()=>{}

  useEffect(()=>{
    if(props.GetUserJWTLogin === false){
      localStorage.removeItem("auth")
      window.location.href="/auth/login"
    }
  })
  return (
    <>
      <NotificationAlert ref={notify} />
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-1 bg-pic">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <img height='150px' src={Logo} /> <br />
              <small>Reset Password</small>
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
                    placeholder="Create Password"
                    type="password"
                    onBlur={() => CheckFields("email")}
                    value={body.Create}
                    onChange={(e) => OnChange(e.target.value, "Create")}
                  />
                </InputGroup>

                {error.emailError !== "" && error.emailError !== null && (
                  <small>
                    <span style={{ color: "red" }}>{error.emailError}</span>
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
                    placeholder="Confirm Password"
                    type="password"
                    onBlur={() => CheckFields("password")}
                    value={body.Confirm}
                    onChange={(e) => OnChange(e.target.value, "Confirm")}
                  />
                </InputGroup>

                {/* {error.emailError !== "" && error.emailError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                      {error.emailError}
                      </span>
                    </small>
                 )}  */}
              </FormGroup>

              <div className="text-center">
                <Button
                  style={{ color: "white", backgroundColor: "#8CBC4B" }}
                  className="my-4"
                  type="button"
                  onClick={ForgetEmail}
                >
                  Save
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

// export default ResetPassword;
const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (OnSuccess, OnFailure) =>
      dispatch(JwtDashboard( OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ResetPassword);


