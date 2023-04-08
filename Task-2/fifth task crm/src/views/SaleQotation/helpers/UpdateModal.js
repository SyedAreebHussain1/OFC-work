import React from "react";
import { ModalFooter, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Button, Row, Input, Col } from "reactstrap";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ShowLeadUser, ShowUpdateLeadUser } from "../middleware";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import swal from "sweetalert";

const UpdateModal = (props) => {
  const [state, setstate] = useState({
    Name: "",
    Email: "",
    PhoneNo: "",
    FatherName: "",
    CNIC: "",
    PassportNo: "",
    Dateofbirth: "",
    Profession: "",
    Organization: "",
    OfficePhone: "",
    AddressOffice: "",
    AddressResidence: "",
    TelResidence: "",
    Nationality: "",
  });
  const [error, setError] = useState({
    PhoneNoError: "",
    NameError: "",
    CNICError: "",
    DateOfBirthError: "",
    FatherNameError: "",
    EmailError: "",
    NationalityError: "",
    TelResidenceError: "",
    AddressResidenceError: "",
  });
  // useEffect(() => {

  //
  // }, [props.detail])
  const [Maxlength, setMaxlength] = useState(11);
  const OnChange = (val, name) => {
    if (val.includes("+92")) {
      setMaxlength(13);
    } else {
      setMaxlength(11);
    }
    setstate({ ...state, [name]: val });
  };
  const CheckFields = (name) => {
    if (name === "name") {
      setError({
        ...error,
        NameError: validate("required", state.Name),
      });
    } else if (name === "phoneNumber") {
      setError({
        ...error,
        PhoneNoError: validate("phoneNumber", state.PhoneNo),
      });
    } else if (name === "cnic") {
      setError({
        ...error,
        CNICError: validate("CNIC", state.CNIC),
      });
    } else if (name === "dateofbirth") {
      setError({
        ...error,
        DateOfBirthError: validate("required", state.Dateofbirth),
      });
    } else if (name === "fatherName") {
      setError({
        ...error,
        FatherNameError: validate("required", state.FatherName),
      });
    } else if (name === "email") {
      setError({
        ...error,
        EmailError: validate("email", state.Email),
      });
    } else if (name === "nationality") {
      setError({
        ...error,
        NationalityError: validate("required", state.Nationality),
      });
    } else if (name === "telresidence") {
      setError({
        ...error,
        TelResidenceError: validate("phoneNumber", state.TelResidence),
      });
    } else if (name === "addressresidence") {
      setError({
        ...error,
        AddressResidenceError: validate("required", state.AddressResidence),
      });
    }
  };

  useEffect(() => {
    if (props.detail?.user_id !== null && props.detail?.user_id !== undefined) {
      let body = {
        user_id: props.detail?.user_id,
      };
      props.ShowLeadUser(body, OnSuccess, OnFailure);
    }
  }, []);
  const OnFailure = () => {};
  const save = () => {
    setError({
      ...error,
      AddressResidenceError: validate("required", state.AddressResidence),
      TelResidenceError: validate("phoneNumber", state.TelResidence),
      NationalityError: validate("required", state.Nationality),
      EmailError: validate("email", state.Email),
      FatherNameError: validate("required", state.FatherName),
      DateOfBirthError: validate("required", state.Dateofbirth),
      CNICError: validate("CNIC", state.CNIC),
      PhoneNoError: validate("phoneNumber", state.PhoneNo),
      NameError: validate("required", state.Name),
    });

    if (
      state.AddressResidence !== "" &&
      state.AddressResidence !== null &&
      state.AddressResidence !== undefined &&
      state.TelResidence !== "" &&
      state.TelResidence !== null &&
      state.TelResidence !== undefined &&
      state.TelResidence.trim().length >= 7 &&
      state.Nationality !== "" &&
      state.Nationality !== null &&
      state.Nationality !== undefined &&
      state.Email !== "" &&
      state.Email !== null &&
      state.Email !== undefined &&
      state.FatherName !== "" &&
      state.FatherName !== null &&
      state.FatherName !== undefined &&
      state.Dateofbirth !== "" &&
      state.Dateofbirth !== null &&
      state.Dateofbirth !== undefined &&
      state.CNIC !== "" &&
      state.CNIC !== null &&
      state.CNIC !== undefined &&
      state.CNIC.length == 13 &&
      state.PhoneNo !== "" &&
      state.PhoneNo !== null &&
      state.PhoneNo !== undefined &&
      state.PhoneNo.trim().length >= 7 &&
      state.Name !== "" &&
      state.Name !== null &&
      state.Name !== undefined

      // error.AddressResidenceError == null &&
      // error.TelResidenceError == null &&
      // error.NationalityError == null &&
      // error.EmailError == null &&
      // error.FatherNameError == null &&
      // error.DateOfBirthError == null &&
      // error.CNICError == null &&
      // error.PhoneNoError == null &&
      // error.NameError == null
    ) {
      let newbody = {
        user_name: state.Name,
        user_email: state.Email,
        user_phone: state.PhoneNo,
        user_id: props.detail.user_id,
        Father: state.FatherName,
        cnic: state.CNIC,
        PassportNo: state.PassportNo,
        Dateofbirth: state.Dateofbirth,
        Profession: state.Profession,
        Organization: state.Organization,
        Addressoffice: state.AddressOffice,
        AddressResidence: state.AddressResidence,
        Teloffice: state.OfficePhone,
        TelResidence: state.TelResidence,
        Nationality: state.Nationality,
      };

      props.ShowUpdateLeadUser(newbody, OnSuccess, OnFailure1);

      // props.onSave(true);
      close();
      // props.toggle(false);
    }
  };
  // useEffect(() => {

  //   if (props.UpdateUser !== null && props.UpdateUser !== undefined) {
  //     swal({
  //       title: "Success!",
  //       text: "Updated",
  //       icon: "success",
  //       type: "Success",
  //     }).then(function (isConfirm) {
  //       if (isConfirm) {
  //         props.toggle(false)

  //       } else {

  //       }
  //     });
  //   }
  //   else {

  //   }

  // }, [props.UpdateUser])

  useEffect(() => {
    if (props.User !== null && props.User !== undefined) {
      let d;
      if (
        props.User[0]?.Dateofbirth !== null &&
        props.User[0]?.Dateofbirth !== undefined
      ) {
        let str;

        str = props.User[0]?.Dateofbirth;
        const myArr = str.split("T");
        d = myArr[0];
        // d=str;
      }

      setstate({
        ...state,
        Name: props.User[0]?.user_name,
        Email: props.User[0]?.user_email,
        PhoneNo: props.User[0]?.user_phone,

        CNIC: props.User[0]?.CNIC,
        PassportNo: props.User[0]?.PassportNo,
        //DateOfBirth:d,
        Dateofbirth: d,
        Profession: props.User[0]?.Profession,
        Organization: props.User[0]?.Organization,
        OfficePhone: props.User[0]?.Tel_office,
        AddressOffice: props.User[0]?.Address_office,
        AddressResidence: props.User[0]?.Address_Residence,
        FatherName: props.User[0]?.Father_Spouse_Name,
        Nationality: props.User[0]?.Nationality,
        TelResidence: props.User[0]?.Tel_Residence,
      });
    }
  }, [props.User]);
  const OnSuccess = () => {
    //close()
  };

  const OnFailure1 = (e) => {
    // swal({
    //   title: "Wrong!",
    //   text: "Not Updated",
    //   icon: "error",
    //   type: "danger",
    // }).then(function (isConfirm) {
    //   if (isConfirm) {
    //   } else {
    //   }
    // });
    swal("Error!", e, "error");
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
  const close = () => {
    //   let str = props?.User[0]?.Dateofbirth;
    //   const myArr = str?.split("T");
    // let  d = myArr[0];
    setstate({
      ...state,
      Name: props?.User[0]?.user_name,
      Email: props?.User[0]?.user_email,
      PhoneNo: props?.User[0]?.user_phone,

      CNIC: props?.User[0]?.CNIC,
      PassportNo: props?.User[0]?.PassportNo,
      //DateOfBirth:d,
      Dateofbirth: props?.User[0]?.Dateofbirth,
      Profession: props?.User[0]?.Profession,
      Organization: props?.User[0]?.Organization,
      OfficePhone: props?.User[0]?.Tel_office,
      AddressOffice: props?.User[0]?.Address_office,
      AddressResidence: props?.User[0]?.Address_Residence,
      FatherName: props?.User[0]?.Father_Spouse_Name,
      Nationality: props?.User[0]?.Nationality,
      TelResidence: props?.User[0]?.Tel_Residence,
    });

    props.toggle();
  };
  // const getAge = (dateString) => {
  //   setstate({ ...state, Dateofbirth: "" });
  //   var today = new Date();
  //   var birthDate = new Date(dateString);
  //   var age = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   var d = today.getDate() - birthDate.getDate();

  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }
  //   if (age >= 18) {
  //     setstate({ ...state, Dateofbirth: dateString });
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
    <Modal
      size="lg"
      isOpen={props.modal}
      toggle={props.toggle}
      detail={props.detail}
      User={props.User}
      ShowLeadUser={props.ShowLeadUser}
      // ShowApprovalReceipt={props.ShowApprovalReceipt}
    >
      <ModalHeader style={{ paddingBottom: "0px" }} toggle={props.toggle}>
        <h2>Lead Details</h2>{" "}
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
              value={state.Name}
              onBlur={() => CheckFields("name")}
              onChange={(e) => OnChange(e.target.value, "Name")}
              onKeyPress={(event) => {
                if (!/[A-Z a-z]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {error.NameError !== "" && error.NameError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.NameError}</span>
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
              value={state.Email}
              onBlur={() => CheckFields("email")}
              onChange={(e) => OnChange(e.target.value, "Email")}
            />
            {error.EmailError !== "" && error.EmailError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.EmailError}</span>
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
              value={state.PhoneNo}
              onChange={(e) => OnChange(e, "PhoneNo")}
              inputStyle={{
                border: "1px solid lightgrey",
                width: "100%",
                height: "100%",
              }}
              onBlur={() => CheckFields("phoneNumber")}
              countryCodeEditable={false}
            />

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
           
            {/* <Input
              placeholder="Phone No"
              type="text"
              value={state.PhoneNo}
              maxlength={Maxlength}
              onBlur={() => CheckFields("phoneNumber")}
              onChange={(e) => OnChange(e.target.value, "PhoneNo")}
              onKeyPress={(event) => {
                if (!/[+0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            /> */}
            {error.PhoneNoError !== "" && error.PhoneNoError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.PhoneNoError}</span>
              </small>
            )}
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              Father Name/Husband Name <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Father Name/ Husband Name"
              type="text"
              value={state.FatherName}
              onBlur={() => CheckFields("fatherName")}
              onChange={(e) => OnChange(e.target.value, "FatherName")}
              onKeyPress={(event) => {
                if (!/[A-Z a-z]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {error.FatherNameError !== "" && error.FatherNameError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.FatherNameError}</span>
              </small>
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          {" "}
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              CNIC <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="CNIC"
              type="text"
              value={state.CNIC}
              maxlength="13"
              onKeyPress={(event) => {
                if (!/[0-9-]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onBlur={() => CheckFields("cnic")}
              onChange={(e) => OnChange(e.target.value, "CNIC")}
            />
            {error.CNICError !== "" && error.CNICError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.CNICError}</span>
              </small>
            )}
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Passport Number</label>
            <Input
              placeholder="Passport Number"
              value={state.PassportNo}
              onChange={(e) => OnChange(e.target.value, "PassportNo")}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          {" "}
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              Date of Birth <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Date of Birth"
              type="date"
              id="cal"
              //max={dateState.CurrentDate}
              value={state.Dateofbirth}
              onBlur={() => CheckFields("dateofbirth")}
              onChange={(e) => OnChange(e.target.value, "Dateofbirth")}
              //onChange={(e) => getAge(e.target.value)}
            />
            {error.DateOfBirthError !== "" && error.DateOfBirthError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.DateOfBirthError}</span>
              </small>
            )}
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Profession</label>
            <Input
              placeholder="Proffession"
              type="text"
              value={state.Profession}
              onChange={(e) => OnChange(e.target.value, "Profession")}
              onKeyPress={(event) => {
                if (!/[A-Z a-z]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Organization</label>
            <Input
              placeholder="Organization"
              type="text"
              value={state.Organization}
              onChange={(e) => OnChange(e.target.value, "Organization")}
            />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Office Phone</label>
            <Input
              placeholder="Office Phone"
              type="text"
              value={state.OfficePhone}
              maxlength={Maxlength}
              onChange={(e) => OnChange(e.target.value, "OfficePhone")}
              onKeyPress={(event) => {
                if (!/[+0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">Address Office</label>
            <Input
              placeholder="Address Office"
              type="textarea"
              value={state.AddressOffice}
              onChange={(e) => OnChange(e.target.value, "AddressOffice")}
            />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              Address Residence <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Address Residence"
              type="textarea"
              value={state.AddressResidence}
              onBlur={() => CheckFields("addressresidence")}
              onChange={(e) => OnChange(e.target.value, "AddressResidence")}
            />
            {error.AddressResidenceError !== "" &&
              error.AddressResidenceError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.AddressResidenceError}
                  </span>
                </small>
              )}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              Tel Residence <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Tel Residence"
              type="text"
              maxlength={Maxlength}
              value={state.TelResidence}
              onBlur={() => CheckFields("telresidence")}
              onChange={(e) => OnChange(e.target.value, "TelResidence")}
              onKeyPress={(event) => {
                if (!/[+0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {error.TelResidenceError !== "" &&
              error.TelResidenceError !== null && (
                <small>
                  <span style={{ color: "red" }}>
                    {error.TelResidenceError}
                  </span>
                </small>
              )}
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <label className="form-control-label">
              Nationality <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Nationality"
              type="text"
              value={state.Nationality}
              onChange={(e) => OnChange(e.target.value, "Nationality")}
              onBlur={() => CheckFields("nationality")}
              onKeyPress={(event) => {
                if (!/[A-Z a-z]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            {error.NationalityError !== "" && error.NationalityError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.NationalityError}</span>
              </small>
            )}
          </Col>
        </Row>
        <br />
      </ModalBody>

      <ModalFooter>
        <Button color="danger" onClick={save}>
          Save
        </Button>

        <Button color="info" onClick={props.toggle}>
          Close Modal
        </Button>
      </ModalFooter>
    </Modal>
  );
};

//export default UpdateModal

const mapStateToProps = (state) => ({
  User: state.saleQotation.User,
  UpdateUser: state.saleQotation.UpdateUser,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    ShowLeadUser: (body, OnSuccess, OnFailure) =>
      dispatch(ShowLeadUser(body, OnSuccess, OnFailure)),
    ShowUpdateLeadUser: (body, OnSuccess, OnFailure) =>
      dispatch(ShowUpdateLeadUser(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(UpdateModal);
