import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, message, Row, Select, Space, Table } from "antd";

import { updateProjectRequestAction } from "../../../store/actions/adminActions";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";

const TableProjectRequest = ({ allProjectsRequest }) => {
  const { Column } = Table;
  const { Option } = Select;

  const dispatch = useDispatch();
  const [projectId, setProjectId] = useState(null);

  const onSuccess = (msg, res) => {
    message.success(msg);
    setProjectId(null);
  };

  const onFailure = (error) => {
    message.error(error.message);
  };

  const handleClick = (id) => {
    setProjectId(id);
  };

  const handleUpdate = (event) => {
    // if (event.charCode === 13 && event.target.value !== "") {
    //   let status = event.target.value.toUpperCase();

    dispatch(
      updateProjectRequestAction(
        projectId,
        { status: event },
        onSuccess,
        onFailure
      )
    );
  };
  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            bordered={true}
            className="criclebox tablespace mb-24"
            title="Project Request List"
            headStyle={HEAD_STYLE_CSS}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Table
                dataSource={allProjectsRequest?.items || []}
                pagination={false}
              >
                <Column
                  title="Title"
                  dataIndex="project"
                  key="project"
                  render={(item) => item.title || "-"}
                />
                <Column
                  title="Developer Name"
                  dataIndex="project"
                  key="project"
                  render={(item) => item.developerName || "-"}
                />
                <Column
                  title="Project Type"
                  dataIndex="project"
                  key="project"
                  render={(item) => item.projectType || "-"}
                />
                <Column
                  title="Coordinates"
                  dataIndex="project"
                  key="project"
                  render={(item) => item.coordinates || "-"}
                />
                <Column
                  title="Price Range"
                  dataIndex="project"
                  key="project"
                  render={(item) => item.priceRange || "-"}
                />
                <Column
                  title="Description"
                  dataIndex="project"
                  key="project"
                  render={(item) => item.description || "-"}
                />
                <Column
                  title="Status"
                  // dataIndex="status"
                  // key="status"
                  render={(item) =>
                    item.id === projectId ? ( //charCode
                      // <Input
                      //   className="formField"
                      //   defaultValue={item.status}
                      //   onKeyPress={(e) => handleUpdate(e)}
                      // />
                      <Select
                        style={{
                          width: "120px",
                          border: "1px solid #fc5a4e",
                        }}
                        placeholder="Select"
                        onChange={(e) => handleUpdate(e)}
                      >
                        <Option value="APPROVED">APPROVED</Option>
                        <Option value="REJECTED">REJECTED</Option>
                      </Select>
                    ) : (
                      item.status
                    )
                  }
                />
                <Column
                  title="Action"
                  render={(record) => (
                    <Space size="middle">
                      {/* <a onClick={() => handleClick(record.id)}>
                        Update Status
                      </a> */}
                      <Button
                        onClick={() => handleClick(record.id)}
                        className="customBtn"
                      >
                        Update Status
                      </Button>
                    </Space>
                  )}
                />
              </Table>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TableProjectRequest;
