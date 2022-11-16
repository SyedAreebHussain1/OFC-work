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
import swal from "sweetalert";
import NotificationAlert from "react-notification-alert";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import axios from "axios";
import { testing } from "../../../config/api/URL";
import { useHistory, Redirect } from "react-router-dom";
import {JwtDashboard} from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";

const Forget = (props) => {

  let history = useHistory();
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

  const Notify = () => {
    // notify.current.notificationAlert(options);
    swal("Sorry!", "Incorrect Email", "error");
  };
  

  const ValidateLogin = () => {
 
    if(error.emailError==null)
    {
      props.CheckUserForget(body, onSuccessStatus(props.Data), onFailureStatus);
    }
    else{
      swal("Sorry!", "Enter Correct Email", "error");
    }
    
  };
  const [body, setBody] = useState({
    email: "",
  });

  const OnChange = (value, name) => {
    setBody({
      ...body,
      [name]: value,
    });
  };
  const [error, setError] = useState({
    emailError: "",
  });
  const CheckFields = (name) => {
    if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", body.email),
      });
    }
  };
  
  const [data, setData] = useState(null);

  // const ForgetEmail = () => {

  //

  //   axios({
  //     method: "post",
  //     url: testing,
  //     data: body,
  //   }).then((res) => {
  //     if (res.data.status === true) {
  //       setData(res.data.response);
  //     } else {
  //       
  //     }
  //   });
  // }

  // Order Status Name
 
  // useEffect(() => {
  //   props.CheckUserLogin(body, onSuccessStatus, onFailureStatus);
  // }, [body]);
  const [signal, setSignal] = useState(false);
  useEffect(() => {
    if (signal === true) {
      let path = "/auth/login";
      history.push(path);
    }
  }, [signal]);
  const onSuccessStatus = () => {
    swal("Congratulations!", "Your reset password link has been sent to you email", "success");
    swal({
      title: "Congratulations!",
      text: "Your reset password link has been sent to you email",
      icon: "success",
      // buttons : true,
    }).then((isOk) => {
      if (isOk) {
        setSignal(true);
      }
    });
  };
  const onFailureStatus = () => {
    Notify();
  };

  const forgetpassword = () =>{
   props.CheckUserLogin(body, OnSuccess, OnFailure);
  }

  const OnSuccess = () => {
  

    swal("done ");
    return ;
   
  };

  
  const OnFailure = () => {
    
    swal("error ");
  

     //Notifyy
  };
 
  // const Notifyy = () =>{
  //   swal("Sorry!", "Incorrect Email", "error");
  // }

  const OnSuccessJwt = ()=>{}
    const OnFailureJwt = ()=>{}
  
    useEffect(() => {
      props.JwtDashboard( OnSuccessJwt, OnFailureJwt)
    },[true])
  
    useEffect(() => {
    },[props.GetUserJWTLogin])
  
    useEffect(() => {
      if(props.GetUserJWTLogin === false) {
        localStorage.removeItem("auth")
        window.location.href="/auth/login"
      }
    })

  return (
    <>
      {/* <NotificationAlert ref={notify} /> */}
      <Col lg="5" md="7">
      <Card  className="bg-secondary shadow border-1 bg-pic-forget">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <img height='150px'  src={Logo} /> <br />
              {/* <small>Forget</small> */}
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
                    <span style={{ color: "red" }}>{error.emailError}</span>
                  </small>
                )}
              </FormGroup>

              <div className="text-center">
                <Button
                  className="my-4"
                  style={{color:'white',backgroundColor:'#8CBC4B'}}
                  type="button"
                  onClick={ValidateLogin}
                >
                  Send Link
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

// export default Forget;

const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin
});
const mapDispatchToPrpos = (dispatch) => {
  return {
      JwtDashboard: ( OnSuccess, OnFailure) =>
      dispatch(JwtDashboard( OnSuccess, OnFailure)),

      
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Forget);
