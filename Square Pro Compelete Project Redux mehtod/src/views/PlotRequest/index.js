import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Pagination } from "antd";

import TablePlotRequest from "./components/TablePlotRequest";
import { getPlotRequestAction } from "../../store/actions/adminActions";

const PlotRequest = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { allPlotsRequest, updatePlotReqRes } = useSelector(
    (state) => state.adminReducer
  );

  const onShowSizeChange = (current, pageSize) => {
    setPageNumber(current === 0 ? 1 : current);
    setPageLimit(pageSize);
  };

  const onChange = (e) => {
    setPageNumber(e === 0 ? 1 : e);
  };

  useEffect(() => {
    dispatch(getPlotRequestAction(pageNumber, pageLimit));
  }, [pageNumber, pageLimit, updatePlotReqRes]);

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
          <TablePlotRequest allPlotsRequest={allPlotsRequest} />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            defaultCurrent={1}
            total={allPlotsRequest?.meta?.totalItems}
          />
        </Space>
      </div>
    </>
  );
};

export default PlotRequest;
