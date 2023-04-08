import axios from "axios";
import React from "react";
import swal from "sweetalert";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  CardBody,
  Card,
  Table,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";

const Mod = (props) => {
  const [showResponseData, setResponseData] = useState(null);

  const [contact, setContact] = useState(null);
  const OnSuccess = () => {
    if (props.Users !== null) {
      setContact(props.Users);
    }
  };
  const OnFailure = () => {
    window.alert("fail");
  };
  const dateFunction = (date) => {
    const nDate = new Date(date).toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
    });
    return nDate;
  };

  const [body, setBody] = useState({
    HouseStatus: "",
    Plotid: "",
  });
  useEffect(() => {
    if (props.detail != null && props.detail != undefined) {
      setBody({
        HouseStatus: 27,
        Plotid: props.detail?.Plotid,
      });
    }
  }, [props.detail]);

  const [body2, setBody2] = useState({
    HouseStatus: "",
    Plotid: "",
  });

  useEffect(() => {
    if (props.detail !== null && props.detail !== undefined) {
      props.showSaleOrder(props.detail?.SaleOrderNo, OnSuccessM, OnFailureM);
    }
  }, [props.detail?.SaleOrderNo]);

  useEffect(() => {
    if (props.detail !== null && props.detail !== undefined) {
      props.showQuotationDetail(
        props.detail?.SaleQuotationNo,
        OnSuccessQuotation,
        OnFailureQuotation
      );
    }
  }, [props.detail?.SaleQuotationNo]);

  const GenerateOrder = () => {};
  const OnSuccessM = () => {};
  const OnFailureM = () => {};
  //available he tu reserved ho jae
  useEffect(() => {
    if (props.detail != null && props.detail != undefined) {
      setBody2({
        HouseStatus: 25,
        Plotid: props.detail?.Plotid,
      });
    }
  }, [props.detail]);

  const OnSuccessQuotationn = () => {
    swal({
      text: "Plot Available!",
      icon: "success",
      button: "OK!",
    });
    //props.showPlotInfo(1,10, OnSuccessQuotation, OnFailureQuotation);
    props.toggle(true);
  };
  const OnFailureQuotationn = () => {};
  const Hidee = () => {
    props.showUpdateStatus(body, On_SuccessQuotation, On_FailureQuotation);
    //props.toggle(true)
  };
  const Show = () => {
    props.showUpdateStatus(body2, OnSuccessQuotationn, OnFailureQuotationn);
    //props.toggle(true)
  };

  const On_SuccessQuotation = () => {
    swal({
      text: "Plot Reserved!",
      icon: "success",
      button: "OK!",
    });

    //props.showPlotInfo(1,10, OnSuccessQuotation, OnFailureQuotation);
    props.toggle(true);
  };

  const On_FailureQuotation = () => {};

  const OnSuccessQuotation = () => {};

  const OnFailureQuotation = () => {};
  const [state, setstate] = useState("");
  const [stateOrder, setstateOrder] = useState("");
  useEffect(() => {
    if (props.Quotations !== null && props.Quotations !== undefined) {
      setstate(props.Quotations[0]);
    }
  }, [props.Quotations]);
  useEffect(() => {
    if (props.Order !== null && props.Order !== undefined) {
      setstateOrder(props.Order[0]);
    }
  }, [props.Order]);

  let a = "";
  let b = "";
  a = new Date().toLocaleString();

  const printDocumentQuotation = () => {
    var doc = new jsPDF("p", "mm", "a4", true);
    doc.html("", {
      callback: function (pdf) {
        pdf.setTextColor("Black");
        pdf.addFont("helvetica", "normal");
        pdf.setFontSize(15);
        pdf.text("Sale Quotation of Plots ", 70, 20);
        pdf.setFontSize(11);
        pdf.text("Quotation No.", 10, 40);
        pdf.text("Printed on:", 130, 40);
        pdf.text(a, 150, 40);
        pdf.text("Quotation Status:", 40, 70);
        pdf.text("Client Name:", 40, 80);
        pdf.text("Client Phone:", 40, 90);
        pdf.text("Client Email", 40, 100);
        pdf.text("Project Name:", 40, 110);
        pdf.text("Plot Number:", 40, 120);
        pdf.text("Plot Size:", 40, 130);

        pdf.text("Valid To:", 40, 140);
        pdf.text("Valid From:", 40, 150);

        pdf.text("Printed By.", 10, 200);
        pdf.text("admin", 30, 200);
        if (
          props.Quotations !== null &&
          props.Quotations !== undefined &&
          props.Quotations.length > 0
        ) {
          let validToDate = dateFunction(state?.Validto).toLocaleString(
            "en-US",
            {
              timeZone: "Asia/Karachi",
            }
          );
          let validFromDate = dateFunction(state?.Validfrom).toLocaleString(
            "en-US",
            {
              timeZone: "Asia/Karachi",
            }
          );
          pdf.text(state?.SQ_No, 40, 40);
          pdf.text(state?.QuotationStatusName, 100, 70);
          pdf.text(state?.user_name, 100, 80);
          pdf.text(state?.user_phone, 100, 90);
          pdf.text(state?.user_email, 100, 100);
          pdf.text(state?.Project_name, 100, 110);
          pdf.text(state?.Plot_no, 100, 120);
          pdf.text(state?.CategoryName, 100, 130);
          pdf.text(validToDate, 100, 140);
          pdf.text(validFromDate, 100, 150);
          let name1 = state?.user_name;
          let p1 = name1.concat("_Quotation");
          pdf.save(p1);
        }
      },
    });
  };

  const printDocument2 = () => {
    var doc = new jsPDF("p", "mm", "a4", true);
    doc.html("", {
      callback: function (pdf) {
        pdf.setTextColor("Black");
        pdf.addFont("helvetica", "normal");
        pdf.setFontSize(14);
        pdf.text("Sale Order Details: ", 70, 20);
        pdf.setFontSize(11);
        pdf.text("Printed on:", 130, 40);
        pdf.text(a, 150, 40);

        pdf.text("Client Name", 40, 60);
        pdf.text("Email:", 40, 70);
        pdf.text("Phone:", 40, 80);
        pdf.text("Plot Type:", 40, 90);
        pdf.text("SQ Yards:", 40, 100);
        pdf.text("Plot No:", 40, 110);

        pdf.text("Sold Amount:", 40, 120);
        pdf.text("Net Amount", 40, 130);
        pdf.text("Gross Amount:", 40, 140);

        // if (props.Order!== null && props.Order !== undefined) {
        pdf.text(stateOrder?.user_name, 100, 60);
        pdf.text(stateOrder?.user_email, 100, 70);
        pdf.text(stateOrder?.user_phone, 100, 80);
        pdf.text(stateOrder?.PlotType_Name, 100, 90);
        pdf.text(stateOrder?.CategoryName, 100, 100);

        pdf.text(stateOrder?.Plot_no, 100, 110);
        pdf.text(
          stateOrder?.SoldAmounmt !== 0 ? stateOrder?.SoldAmounmt : "",
          100,
          120
        );
        pdf.text(
          stateOrder?.NetAmount !== 0 ? stateOrder?.SoldAmounmt : "",
          100,
          130
        );

        pdf.text(
          stateOrder?.NetAmount !== 0 ? stateOrder?.NetAmount : "",
          100,
          140
        );
        //}
        let name1 = stateOrder?.user_name;

        let p1 = name1.concat("_Sale Order");
        pdf.save(p1);
      },
    });
  };
  return (
    <Modal size="sm" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        <h3>Details</h3>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Project:</label>
          </Col>
          {props.detail.Project_name != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.Project_name}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            {" "}
            <label style={{ fontSize: "12px", color: "red" }}>Sector:</label>
          </Col>
          {props.detail.Sector_Name != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.Sector_Name}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Plot No:</label>{" "}
          </Col>
          {props.detail.Plot_no != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.Plot_no}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Size:</label>{" "}
          </Col>
          {props.detail.CategoryName != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.CategoryName}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Direction:</label>{" "}
          </Col>
          {props.detail.DirectionName != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.DirectionName}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Type:</label>{" "}
          </Col>
          {props.detail.PlotType_Name != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.PlotType_Name}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Status:</label>{" "}
          </Col>
          {props.detail.House_Status != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.House_Status}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>Position:</label>{" "}
          </Col>
          {props.detail.PositionName != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.PositionName}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Client Name:
            </label>{" "}
          </Col>
          {props.detail.user_name != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.user_name}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Client Email:
            </label>{" "}
          </Col>
          {props.detail.user_email != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.user_email}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Client Phone:
            </label>{" "}
          </Col>
          {props.detail.user_phone != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.user_phone}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Sales Person Name:
            </label>{" "}
          </Col>
          {props.detail.name != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.name}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Sales Team Name:
            </label>{" "}
          </Col>
          {props.detail.TeamName != null ? (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label style={{ fontSize: "13px", color: "black" }}>
                {props.detail.TeamName}
              </label>{" "}
            </Col>
          ) : (
            <Col lg="6" md="6" sm="6">
              {" "}
              <label>N/A</label>{" "}
            </Col>
          )}
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6">
            <label style={{ fontSize: "12px", color: "red" }}>
              Date and Time:
            </label>{" "}
          </Col>
          <Col lg="6" md="6" sm="6">
            <label style={{ fontSize: "13px", color: "black" }}>
              {dateFunction(props.detail.Datetime).toLocaleString("en-US", {
                timeZone: "Asia/Karachi",
              })}
            </label>{" "}
          </Col>
        </Row>
      </ModalBody>

      {/* Reserved ya destroy he tu available ho jae */}
      <ModalFooter>
        {props.detail.House_Status == 25 ? (
          <Button size="sm" onClick={Hidee} color="info">
            Reserved
          </Button>
        ) : props.detail.House_Status == 28 ? (
          <Button onClick={printDocumentQuotation} color="info">
            Print Quotation
          </Button>
        ) : props.detail.House_Status == 26 ? (
          <Button onClick={printDocument2} color="danger">
            Print Sale Order
          </Button>
        ) : (
          <Button size="sm" onClick={Show} color="info">
            Available
          </Button>
        )}
        <Button size="sm" onClick={props.toggle} color="info">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default Mod;
