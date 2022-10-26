import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState,useEffect } from 'react';
import "./Style.css"
import { useHistory, useNavigate,Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import  {signInAction}  from "../../../store/action/signIn"
import  {authSignIn}  from "../../../store/reducer/authSignIn"


const Login = () => {
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log(r)
    const [body, setBody] = useState({
        email: null,
        password: null,
        deviceToken: r
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.authSignIn);
    console.log("state=>", state.signin);

    const logInn = (e) => {
        e.preventDefault();
        // setDeviceTokan(r)
        if (body) {
            dispatch(signInAction(body));
        }
    }
    useEffect(() => {
        if (state?.signin?.statusCode == 201) {
          alert(state?.signin?.message);
        //  navigate('/account_verify')
        }
         else if (state?.signin?.statusCode == 400) {
          alert(state?.signin?.message);
        }
      }, [state.signin]);
    return (
        <div style={{ boder: '1px solid black', width: '50%' }}>
            {/* <h4>Login</h4> */}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            // onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                        value={body.email}
                        onChange={(text) =>
                            setBody({ ...body, email: text.target.value })
                        }
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        value={body.password}
                        onChange={(text) =>
                            setBody({ ...body, password: text.target.value })
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <Link to='/forgot_password' className="login-form-forgot">
                        Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" className="login-form-button" onClick={logInn}>
                        Log in
                    </Button>
                    Or <Link to='/'>Create Account</Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login;
