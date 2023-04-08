import React from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Tooltip } from "reactstrap";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { connect } from "react-redux";
import {
  Insert_Payment_Recipt_Middleware,
  Update_Payment_Stages_Middleware,
} from "../middleware";
// import { connect } from "react-redux";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import swal from "sweetalert";
import { History } from "@material-ui/icons";

const FormOfFormIssue = (props) => {
  const history = useHistory();
  const [notesStatus, setNotesStatus] = useState({
    available: "",
    assigned: ""
  });
  const [state, setstate] = useState({
    Range: "",
    Name: "",
    Cnic: "",
    Email: "",
    Phone: "",
    Address: "",
    SlipNo: "",
    Bank: "",
    FormCategoryNumber: "",
    FormCategoryName: "",
    totalAmount: "",
    recevingNo: "",
  });
  const [stateError, setstateError] = useState({
    RangeError: "",
    NameError: "",
    CnicError: "",
    EmailError: "",
    PhoneError: "",
    AddressError: "",
    SlipNoError: "",
    BankError: "",
    FormCategoryNumberError: "",
    FormCategoryNameError: "",
    TotalAmountError: "",
    RecevingNoError: "",
  });
  const onChange = (name, value) => {
    setstate({ ...state, [name]: value });
  };

  const Save = () => {
    setstateError({
      ...stateError,
      RangeError: validate("required", state.Range),
      SlipNoError: validate("required", state.SlipNo),
      BankError: validate("required", state.Bank),
      FormCategoryNumberError: validate("required", state.FormCategoryNumber),
      FormCategoryNameError: validate("required", state.FormCategoryName),
      NameError: validate("required", state.Name),
      CnicError: validate("CNIC", state.Cnic),
      EmailError: validate("email", state.Email),
      PhoneError: validate("phoneNumber", state.Phone),
      AddressError: validate("required", state.Address),
      TotalAmountError: validate("required", state.totalAmount),
      RecevingNoError: validate("required", state.recevingNo),
    });

    if (
      stateError.RangeError == null &&
      stateError.NameError == null &&
      stateError.CnicError == null &&
      stateError.PhoneError == null &&
      stateError.AddressError == null &&
      stateError.SlipNoError == null &&
      stateError.BankError == null &&
      stateError.FormCategoryNumberError == null &&
      stateError.FormCategoryNameError == null &&
      stateError.TotalAmountError == null &&
      stateError.RecevingNoError == null
    ) {
      let body = {
        noOfForms: state.Range,
        formno: state.SlipNo,
        name: state.Name,
        address: state.Address,
        AgnetCnic: state.Cnic,
        email: state.Email,
        number: state.Phone,
        password: "12344",
        FormStatus: 70,
        bankname: state.Bank,
        FormCategoryNumber: state.FormCategoryNumber,
        FormCategoryName: state.FormCategoryName,
        receivingNumber: state.recevingNo,
        totalAmount: state.totalAmount,
      };
      props.InsertRealStateAgent(body, onSuccess, onFailure);
    }
  };
  const onSuccess = () => {
    // swal("Successful", "Successfully Insert", "success")
    swal({
      title: "Successfully!",
      text: "Successfully Insert!",
      type: "success",
    }).then(function () {
      setstate({
        ...state,
        Range: "",
        Name: "",
        Cnic: "",
        Email: "",
        Phone: "",
        Address: "",
        SlipNo: "",
        Bank: "",
        FormCategoryNumber: "",
        FormCategoryName: "",
        totalAmount: "",
        recevingNo: "",
      });
    });
  };
  const onFailure = () => {
    swal("Unsuccessful", "Not Inserted", "warning");
  };
  const CheckFields = (name) => {
    if (name == "Range") {
      setstateError({
        ...stateError,
        RangeError: validate("required", state.Range),
      });
    } else if (name == "SlipNo") {
      setstateError({
        ...stateError,
        SlipNoError: validate("required", state.SlipNo),
      });
    } else if (name == "Bank") {
      setstateError({
        ...stateError,
        BankError: validate("required", state.Bank),
      });
    } else if (name == "Name") {
      setstateError({
        ...stateError,
        NameError: validate("required", state.Name),
      });
    } else if (name == "Cnic") {
      setstateError({ ...stateError, CnicError: validate("CNIC", state.Cnic) });
    } else if (name == "Email") {
      setstateError({
        ...stateError,
        EmailError: validate("email", state.Email),
      });
    } else if (name == "Phone") {
      setstateError({
        ...stateError,
        PhoneError: validate("phoneNumber", state.Phone),
      });
    } else if (name == "Address") {
      setstateError({
        ...stateError,
        AddressError: validate("required", state.Address),
      });
    } else if (name == "FormCategoryNumber") {
      setstateError({
        ...stateError,
        FormCategoryNumberError: validate("required", state.FormCategoryNumber),
      });
    } else if (name == "FormCategoryName") {
      setstateError({
        ...stateError,
        FormCategoryNameError: validate("required", state.FormCategoryName),
      });
    } else if (name == "totalAmount") {
      setstateError({
        ...stateError,
        TotalAmountError: validate("required", state.totalAmount),
      });
    } else if (name == "recevingNo") {
      setstateError({
        ...stateError,
        RecevingNoError: validate("required", state.recevingNo),
      });
    }
  };
  const Reset = () => {
    setstate({
      ...state,
      Range: "",
      Name: "",
      Cnic: "",
      Email: "",
      Phone: "",
      Address: "",
      SlipNo: "",
      Bank: "",
      FormCategoryNumber: "",
      FormCategoryName: "",
      totalAmount: "",
      recevingNo: "",
    });
  };
  const onStatusSuccess = () => { }
  const onStatusFailure = () => { }
  
  useEffect(() => {
    props.getNotesStats(onStatusSuccess, onStatusFailure)
  }, [props.Agent])
  useEffect(() => {
    if (props.status?.length === 2) {
      setNotesStatus({
        available: props.status[0].count
        , assigned: props.status[1].count
      })
    }
  }, [props.status])
  return (
    <>
      <CardHeader className="border-0">
        <Row>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Available Notes
            </label>
            <input
              value={notesStatus.available}
              type="text"
              id="input-username"
              className="form-control"
              disabled
            ></input>
          </Col>
          < Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Assigned Notes
            </label>
            <input
              value={notesStatus.assigned}
              type="text"
              id="input-username"
              className="form-control"
              disabled
            ></input>
          </Col>
        </Row>
        <br />
        <hr style={{ margin: "0px" }} />
        <br />

        <Row>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Deposit Slip #
            </label>
            <input
              value={state.SlipNo}
              type="text"
              id="input-username"
              placeholder="Slip Number"
              className="form-control"
              onBlur={() => CheckFields("SlipNo")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => onChange("SlipNo", e.target.value)}
            ></input>
            {stateError.SlipNoError !== "" && stateError.SlipNoError !== null && (
              <small style={{ marginTop: "2px" }}>
                <span style={{ color: "red" }}>
                  {stateError.SlipNoError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Serial Range
            </label>
            <input
              value={state.Range}
              type="text"
              id="input-username"
              placeholder="Range"
              className="form-control"
              onBlur={() => CheckFields("Range")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => onChange("Range", e.target.value)}
            ></input>
            {stateError.RangeError !== "" && stateError.RangeError !== null && (
              <small style={{ marginTop: "2px" }}>
                <span style={{ color: "red" }}>
                  {stateError.RangeError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Select Bank
            </label>
            <Input
              value={state.Bank}
              type="select"
              id="input-username"
              className="form-control"
              onBlur={() => CheckFields("Bank")}
              onChange={(e) => onChange("Bank", e.target.value)}
            >
              <option value="">Select</option>
              <option value="mz">Meezan</option>
              <option value="al">Alfala</option>
              <option value="hb">Al Habib</option>
            </Input>
            {stateError.BankError !== "" && stateError.BankError !== null && (
              <small style={{ marginTop: "2px" }}>
                <span style={{ color: "red" }}>
                  {stateError.BankError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Form No.
            </label>
            <input
              value={state.FormCategoryNumber}
              type="text"
              id="input-username"
              placeholder="Form Number"
              className="form-control"
              onBlur={() => CheckFields("FormCategoryNumber")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => onChange("FormCategoryNumber", e.target.value)}
            ></input>
            {stateError.FormCategoryNumberError !== "" &&
              stateError.FormCategoryNumberError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {stateError.FormCategoryNumberError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Select Category
            </label>
            <Input
              value={state.FormCategoryName}
              type="select"
              id="input-username"
              className="form-control"
              onBlur={() => CheckFields("FormCategoryName")}
              onChange={(e) => onChange("FormCategoryName", e.target.value)}
            >
              <option value="">Select</option>
              <option value="PD-II-A">A</option>
              <option value="PD-II-KPC">Kareem Palm City</option>
              <option value="PD-II-AA">Agha Associate</option>
            </Input>
            {stateError.FormCategoryNameError !== "" &&
              stateError.FormCategoryNameError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {stateError.FormCategoryNameError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
        </Row>
      </CardHeader>
      <hr style={{ margin: "0px" }} />
      <CardBody>
        <Row>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Name
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Client Name"
              value={state.Name}
              onBlur={() => CheckFields("Name")}
              onChange={(e) => onChange("Name", e.target.value)}
            ></input>
            {stateError.NameError !== "" && stateError.NameError !== null && (
              <small>
                <span style={{ color: "red" }}>
                  {stateError.NameError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Contact No.
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Contact No"
              maxLength={11}
              value={state.Phone}
              onBlur={() => CheckFields("Phone")}
              onChange={(e) => onChange("Phone", e.target.value)}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></input>
            {stateError.PhoneError !== "" && stateError.PhoneError !== null && (
              <small style={{ marginTop: "2px" }}>
                <span style={{ color: "red" }}>
                  {stateError.PhoneError}{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>

          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Email
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Email"
              value={state.Email}
              onBlur={() => CheckFields("Email")}
              onChange={(e) => onChange("Email", e.target.value)}
            ></input>
            {stateError.EmailError !== "" && stateError.EmailError !== null && (
              <small>
                <span style={{ color: "red" }}>
                  {stateError.EmailError}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
          <br />
        </Row>
        <Row>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              CNIC
            </label>

            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Cnic"
              maxLength={13}
              value={state.Cnic}
              onChange={(e) => onChange("Cnic", e.target.value)}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onBlur={() => CheckFields("Cnic")}
            ></input>
            {stateError.CnicError !== "" && stateError.CnicError !== null && (
              <small>
                <span style={{ color: "red" }}>
                  {stateError.CnicError}
                  <i className="fas fa-exclamation-circle"></i>
                </span>
              </small>
            )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Address
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Address"
              onBlur={() => CheckFields("Address")}
              onChange={(e) => onChange("Address", e.target.value)}
              value={state.Address}
            ></input>
            {stateError.AddressError !== "" &&
              stateError.AddressError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {stateError.AddressError}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Unit Amount
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              onChange={(e) => onChange("totalAmount", e.target.value)}
              onBlur={() => CheckFields("totalAmount")}
              value={state.totalAmount}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></input>
            {stateError.TotalAmountError !== "" &&
              stateError.TotalAmountError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {stateError.TotalAmountError}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Receving No.
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              onChange={(e) => onChange("recevingNo", e.target.value)}
              onBlur={() => CheckFields("recevingNo")}
              value={state.recevingNo}
            ></input>
            {stateError.RecevingNoError !== "" &&
              stateError.RecevingNoError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {stateError.RecevingNoError}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
            <br />
          </Col>
          <br />
          <br />
        </Row>
        <Row>
          <Col>
            <Button
              className="btn-icon btn-2"
              color="success"
              type="button"
              size="sm"
              id="proceed"
              onClick={Save}
            >
              <span className="btn-inner--icon">
                Save <i className="fas fa-save"></i>
              </span>
            </Button>

            <Button
              className="btn-icon btn-2"
              color="danger"
              type="button"
              size="sm"
              id="save"
              onClick={Reset}
            >
              <span className="btn-inner--icon">
                Reset <i class="fas fa-undo"></i>
              </span>
            </Button>
            {/* <Tooltip
                placement="bottom"
                isOpen={tooltipOpen.save}
                autohide={false}
                target="save"
                toggle={() => toggle("save")}
              >
                Save
              </Tooltip> */}
          </Col>
        </Row>
      </CardBody>
    </>
  );
};
export default FormOfFormIssue;
