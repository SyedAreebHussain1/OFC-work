import { useDispatch } from "react-redux";
import { Button, Card, Popconfirm, Space, Table } from "antd";

const SettingsTable = ({ items, showEditModal, action }) => {
  const { Column } = Table;
  const dispatch = useDispatch();

  const onDelSuccess = (msg) => {
    console.log(msg);
  };
  const onDelFailure = (error) => {
    console.log(error);
  };

  const handleDelete = (id) => {
    dispatch(action(id, onDelSuccess, onDelFailure));
  };

  const handleEdit = (id, title) => {
    showEditModal(id, title);
  };

  return (
    <Card bordered={false} className="criclebox tablespace mb-24">
      <Table dataSource={items} pagination={false}>
        <Column
          title="ID"
          dataIndex="id"
          key="id"
          render={(item) => item || "-"}
        />
        <Column
          title="Title"
          dataIndex="title"
          key="title"
          render={(item) => item || "-"}
        />
        <Column
          title="Action"
          key="action"
          render={(record) => (
            <Space size="middle">
              {/* <a onClick={() => handleEdit(record.id, record.title)}>Edit</a> */}
              <Button
                className="customBtn"
                onClick={() => handleEdit(record.id, record.title)}
              >
                Edit
              </Button>
              {/* <a onClick={() => handleDelete(record.id)}>Delete</a> */}
              <Popconfirm
                title="Are you sure to delete this?"
                onConfirm={() => handleDelete(record.id)}
                // onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  className="customBtn"
                  // onClick={() => handleDelete(record.id)}
                >
                  Delete
                </Button>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
    </Card>
  );
};

export default SettingsTable;
