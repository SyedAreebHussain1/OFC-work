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
import { connect } from "react-redux";
import { showPlotNo } from "../../store/helpers/GetPlotNo/middleware";
import Select from "react-select";
import { GetAllUpdateStatus } from "./middleware";

const NewModal = (props) => {
  const [body, setBody] = useState({
    Plotid: null,
    Taskid: 8,
    //Taskid:props.QuotationSingleArray.Taskid
  });

  const [body2, setbody2] = useState({
    // projectid:props.QuotationSingleArray.projectid,
    // Sector_id:props.QuotationSingleArray.Sector_id
    projectid: 1,
    Sector_id: 1,
  });
  const onPlotNoSuccess = () => {};
  const onPlotNoFailure = () => {};
  useEffect(() => {
    props.showPlotNo(body2, onPlotNoSuccess, onPlotNoFailure);
  }, [body2]);

  //   const [contact, setContact] = useState(null);
  //   const OnSuccess = () => {

  //   };

  //   const OnFailure = () => {

  //   };
  //   const [options, setOptions] = useState([null]);
  //   useEffect(() => {

  //     if (props.PlotNo !== null && props.PlotNo !== undefined) {
  //       let arr = [];
  //       for (let i = 0; i < props.PlotNo.length; i++) {
  //           let obj = {
  //             value: props.PlotNo[i].Plot_no,

  //           };
  //           arr.push(obj);
  //         }
  //         setOptions(arr);
  //       }
  //     }, [props.PlotNo]);

  const [source, setSource] = useState("");
  const OnChangeSouress = (val) => {
    let bodyVal = parseInt(val);
    setSource(val);
    setBody({ ...body, Plotid: bodyVal });
  };

  const save = () => {
    props.GetAllUpdateStatus(body, onPlotNoSuccess, onPlotNoFailure);
  };
  return (
    <Modal size="lg" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Details</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="4" md="4" sm="4">
            <label style={{ fontSize: "12px", color: "red" }}>
              Project Name:
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              value={props.QuotationSingleArray.Project_name}
              disabled={true}
            ></input>
          </Col>
          <Col lg="4" md="4" sm="4">
            <label style={{ fontSize: "12px", color: "red" }}>
              Sector Name:
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              value={props.QuotationSingleArray.Sector_Name}
              disabled={true}
            ></input>
          </Col>
          <Row>
            <Col lg="12">
              <label className="form-control-label">Plot Name</label>
              <Input
                type="select"
                value={source}
                onChange={(e) => OnChangeSouress(e.target.value)}
              >
                <option key={null} value={null}>
                  Plot No
                </option>

                {props.PlotNo !== null &&
                  props.PlotNo !== undefined &&
                  props.PlotNo.map((name) => {
                    return (
                      <option key={name.Plotid} value={name.Plotid}>
                        {name.Plot_no}
                      </option>
                    );
                  })}
              </Input>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            {" "}
            <Col></Col>
          </Row>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" color="info" onClick={props.toggle}>
          Close
        </Button>
        <Button size="sm" color="info" onClick={save}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  PlotNo: state.getPlotNo.PlotNo,
  PlotUpdate: state.viewquotation.PlotUpdate,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showPlotNo: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotNo(body, OnSuccess, OnFailure)),
    GetAllUpdateStatus: (body, OnSuccess, OnFailure) =>
      dispatch(GetAllUpdateStatus(body, OnSuccess, OnFailure)),
  };
};

export default connect(mapStateToProps, mapDispatchToPrpos)(NewModal);
