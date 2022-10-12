import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logInFun } from "../../store/action";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const LoginForm = (props) => {
  console.log("loginprops=>", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deviceTokan, setDeviceTokan] = useState();

  const navigate = useNavigate();
  const logIn = (e) => {
    e.preventDefault();
    let r = (Math.random() + 1).toString(36).substring(7);
    // console.log("random", r)
    setDeviceTokan(r)
    if (email && password && deviceTokan) {
      props.logInFun({
        email: email,
        password: password,
        deviceTokan: deviceTokan,
      })
      navigate('/home', { state: { email: email, password: password } });
    }
  };
  // useEffect(() => {
  //   if (props.users) {
  //     navigate("/home");
  //   }
  // });
  // useEffect(() => {
  //     if (props.users.users == null) {
  //         setEmail('')
  //         setPassword('')
  //     }
  // }, [])
  return (
    <div className="mainDiv">
      <div
        style={{
          border: "1px solid gray",
          width: "30%",
          height: "50%",
          marginTop: "10%",
          marginLeft: "35%",
        }}
      >
        <h1>LOGIN</h1>
        <Form onSubmit={logIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(text) => setEmail(text.target.value)}
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(text) => setPassword(text.target.value)}
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          &nbsp;&nbsp;
          <Link to='/'>Create account</Link>
        </Form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  logInFun: (data) => dispatch(logInFun(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);