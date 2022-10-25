import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Pagination } from "antd";

import TableAgentList from "./components/TableAgentList";
import { getAgentListAction } from "../../store/actions/adminUserActions";

const AgentList = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { agentList } = useSelector((state) => state.adminUserReducer);

  const onShowSizeChange = (current, pageSize) => {
    setPageNumber(current === 0 ? 1 : current);
    setPageLimit(pageSize);
  };

  const onChange = (e) => {
    setPageNumber(e === 0 ? 1 : e);
  };

  useEffect(() => {
    dispatch(getAgentListAction(pageNumber, pageLimit));
  }, [pageNumber, pageLimit]);

  return (
    <>
      <div style={{ marginTop: "5%" }}>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          <TableAgentList agentList={agentList} />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            defaultCurrent={1}
            total={agentList?.meta?.totalItems}
          />
        </Space>
      </div>
    </>
  );
};

export default AgentList;
