import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Pagination } from "antd";

import TableCustomerList from "./components/TableCustomerList";
import { getCustomerListAction } from "../../store/actions/adminUserActions";

const CustomerList = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { customerList } = useSelector((state) => state.adminUserReducer);

  const onShowSizeChange = (current, pageSize) => {
    setPageNumber(current === 0 ? 1 : current);
    setPageLimit(pageSize);
  };

  const onChange = (e) => {
    setPageNumber(e === 0 ? 1 : e);
  };

  useEffect(() => {
    dispatch(getCustomerListAction(pageNumber, pageLimit));
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
          <TableCustomerList customerList={customerList} />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            defaultCurrent={1}
            total={customerList?.meta?.totalItems}
          />
        </Space>
      </div>
    </>
  );
};

export default CustomerList;
