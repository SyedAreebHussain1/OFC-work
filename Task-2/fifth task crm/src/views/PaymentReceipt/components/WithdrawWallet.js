import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Container,
  Col,
  Row,
} from "reactstrap";
import moment from "moment";
import swal from "sweetalert";
import axios from "axios";
import jsPDF from "jspdf";
const WithdrawWallet = (props) => {
  const [loading, SetLoading] = useState(false);
  const [token, setToken] = useState("");
  const [newamount, setNewAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [totalbal, setTotalbal] = useState("");
  const [installno, setInstallno] = useState("");
  const [datee, setDatee] = useState("");
  const [err, setErr] = useState("");

  const clearState = () => {
    setNewAmount("");
    setRemarks("");
    setTotalbal("");
  };
  useEffect(() => {
    let token = localStorage.getItem("auth");
    let path = "GetuserWallet";
    // const body = {
    //   CNIC: 4200068520885,
    // };

    // const cnic = props.userdata?.cnic;

    axios
      .get(
        `https://backendcrm.squarepro.net/CRM/${path}?CNIC=${props.userdata?.cnic}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          setTotalbal(res.data?.response[0]?.Amount);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  const proceed = () => {
    let body = {
      UserId: props.userdata?.user_id,
      // UserId: 1,
      // UserId:parseInt(props.userdata?.user_id) ,
      Amount: parseInt(newamount),
      Plot_No: props.userdata?.plotNo,
      Remarks: remarks,
      InstallmentNo: props.userdata?.installmentno,
    };
    props.wallet_request_Middleware(body, onSuccess, onFailure);
    // printDocument();
  };

  const onSuccess = () => {
    swal({
      title: "Success!",
      text: "Amount withdraw request successfull",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.toggle();
        clearState();
      } else {
        props.toggle();
        clearState();
      }
    });
  };
  const onFailure = () => {};
console.log(props.userdata);
  return (
    <Modal size="lg" centered={true} isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle} style={{ backgroundColor: "#054D87" }}>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Withdraw request
        </h2>
      </ModalHeader>
      <ModalBody>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Email
            </label>
            <input
              value={props.userdata?.clientName}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Cnic
            </label>
            <input
              value={props.userdata?.cnic}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
        </Row>
        {/* <Row>
         
        </Row> */}
        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Total balance
            </label>
            <input
              value={totalbal}
              placeholder="Total balance"
              onChange={(e) => {
                setTotalbal(e.target.value);
              }}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Balance required <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={newamount}
              placeholder="Enter withdraw amount"
              onChange={(e) => {
                setNewAmount(e.target.value);
              }}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              //   disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
        </Row>

        <Row>
          {/* <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Installment no.
            </label>
            <input
              value={props.userdata?.installmentno}
              placeholder="Enter Installment No."
              disabled
              // onChange={(e) => {
              //   setInstallno(e.target.value);
              // }}
              // disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col> */}
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Payment Type
            </label>
            <input
              value={props.paymentType}
              placeholder="Enter Installment No."
              disabled
              // onChange={(e) => {
              //   setInstallno(e.target.value);
              // }}
              // disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Date
            </label>
            <input
              value={moment().format("MMMM Do YYYY")}
              placeholder="Enter Installment No."
              disabled
              // onChange={(e) => {
              //   setInstallno(e.target.value);
              // }}
              // disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
        </Row>
        <Row className="ml-1 mr-1 mt-1">
          <label className="form-control-label" for="input-username">
            Remarks <span style={{ color: "red" }}>*</span>
          </label>
          <Input
            value={remarks}
            onChange={(e) => {
              setRemarks(e.target.value);
            }}
            rows={6}
            placeholder="Write your remarks..."
            style={{ resize: "none" }}
            type="textarea"
            name="text"
            id="exampleText"
          />
        </Row>
        <Button
          onClick={() => {
            if (parseInt(newamount) > parseInt(totalbal)) {
              swal("Sorry!", "Not enough money.", "error");
            } else if (
              newamount?.trim().length > 0 &&
              remarks?.trim().length > 0
            ) {
              proceed();
            } else {
              swal("Sorry!", "All * fields are required.", "error");
            }
            // proceed();
          }}
          style={{
            width: "100%",
            backgroundColor: "#054D87",
            color: "white",
            marginTop: "2%",
          }}
          // color="danger"
          outline
        >
          Proceed
          {/* {loading ? <Loading attr="Update" /> : "Update"} */}
        </Button>
      </ModalBody>
      {/* <ModalFooter>
          <Row>
            <Col>
              <h1 style={{ color: "#6d7075" }}>Rs:{values.price}</h1>
            </Col>
            <Col>
              <Button
                style={{ backgroundColor: "#015652  ", color: "white" }}
                onClick={confirm}
                disabled={numCount === 30}
              >
                Confirm
              </Button>
            </Col>
          </Row>
        </ModalFooter> */}
    </Modal>
  );
};
export default WithdrawWallet;
