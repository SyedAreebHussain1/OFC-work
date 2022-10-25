import { Avatar, Card, Col, Image, Row, Space, Table } from "antd";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";

const TableCustomerList = ({ customerList }) => {
  const { Column } = Table;

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            bordered={true}
            className="criclebox tablespace mb-24"
            title="Customer List"
            headStyle={HEAD_STYLE_CSS}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Table dataSource={customerList?.items || []} pagination={false}>
                <Column
                  title="Profile"
                  dataIndex="profilePictureUrl"
                  key="profilePictureUrl"
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
                  title="Name"
                  render={(item) => `${item.firstName} ${item.lastName}` || "-"}
                />

                <Column
                  title="Email"
                  dataIndex="user"
                  key="user"
                  render={(item) => item.email || "-"}
                />

                <Column
                  title="Country"
                  dataIndex="country"
                  key="country"
                  render={(item) => item.title || "-"}
                />
                <Column
                  title="City"
                  dataIndex="city"
                  key="city"
                  render={(item) => item.title || "-"}
                />
                <Column
                  title="CNIC"
                  dataIndex="user"
                  key="user"
                  render={(item) => item.cnic || "-"}
                />
                <Column
                  title="Phone No."
                  dataIndex="user"
                  key="user"
                  render={(item) => item.phone || "-"}
                />
              </Table>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TableCustomerList;
