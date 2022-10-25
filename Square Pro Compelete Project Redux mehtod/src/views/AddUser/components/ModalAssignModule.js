import { Button, Form, message, Modal, Select } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ModalAssignModule = ({ setIsModalVisible, isModalVisible, adminId }) => {
  const [moduleId, setModuleId] = useState(null);
  const modules = useSelector((state) => state.adminUserReducer.modules);
  const history = useHistory();
  const { Option } = Select;

  const handleOk = () => {
    // setIsModalVisible(false);
    if (moduleId && adminId) {
      history.push({
        pathname: "/user/assignModule",
        state: { adminUserId: adminId, moduleId: moduleId },
      });
    } else {
      message.error("Required All Fields");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Modal
        title="Modules"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" onClick={handleOk} className="customBtn">
            Proceed
          </Button>,
        ]}
      >
        <Form
          name="basic"
          //   labelCol={{
          //     span: 4,
          //   }}
          //   wrapperCol={{
          //     span: 20,
          //   }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          //   style={{ padding: "2%" }}
        >
          {/* <Row gutter={16}>
            <Col className="gutter-row" span={24}> */}
          <Form.Item
            label="Select Module"
            name="moduleId"
            rules={[
              {
                required: true,
                message: "Please select get rights!",
              },
            ]}
          >
            <Select
              defaultValue="Select"
              onChange={(value) => setModuleId(value)}
            >
              {modules?.items.map((item, key) => {
                return (
                  <Option value={item.id} key={key}>
                    {item.title}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          {/* </Col>
          </Row> */}
        </Form>
      </Modal>
    </>
  );
};

export default ModalAssignModule;
