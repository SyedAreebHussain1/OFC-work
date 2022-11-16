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

import validate from "../../../../components/Utilities Component/ValidationWrapper";

import swal from "sweetalert";

import { connect } from "react-redux";

import { NewUser } from "../middleware";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

import Select from "react-select";

import countryList from "react-select-country-list";

const AddNew = (props) => {
  const [checked, setChecked] = useState(false);

  const ResetBTN = () => {
    setState({
      ...state,

      user_name: "",

      user_email: "",

      user_phone: "",

      whatsAppNo: "",

      cnic: "",

      Referedby: "",
    });

    setError({ ...error, nameError: "", emailError: "", phoneError: "" });
  };

  const [error, setError] = useState({
    nameError: "",

    emailError: "",

    phoneError: "",

    cnicError: "",

    whatsAppNoError: "",
  });

  const [state, setState] = useState({
    user_name: "",

    user_email: "",

    user_phone: "",

    whatsAppNo: "",

    cnic: "",

    Referedby: "",
  });

  const OnChange = (value, name) => {
    if (name == "user_phone") {
      setState({
        ...state,

        user_phone: "+" + value,
      });
    } else if (name == "whatsAppNo") {
      setState({
        ...state,

        whatsAppNo: "+" + value,
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
    } else if (name === "whatsAppNo") {
      setError({
        ...error,

        whatsAppNoError: validate("phoneNumber", state.whatsAppNo),
      });
    } else if (name === "cnic") {
      setError({
        ...error,

        cnicError: validate("CNIC", state.cnic),
      });
    }
  };

  const AddUser = () => {
    setError({
      ...error,

      nameError: validate("fullName", state.user_name),

      emailError: validate("email", state.user_email),

      phoneError: validate("phoneNumber", state.user_phone),

      whatsAppNoError: validate("phoneNumber", state.whatsAppNo),

      cnicError: validate("CNIC", state.cnic),
    });

    if (
      state.user_name !== "" &&
      state.user_phone !== "" &&
      state.whatsAppNo !== "" &&
      state.user_email !== "" &&
      error.emailError == null &&
      state.user_phone?.trim().length >= 7 &&
      state.whatsAppNo?.trim().length >= 7 &&
      state.cnic.length == 13
    ) {
      let body = {
        user_name: state.user_name,

        user_email: state.user_email,

        user_phone: state.user_phone,

        cnic: state.cnic,

        WhatsAppno: state.whatsAppNo,

        Referedby: state.Referedby,
      };

      //  ===( state.user_phone?.includes("+") ? 13 :  12)

      console.log("BODY", body);

      props.AddNew(body, onSuccess, OnFailure);
    } else {
      swal(
        "Not Added!",

        "Please enter required fields or fill out proper",

        "error"
      );
    }
  };

  const onSuccess = () => {
    swal("Congratulations!", "Lead Added successfully", "success");

    setState({
      ...state,

      user_name: "",

      user_email: "",

      user_phone: "",

      whatsAppNo: "",

      cnic: "",

      Referedby: "",
    });

    props.toggle(false);
  };

  const OnFailure = (message) => {
    swal("Sorry!", message, "error");
  };

  const handleChecked = () => {
    setError({
      ...error,

      whatsAppNoError: "",
    });

    setChecked(!checked);
  };

  useEffect(() => {
    setState({
      ...state,

      whatsAppNo: checked == true ? state.user_phone : "92",
    });
  }, [checked]);

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
              disabled={checked}
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
          </Col>

          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label" for="input-username">
              Whatsapp No <span style={{ color: "red" }}>*</span>
            </label>

            <PhoneInput
              placeholder="+92"
              className="input-group-alternative"
              onChange={(e) => OnChange(e, "whatsAppNo")}
              onBlur={() => CheckFields("whatsAppNo")}
              inputStyle={{
                border: "1px solid lightgrey",

                width: "100%",

                height: "100%",
              }}
              inputExtraProps={{
                name: "phone",

                required: true,

                autoFocus: true,
              }}
              fullWidth="true"
              countryCodeEditable={false}
              country={"pk"}
              value={state.whatsAppNo ? state.whatsAppNo : ""}
              disabled={checked}
            />

            {error.whatsAppNoError !== "" && error.whatsAppNoError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.whatsAppNoError}</span>
              </small>
            )}

            {state.user_phone?.length >= 12 ? (
              <div style={{ position: "relative", float: "right" }}>
                <input
                  type="checkbox"
                  onClick={handleChecked}

                  // disabled={isUserExist}
                />

                <small>
                  <b> Same As Phone No</b>
                </small>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>

        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">CNIC</label>{" "}
            <span style={{ color: "red" }}>*</span>
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
            {error.cnicError !== "" && error.cnicError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.cnicError}</span>
              </small>
            )}
          </Col>

          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Referred by</label>

            <Input
              placeholder="Referred by"
              type="text"
              value={state.Referredby}
              onChange={(e) => OnChange(e.target.value, "Referredby")}
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
