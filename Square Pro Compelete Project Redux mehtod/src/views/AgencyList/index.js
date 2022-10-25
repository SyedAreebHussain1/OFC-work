import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Pagination } from "antd";

import TableAgencyList from "./components/TableAgencyList";
import { getAgencyListAction } from "../../store/actions/adminActions";

const AgencyList = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { agencyList } = useSelector((state) => state.adminReducer);

  const onShowSizeChange = (current, pageSize) => {
    setPageNumber(current === 0 ? 1 : current);
    setPageLimit(pageSize);
  };

  const onChange = (e) => {
    setPageNumber(e === 0 ? 1 : e);
  };

  useEffect(() => {
    dispatch(getAgencyListAction(pageNumber, pageLimit));
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
          <TableAgencyList agencyList={agencyList} />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            defaultCurrent={1}
            total={agencyList?.meta?.totalItems}
          />
        </Space>
      </div>
    </>
  );
};

export default AgencyList;
