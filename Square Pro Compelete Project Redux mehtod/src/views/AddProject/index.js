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
  Upload,
  Select,
  InputNumber,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { UploadOutlined } from "@ant-design/icons";

import {
  getCityByCountryIdAction,
  getCountryAction,
} from "../../store/actions/utilsActions";
import {
  createProjectAction,
  getProjectsAction,
} from "../../store/actions/projectActions";
import TableProject from "./components/TableProject";
import { HEAD_STYLE_CSS } from "../../constants/headStyle";
import { photoUploadAction } from "../../store/actions/agencyActions";
import { PHOTO_UPLOAD_SUCCESS } from "../../constants/agencyConstants";

const AddProject = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const { Option } = Select;

  const [isLoading, setIsLoading] = useState(false);
  const [countryId, setCountryId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  // const [logoUrl, setLogoUrl] = useState(null);

  const { countries, cityByCountryId } = useSelector(
    (state) => state.utilsReducer
  );
  const { allProjects, createProjectRes } = useSelector(
    (state) => state.projectReducer
  );
  const { photoUrl } = useSelector((state) => state.agencyReducer);

  const onSuccess = (msg, res) => {
    message.success(msg);
    setIsLoading(false);
    form.resetFields();
    handleResetReduxState();
  };

  const handleResetReduxState = () => {
    dispatch({ type: PHOTO_UPLOAD_SUCCESS, payload: null });
  };

  const onFailure = (error) => {
    message.error(error.message);
    setIsLoading(false);
  };

  const onFinish = (values) => {
    delete values.logo;
    if (photoUrl) {
      dispatch(
        createProjectAction(
          {
            ...values,
            logo_url: photoUrl,
          },
          onSuccess,
          onFailure
        )
      );
      setIsLoading(true);
    } else if (photoUrl === null) {
      message.error("Choose Photo");
    }
  };

  const handlePhotoUpload = (file) => {
    // const reader = new FileReader();
    let formData = new FormData();
    formData.append("formFile", file);
    // reader.onload = (e) => {
    dispatch(photoUploadAction(formData));
    //   console.log(e,file);
    //   // setLogoUrl(e.target.result);
    // };
    // reader.readAsText(file);

    // Prevent upload
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
    if (countryId) {
      dispatch(getCityByCountryIdAction(countryId));
    }
  }, [countryId]);

  useEffect(() => {
    dispatch(getProjectsAction(pageNumber, pageLimit));
  }, [createProjectRes, pageNumber, pageLimit]);

  useEffect(() => {
    dispatch(getCountryAction());
  }, []);

  return (
    <>
      <Card
        bordered={false}
        title="Project Registration Form"
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
          form={form}
        >
          <Row gutter={16}>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="Title:"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input your project Title!",
                  },
                ]}
              >
                <Input className="formField" />
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="Country:"
                name="countryId"
                rules={[
                  {
                    required: true,
                    message: "Please input your Country!",
                  },
                ]}
              >
                <Select
                  defaultValue="Select"
                  onChange={(value) => setCountryId(value)}
                >
                  {countries?.map((item, key) => {
                    return (
                      <Option value={item.id} key={key}>
                        {item.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="City:"
                name="cityId"
                rules={[
                  {
                    required: true,
                    message: "Please input your City!",
                  },
                ]}
              >
                <Select
                  defaultValue="Select"
                  disabled={!cityByCountryId?.items}
                >
                  {cityByCountryId?.items.map((item, key) => {
                    return (
                      <Option value={item.id} key={key}>
                        {item.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="Project Type:"
                name="projectType"
                rules={[
                  {
                    required: true,
                    message: "Please input your Project Type!",
                  },
                ]}
              >
                <Input className="formField" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="Coordinates:"
                name="coordinates"
                rules={[
                  {
                    type: "number",
                    required: true,
                    message: "Please input your Coordinates!",
                  },
                ]}
              >
                <InputNumber min={1} className="inputTypeNum" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="Price Range:"
                name="priceRange"
                rules={[
                  {
                    required: true,
                    message: "Please input your Price Range!",
                  },
                ]}
              >
                <Input className="formField" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="Developer Name:"
                name="developerName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Developer Name!",
                  },
                ]}
              >
                <Input className="formField" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="Description:"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input your Description!",
                  },
                ]}
              >
                <Input className="formField" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item
                label="Logo"
                name="logo"
                rules={[
                  {
                    required: true,
                    message: "Please upload Logo!",
                  },
                ]}
              >
                {/* photoUploadAction */}
                <Upload
                  accept=".png,.jpg,.jpeg"
                  // showUploadList={false}
                  beforeUpload={(file) => {
                    handlePhotoUpload(file);
                    return false;
                  }}
                  onRemove={handleResetReduxState}
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={8} md={24} sm={24} xs={8}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  className="customBtn"
                  loading={isLoading}
                >
                  Create
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
          <TableProject allProjects={allProjects} />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            defaultCurrent={1}
            total={allProjects?.meta?.totalItems}
          />
        </Space>
      </div>
    </>
  );
};

export default AddProject;
