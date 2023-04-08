import React, { useEffect, useState } from "react";
import { Row, Col, Input, Label, Button } from "reactstrap";
import { Divider } from "@material-ui/core";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
import swal from "sweetalert";
import validate from "components/Utilities Component/ValidationWrapper";

const FormCustomerCounter = (props) => {
  const { getRealStateAgentDetails, AgentDetails, upgradeCustomer } = props;

  const [agentData, setAgentData] = useState({
    name: "",
    CNIC: "",
    email: "",
    phoneNo: "",
  });
  const [customerDetails, setCustomerDetails] = useState({
    CustomerName: "",
    CustomerEmail: "",
    CustomePhoneNo: "",
    CustomerCNIC: "",
  });
  const [stateError, setstateError] = useState({
    NameError: "",
    CnicError: "",
    EmailError: "",
    PhoneError: "",
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

  const onSuccessUpgrade = () => {
    swal("Congratulations!", "Customer upgraded successfully", "success");
    setAgentData({
      name: "",
      CNIC: "",
      email: "",
      phoneNo: "",
    });
  };
  const onFailureUgrade = () => {
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

  const verify = () => {
    setstateError({
      ...stateError,
      NameError: validate("required", customerDetails.CustomerName),
      CnicError: validate("CNIC", customerDetails.CustomerCNIC),
      EmailError: validate("email", customerDetails.CustomerEmail),
      PhoneError: validate("phoneNumber", customerDetails.CustomePhoneNo),
    });

    if (
      stateError.NameError == null &&
      stateError.CnicError == null &&
      stateError.PhoneError == null &&
      stateError.EmailError == null
    ) {
      let body = { ...customerDetails, FormId: agentData.FromId };
      upgradeCustomer(body, onSuccessUpgrade, onFailureUgrade);
    }
  };

  const CheckFields = (name) => {
    if (name == "Name") {
      setstateError({
        ...stateError,
        NameError: validate("required", customerDetails.CustomerName),
      });
    } else if (name == "Cnic") {
      setstateError({
        ...stateError,
        CnicError: validate("CNIC", customerDetails.CustomerCNIC),
      });
    } else if (name == "Email") {
      setstateError({
        ...stateError,
        EmailError: validate("email", customerDetails.CustomerEmail),
      });
    } else if (name == "Phone") {
      setstateError({
        ...stateError,
        PhoneError: validate("phoneNumber", customerDetails.CustomePhoneNo),
      });
    }
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
            // disabled
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
        {/* <Col
          xl="4"
          lg="4"
          md="4"
          sm="6"
          className="d-flex justify-content-end "
        >
          <BarcodeScannerComponent
            width={500}
            height={300}
            onUpdate={(err, result) => {
              if (result?.text) setVerficationNo(result.text);
            }}
          />
        </Col> */}
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
          <h4 className="mb-0"> Customer Details </h4>
          <br />
          <Row>
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Name
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={customerDetails.CustomerName}
                onBlur={() => CheckFields("Name")}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    CustomerName: e.target.value,
                  })
                }
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
                value={customerDetails.CustomerCNIC}
                onBlur={() => CheckFields("Cnic")}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    CustomerCNIC: e.target.value,
                  })
                }
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
            </Col>{" "}
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                E-mail
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="email"
                value={customerDetails.CustomerEmail}
                onBlur={() => CheckFields("Email")}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    CustomerEmail: e.target.value,
                  })
                }
              />
              {stateError.EmailError !== "" && stateError.EmailError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {stateError.EmailError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
            </Col>{" "}
            <Col xl="4" lg="4" md="4" sm="6">
              <Label className="form-control-label" for="input-username">
                Cell Phone No.
              </Label>
              <Input
                id="exampleFormControlSelect1"
                type="text"
                value={customerDetails.CustomePhoneNo}
                onBlur={() => CheckFields("Phone")}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    CustomePhoneNo: e.target.value,
                  })
                }
                maxLength={11}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              {stateError.PhoneError !== "" && stateError.PhoneError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {stateError.PhoneError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
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

export default FormCustomerCounter;
