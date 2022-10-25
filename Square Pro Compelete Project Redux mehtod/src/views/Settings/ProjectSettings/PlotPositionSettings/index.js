import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Pagination, Space } from "antd";
import {
  CaretDownFilled,
  CaretUpFilled,
  PlusCircleFilled,
} from "@ant-design/icons";

import {
  createPlotPositionAction,
  deletePlotPositionAction,
  editPlotPositionAction,
  getPlotPositionAction,
} from "../../../../store/actions/utilsActions";
import SettingsTable from "../../../../components/SettingsTable";
import SettingsCreateModal from "../../../../components/SettingsCreateModal";
import SettingsEditModal from "../../../../components/SettingsEditModal";

const PlotPositionSettings = () => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);
  const [plotPositionIdTitle, setPlotPositionIdTitle] = useState({
    id: "",
    title: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const {
    plotPosition,
    plotPositionRes,
    deletePlotPositionRes,
    editPlotPositionRes,
  } = useSelector((state) => state.utilsReducer);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showEditModal = (id, title) => {
    setIsEditModalVisible(true);
    setPlotPositionIdTitle({ id: id, title: title });
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
      plotPositionRes !== null ||
      deletePlotPositionRes !== null ||
      editPlotPositionRes !== null ||
      pageNumber ||
      pageLimit
    ) {
      dispatch(getPlotPositionAction(pageNumber, pageLimit));
    }
  }, [
    showAnswer,
    plotPositionRes,
    deletePlotPositionRes,
    editPlotPositionRes,
    pageNumber,
    pageLimit,
  ]);

  return (
    <div style={{ marginLeft: "-0%" }} className="containerques question">
      <SettingsCreateModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        title="Plot Position"
        action={createPlotPositionAction}
      />

      <SettingsEditModal
        setIsEditModalVisible={setIsEditModalVisible}
        isEditModalVisible={isEditModalVisible}
        Title_ID={plotPositionIdTitle}
        title="Plot Position"
        action={editPlotPositionAction}
      />
      <div className="question-title">
        <h3>Plot Position Settings</h3>
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
                action={deletePlotPositionAction}
                items={plotPosition?.items || []}
                showEditModal={showEditModal}
              />
              <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                onChange={onChange}
                defaultCurrent={1}
                total={plotPosition?.meta?.totalItems}
              />
            </Space>
          </>
        )}
      </div>
    </div>
  );
};

export default PlotPositionSettings;
