import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Input,
} from "reactstrap";
import { useState, useEffect } from "react";
import Select from "react-select";
import validate from "components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";

const ChangePlot = (props) => {
  let arr = [];
  const [statePlot1Position, setstatePlot1Position] = useState("");
  const [statePlot2Position, setstatePlot2Position] = useState("");
  const [stateArr, setstateArr] = useState([]);
  const [stateDetail, setstateDetail] = useState({
    Category: "",
    PlotType: "",
    PlotNo: "",
    Comment: "",
  });
  const [stateCompare, setstateCompare] = useState(false);
  const [error, setError] = useState({
    CommentError: "",
  });

  useEffect(() => {
    if (
      props.detail.Project_id !== null &&
      props.detail.Project_id !== undefined
    ) {
      // let body = {
      //   projectid: props.detail.Project_id,
      // }
      props.showPlotSector(props.detail?.Project_name, onSuccess, onFailure);
      let bb = {
        Plotid: props.detail.Plotid,
      };
      props.ShowPlotInformation(bb, onSuccess, onFailure);
    }
  }, [props.detail.Project_id]);

  useEffect(() => {
    if (
      props.PlotPositionsValues !== null &&
      props.PlotPositionsValues !== undefined
    ) {
      setstatePlot1Position(props.PlotPositionsValues);
    }
  }, [props.PlotPositionsValues]);

  useEffect(() => {
    if (
      props.PlotPositionsValues !== null &&
      props.PlotPositionsValues !== undefined
    ) {
      setstatePlot2Position(props.NewPosition);
    }
  }, [props.NewPosition]);

  useEffect(() => {
    if (
      statePlot2Position !== null &&
      statePlot2Position !== undefined &&
      statePlot1Position !== null &&
      statePlot1Position !== undefined
    ) {
      if (statePlot1Position.length == statePlot2Position.length) {
        for (let i = 0; i < statePlot1Position.length; i++) {
          for (let j = 0; j < statePlot2Position.length; j++) {
            if (
              statePlot1Position[i].PositionName ==
              statePlot2Position[j].PositionName
            ) {
              arr.push(statePlot1Position[i].PositionName);
              // setstateCompare(true);
              setstateArr(arr);
              setstateCompare(true);
            }
          }
        }
      } else {
        setstateCompare(false);
      }
    }
  }, [statePlot2Position]);

  useEffect(() => {
    //&& error.CommentError==null
    if (
      props.detail.CategoryName == stateDetail.Category &&
      props.detail.PlotType_Name == stateDetail.PlotType
    ) {
      //if (statePlot1Position.length == arr.length) {
      if (statePlot1Position.length == stateArr.length) {
        setstateCompare(true);
      }
    } else {
      setstateCompare(false);
    }
  }, [stateArr]);

  const [sector, setsector] = useState([null]);
  useEffect(() => {
    if (props.Sector !== null && props.Sector !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Sector.length; i++) {
        let obj = {
          value: props.Sector[i].Sector_Name,
          label: props.Sector[i].Sector_Name,
        };
        arr.push(obj);
      }
      setsector(arr);
    }
  }, [props.Sector]);
  const [plotNo, setPlotNo] = useState([null]);
  useEffect(() => {
    if (props.PlotNo !== null && props.PlotNo !== undefined) {
      let arr = [];
      for (let i = 0; i < props.PlotNo.length; i++) {
        let obj = {
          value: props.PlotNo[i].Plotid,
          label: props.PlotNo[i].Plot_no,
        };
        arr.push(obj);
      }
      setPlotNo(arr);
    }
  }, [props.PlotNo]);

  const toggle = () => {
    setstatePlot1Position("");
    setstatePlot2Position("");
    setstateDetail({});
    arr = [];
    setError({ ...error, CommentError: "" });

    props.toggle(false);
  };
  const OnSend = () => {
    if (props.detail.Plotid == stateDetail.PlotNo) {
      swal(
        "Unsuccessful",
        "Can't change plot, please select another plot!",
        "warning"
      );
    } else {
      let body = {
        oldPlotId: props.detail.Plotid,
        taskId: props.detail.Taskid,
        remarksInitiator: stateDetail.Comment,
        newPlotId: stateDetail.PlotNo,
      };

      props.ChangePlotMiddleware(body, onSuccess, onFailure);
      toggle();
    }

    // toggle();

    // if (props.ChangePlotStatus !== null && props.ChangePlotStatus !== undefined) {
    //   swal({
    //     title: "Successful",
    //     text: "successfully Insert",
    //     type: "success",
    //     icon: "success"
    //     // buttons: true,
    //     // dangerMode: true,
    //   })
    //     // props.toggle();
    //     .then(function (isConfirm) {
    //       if (isConfirm) {

    //         toggle();
    //       } else {

    //       }
    //     });
    // }
    // else {
    //   swal({
    //     title: "Unsuccessful",
    //     text: "Not Inserted",
    //     type: "warning",
    //     icon: "warning"
    //     // buttons: true,
    //     // dangerMode: true,
    //   })
    //     // props.toggle();
    //     .then(function (isConfirm) {
    //       if (isConfirm) {
    //         toggle();

    //       } else {

    //       }
    //     });
    // }
  };
  const onChange = (value, name) => {
    if (name == "SectorName") {
      if (
        props.detail.Project_id !== null &&
        props.detail.Project_id !== undefined
      ) {
        // let body = {
        //   projectid: props.detail.Project_id,
        //   Sector_id: value,
        // }
        props.showPlotNo(
          props.detail?.Project_name,
          value,
          onSuccess,
          onFailure
        );
      }
    } else if (name == "PlotNo") {
      if (props.PlotNo !== null && props.PlotNo !== undefined) {
        for (let i = 0; i < props.PlotNo.length; i++) {
          if (props.PlotNo[i].Plotid == value) {
            setstateDetail({
              ...stateDetail,
              Category: props.PlotNo[i].CategoryName,
              PlotType: props.PlotNo[i].PlotType_Name,
              PlotNo: props.PlotNo[i].Plotid,
            });
            let bb = {
              Plotid: value,
            };
            props.newPlotMiddleware(bb, onSuccess, onFailure);
          }
        }
      }
    } else if (name === "Comment") {
      setstateDetail({
        ...stateDetail,
        Comment: value,
      });
    }
  };
  const CheckFields = (name) => {
    if (name === "Comment") {
      setError({
        ...error,
        CommentError: validate("required", stateDetail.Comment),
      });
    }
  };

  const onSuccess = () => {};
  const onFailure = () => {};

  return (
    <Modal
      size="lg"
      isOpen={props.modal}
      toggle={props.toggle}
      detail={props.detail}
    >
      <ModalHeader toggle={props.toggle}></ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="2" md="2" sm="6">
            <label>Project:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            <label>
              {props.detail !== null && props.detail !== undefined
                ? props.detail.Project_name
                : ""}
            </label>{" "}
          </Col>
          <Col lg="2" md="2" sm="6"></Col>
          <Col lg="2" md="2" sm="6">
            <label>Project:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            <label>
              {props.detail !== null && props.detail !== undefined
                ? props.detail.Project_name
                : ""}
            </label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="2" md="2" sm="6">
            <label>Sector:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            <label>
              {props.detail !== null && props.detail !== undefined
                ? props.detail.Sector_Name
                : ""}
            </label>{" "}
          </Col>
          <Col lg="2" md="2" sm="6"></Col>
          <Col lg="2" md="2" sm="6">
            <label>Sector:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              options={sector}
              id="exampleFormControlSelect1"
              type="select"
              value={sector.value}
              onChange={(e) => onChange(e.value, "SectorName")}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="2" md="2" sm="6">
            {" "}
            <label>Plot:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            <label>
              {props.detail !== null && props.detail !== undefined
                ? props.detail.Plot_no
                : ""}
            </label>{" "}
          </Col>
          <Col lg="2" md="2" sm="6"></Col>
          <Col lg="2" md="2" sm="6">
            <label>Plot:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              options={plotNo}
              id="exampleFormControlSelect1"
              type="select"
              value={plotNo.value}
              onChange={(e) => onChange(e.value, "PlotNo")}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="2" md="2" sm="6">
            <label>Category:</label>{" "}
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            <label>
              {props.detail !== null && props.detail !== undefined
                ? props.detail.CategoryName
                : ""}
            </label>{" "}
          </Col>
          <Col lg="2" md="2" sm="6"></Col>
          <Col lg="2" md="2" sm="6">
            <label>Category:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            <label>{stateDetail.Category}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="2" md="2" sm="6">
            <label>PlotType:</label>{" "}
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            <label>
              {props.detail !== null && props.detail !== undefined
                ? props.detail.PlotType_Name
                : ""}
            </label>{" "}
          </Col>
          <Col lg="2" md="2" sm="6"></Col>
          <Col lg="2" md="2" sm="6">
            <label>Plot Type:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            <label>{stateDetail.PlotType}</label>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="2" md="2" sm="6">
            <label>Position:</label>{" "}
          </Col>
          <Col lg="3" md="3" sm="6">
            {statePlot1Position !== null &&
            statePlot1Position !== undefined &&
            statePlot1Position !== ""
              ? statePlot1Position.map((posts, index) => {
                  return (
                    <label>
                      {posts.PositionName}
                      {","}
                    </label>
                  );
                })
              : ""}
          </Col>
          <Col lg="2" md="2" sm="6"></Col>
          <Col lg="2" md="2" sm="6">
            <label>Position:</label>
          </Col>
          <Col lg="3" md="3" sm="6">
            {" "}
            {statePlot2Position !== null &&
            statePlot2Position !== undefined &&
            statePlot2Position !== ""
              ? statePlot2Position.map((posts, index) => {
                  return (
                    <label>
                      {posts.PositionName}
                      {","}
                    </label>
                  );
                })
              : ""}
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Comment:</h3>
            <Input
              type="textArea"
              placeholder="Enter Comment"
              //value={body.SaleQuotationNo}
              onBlur={(e) => CheckFields("Comment")}
              onChange={(e) => onChange(e.target.value, "Comment")}
            ></Input>
            {error.CommentError !== "" && error.CommentError !== null && (
              <small style={{ marginTop: "2px" }}>
                <span style={{ color: "red" }}>
                  {error.CommentError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="info"
          // disabled && error.CommentError!==null

          disabled={stateCompare == false || error.CommentError !== null}
          onClick={OnSend}
        >
          Send
        </Button>
        <Button color="info" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ChangePlot;
