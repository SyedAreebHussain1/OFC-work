import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Card, Col, Row, Button, Form, message, Select, Input } from "antd";

import {
  getPlotCategoryAction,
  getPlotPositionAction,
  getPlotSectorAction,
  getPlotStreetAction,
  getPlotTypeAction,
} from "../../../store/actions/utilsActions";
import { projectAddPlotAction } from "../../../store/actions/projectActions";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";

const AddPlot = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { plotCategory, plotPosition, plotSector, plotStreet, plotTypes } =
    useSelector((state) => state.utilsReducer);

  const { Option } = Select;
  const { state } = location;

  const [isLoading, setIsLoading] = useState(false);

  const onSuccess = () => {
    form.resetFields();
    message
      .success("Successfully add plot, it will redirect in 3 seconds", 3)
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
    dispatch(projectAddPlotAction(body, onSuccess, onFailure));
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
    dispatch(getPlotCategoryAction(1, 10000));
    dispatch(getPlotPositionAction(1, 10000));
    dispatch(getPlotSectorAction(1, 10000));
    dispatch(getPlotStreetAction(1, 10000));
    dispatch(getPlotTypeAction(1, 10000));
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Card
        bordered={false}
        title="Add Plot Form"
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
                label="Plot No.:"
                name="plotNo"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Input className="formField" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={8}>
              <Form.Item
                label="Plot Category:"
                name="plotCategoryId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  // mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                  // defaultValue={["a10", "c12"]}
                  // onChange={handleChange}
                >
                  {plotCategory?.items.map((item, key) => {
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
                label="Plot Position:"
                name="plotPositionId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  // mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {plotPosition?.items.map((item, key) => {
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
                label="Plot Sector:"
                name="plotSectorId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  // mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {plotSector?.items.map((item, key) => {
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
                label="Plot Street:"
                name="plotStreetId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  // mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {plotStreet?.items.map((item, key) => {
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
                label="Plot Type:"
                name="plotTypeId"
                rules={[
                  {
                    required: true,
                    message: "Required!",
                  },
                ]}
              >
                <Select
                  // mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select"
                >
                  {plotTypes?.items.map((item, key) => {
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

export default AddPlot;
