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
import validate from "../../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";
import { BASEURL } from "config/api/URL";
import axios from "axios";
let token = localStorage.getItem("auth");
const EditStreetModal = (props) => {
  const [state, setState] = useState({});
  const [project, setProjects] = useState([]);
  const [status, setStatus] = useState([]);
  const [category, setCategory] = useState([]);
  const [sector, setSectors] = useState([]);
  useEffect(() => {
    setState({
      ...state,
      Status_id: props.data?.Status_id,
      Sector_id: props.data?.Sector_id,
      Street_id: props.data?.Street_id,
      Streename: props.data?.Streename,
      Description: props.data?.Description,
    });
  }, [props.data]);
  const getProjects = () => {
    const path = "Projects";
    axios
      .get(`${BASEURL}${path}?limit=${1000000}&pageNo=${1}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setProjects(res.data.response);
          // console.log("PAYMENT BANK DATA", res.data.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getStatus = () => {
    const path = "Status";
    axios
      .get(`${BASEURL}${path}?limit=${1000000}&pageNo=${1}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setStatus(res.data.response);
          // console.log("PAYMENT BANK DATA", res.data.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getSectors = () => {
    const path = "GetAllsectors";
    axios
      .get(`${BASEURL}${path}?limit=${1000000}&pageNo=${1}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setSectors(res.data.response);
          // console.log("PAYMENT BANK DATA", res.data.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  useEffect(() => {
    getProjects();
    getStatus();
    getSectors();
  }, []);
  const onchange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const HandleSubmit = () => {
    const body = state;
    props._updateStreet_Middleware(body, onSuccessApprove, onFailure);
  };

  const onSuccessApprove = (sucess) => {
    swal({
      title: "Successful",
      text: "successfully Updated",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
        props.getData();
      } else {
        props.toggle(false);
        props.getData();
      }
    });
  };

  const onFailure = () => {
    swal({
      title: "Something is wrong",
      type: "error",
      icon: "error",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle(false);
      } else {
        props.toggle(false);
      }
    });
  };

  return (
    <Modal size="md" centered={true} isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle} style={{ backgroundColor: "#054D87" }}>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Update Street Modal
        </h2>
      </ModalHeader>
      <ModalBody>
        <Row style={{ marginTop: -5 }}>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-Status_id">
              Status Id <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="Status_id"
              value={state.Status_id}
              type="select"
              onChange={(e) => onchange(e.target.value, "Status_id")}
            >
              <option value="">Select status</option>
              {status.length > 0 &&
                status.map((item) => {
                  return (
                    <option key={item.status_id} value={item.status_id}>
                      {item.status_name}
                    </option>
                  );
                })}
            </Input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-Project_id">
              Sector Id <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="Sector_id"
              value={state.Sector_id}
              type="select"
              onChange={(e) => onchange(e.target.value, "Sector_id")}
            >
              <option value="">Select sector</option>
              {sector.length > 0 &&
                sector.map((item) => {
                  return (
                    <option key={item.Sector_id} value={item.Sector_id}>
                      {item.Sector_Name}
                    </option>
                  );
                })}
            </Input>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-PlaneName">
              Street Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.Streename}
              onChange={(e) => onchange(e.target.value, "Streename")}
              // onKeyPress={(event) => {
              //   if (!/[0-9]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}
              placeholder="Enter street name"
              type="text"
              id="input-Streename"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-Description">
              Description <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.Description}
              onChange={(e) => onchange(e.target.value, "Description")}
              placeholder="Enter description"
              type="text"
              id="input-Description"
              className="form-control"
            ></input>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter style={{ marginTop: -10 }}>
        <Row>
          <Col>
            <Button
              style={{ backgroundColor: "#015652  ", color: "white" }}
              onClick={() => {
                if (
                  state.Status_id?.toString().trim().length > 0 &&
                  state.Sector_id?.toString().trim().length > 0 &&
                  state.Streename?.toString().trim().length > 0 &&
                  state.Description?.toString().trim().length > 0
                ) {
                  HandleSubmit();
                } else {
                  swal("Sorry!", "All * fields are required.", "error");
                }
              }}
            >
              Update
            </Button>
          </Col>
          <Col>
            <Button
              color="danger"
              //   style={{ backgroundColor: "red  ", color: "white" }}
              onClick={props.toggle}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </ModalFooter>
    </Modal>
  );
};
export default EditStreetModal;
