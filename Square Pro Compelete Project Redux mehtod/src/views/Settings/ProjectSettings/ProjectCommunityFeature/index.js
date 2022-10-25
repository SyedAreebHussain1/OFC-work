import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Pagination, Space } from "antd";
import {
  CaretDownFilled,
  CaretUpFilled,
  PlusCircleFilled,
} from "@ant-design/icons";

import {
  createProjectCommunityFeatureAction,
  deleteProjectCommunityFeatureAction,
  editProjectCommunityFeatureAction,
  getProjectCommunityFeatureAction,
} from "../../../../store/actions/utilsActions";
import SettingsTable from "../../../../components/SettingsTable";
import SettingsEditModal from "../../../../components/SettingsEditModal";
import SettingsCreateModal from "../../../../components/SettingsCreateModal";

const ProjectCommunityFeature = () => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);
  const [projectCommunityFeatureIdTitle, setProjectCommunityFeatureIdTitle] =
    useState({
      id: "",
      title: "",
    });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const {
    projectCommunityFeature,
    projectCommunityFeatureRes,
    deleteProjectCommunityFeatureRes,
    editProjectCommunityFeatureRes,
  } = useSelector((state) => state.utilsReducer);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showEditModal = (id, title) => {
    setIsEditModalVisible(true);
    setProjectCommunityFeatureIdTitle({ id: id, title: title });
  };

  const onShowSizeChange = (current, pageSize) => {
    setPageNumber(current === 0 ? 1 : current);
    setPageLimit(pageSize);
  };

  const onChange = (e) => {
    setPageNumber(e === 0 ? 1 : e);
  };

  useEffect(() => {
    if (
      showAnswer ||
      projectCommunityFeatureRes !== null ||
      deleteProjectCommunityFeatureRes !== null ||
      editProjectCommunityFeatureRes !== null ||
      pageNumber ||
      pageLimit
    ) {
      dispatch(getProjectCommunityFeatureAction(pageNumber, pageLimit));
    }
  }, [
    showAnswer,
    projectCommunityFeatureRes,
    deleteProjectCommunityFeatureRes,
    editProjectCommunityFeatureRes,
    pageNumber,
    pageLimit,
  ]);

  return (
    <div style={{ marginLeft: "-0%" }} className="containerques question">
      <SettingsCreateModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        title="Project Community Feature"
        action={createProjectCommunityFeatureAction}
      />
      <SettingsEditModal
        setIsEditModalVisible={setIsEditModalVisible}
        isEditModalVisible={isEditModalVisible}
        Title_ID={projectCommunityFeatureIdTitle}
        title="Project Community Feature"
        action={editProjectCommunityFeatureAction}
      />
      <div className="question-title">
        <h3>Project Community Feature Settings</h3>
        <button className="question-icons" onClick={handleClick}>
          {showAnswer ? <CaretUpFilled /> : <CaretDownFilled />}
        </button>
      </div>
      <div
        style={{
          marginTop: "1%",
        }}
        className="question-answer"
      >
        {showAnswer && (
          <>
            <Row
              style={{
                marginBottom: "2%",
              }}
            >
              <Col lg={22} md={22} sm={22} xs={22}></Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <Button
                  style={{
                    justifyContent: "flex-end",
                  }}
                  className="customBtn"
                  onClick={() => showModal()}
                >
                  <PlusCircleFilled
                    size={25}
                    style={{ marginTop: -3 }}
                    color="white"
                  />
                  Add
                </Button>
              </Col>
            </Row>
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <SettingsTable
                action={deleteProjectCommunityFeatureAction}
                items={projectCommunityFeature?.items || []}
                showEditModal={showEditModal}
              />
              <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                onChange={onChange}
                defaultCurrent={1}
                total={projectCommunityFeature?.meta?.totalItems}
              />
            </Space>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCommunityFeature;
