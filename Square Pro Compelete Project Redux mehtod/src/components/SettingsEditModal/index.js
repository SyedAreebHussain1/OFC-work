import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, message, Modal, Input } from "antd";
import { useForm } from "antd/lib/form/Form";

// import { editProjectPlotFeatureAction } from "../../../../../store/actions/utilsActions";

const SettingsEditModal = ({
  setIsEditModalVisible,
  isEditModalVisible,
  Title_ID,
  title,
  action,
}) => {
  const dispatch = useDispatch();
  const [form] = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = () => {
    setIsEditModalVisible(false);
  };

  const onSuccess = (msg) => {
    form.resetFields();
    setIsLoading(false);
    setIsEditModalVisible(false);
  };
  const onFailure = (error) => {
    message.error(error);
    setIsLoading(false);
  };

  const onFinish = (values) => {
    dispatch(action(Title_ID.id, values, onSuccess, onFailure));
    setIsLoading(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    form.setFieldsValue({ title: Title_ID.title });
  }, [Title_ID]);
  return (
    <>
      <Modal
        title={`Edit ${title}`}
        visible={isEditModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          initialValues={{ remeber: true }}
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
            key="title"
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
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SettingsEditModal;
