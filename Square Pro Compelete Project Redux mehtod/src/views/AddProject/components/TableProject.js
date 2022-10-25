import { useHistory } from "react-router-dom";
import { Avatar, Button, Card, Col, Image, Row, Space, Table } from "antd";
import { HEAD_STYLE_CSS } from "../../../constants/headStyle";

const TableProject = ({ allProjects }) => {
  const { Column } = Table;
  const history = useHistory();

  const handleRedirect = (id, name) => {
    if (name === "addFeature") {
      history.push({
        pathname: "/user/addFeature",
        state: { projectId: id },
      });
    } else if (name === "addPlot") {
      history.push({
        pathname: "/user/addPlot",
        state: { projectId: id },
      });
    }
  };

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            bordered={true}
            className="criclebox tablespace mb-24"
            title="Project List"
            headStyle={HEAD_STYLE_CSS}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Table dataSource={allProjects?.items || []} pagination={false}>
                <Column
                  title="Logo"
                  dataIndex="logo_url"
                  key="logo_url"
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
                <Column title="Title" dataIndex="title" key="title" />
                <Column
                  title="Developer Name"
                  dataIndex="developerName"
                  key="developerName"
                  render={(item) => item || "-"}
                />
                <Column
                  title="Project Type"
                  dataIndex="projectType"
                  key="projectType"
                  render={(item) => item || "-"}
                />
                <Column
                  title="Coordinates"
                  dataIndex="coordinates"
                  key="coordinates"
                  render={(item) => item || "-"}
                />
                <Column
                  title="Price Range"
                  dataIndex="priceRange"
                  key="priceRange"
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
                      {/* <a
                        onClick={() => handleRedirect(record.id, "addFeature")}
                      >
                        Add Feature
                      </a> */}
                      <Button
                        onClick={() => handleRedirect(record.id, "addFeature")}
                        className="customBtn"
                      >
                        Add Feature
                      </Button>
                      {/* <a onClick={() => handleRedirect(record.id, "addPlot")}>
                        Add Plot
                      </a> */}
                      <Button
                        onClick={() => handleRedirect(record.id, "addPlot")}
                        className="customBtn"
                      >
                        Add Plot
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

export default TableProject;
