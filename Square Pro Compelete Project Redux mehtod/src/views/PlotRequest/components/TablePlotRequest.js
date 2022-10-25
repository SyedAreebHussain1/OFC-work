import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, message, Row, Select, Space, Table } from "antd";

import { updatePlotRequestAction } from "../../../store/actions/adminActions";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";

const TablePlotRequest = ({ allPlotsRequest }) => {
  const { Column } = Table;
  const { Option } = Select;

  const dispatch = useDispatch();
  const [plotId, setPlotId] = useState(null);

  const onSuccess = (msg) => {
    message.success(msg);
    setPlotId(null);
  };

  const onFailure = (error) => {
    message.error(error.message);
  };

  const handleClick = (id) => {
    setPlotId(id);
  };

  const handleUpdate = (event) => {
    dispatch(
      updatePlotRequestAction(plotId, { status: event }, onSuccess, onFailure)
    );
  };

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            bordered={true}
            className="criclebox tablespace mb-24"
            title="Plot Request List"
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
                dataSource={allPlotsRequest?.items || []}
                pagination={false}
                scroll={{
                  x: 1100,
                }}
              >
                <Column
                  title="Name"
                  dataIndex="userProfile"
                  key="userProfile"
                  render={(item) => `${item.firstName} ${item.lastName}` || "-"}
                />
                <Column
                  title="Agency"
                  dataIndex="agency"
                  key="agency"
                  render={(item) => item.agencyName || "-"}
                />
                <Column
                  title="Agent"
                  dataIndex="agentProfile"
                  key="agentProfile"
                  render={(item) => `${item.firstName} ${item.lastName}` || "-"}
                />
                <Column
                  title="Project"
                  dataIndex="project"
                  key="project"
                  render={(item) => item?.title || "-"}
                />
                <Column
                  title="Plot Category"
                  dataIndex="plotCategory"
                  key="plotCategory"
                  render={(item) => item?.title || "-"}
                />
                <Column
                  title="Plot Position"
                  dataIndex="plotPosition"
                  key="plotPosition"
                  render={(item) => item?.title || "-"}
                />
                <Column
                  title="Plot Sector"
                  dataIndex="plotSector"
                  key="plotSector"
                  render={(item) => item?.title || "-"}
                />
                <Column
                  title="Plot Street"
                  dataIndex="plotStreet"
                  key="plotStreet"
                  render={(item) => item?.title || "-"}
                />
                <Column
                  title="Plot Type"
                  dataIndex="plotType"
                  key="plotType"
                  render={(item) => item?.title || "-"}
                />
                <Column
                  title="Status"
                  render={(item) =>
                    item.id === plotId ? (
                      <Select
                        style={{
                          width: "120px",
                          border: "1px solid #fc5a4e",
                        }}
                        placeholder="Select"
                        onChange={(e) => handleUpdate(e)}
                      >
                        <Option value="ACCEPTED">ACCEPTED</Option>
                        <Option value="REJECTED">REJECTED</Option>
                        <Option value="UNPAID">UNPAID</Option>
                        <Option value="PAID">PAID</Option>
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

export default TablePlotRequest;
