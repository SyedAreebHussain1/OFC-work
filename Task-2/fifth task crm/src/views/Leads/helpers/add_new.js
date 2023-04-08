import React, { useState, useEffect, useMemo } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Row,
  Col,
} from "reactstrap";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";
import { connect } from "react-redux";
import { NewUser } from "../../Contacts/middleware";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";

const AddNew = (props) => {
  const [Maxlength, setMaxlength] = useState(11);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    OnChange(value.label, "Nationality");
    setValue(value);
  };
  const ResetBTN = () => {
    setState({
      ...state,
      user_name: "",
      user_email: "",
      user_phone: "+92",
      Father: "",
      // cnic: "",
      PassportNo: "",
      Dateofbirth: "",
      Profession: "",
      Organization: "",
      Addressoffice: "",
      AddressResidence: "",
      Teloffice: "",
      TelResidence: "",
      Nationality: "",
    });
    setError({ ...error, nameError: "", emailError: "", phoneError: "" });
  };
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    cnicError: "",
  });
  const [state, setState] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    Father: "",
    cnic: "",
    PassportNo: "",
    Dateofbirth: "",
    Profession: "",
    Organization: "",
    Addressoffice: "",
    AddressResidence: "",
    Teloffice: "",
    TelResidence: "",
    Nationality: "",
    Leadsource: "4",
  });
  const OnChange = (value, name) => {
    if (name == "user_phone") {
      setState({
        ...state,
        user_phone: "+" + value,
      });
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  };
  const CheckFields = (name) => {
    if (name === "fullName") {
      setError({
        ...error,
        nameError: validate("fullName", state.user_name),
      });
    } else if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", state.user_email),
      });
    } else if (name === "phoneNumber") {
      setError({
        ...error,
        phoneError: validate("phoneNumber", state.user_phone),
      });
    }
    // else if (name === "cnic") {
    //   setError({
    //     ...error,
    //     cnicError: validate("CNIC", state.cnic),
    //   });
    // }
  };
  const AddUser = () => {
    setError({
      ...error,
      nameError: validate("fullName", state.user_name),
      emailError: validate("email", state.user_email),
      phoneError: validate("phoneNumber", state.user_phone),
    });

    if (
      state.user_name !== "" &&
      state.user_phone !== "" &&
      state.user_email !== "" &&
      error.emailError == null &&
      state.user_phone?.trim().length >= 7 &&
      (state.cnic.length == 13 || state.cnic.length == 0)
    ) {
      //  ===( state.user_phone?.includes("+") ? 13 :  12)
      props.AddNew(state, onSuccess, OnFailure);
    } else {
      swal("Not Added!", "Please enter required fields", "error");
    }
  };

  const onSuccess = () => {
    swal("Congratulations!", "Lead Added successfully", "success");
    setState({
      ...state,
      user_name: "",
      user_email: "",
      user_phone: "",
      Father: "",
      cnic: "",
      PassportNo: "",
      Dateofbirth: "",
      Profession: "",
      Organization: "",
      Addressoffice: "",
      AddressResidence: "",
      Teloffice: "",
      TelResidence: "",
      Nationality: "",
    });

    props.toggle(false);
  };
  const OnFailure = (message) => {
    swal("Sorry!", message, "error");
  };

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    const a = year + "-" + month + "-" + date;
    datesetstate({ ...dateState, CurrentDate: a });
  }, [true]);
  const [dateState, datesetstate] = useState({
    CurrentDate: "",
  });
  // const getAge = (dateString) => {
  //   setState({ ...state, Dateofbirth: "" });
  //   var today = new Date();
  //   var birthDate = new Date(dateString);
  //   var age = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   var d = today.getDate() - birthDate.getDate();

  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }
  //   if (age >= 18) {
  //     setState({ ...state, Dateofbirth: dateString });
  //   } else {
  //     const calender = document.getElementById("cal");
  //     calender.style.display = "none";
  //     swal("error", "Age should be greater than 18", "error").then((isOk) => {
  //       if (isOk) {
  //         const calender = document.getElementById("cal");
  //         calender.style.display = "block";
  //       } else {
  //         const calender = document.getElementById("cal");
  //         calender.style.display = "block";
  //       }
  //     });
  //   }
  // };

  return (
    <Modal isOpen={props.modal} toggle={props.toggle} size="lg">
      <ModalHeader style={{ paddingBottom: "0px" }} toggle={props.toggle}>
        <h2>Add New Leads</h2>{" "}
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Name"
              type="text"
              value={state.user_name}
              onBlur={() => CheckFields("fullName")}
              onChange={(e) => OnChange(e.target.value, "user_name")}
              onKeyPress={(event) => {
                if (!/[a-z A-Z]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {error.nameError !== "" && error.nameError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.nameError}</span>
              </small>
            )}
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Email"
              type="email"
              value={state.user_email}
              onBlur={() => CheckFields("email")}
              onChange={(e) => OnChange(e.target.value, "user_email")}
            />
            {error.emailError !== "" && error.emailError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.emailError}</span>
              </small>
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label" for="input-username">
              Phone No <span style={{ color: "red" }}>*</span>
            </label>
            <PhoneInput
              fullWidth="100%"
              country={"pk"}
              value={state.user_phone}
              onChange={(e) => OnChange(e, "user_phone")}
              inputStyle={{
                border: "1px solid lightgrey",
                width: "100%",
                height: "100%",
              }}
              onBlur={() => CheckFields("phoneNumber")}
              countryCodeEditable={false}
            />
            {error.phoneError !== "" && error.phoneError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.phoneError}</span>
              </small>
            )}
            {/* <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Phone Number *</label>
            <Input
              placeholder="Phone No"
              type="text"
              maxlength={Maxlength}
              value={state.user_phone}
              onBlur={() => CheckFields("phoneNumber")}
              onChange={(e) => OnChange(e.target.value, "user_phone")}
              onKeyPress={(event) => {
                if (!/[+0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {error.phoneError !== "" && error.phoneError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.phoneError}</span>
              </small>
            )}*/}
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              Father Name/ Husband Name
            </label>
            <Input
              placeholder="Father Name/ Husband Name"
              type="text"
              value={state.Father}
              onChange={(e) => OnChange(e.target.value, "Father")}
              onKeyPress={(event) => {
                if (!/[a-z A-Z]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">CNIC</label>
            <Input
              placeholder="CNIC"
              type="text"
              maxlength="13"
              onBlur={() => CheckFields("cnic")}
              value={state.cnic}
              onChange={(e) => OnChange(e.target.value, "cnic")}
              onKeyPress={(event) => {
                if (!/[0-9-]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {/* {error.cnicError !== "" && error.cnicError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.cnicError}</span>
              </small>
            )} */}
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Tel Residence</label>
            <Input
              placeholder="Tel Residence"
              type="text"
              value={state.TelResidence}
              maxlength={Maxlength}
              onKeyPress={(event) => {
                if (!/[+0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => OnChange(e.target.value, "TelResidence")}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Passport Number</label>
            <Input
              placeholder="Passport Number"
              type="text"
              value={state.PassportNo}
              onChange={(e) => OnChange(e.target.value, "PassportNo")}
            />
          </Col>{" "}
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Date of Birth</label>
            <Input
              placeholder="Date of Birth"
              type="date"
              max={dateState.CurrentDate}
              value={state.Dateofbirth}
              id="cal"
              // max={moment().format("YYYY-MM-DD")}
              // onChange={(e) => getAge(e.target.value)}
              onChange={(e) => OnChange(e.target.value, "Dateofbirth")}
            />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Profession</label>
            <Input
              placeholder="Proffession"
              type="text"
              value={state.Profession}
              onChange={(e) => OnChange(e.target.value, "Profession")}
              onKeyPress={(event) => {
                if (!/[a-z A-Z]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Organization</label>
            <Input
              placeholder="Organization"
              type="text"
              value={state.Organization}
              onChange={(e) => OnChange(e.target.value, "Organization")}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Office Phone</label>
            <Input
              placeholder="Office Phone"
              type="text"
              maxLength={Maxlength}
              value={state.Teloffice}
              onKeyPress={(event) => {
                if (!/[+0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => OnChange(e.target.value, "Teloffice")}
            />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Nationality</label>
            {/* <Input
              placeholder="Nationality"
              type="text"
              value={state.Nationality}
              onKeyPress={(event) => {
                if (!/[a-z A-Z]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => OnChange(e.target.value, "Nationality")}
            /> */}
            <Select options={options} value={value} onChange={changeHandler} />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Address Residence</label>
            <Input
              placeholder="Address Residence"
              type="textarea"
              value={state.AddressResidence}
              onChange={(e) => OnChange(e.target.value, "AddressResidence")}
            />
          </Col>

          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Address Office</label>
            <Input
              placeholder="Address Office"
              type="textarea"
              value={state.Addressoffice}
              onChange={(e) => OnChange(e.target.value, "Addressoffice")}
            />
          </Col>
        </Row>
        <br />
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={AddUser}>
          {" "}
          Add New Leads &nbsp; <i className="ni ni-fat-add" />
        </Button>
        <Button color="info" onClick={ResetBTN}>
          Reset
        </Button>
        <Button color="danger" onClick={props.toggle}>
          Cancel &nbsp; <i className="ni ni-fat-remove" />
        </Button>
      </ModalFooter>
    </Modal>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.fetchContacts.isLoading,
  isError: state.fetchContacts.isError,
  Users: state.fetchContacts.Users,
  Error: state.fetchContacts.error,
  AssignResponse: state.fetchContacts.error,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    AddNew: (body, OnSuccess, OnFailure) =>
      dispatch(NewUser(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AddNew);
