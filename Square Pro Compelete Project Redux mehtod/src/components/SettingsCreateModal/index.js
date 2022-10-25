import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, message, Modal, Input } from "antd";
import { useForm } from "antd/lib/form/Form";

// import { createProjectPlotFeatureAction } from "../../../../../store/actions/utilsActions";

const SettingsCreateModal = ({
  setIsModalVisible,
  isModalVisible,
  title,
  action,
}) => {
  const dispatch = useDispatch();
  const [form] = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSuccess = (msg, res) => {
    form.resetFields();
    setIsLoading(false);
    setIsModalVisible(false);
  };
  const onFailure = (error) => {
    message.error(error);
    setIsLoading(false);
  };

  const onFinish = (values) => {
    dispatch(action(values, onSuccess, onFailure));
    setIsLoading(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Modal
        title={`Create ${title}`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          form={form}
          style={{ padding: "2%" }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input className="formField" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Button htmlType="submit" className="customBtn" loading={isLoading}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SettingsCreateModal;
