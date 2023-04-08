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
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { useState, useEffect } from "react";
import validate from "../../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";
import { BASEURL } from "config/api/URL";
import axios from "axios";
let token = localStorage.getItem("auth");
const EditProjectModal = (props) => {
  const [state, setState] = useState({});
  const [project, setProjects] = useState([]);
  const [status, setStatus] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setState({
      ...state,
      status_id: props.data?.status_id,
      Project_id: props.data?.Project_id,
      Project_name: props.data?.Project_name,
      Project_Desc: props.data?.Project_Desc,
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

  useEffect(() => {
    getProjects();
    getStatus();
  }, []);
  const onchange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const HandleSubmit = () => {
    const body = state;
    props._updateProject_Middleware(body, onSuccessApprove, onFailure);
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
          Update Project Modal
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
              value={state.status_id}
              type="select"
              onChange={(e) => onchange(e.target.value, "status_id")}
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
            <label className="form-control-label" for="input-Project_name">
              Project Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.Project_name}
              onChange={(e) => onchange(e.target.value, "Project_name")}
              // onKeyPress={(event) => {
              //   if (!/[0-9]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}
              placeholder="Enter project name"
              type="text"
              id="input-Project_name"
              className="form-control"
            ></input>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg="12" md="12" sm="12" xs="12">
            <Form>
              <FormGroup>
                <Label className="form-control-label">
                  Description <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  value={state.Project_Desc}
                  onChange={(e) => onchange(e.target.value, "Project_Desc")}
                  rows={6}
                  placeholder="Write project description"
                  style={{ resize: "none" }}
                  type="textarea"
                  name="text"
                  id="exampleText"
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter style={{ marginTop: -40 }}>
        <Row>
          <Col>
            <Button
              style={{ backgroundColor: "#015652  ", color: "white" }}
              onClick={() => {
                if (
                  state.status_id?.toString().trim().length > 0 &&
                  state.Project_name?.toString().trim().length > 0 &&
                  state.Project_Desc?.toString().trim().length > 0
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
export default EditProjectModal;
