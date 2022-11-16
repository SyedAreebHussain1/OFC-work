import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Row,
  CardBody,
  Table,
  Col,
  Input,
  Alert,
} from "reactstrap";
import { useState, useEffect } from "react";
import {
  showPlotDetails,
  showPlotPosition,
  showAdd,
  showDelete,
} from "../Invent/GetPlotDetails/middleware";

import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import swal from "sweetalert";
import Select from "react-select";

const PlotDetails = (props) => {
  //--
  const [Value, setValue] = useState([null]);
  useEffect(() => {
    if (props.Position !== null && props.Position !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Position.length; i++) {
        let obj = {
          value: props.Position[i].pos_id,
          label: props.Position[i].PositionName,
        };
        arr.push(obj);
      }
      setValue(arr);
    }
  }, [props.Position]);

  const [source, setSource] = useState({
    Positionid: 10,
    PlotPositionId: 11,
  });

  const [body, setbody] = useState(null);

  const [body2, setbody2] = useState({
    PlotPositionId: "",
  });

  const AddPlot = () => {
    if (body) {
      props.showAdd(
        { Plotid: props.detail.Plotid, PositionId: body },
        OnnSuccess,
        OnnFailure
      );
    }
  };

  const DeletePlot = () => {
    props.showDelete(body2, OnSuccess, OnFailure);
  };

  const OnChange = (val, name) => {
    setbody(val);
    // setSource({ ...source, Positionid: val });
    // setbody({ ...body, PositionId: val });
  };

  // useEffect(() => {
  //   props.showPlotDetails(body, OnSuccess, OnFailure);
  // }, [body]);
  const OnSsuccess = () => {
    // setSource({ ...source });
    // setbody({ ...body });
  };

  const OnFailure = () => {};
  const OnSuccess = () => {};
  // const OnnnSuccess = () => {};
  // const OnnnFailure = () => {};

  const OnnSuccess = () => {
    swal("Added!", {
      icon: "success",
    });
    // setSource({ ...source });
    // setbody({ ...body });
    // props.showPlotPosition(body, OnnnSuccess, OnnnFailure);
  };

  const OnnFailure = () => {
    swal("Failed!");
  };

  useEffect(() => {
    props.showPlotPosition(OnSuccess, OnFailure);
  }, [props.showPlotPosition]);

  const DeletePosition = (id) => {
    swal({
      title: "",
      text: "Poisition Deleted!",
      icon: "warning",
      button: "OK!",
    });

    // setbody2({ ...body2, PlotPositionId: paramm.PlotPositionId });
    props.showDelete({ PlotPositionId: id }, OnSsuccess, OnFailure);

    // setSource({ ...source });
    // setbody({ ...body });
  };
  // useEffect(() => {
  //   props.showDelete(body2, OnSsuccess, OnFailure);
  // }, [body2.PlotPositionId]);
  return (
    <Modal size="md" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Plot Information</h3>
      </ModalHeader>
      <CardBody>
        <Row>
          <Col lg="12">
            <label className="form-control-label">Position Name</label>

            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              options={Value}
              id="exampleFormControlSelect1"
              type="select"
              //  value={Value.value}
              onChange={(e) => OnChange(e.value)}
            />
          </Col>
          <br /> <br />
          <Col>
            <Button
              style={{ marginTop: "20px" }}
              size="sm"
              color="success"
              onClick={AddPlot}
            >
              Add
              <span>
                <i className="ni ni-fat-add" />
              </span>
            </Button>
          </Col>
        </Row>
        <br />
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Position</th>
              <th scope="col">Extra Charges</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.detail?.PlotPosition !== null &&
            props.detail?.PlotPosition !== undefined ? (
              props.detail?.PlotPosition?.map((plotposition, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{plotposition.position.PositionName}</td>
                    <td>{plotposition.position.ExtraCharges}</td>
                    <td>
                      <Button
                        color="danger"
                        id="search"
                        size="sm"
                        onClick={() =>
                          DeletePosition(plotposition.PlotPositionId)
                        }
                      >
                        <span className="btn-inner--icon">
                          <i class="fas fa-trash-alt"></i>
                        </span>
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <Loader
                type="ThreeDots"
                color="#8dbc4c"
                height={80}
                width={80}
                visible={props.isLoading}
                secondaryColor="#4f9cb9"
              />
            )}
          </tbody>
        </Table>
        <hr />
      </CardBody>
      <ModalFooter>
        <Button size="sm" color="info" onClick={props.toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  Details: state.getPlotDetails.Details,
  Position: state.getPlotDetails.Position,
  Add: state.getPlotDetails.Add,
  Delete: state.getPlotDetails.Delete,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showPlotDetails: (body, OnSuccess, OnFailure) =>
      dispatch(showPlotDetails(body, OnSuccess, OnFailure)),
    showPlotPosition: (OnSuccess, OnFailure) =>
      dispatch(showPlotPosition(OnSuccess, OnFailure)),
    showAdd: (body, OnSuccess, OnFailure) =>
      dispatch(showAdd(body, OnSuccess, OnFailure)),
    showDelete: (body, OnSuccess, OnFailure) =>
      dispatch(showDelete(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(PlotDetails);
