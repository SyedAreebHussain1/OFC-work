import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Pagination, Space } from "antd";
import {
  CaretDownFilled,
  CaretUpFilled,
  PlusCircleFilled,
} from "@ant-design/icons";

import {
  createPlotStreetAction,
  deletePlotStreetAction,
  editPlotStreetAction,
  getPlotStreetAction,
} from "../../../../store/actions/utilsActions";
import SettingsCreateModal from "../../../../components/SettingsCreateModal";
import SettingsEditModal from "../../../../components/SettingsEditModal";
import SettingsTable from "../../../../components/SettingsTable";

const PlotStreetSettings = () => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);
  const [plotStreetIdTitle, setPlotStreetIdTitle] = useState({
    id: "",
    title: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { plotStreet, plotStreetRes, deletePlotStreetRes, editPlotStreetRes } =
    useSelector((state) => state.utilsReducer);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showEditModal = (id, title) => {
    setIsEditModalVisible(true);
    setPlotStreetIdTitle({ id: id, title: title });
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
      plotStreetRes !== null ||
      deletePlotStreetRes !== null ||
      editPlotStreetRes !== null ||
      pageNumber ||
      pageLimit
    ) {
      dispatch(getPlotStreetAction(pageNumber, pageLimit));
    }
  }, [
    showAnswer,
    plotStreetRes,
    deletePlotStreetRes,
    editPlotStreetRes,
    pageNumber,
    pageLimit,
  ]);

  return (
    <div style={{ marginLeft: "-0%" }} className="containerques question">
      <SettingsCreateModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        title="Plot Street"
        action={createPlotStreetAction}
      />
      <SettingsEditModal
        setIsEditModalVisible={setIsEditModalVisible}
        isEditModalVisible={isEditModalVisible}
        Title_ID={plotStreetIdTitle}
        title="Plot Street"
        action={editPlotStreetAction}
      />
      <div className="question-title">
        <h3>Plot Street Settings</h3>
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
                action={deletePlotStreetAction}
                items={plotStreet?.items || []}
                showEditModal={showEditModal}
              />
              <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                onChange={onChange}
                defaultCurrent={1}
                total={plotStreet?.meta?.totalItems}
              />
            </Space>
          </>
        )}
      </div>
    </div>
  );
};

export default PlotStreetSettings;
