import { useState } from "react";
import { Avatar, Card, Col, Image, Row, Space, Table, Button } from "antd";

import ModalAgencyAgents from "./ModalAgencyAgents";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";
import { AGENCY_AGENTS_LIST_SUCCESS } from "../../../constants/adminConstants";
import { useDispatch } from "react-redux";

const TableAgencyList = ({ agencyList }) => {
  const { Column } = Table;
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [agencyId, setAgencyId] = useState(null);

  const showModal = (id) => {
    setAgencyId(id);
    setIsModalVisible(true);
  };
  const handleChangeReduxState = () => {
    setIsModalVisible(false);
    setAgencyId(null);
    dispatch({ type: AGENCY_AGENTS_LIST_SUCCESS, payload: null });
  };
  return (
    <>
      <ModalAgencyAgents
        handleChangeReduxState={handleChangeReduxState}
        isModalVisible={isModalVisible}
        agencyId={agencyId}
      />
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            bordered={true}
            className="criclebox tablespace mb-24"
            title="Agency List"
            headStyle={HEAD_STYLE_CSS}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Table dataSource={agencyList?.items || []} pagination={false}>
                <Column
                  title="Logo"
                  dataIndex="logoUrl"
                  key="logoUrl"
                  render={(item) => (
                    <Avatar
                      src={
                        <Image
                          src={
                            item ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                          }
                          style={{
                            width: 32,
                          }}
                        />
                      }
                    />
                  )}
                />
                <Column
                  title="Agency Name"
                  dataIndex="agencyName"
                  key="agencyName"
                  render={(item) => item || "-"}
                />
                <Column
                  title="Description"
                  dataIndex="description"
                  key="description"
                  render={(item) => item || "-"}
                />
                <Column
                  title="Action"
                  key="action"
                  render={(record) => (
                    <Space size="middle">
                      <Button
                        onClick={() => showModal(record.id)}
                        className="customBtn"
                      >
                        Agency Agents
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

export default TableAgencyList;
