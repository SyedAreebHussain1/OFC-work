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
  Spinner,
} from "reactstrap";
import swal from "sweetalert";
import axios from "axios";
import jsPDF from "jspdf";

const RequestWallet = (props) => {
  const [loading, SetLoading] = useState(false);
  const [token, setToken] = useState("");
  const [newamount, setNewAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [chequeno, setChequeno] = useState("");
  const [chequedate, setChequedate] = useState("");
  const [confpass, setConfPass] = useState("");
  const [err, setErr] = useState("");
  const clearState = () => {
    setNewAmount("");
    setRemarks("");
    setChequedate("");
    setChequeno("");
  };
  const proceed = () => {
    SetLoading(true);
    function addMonths(numOfMonths, date = new Date()) {
      date.setMonth(date.getMonth() + numOfMonths);

      return date;
    }
    const expirayDate = addMonths(2);
    let body = {
      //UserId:props.userdata?.user_id,
      // UserId: 1,
      UserId: parseInt(props.userdata?.user_id),
      Amount: parseInt(newamount),
      PaymentThroughId: parseInt(props.userdata?.PaymentThroughId),
      Remarks: remarks,
      InstallmentNo: props.userdata?.installmentno,
      Plot_No: props.userdata?.plotNo,
      ChequeNo: chequeno,
      PaymentStageId: props.userdata?.sale_paymentstagesid,
      ChequeDate: chequedate,
      PaymentTypeId: props.userdata?.PaymentTypeId,
      ExpiryDate: expirayDate,
    };
    props.wallet_Middleware(body, onSuccess, onFailure);
    // printDocument();
  };
  const printDocument = (data) => {
    function addMonths(numOfMonths, date = new Date()) {
      date.setMonth(date.getMonth() + numOfMonths);

      return date;
    }
    const expirayDate = addMonths(2);
    let date = new Date().toISOString().split("T")[0];

    const doc = new jsPDF();

    doc.setFontSize(16);
    // doc.addImage(PalmDreamLogo, "png", 15, 0, 30, 30);
    doc.text("Temporary Receipt of wallet", 68, 40);
    doc.setFontSize(11);
    doc.text("Date: " + date, 168, 18);
    doc.text("Customer Information:", 15, 60);
    doc.text("Email:", 15, 70);
    doc.text(props.userdata?.clientName, 68, 70);
    doc.text("CNIC:", 15, 80);
    doc.text(props.userdata?.cnic, 68, 80);
    if (chequeno?.trim().length > 0 && chequedate?.trim().length > 0) {
      doc.autoTable({
        theme: "grid",
        head: [["Details", ""]],
        body: [
          ["Amount", newamount],
          ["Cheque No", chequeno],
          ["Cheque Date.", chequedate],

          ["Pay type", props.userdata?.PaymentthroughName],
          ["Payable amount", props.userdata?.Amount],
          ["Expire Date", expirayDate],
          ["Remarks", remarks],
        ],
        margin: { top: 90 },
        styles: { lineColor: 10, cellWidth: 91 },
      });
      doc.setFontSize(10);
      doc.save("TempReceipt.pdf");
    } else {
      doc.autoTable({
        theme: "grid",
        head: [["Details", ""]],
        body: [
          ["Amount", newamount],
          ["Pay type", props.userdata?.PaymentthroughName],
          ["Payable amount", props.userdata?.Amount],
          ["Expire Date.", expirayDate],
          ["Remarks", remarks],
        ],
        margin: { top: 90 },
        styles: { lineColor: 10, cellWidth: 91 },
      });
      doc.setFontSize(10);
      doc.save("TempReceipt.pdf");
      handleSendFile(data, doc);
    }
  };
  const handleSendFile = (data, doc) => {
    let formData = new FormData();
    formData.append("TransactionId ", data.response[0].TransactionId);
    formData.append("document", doc);
    props.file_Middleware(formData, onSuccess1, onFailure1);
  };
  const onSuccess1 = () => {};
  const onFailure1 = () => {};
  const onSuccess = (data) => {
    SetLoading(false);
    swal({
      title: "Success!",
      text: "Amount successfully added in wallet",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        clearState();
        window.open(data.url);
        props.toggle();

        // printDocument(data);
      } else {
        clearState();
        props.toggle();
        // printDocument();
      }
    });
  };
  const onFailure = () => {
    SetLoading(false);
  };

  return (
    <Modal size="lg" centered={true} isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle} style={{ backgroundColor: "#054D87" }}>
        <h2 style={{ color: "white", textAlign: "center" }}>Insert wallet</h2>
      </ModalHeader>
      <ModalBody>
        <Row style={{ marginTop: "-15px" }}>
          {/* <Col style={{ textAlign: "left" }} lg="6" md="6" sm="6" xs="6">
            Date:{" "}
            <span style={{ fontWeight: "bold" }}>{props.userdata.Dated}</span>
            
          </Col> */}
          <Col style={{ textAlign: "left" }} lg="6" md="6" sm="6" xs="6">
            <span style={{ fontWeight: "bold" }}>
              Currency: {props.userdata?.currencyName}
            </span>
          </Col>
          <Col style={{ textAlign: "right" }} lg="6" md="6" sm="6" xs="6">
            <span style={{ fontWeight: "bold" }}>
              Plot no: {props.userdata?.plotNo}
            </span>
          </Col>
        </Row>
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
              Pay type
            </label>
            <input
              value={props.userdata?.PaymentthroughName}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Payable amount
            </label>
            <input
              value={props.userdata?.Amount}
              disabled
              type="text"
              id="input-username"
              className="form-control"
            ></input>
          </Col>
        </Row>
        {props.userdata?.PaymentthroughName?.includes("Crossed Cheque") ? (
          <>
            <Row>
              <Col lg="6" md="6" sm="6" xs="6">
                <label className="form-control-label" for="input-username">
                  Cheque No <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  value={chequeno}
                  placeholder="Enter checque no"
                  onChange={(e) => {
                    setChequeno(e.target.value);
                  }}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  // disabled
                  type="text"
                  id="input-username"
                  className="form-control"
                ></input>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6">
                <label className="form-control-label" for="input-username">
                  Cheque Date <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="date"
                  id="input-username"
                  className="form-control"
                  placeholder="Only"
                  value={chequedate}
                  onChange={(e) => setChequedate(e.target.value)}
                ></input>
              </Col>
            </Row>
          </>
        ) : null}
        <Row>
          <Col lg="6" md="6" sm="6" xs="6">
            <label className="form-control-label" for="input-username">
              Wallet amount <span style={{ color: "red" }}>*</span>
            </label>
            <input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={newamount}
              placeholder="Enter your wallet amount"
              onChange={(e) => {
                setNewAmount(e.target.value);
              }}
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
              value={props.userdata.Dated}
              disabled
              placeholder="Date"
              // onChange={(e) => {
              //   setNewAmount(e.target.value);
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
          disabled={loading}
          onClick={() => {
            if (props.userdata?.PaymentthroughName?.includes("Crosed")) {
              if (
                chequedate?.trim().length <= 0 &&
                chequeno?.trim().length <= 0
              ) {
                swal("Sorry!", "All * fields are required.", "error");
              } else if (
                remarks?.trim().length <= 0 &&
                newamount?.trim().length <= 0
              ) {
                swal("Sorry!", "All * fields are required.", "error");
              } else {
                proceed();
                // printDocument();
              }
            } else if (
              remarks?.trim().length <= 0 &&
              newamount?.trim().length <= 0
            ) {
              swal("Sorry!", "All * fields are required.", "error");
            } else {
              proceed();
              // printDocument();
            }
          }}
          // onClick={proceed}
          style={{
            width: "100%",
            backgroundColor: "#054D87",
            color: "white",
            marginTop: "2%",
          }}
          // color="danger"
          outline
        >
          {loading && <Spinner animation="border" size="sm" color="white" />}{" "}
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
export default RequestWallet;
