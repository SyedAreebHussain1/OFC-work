import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Input,
  message,
  Space,
  Pagination,
} from "antd";
import { useForm } from "antd/lib/form/Form";

import {
  createAdminUser,
  getAllAdminAction,
  getModulesAction,
} from "../../store/actions/adminUserActions";
import TableAdminUser from "./components/TableAdminUser";
import { HEAD_STYLE_CSS } from "../../constants/headStyle";

const AddUser = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { createAdminRes, allAdminUser } = useSelector(
    (state) => state.adminUserReducer
  );

  const onSuccess = (msg, res) => {
    message.success(msg);
    setIsLoading(false);
    form.resetFields();
  };
  const onFailure = (error) => {
    message.error(error.message);
    setIsLoading(false);
  };

  const onFinish = (values) => {
    dispatch(createAdminUser(values, onSuccess, onFailure));
    setIsLoading(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onShowSizeChange = (current, pageSize) => {
    setPageNumber(current === 0 ? 1 : current);
    setPageLimit(pageSize);
  };

  const onChange = (e) => {
    setPageNumber(e === 0 ? 1 : e);
  };

  useEffect(() => {
    dispatch(getAllAdminAction(pageNumber, pageLimit));
  }, [createAdminRes, pageNumber, pageLimit]);

  useEffect(() => {
    dispatch(getModulesAction());
  }, []);

  return (
    <>
      <Card
        bordered={false}
        title="Add Employee Form"
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
          form={form}
        >
          <Row gutter={16}>
            <Col className="gutter-row" lg={12} md={24} sm={24} xs={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input className="formField" />
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={12} md={24} sm={24} xs={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input className="formField" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" lg={12} md={24} sm={24} xs={12}>
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
            </Col>

            <Col className="gutter-row" lg={12} md={24} sm={24} xs={12}>
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
            </Col>
            <Col className="gutter-row" lg={12} md={24} sm={24} xs={12}>
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
                  Add
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

      <div style={{ marginTop: "5%" }}>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          <TableAdminUser allAdmin={allAdminUser} />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            defaultCurrent={1}
            total={allAdminUser?.meta?.totalItems}
          />
        </Space>
      </div>
    </>
  );
};

export default AddUser;
