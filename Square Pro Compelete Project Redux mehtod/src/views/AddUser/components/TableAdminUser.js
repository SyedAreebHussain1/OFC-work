import { Button, Card, Col, Row, Space, Table } from "antd";
import { useState } from "react";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";
import ModalAssignModule from "./ModalAssignModule";

const TableAdminUser = ({ allAdmin }) => {
  const { Column } = Table;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [adminId, setAdminId] = useState(null);

  const showModal = (id) => {
    setAdminId(id);
    setIsModalVisible(true);
  };

  return (
    <>
      <ModalAssignModule
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        adminId={adminId}
      />
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            bordered={true}
            className="criclebox tablespace mb-24"
            title="Employee List"
            headStyle={HEAD_STYLE_CSS}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Table dataSource={allAdmin?.items || []} pagination={false}>
                {/* <ColumnGroup title="Name"> */}
                <Column
                  title="Name"
                  // dataIndex="firstName"
                  // key="firstName"
                  render={(item) => `${item.firstName} ${item.lastName}`}
                />
                {/* <Column title="Last Name" dataIndex="lastName" key="lastName" /> */}
                {/* </ColumnGroup> */}
                <Column
                  title="Email"
                  dataIndex="admin"
                  key="admin"
                  render={(item) => item.email}
                />
                <Column
                  title="Action"
                  key="action"
                  render={(record) => (
                    <Space size="middle">
                      {/* <a>Invite {record.lastName}</a> */}
                      {/* <a onClick={() => showModal(record.adminUserId)}>
                        Assign Module
                      </a> */}
                      <Button
                        onClick={() => showModal(record.adminUserId)}
                        className="customBtn"
                      >
                        Assign Module
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

export default TableAdminUser;
