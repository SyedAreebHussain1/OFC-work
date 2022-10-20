import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { logInFun } from "../../store/action/index"



function LoginForm(props) {
    console.log('LoginForm=>', props)
    console.log('LoginForm=>', props.login)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [deviceTokan, setDeviceTokan] = useState();

    const navigate = useNavigate()
    const logIn = (e) => {
        e.preventDefault()
        let r = (Math.random() + 1).toString(36).substring(7);
        setDeviceTokan(r)
        if (email && password && deviceTokan) {
            props.logInFun({
                email: email,
                password: password,
                deviceTokan: deviceTokan
            })
        }
    }
    useEffect(() => {
        // console.log(props.login?.statusCode);
        if (props.login?.statusCode == 201) {
            alert(props.login.message)
            navigate("/home");
        } else if (props.login?.statusCode == 401) {
            alert(props.login.message)
        }
    }, [props.login])
    return (
        <div className="mainDiv">
            <div style={{
                border: "1px solid gray",
                padding: '20px',
                width: "50%",
                height: "100%",
                marginTop: "10px",
                marginLeft: "25%",
            }}>
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
                            <Link to='/forgetpassword'> Forget Password</Link>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    &nbsp;&nbsp;
                    <Link to='/'>Create new account</Link> <br />
                    <Form.Text className="text-muted">Our verification team vets all requests thoroughly and bases their review on a number of inputs to determine whether an account is eligible to be verified.</Form.Text>
                </Form>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    login: state.login,
});
const mapDispatchToProps = (dispatch) => ({
    logInFun: (data) => dispatch(logInFun(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);