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
const EditPaymentModal = (props) => {
  const [state, setState] = useState({});
  const [project, setProjects] = useState([]);
  const [status, setStatus] = useState([]);
  const [category, setCategory] = useState([]);
  const [plots, setPlots] = useState([]);
  const [pacakges, setPackages] = useState([]);
  useEffect(() => {
    setState({
      ...state,
      PaymentPlaneId: props.data?.paymentscheduletype?.PaymentPlaneId,
      Status_id: props.data?.paymentscheduletype?.Status_id,
      packageId: props.data?.package?.id,
      Project_id: props.data?.paymentscheduletype?.Project_id,
      Category_id: props.data?.paymentscheduletype?.Category_id,
      PlotType_id: props.data?.paymentscheduletype?.PlotType_id,
      PlaneName: props.data?.paymentscheduletype?.PlaneName,
      Description: props.data?.paymentscheduletype?.Description,
      NetAmount: props.data?.paymentscheduletype?.NetAmount,
      Discount: props.data?.paymentscheduletype?.Discount,
      downPaymentAmount: props.data?.paymentscheduletype?.downPaymentAmount,
      NoOfDownPayment: props.data?.paymentscheduletype?.NoOfDownPayment,
      NoOfInstallment: props.data?.paymentscheduletype?.NoOfInstallment,
      Installment: props.data?.paymentscheduletype?.Installment,
      NoOfBallonInstallment:
        props.data?.paymentscheduletype?.NoOfBallonInstallment,
      BallonInstallment: props.data?.paymentscheduletype?.BallonInstallment,
      OnPossession: props.data?.paymentscheduletype?.OnPossession,
      installmentPeriod: props.data?.paymentscheduletype?.installmentPeriod,
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
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getCategory = () => {
    const path = "Plotcategory";
    axios
      .get(`${BASEURL}${path}?limit=${1000000}&pageNo=${1}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          setCategory(res.data.response);
          // console.log("PAYMENT BANK DATA", res.data.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getPlots = () => {
    const path = "GetPlotType";
    axios
      .get(`${BASEURL}${path}?limit=${1000000}&pageNo=${1}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("Plots dataaa", res);
        if (res.data.status === true) {
          setPlots(res.data.response);
          // console.log("Plots data", res.data.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  const getPackages = (id) => {
    // console.log("IDDD OF PACKAGE", id);
    const path = "packages";
    axios
      .get(`${BASEURL}${path}?PlotType_id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("Plots dataaa", res);
        if (res.data.status === true) {
          // setPlots(res.data.response);
          if (res.data.response.length <= 0) {
            // console.log("SET EMTPY");
            setState({ ...state, packageId: "" });
          }
          setPackages(res.data.response);
          // console.log("Plots package data updated", res.data.response);
        }
      })
      .catch((error) => console.log("ERR", error));
  };
  useEffect(() => {
    getProjects();
    getStatus();
    getCategory();
    getPlots();
    getPackages(props.data?.paymentscheduletype?.PlotType_id);
  }, []);
  const onchange = (value, name) => {
    if (name === "PlotType_id") {
      // console.log("HIT API ", value);
      getPackages(value);
    }
    setState({
      ...state,
      [name]: value,
    });
  };
  const HandleSubmit = () => {
    const body = state;
    props._updateSchedule_Middleware(body, onSuccessApprove, onFailure);
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

  const onFailure = (error) => {
    swal({
      title: `${error}`,
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
    <Modal size="xl" centered={true} isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle} style={{ backgroundColor: "#054D87" }}>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Update Payment Schedule
        </h2>
      </ModalHeader>
      <ModalBody>
        <Row style={{ marginTop: -5 }}>
          <Col lg="3" md="3" sm="3" xs="3">
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
          <Col lg="3" md="3" sm="3" xs="3">
            <label className="form-control-label" for="input-Project_id">
              Project Id <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="Project_id"
              type="select"
              value={state.Project_id}
              onChange={(e) => onchange(e.target.value, "Project_id")}
            >
              <option value="">Select project</option>
              {project.length > 0 &&
                project.map((item) => {
                  return (
                    <option key={item.Project_id} value={item.Project_id}>
                      {item.Project_name}
                    </option>
                  );
                })}
            </Input>
          </Col>
          <Col lg="2" md="2" sm="2" xs="2">
            <label className="form-control-label" for="input-PlotType_id">
              Plot type Id <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="PlotType_id"
              type="select"
              value={state.PlotType_id}
              onChange={(e) => onchange(e.target.value, "PlotType_id")}
            >
              <option value="">Select Plot type Id</option>
              {plots.length > 0 &&
                plots.map((item) => {
                  return (
                    <option key={item.PlotType_id} value={item.PlotType_id}>
                      {item.PlotType_Name}
                    </option>
                  );
                })}
            </Input>
          </Col>
          <Col lg="2" md="2" sm="2" xs="2">
            <label className="form-control-label" for="input-packageId">
              Package <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="packageId"
              type="select"
              value={state.packageId}
              onChange={(e) => onchange(e.target.value, "packageId")}
            >
              <option value="">Select package</option>
              {pacakges.length > 0 &&
                pacakges.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  );
                })}
            </Input>
          </Col>
          <Col lg="2" md="2" sm="2" xs="2">
            <label className="form-control-label" for="input-Category_id">
              Category Id <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="Category_id"
              type="select"
              value={state.Category_id}
              onChange={(e) => onchange(e.target.value, "Category_id")}
            >
              <option value="">Select category</option>
              {category.length > 0 &&
                category.map((item) => {
                  return (
                    <option
                      key={item.pc_Category_id}
                      value={item.pc_Category_id}
                    >
                      {item.pc_CategoryName}
                    </option>
                  );
                })}
            </Input>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-PlaneName">
              Plane Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.PlaneName}
              onChange={(e) => onchange(e.target.value, "PlaneName")}
              // onKeyPress={(event) => {
              //   if (!/[0-9]/.test(event.key)) {
              //     event.preventDefault();
              //   }
              // }}
              placeholder="Enter plane name"
              type="text"
              id="input-PlaneName"
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

        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-NetAmount">
              Net Amount <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.NetAmount}
              onChange={(e) => onchange(e.target.value, "NetAmount")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter net amount"
              type="text"
              id="input-NetAmount"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-Discount">
              Discount <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.Discount}
              onChange={(e) => onchange(e.target.value, "Discount")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter Discount"
              type="text"
              id="input-Discount"
              className="form-control"
            ></input>
          </Col>
        </Row>

        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-downPaymentAmount">
              Down payment amount <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.downPaymentAmount}
              onChange={(e) => onchange(e.target.value, "downPaymentAmount")}
              onKeyPress={(event) => {
                if (!/[0-9,.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter downpayment amount"
              type="text"
              id="input-downPaymentAmount"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-NoOfDownPayment">
              No. of downpayment <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.NoOfDownPayment}
              onChange={(e) => onchange(e.target.value, "NoOfDownPayment")}
              onKeyPress={(event) => {
                if (!/[0-9,.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter downpayment no"
              type="text"
              id="input-NoOfDownPayment"
              className="form-control"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-NoOfInstallment">
              No. of Installment <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.NoOfInstallment}
              onChange={(e) => onchange(e.target.value, "NoOfInstallment")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter Installment no"
              type="text"
              id="input-NoOfInstallment"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-BallonInstallment">
              Ballon Installment <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.BallonInstallment}
              onChange={(e) => onchange(e.target.value, "BallonInstallment")}
              onKeyPress={(event) => {
                if (!/[0-9,.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter Ballon Installment"
              type="text"
              id="input-BallonInstallment"
              className="form-control"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <label
              className="form-control-label"
              for="input-NoOfBallonInstallment"
            >
              No. of Ballon Installment <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.NoOfBallonInstallment}
              onChange={(e) =>
                onchange(e.target.value, "NoOfBallonInstallment")
              }
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter ballon installment no"
              type="text"
              id="input-NoOfBallonInstallment"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-OnPossession">
              Possession <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.OnPossession}
              onChange={(e) => onchange(e.target.value, "OnPossession")}
              onKeyPress={(event) => {
                if (!/[0-9,.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter Possession"
              type="text"
              id="input-OnPossession"
              className="form-control"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-installmentPeriod">
              Installment Period <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.installmentPeriod}
              onChange={(e) => onchange(e.target.value, "installmentPeriod")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter Installment period"
              type="text"
              id="input-installmentPeriod"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-Installment">
              Installment <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={state.Installment}
              onChange={(e) => onchange(e.target.value, "Installment")}
              onKeyPress={(event) => {
                if (!/[0-9,.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Enter Installment"
              type="text"
              id="input-Installment"
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
                  state.Project_id?.toString().trim().length > 0 &&
                  state.Category_id?.toString().trim().length > 0 &&
                  state.PlotType_id?.toString().trim().length > 0 &&
                  state.PlaneName?.toString().trim().length > 0 &&
                  state.Description?.toString().trim().length > 0 &&
                  state.NetAmount?.toString().trim().length > 0 &&
                  state.Discount?.toString().trim().length > 0 &&
                  state.downPaymentAmount?.toString().trim().length > 0 &&
                  state.NoOfDownPayment?.toString().trim().length > 0 &&
                  state.NoOfInstallment?.toString().trim().length > 0 &&
                  state.Installment?.toString().trim().length > 0 &&
                  state.NoOfBallonInstallment?.toString().trim().length > 0 &&
                  state.BallonInstallment?.toString().trim().length > 0 &&
                  state.OnPossession?.toString().trim().length > 0 &&
                  state.installmentPeriod?.toString().trim().length > 0 &&
                  state.packageId?.toString().trim().length > 0
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
export default EditPaymentModal;
