import { useEffect, useState } from "react";
import { Button, Form, Input, Card, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signIn } from "../../../store/actions/authActions";
import {
  adminProfile,
  assignModule,
} from "../../../store/actions/adminProfileActions";
import LOGO from "../../../assets/images/squarepro1.png";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.adminProfileReducer);
  const [isLoading, setIsLoading] = useState(false);

  const onSuccess = (token) => {
    dispatch(adminProfile(token));
    dispatch(assignModule(token));
    setIsLoading(false);
  };

  const onFailure = (error) => {
    message.error(error);
    setIsLoading(false);
  };

  const onFinish = (values) => {
    dispatch(
      signIn(
        { ...values, deviceToken: localStorage.getItem("FCM") },
        onSuccess,
        onFailure
      )
    );
    setIsLoading(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    let { adminProfile, modules } = state;
    if (token !== "" && token && adminProfile && modules) {
      history.push("/user/dashboard");
    }
  }, [state]);

  return (
    <>
      <Card
        bordered={true}
        className="signIn_main"
        cover={<img alt="example" className="signIn_main_Img" src={LOGO} />}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 25,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input className="formField" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="formField" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button htmlType="submit" className="customBtn" loading={isLoading}>
              Sing In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default SignIn;
