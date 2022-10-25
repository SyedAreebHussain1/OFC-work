import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Card, Col, Row, Button, Form, message, Select } from "antd";

import { assignModuleAction } from "../../../store/actions/adminUserActions";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";

const CreateAssignModule = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const { Option } = Select;
  const { state } = location;

  const onSuccess = () => {
    message
      .success("Successfully assigned module, it will redirect in 3 seconds", 3)
      .then(() => {
        history.push("/user/add_user");
      });
    setIsLoading(false);
  };
  const onFailure = (error) => {
    message.error(error);
    setIsLoading(false);
  };

  const onFinish = (values) => {
    let body = {
      ...state,
      ...values,
    };
    dispatch(assignModuleAction(body, onSuccess, onFailure));
    setIsLoading(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (!state) {
      history.push("/user/add_user");
    }
  }, [state]);
  return (
    <div style={{ height: "100vh" }}>
      <Card
        bordered={false}
        title="Assign Module Form"
        className="criclebox tablespace mb-24"
        headStyle={HEAD_STYLE_CSS}
      >
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="horizontal"
          style={{ padding: "2%" }}
        >
          <Row gutter={16}>
            <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Get"
                name="get"
                rules={[
                  {
                    required: true,
                    message: "Please select get rights!",
                  },
                ]}
              >
                <Select defaultValue="Select">
                  <Option value={true}>True</Option>
                  <Option value={false}>False</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Put"
                name="put"
                rules={[
                  {
                    required: true,
                    message: "Please select put rights!",
                  },
                ]}
              >
                <Select defaultValue="Select">
                  <Option value={true}>True</Option>
                  <Option value={false}>False</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Post"
                name="post"
                rules={[
                  {
                    required: true,
                    message: "Please select post rights!",
                  },
                ]}
              >
                <Select defaultValue="Select">
                  <Option value={true}>True</Option>
                  <Option value={false}>False</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Delete"
                name="delete"
                rules={[
                  {
                    required: true,
                    message: "Please select delete rights!",
                  },
                ]}
              >
                <Select defaultValue="Select">
                  <Option value={true}>True</Option>
                  <Option value={false}>False</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 16,
                }}
              >
                <Button
                  htmlType="submit"
                  className="customBtn"
                  loading={isLoading}
                >
                  Assign
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default CreateAssignModule;
