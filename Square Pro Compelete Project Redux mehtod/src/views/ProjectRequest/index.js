import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Space,
  Pagination,
} from "antd";

import TableProjectRequest from "./components/TableProjectRequest";
import { getProjectRequestAction } from "../../store/actions/adminActions";

const ProjectRequest = () => {
  const dispatch = useDispatch();
  
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { allProjectsRequest, updateProjectReqRes } = useSelector(
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
    dispatch(getProjectRequestAction(pageNumber, pageLimit));
  }, [pageNumber, pageLimit, updateProjectReqRes]);

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
          <TableProjectRequest allProjectsRequest={allProjectsRequest} />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            defaultCurrent={1}
            total={allProjectsRequest?.meta?.totalItems}
          />
        </Space>
      </div>
    </>
  );
};

export default ProjectRequest;
