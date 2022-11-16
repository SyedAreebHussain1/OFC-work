import React, { useEffect, useState } from "react";
import { Row, Col, Input, Label, Button } from "reactstrap";
import { Divider } from "@material-ui/core";
import swal from "sweetalert";
import validate from "components/Utilities Component/ValidationWrapper";
import jsPDF from "jspdf";
import PalmDreamLogo from "../images/palm_dreams_logo.png";

const FormVerificationCounter = (props) => {
  const { getRealStateAgentDetails, AgentDetails, verificationForm } = props;

  const [agentData, setAgentData] = useState({
    name: "",
    CNIC: "",
    email: "",
    phoneNo: "",
  });
  const [customer, setCustomer] = useState({
    name: "",
    cnic: "",
  });
  const [stateError, setstateError] = useState({
    NameError: "",
    CnicError: "",
  });
  const [verificationNo, setVerficationNo] = useState("");
  const [validateError, setValidateError] = useState("");

  const onSuccess = (res) => {
    if (res.response === "Data Not Found") {
      swal("Sorry!", res.response, "error");
    }
  };
  const onFailure = () => {
    swal("Sorry!", "Something went wrong", "error");
  };

  const onSuccessVerify = () => {
    swal("Congratulations!", "Form Verified successfully", "success");
    printDocument();
    setAgentData({
      name: "",
      CNIC: "",
      email: "",
      phoneNo: "",
    });
  };
  const onFailureVerify = () => {
    swal("Sorry!", "Something went wrong", "error");
  };

  const handleGetData = () => {
    if (verificationNo !== "") {
      setValidateError("");
      let body = {
        AgnetCnic: null,
        formno: verificationNo,
        FormStatus: 71,
      };
      getRealStateAgentDetails(body, onSuccess, onFailure);
    } else {
      setValidateError("Required!");
    }
  };

  // let dateTime = new Date(opt.Datetime);
  // let date = dateTime.split("T")[0];
  // // let time = dateTime.toLocaleTimeString();
  // let body = {
  //   AgnetCnic: null,
  //   formno: verificationNo,
  //   FormStatus: 71,
  //   name: customer.name,
  //   cnic: customer.cnic,
  //   date: date,
  // };

  const verify = () => {
    setstateError({
      ...stateError,
      NameError: validate("required", customer.name),
      CnicError: validate("CNIC", customer.cnic),
    });
    if (stateError.NameError == null && stateError.CnicError == null) {
      // let dateTime = new Date();
      // let date = dateTime.toLocaleDateString();

      let body = {
        FormId: agentData.FromId,
        Amount: 1000,
        name: customer.name,
        cnic: customer.cnic,
        // date: date,
      };
      verificationForm(body, onSuccessVerify, onFailureVerify);
    }
  };
  const CheckFields = (name) => {
    if (name == "Name") {
      setstateError({
        ...stateError,
        NameError: validate("required", customer.name),
      });
    } else if (name == "Cnic") {
      setstateError({
        ...stateError,
        CnicError: validate("CNIC", customer.cnic),
      });
    }
  };

  const printDocument = (user) => {
    let date = new Date().toISOString().split("T")[0];
    const doc = new jsPDF();
    doc.addImage(PalmDreamLogo, "png", 15, 0, 30, 30);
    doc.text("Verification Receipt", 88, 40);
    doc.setFontSize(10);
    doc.text("Date: " + date, 168, 18);
    doc.autoTable({
      theme: "grid",
      head: [["Details", ""]],
      body: [
        ["Form No.", agentData.FormNo],
        ["Name", customer.name],
        ["CNIC No.", customer.cnic],
        ["Amount", "1000/-"],
      ],
      margin: { top: 55 },
      styles: { lineColor: 10, cellWidth: 91 },
    });
    doc.setFontSize(10);
    doc.text("Singnature:________________", 145, 130);
    doc.save(`verificationRecptNo.${agentData.FormNo}.pdf`);
  };

  useEffect(() => {
    if (AgentDetails && AgentDetails !== "Data Not Found") {
      setAgentData(AgentDetails?.[0].Data[0]);
    }
  }, [AgentDetails]);

  useEffect(() => {
    setAgentData({
      name: "",
      CNIC: "",
      email: "",
      phoneNo: "",
    });
  }, [true]);

  return (
    <>
      <Row>
        <Col xl="4" lg="4" md="4" sm="6">
          <Label className="form-control-label" for="input-username">
            Verification No.
          </Label>
          <Input
            id="exampleFormControlSelect1"
            type="text"
            value={verificationNo}
            onChange={(e) => setVerficationNo(e.target.value)}
            autoFocus={true}
            placeholder="Scan Barcode..."
          />
          {validateError !== "" && (
            <small>
              <div style={{ color: "red" }}>{validateError}</div>
            </small>
          )}
        </Col>

        <Col xl="4" lg="4" md="4" sm="6">
          <Button
            className="mt-4 py-3 px-4"
            color="info"
            size="small"
            onClick={handleGetData}
          >
            Search
          </Button>
        </Col>
      </Row>
      <br />
      <Divider />
      <br />
      {agentData?.name !== "" ? (
        <>
          <h4 className="mb-0"> Agent Details </h4>
          <br />
          <Row>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Name
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={agentData.name}
                disabled
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                CNIC
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={agentData.CNIC}
                disabled
              />
            </Col>{" "}
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Deposit Slip #
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={agentData.FormNo}
                disabled
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Currency Number Of 10rs
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={agentData["10Rs"]}
                disabled
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Currency Number Of 50rs
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={agentData["50Rs"]}
                disabled
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Currency Number Of 100rs
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={agentData["100Rs"]}
                disabled
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                E-mail
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={agentData.email}
                disabled
              />
            </Col>{" "}
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Cell Phone No.
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={agentData.phoneNo}
                disabled
              />
            </Col>
          </Row>
          <br />
          <Divider />
          <br />
          <Row>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Name
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={customer.name}
                onBlur={() => CheckFields("Name")}
                onChange={(e) => {
                  setCustomer({ ...customer, name: e.target.value });
                }}
              />
              {stateError.NameError !== "" && stateError.NameError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {stateError.NameError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
            </Col>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                CNIC
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={customer.cnic}
                onBlur={() => CheckFields("Cnic")}
                onChange={(e) => {
                  setCustomer({ ...customer, cnic: e.target.value });
                }}
                maxLength={13}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              {stateError.CnicError !== "" && stateError.CnicError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {stateError.CnicError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
            </Col>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Verification Fee
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={"1000/-"}
                disabled
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="6">
              <Button
                className="mt-4 py-3 px-4"
                color="success"
                onClick={verify}
              >
                Verify
              </Button>
            </Col>
          </Row>
          <br />
          <Divider />
          <br />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default FormVerificationCounter;
