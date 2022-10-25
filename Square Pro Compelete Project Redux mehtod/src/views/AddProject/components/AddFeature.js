import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Card, Col, Row, Button, Form, message, Select } from "antd";

import {
  getProjectCommunityFeatureAction,
  getProjectMainFeatureAction,
  getProjectNearByLocationAction,
  getProjectOtherFeatureAction,
  getProjectPlotFeatureAction,
  getProjectRecreationalAction,
} from "../../../store/actions/utilsActions";
import { projectAddFeatureAction } from "../../../store/actions/projectActions";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";

const AddFeature = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const {
    projectCommunityFeature,
    projectMainFeature,
    projectNearByLocation,
    projectOtherFeature,
    projectPlotFeature,
    projectRecreational,
  } = useSelector((state) => state.utilsReducer);

  const { Option } = Select;
  const { state } = location;

  const onSuccess = () => {
    form.resetFields();
    message
      .success("Successfully add feature, it will redirect in 3 seconds", 3)
      .then(() => {
        history.push("/user/add_project");
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
    dispatch(projectAddFeatureAction(body, onSuccess, onFailure));
    setIsLoading(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (!state) {
      history.push("/user/add_project");
    }
  }, [state]);

  useEffect(() => {
    dispatch(getProjectCommunityFeatureAction(1, 10000));
    dispatch(getProjectMainFeatureAction(1, 10000));
    dispatch(getProjectNearByLocationAction(1, 10000));
    dispatch(getProjectOtherFeatureAction(1, 10000));
    dispatch(getProjectPlotFeatureAction(1, 10000));
    dispatch(getProjectRecreationalAction(1, 10000));
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <Card
        bordered={false}
        title="Add Feature Form"
        className="criclebox tablespace mb-24"
        headStyle={HEAD_STYLE_CSS}
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
          style={{ padding: "2%" }}
        >
          <Row gutter={16}>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={8}>
              <Form.Item
                label="Project Community Feature:"
                name="projectCommunityFeatureId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                  // defaultValue={["a10", "c12"]}
                  // onChange={handleChange}
                >
                  {projectCommunityFeature?.items.map((item, key) => {
                    return (
                      <Option value={item.id} key={key}>
                        {item.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={8}>
              <Form.Item
                label="Project Main Feature:"
                name="projectMainFeatureId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {projectMainFeature?.items.map((item, key) => {
                    return (
                      <Option value={item.id} key={key}>
                        {item.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={8}>
              <Form.Item
                label="Project Near By Location:"
                name="projectNearByLocationId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {projectNearByLocation?.items.map((item, key) => {
                    return (
                      <Option value={item.id} key={key}>
                        {item.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={8}>
              <Form.Item
                label="Project Other Feature:"
                name="projectOtherFeatureId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {projectOtherFeature?.items.map((item, key) => {
                    return (
                      <Option value={item.id} key={key}>
                        {item.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={8} md={12} sm={24} xs={8}>
              <Form.Item
                label="Project Plot Feature:"
                name="projectPlotFeatureId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {projectPlotFeature?.items.map((item, key) => {
                    return (
                      <Option value={item.id} key={key}>
                        {item.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={8}>
              <Form.Item
                label="Project Recreational:"
                name="projectRecreationalId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {projectRecreational?.items.map((item, key) => {
                    return (
                      <Option value={item.id} key={key}>
                        {item.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
              <Form.Item>
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
    </div>
  );
};

export default AddFeature;
