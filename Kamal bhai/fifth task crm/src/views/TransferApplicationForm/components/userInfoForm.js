import React, { useState, useEffect, useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  CardImg,
  Input,
  Label,
} from "reactstrap";
import axios from "axios";
import { BASEURL } from "config/api/URL";
import PhoneInput from "react-phone-input-2";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import swal from "sweetalert";
import TransferApplication from "views/HtmlReciept/TransferApplication/TransferApplication";
const UserInfoForm = ({
  TransferFrom,
  TransferTo,
  Response,
  _uploadFileMiddleware,
}) => {
  const fileUploadRef = useRef(null);
  const componentRef = useRef();
  const [upload, setUpload] = useState({
    profileImg: null,
    nomineeProfileImg: null,
  });
  const [filepath, setFilePath] = useState({
    SignaturePath: "",
    FingerPrintPath: "",
  });
  const [uploadRequestForm, setUploadRequestForm] = useState(null);
  const handleUploadReqForm = (e) => {
    setUploadRequestForm(e.target.files[0]);
  };
  const deleteReqForm = (e) => {
    setUploadRequestForm(null);
  };
  const getverification = () => {
    let path = "GetFingerPrint";
    let token = localStorage.getItem("auth");
    let body = {
      cnic: TransferTo.TransferCnic,
    };

    axios
      .post(`${BASEURL}${path}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          console.log("RESPONSE OF PRINT GET", res.data);
          if (res.data?.response?.length > 0) {
            setFilePath({
              ...filepath,
              SignaturePath: res.data.response[0].SignaturePath,
              FingerPrintPath: res.data.response[0].FingerPrintPath,
            });
          }
        }
      })
      .catch((error) => console.log(error));
  };
  const [state, setstate] = useState({
    Name: "",
    Teloffice: "",
    email: "",
    Fee: "",
    Comment: "",
    PayType: "",
    Cnic: "",
    passport: "",
    Mobile: "",
    Profession: "",
    Organization: "",
    TelResidence: "",
    AddressResidence: "",
    Addressoffice: "",
    Dateofbirth: "",
    Nationality: "",
    spouse: "",
  });
  const [StateNominee, setStateNominee] = useState({
    NomineeCnic: "",
    NomineePhone: "",
    NomineePassport: "",
    NomineeRelation: "",
    NomineeName: "",
    n_id: "",
  });

  const [error, setError] = useState({
    emailError: null,
    passwordError: null,
    CNICError: null,
    Nnameerror: null,
    lastError: null,
    AddRError: null,
    AddOError: null,
    ProError: null,
    OError: null,
    DError: null,
    RError: null,
    TError: null,
    KError: null,
    CError: null,
    imageError: null,
    NationError: null,
    fullNameError: null,
    FfullNameError: null,
    ContactNumber: null,
    DOB: null,
    ContactNumberError: null,
    phoneNumberError: null,
    NationalityError: null,
    NomineeCnicError: null,
    NomineePhoneError: null,
    NomineeNameError: null,
    NomineeRelationError: null,
    MobileError: null,
    spouseError: null,
  });
  useEffect(() => {
    // console.log("RESPONSE", Response);
    setstate({
      ...state,
      Name: TransferTo.TransferName,
      email: TransferTo.TransferEmail,
      Fee: TransferTo.Transferfee,
      Cnic: TransferTo.TransferCnic,
      Comment: TransferTo.Comment,
      PayType: TransferTo.paymentType,
      Mobile: TransferTo.TransferPhone,
    });
    setStateNominee({
      ...StateNominee,
      NomineeCnic:
        Response?.nominee?.CNIC !== "" && Response?.nominee?.CNIC !== null
          ? Response?.nominee?.CNIC
          : "",

      NomineePhone:
        Response?.nominee?.Mobile !== "" && Response?.nominee?.Mobile !== null
          ? Response?.nominee?.Mobile
          : "",
      NomineePassport:
        Response?.nominee?.Passport_no !== "" &&
        Response?.nominee?.Passport_no !== null
          ? Response?.nominee?.Passport_no
          : "",
      NomineeRelation:
        Response?.nominee?.Relation !== "" &&
        Response?.nominee?.Relation !== null
          ? Response?.nominee?.Relation
          : "",
      NomineeName:
        Response?.nominee?.Name !== "" && Response?.nominee?.Name !== null
          ? Response?.nominee?.Name
          : "",
      n_id:
        Response?.nominee?.Nominee_id !== "" &&
        Response?.nominee?.Nominee_id !== null
          ? Response?.nominee?.Nominee_id
          : "",
    });
  }, [TransferTo, Response]);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setUpload({ profileImg: reader.result });
      }
    };
    if (e.target.files[0] && e.target.files[0].type.match("image.*")) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const imageHandlerNominee = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setUpload({ ...upload, nomineeProfileImg: reader.result });
      }
    };
    if (e.target.files[0] && e.target.files[0].type.match("image.*")) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const OnChange = (value, name) => {
    setstate({ ...state, [name]: value });
    setStateNominee({
      ...StateNominee,
      [name]: value,
    });
  };
  const CheckFields = (name) => {
    if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", state.user_email),
      });
    } else if (name === "Profession") {
      setError({
        ...error,
        ProError: validate("required", state.Profession),
      });
    } else if (name === "AddressResidence") {
      setError({
        ...error,
        AddRError: validate("required", state.AddressResidence),
      });
    } else if (name === "TelResidence") {
      setError({
        ...error,
        TError: validate("required", state.TelResidence),
      });
    } else if (name === "DOB") {
      setError({
        ...error,
        DError: validate("DOB", state.Dateofbirth),
      });
    } else if (name === "Nationality") {
      setError({
        ...error,
        NationError: validate("required", state.Nationality),
      });
    } else if (name === "Mobile") {
      setError({
        ...error,
        MobileError: validate("required", state.Mobile),
      });
    } else if (name === "NomineeName") {
      setError({
        ...error,
        NomineeNameError: validate("required", StateNominee.NomineeName),
      });
    } else if (name === "NomineeCnic") {
      setError({
        ...error,
        NomineeCnicError: validate("CNIC", StateNominee.NomineeCnic),
      });
    } else if (name === "NomineeRelation") {
      setError({
        ...error,
        NomineeRelationError: validate(
          "required",
          StateNominee.NomineeRelation
        ),
      });
    } else if (name === "NomineePhone") {
      setError({
        ...error,
        NomineePhoneError: validate("ContactNumber", StateNominee.NomineePhone),
      });
    } else if (name === "spouse") {
      setError({
        ...error,
        spouseError: validate("required", state.spouse),
      });
    }
  };
  const PrintFile = () => {
    setError({
      ...error,
      emailError: validate("email", state.user_email),
      ProError: validate("required", state.Profession),
      AddRError: validate("required", state.AddressResidence),
      TError: validate("required", state.TelResidence),
      DError: validate("DOB", state.Dateofbirth),
      NationError: validate("required", state.Nationality),
      MobileError: validate("required", state.Mobile),
      NomineeNameError: validate("required", StateNominee.NomineeName),
      NomineeCnicError: validate("CNIC", StateNominee.NomineeCnic),
      NomineeRelationError: validate("required", StateNominee.NomineeRelation),
      NomineePhoneError: validate("ContactNumber", StateNominee.NomineePhone),
      spouseError: validate("required", state.spouse),
    });
    if (filepath?.SignaturePath === "" || filepath.FingerPrintPath === "") {
      swal("Sorry!", "Finger Print and signatures are required", "error");
    } else if (
      upload?.profileImg === null ||
      upload?.nomineeProfileImg === null
    ) {
      swal(
        "Sorry!",
        "Nominee and transfrer passport image is required",
        "error"
      );
    } else if (
      state.Profession !== "" &&
      state.AddressResidence !== "" &&
      state.TelResidence !== "" &&
      state.Dateofbirth !== "" &&
      state.Nationality !== "" &&
      state.Mobile !== "" &&
      StateNominee.NomineeName !== "" &&
      StateNominee.NomineeCnic !== "" &&
      StateNominee.NomineeRelation !== "" &&
      StateNominee.NomineePhone !== "" &&
      state.spouse !== ""
    ) {
      // console.log("hit print");
      // let body = {
      //   personal: state,
      //   Nominee: StateNominee,
      //   filepath: filepath,
      //   PlotInfo: TransferFrom,
      //   Profile: upload,
      // };
      // console.log("BODY", body);
      handlePrint();
    }
  };
  let todayDate = new Date().toISOString().slice(0, 10);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${state?.Cnic}_AR_${todayDate}`,
    copyStyles: true,
    //  doc.save(props.state.CNIC + "_" + "VF" + "_" + todayDate);
  });
  const onSuccess = () => {};
  const onFailure = () => {};
  const saveFile = () => {
    setError({
      ...error,
      emailError: validate("email", state.user_email),
      ProError: validate("required", state.Profession),
      AddRError: validate("required", state.AddressResidence),
      TError: validate("required", state.TelResidence),
      DError: validate("DOB", state.Dateofbirth),
      NationError: validate("required", state.Nationality),
      MobileError: validate("required", state.Mobile),
      NomineeNameError: validate("required", StateNominee.NomineeName),
      NomineeCnicError: validate("CNIC", StateNominee.NomineeCnic),
      NomineeRelationError: validate("required", StateNominee.NomineeRelation),
      NomineePhoneError: validate("ContactNumber", StateNominee.NomineePhone),
      spouseError: validate("required", state.spouse),
    });
    if (filepath?.SignaturePath === "" || filepath.FingerPrintPath === "") {
      swal("Sorry!", "Finger Print and signatures are required", "error");
    } else if (
      upload?.profileImg === null ||
      upload?.nomineeProfileImg === null
    ) {
      swal(
        "Sorry!",
        "Nominee and transfrer passport image is required",
        "error"
      );
    } else if (uploadRequestForm === null) {
      swal("Sorry!", "Please upload transfer request form file", "error");
    } else if (
      state.Profession !== "" &&
      state.AddressResidence !== "" &&
      state.TelResidence !== "" &&
      state.Dateofbirth !== "" &&
      state.Nationality !== "" &&
      state.Mobile !== "" &&
      StateNominee.NomineeName !== "" &&
      StateNominee.NomineeCnic !== "" &&
      StateNominee.NomineeRelation !== "" &&
      StateNominee.NomineePhone !== "" &&
      state.spouse !== ""
    ) {
      let formData = new FormData();
      formData.append("form", uploadRequestForm);
      // console.log("RESPONE", Response);
      let _id = Response?.transferReq?.id;
      // let _id = 114;
      _uploadFileMiddleware(_id, formData, onSuccess, onFailure);
    }
  };
  const testRef = () => {
    console.log("TEST REF", componentRef);
  };
  return (
    <>
      <div style={{ display: "none" }}>
        <TransferApplication
          ref={componentRef}
          personalInfo={{
            personal: state,
            Nominee: StateNominee,
            filepath: filepath,
            PlotInfo: TransferFrom,
            Profile: upload,
          }}
        />
      </div>

      <Card className="shadow">
        <h2 style={{ textAlign: "center", marginTop: "2%" }}>
          Transfer plot application request
        </h2>
        <CardHeader className="border-0">
          <h3 className="mt-0">Perosnal Information</h3>
        </CardHeader>

        <CardBody>
          <form style={{ marginTop: "-4%" }}>
            <div className="pl-lg-4">
              <Row>
                <Col className="centerr" lg="2" md="3" sm="6" xs="12">
                  <Card style={{ borderColor: "black", borderRadius: "10px" }}>
                    <input
                      type="file"
                      accept=".png,  .jpg"
                      id="i1"
                      style={{ display: "true", color: "white" }}
                      onChange={imageHandler}
                    ></input>{" "}
                    <br />
                    <CardImg
                      height="140px"
                      width="100px"
                      alt="Image must be in passport size format"
                      src={upload.profileImg}
                      // src={wid == 192 && hei == 192 ? upload.profileImg : ""}
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="12" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Name
                  </label>

                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    disabled
                    onKeyPress={(event) => {
                      if (!/[A-Z a-z]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    value={TransferTo?.TransferName}
                  ></input>
                </Col>
                <Col lg="6" md="5" sm="5">
                  <label className="form-control-label" for="input-username">
                    Father's/ Spouse Name{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    value={state.spouse}
                    onKeyPress={(event) => {
                      if (!/[A-Z a-z]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onBlur={() => CheckFields("spouse")}
                    onChange={(e) => OnChange(e.target.value, "spouse")}
                  ></input>
                  {error.spouseError !== "" && error.spouseError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.spouseError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col>
                <Col lg="6" md="4" sm="4">
                  <label className="form-control-label" for="input-username">
                    Email
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    disabled
                    //disabled={disabledd}
                    className="form-control"
                    placeholder=""
                    value={TransferTo?.TransferEmail}
                  ></input>
                </Col>
                <Col lg="4" md="4" sm="4">
                  <label className="form-control-label" for="input-username">
                    Mobile <span style={{ color: "red" }}>*</span>
                  </label>

                  <PhoneInput
                    fullWidth="100%"
                    country={"pk"}
                    disabled
                    value={TransferTo?.TransferPhone}
                    inputStyle={{
                      border: "1px solid lightgrey",
                      width: "100%",
                      height: "100%",
                    }}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onBlur={() => CheckFields("Mobile")}
                    onChange={(e) => OnChange(e.target.value, "Mobile")}
                    countryCodeEditable={false}
                  />
                  {error.MobileError !== "" && error.MobileError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.MobileError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    CNIC
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    disabled
                    //disabled={disabledd}
                    className="form-control"
                    placeholder=""
                    maxLength={13}
                    value={TransferTo?.TransferCnic}
                  ></input>
                </Col>

                <Col lg="12" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Passport No.
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    value={state.passport}
                    onChange={(e) => OnChange(e.target.value, "passport")}
                    onKeyPress={(event) => {
                      if (!/[0-9-+]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  ></input>
                </Col>
              </Row>

              <Row>
                <Col lg="12" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Address (Residence) <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    value={state.AddressResidence}
                    onBlur={() => CheckFields("AddressResidence")}
                    onChange={(e) =>
                      OnChange(e.target.value, "AddressResidence")
                    }
                  ></input>
                  {error.AddRError !== "" && error.AddRError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.AddRError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col>
                <Col lg="12" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Address (Office)
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    value={state.Addressoffice}
                    onChange={(e) => OnChange(e.target.value, "Addressoffice")}
                  ></input>
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Profession <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    onBlur={() => CheckFields("Profession")}
                    value={state.Profession}
                    onChange={(e) => OnChange(e.target.value, "Profession")}
                  ></input>
                  {error.ProError !== "" && error.ProError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.ProError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    value={state.Organization}
                    onChange={(e) => OnChange(e.target.value, "Organization")}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Tel (Office)
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    placeholder=""
                    value={state.Teloffice}
                    maxLength={11}
                    onChange={(e) => OnChange(e.target.value, "Teloffice")}
                  ></input>
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Tel (Residence) <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    value={state.TelResidence}
                    onBlur={() => CheckFields("TelResidence")}
                    onChange={(e) => OnChange(e.target.value, "TelResidence")}
                  ></input>
                  {error.TError !== "" && error.TError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.TError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Date of Birth <span style={{ color: "red" }}>*</span>
                  </label>
                  <Input
                    type="date"
                    id="cal"
                    className="form-control"
                    placeholder="DD-MM-YYYY"
                    //  max={abc}
                    //  onClick={checker}

                    onBlur={() => CheckFields("DOB")}
                    value={state.Dateofbirth}
                    //  onChange={(e) => getAge(e.target.value)}
                    onChange={(e) => OnChange(e.target.value, "Dateofbirth")}
                  ></Input>
                  {error.DError !== "" && error.DError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.DError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Nationality <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    onBlur={() => CheckFields("Nationality")}
                    value={state.Nationality}
                    onChange={(e) => OnChange(e.target.value, "Nationality")}
                  ></input>
                  {error.NationError !== "" && error.NationError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.NationError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col>
              </Row>
            </div>
          </form>
        </CardBody>
        <CardHeader className="border-0">
          <h3 className="mt-0">Nominee Information </h3>
        </CardHeader>
        <CardBody>
          <form style={{ marginTop: "-4%" }}>
            <div className="pl-lg-4">
              <Row>
                <Col className="centerr" lg="2" md="3" sm="6" xs="12">
                  <Card style={{ borderColor: "black", borderRadius: "10px" }}>
                    <input
                      type="file"
                      accept=".png,  .jpg"
                      id="i1"
                      style={{ display: "true", color: "white" }}
                      onChange={imageHandlerNominee}
                    ></input>{" "}
                    <br />
                    <CardImg
                      height="140px"
                      width="100px"
                      alt="Image must be in passport size format"
                      src={upload.nomineeProfileImg}
                      // src={wid == 192 && hei == 192 ? upload.profileImg : ""}
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="12" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Name <span style={{ color: "red" }}>*</span>
                  </label>

                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    onBlur={() => CheckFields("NomineeName")}
                    // onKeyPress={(event) => {
                    //   if (!/[A-Z a-z]/.test(event.key)) {
                    //     event.preventDefault();
                    //   }
                    // }}
                    value={StateNominee.NomineeName}
                    onChange={(e) => OnChange(e.target.value, "NomineeName")}
                  ></input>
                  {error.NomineeNameError !== "" &&
                    error.NomineeNameError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.NomineeNameError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Relation with Applicant{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    onKeyPress={(event) => {
                      if (!/[A-Z a-z]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onBlur={() => CheckFields("NomineeRelation")}
                    value={StateNominee.NomineeRelation}
                    onChange={(e) =>
                      OnChange(e.target.value, "NomineeRelation")
                    }
                  ></input>
                  {error.NomineeRelationError !== "" &&
                    error.NomineeRelationError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.NomineeRelationError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                </Col>

                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    CNIC <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    onBlur={() => CheckFields("NomineeCnic")}
                    maxLength={13}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    value={StateNominee.NomineeCnic}
                    onChange={(e) => OnChange(e.target.value, "NomineeCnic")}
                  ></input>
                  {error.NomineeCnicError !== "" &&
                    error.NomineeCnicError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.NomineeCnicError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                </Col>

                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Passport No.
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    value={StateNominee.NomineePassport}
                    onChange={(e) =>
                      OnChange(e.target.value, "NomineePassport")
                    }
                    onKeyPress={(event) => {
                      if (!/[0-9-+]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  ></input>
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Mobile No. <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    placeholder=""
                    onBlur={() => CheckFields("NomineePhone")}
                    value={StateNominee.NomineePhone}
                    maxLength={11}
                    onChange={(e) => OnChange(e.target.value, "NomineePhone")}
                  ></input>
                  {error.NomineePhoneError !== "" &&
                    error.NomineePhoneError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.NomineePhoneError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                </Col>
              </Row>
            </div>
          </form>
        </CardBody>
        <CardHeader className="border-0">
          <h3 className="mt-0">Plot Information</h3>
        </CardHeader>
        <CardBody>
          <form style={{ marginTop: "-3%" }}>
            <div>
              <Row>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    disabled={true}
                    value={TransferFrom?.Project_name}
                    editable={false}
                  ></input>
                </Col>

                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Sector Name
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    disabled={true}
                    value={TransferFrom?.Sector_Name}
                    editable={false}
                  ></input>
                </Col>

                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Plot No
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    disabled={true}
                    value={TransferFrom?.Plot_no}
                    editable={false}
                  ></input>
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Plot Type
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    disabled={true}
                    value={TransferFrom?.PlotType_Name}
                    editable={false}
                  ></input>
                </Col>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Plot Size
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    disabled={true}
                    value={TransferFrom?.CategoryName}
                    editable={false}
                  ></input>
                </Col>

                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Plot Price
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    disabled={true}
                    value={TransferFrom?.PlotPrice}
                    editable={false}
                  ></input>
                </Col>
              </Row>
            </div>
          </form>
        </CardBody>
        <CardHeader className="border-0">
          <Row>
            <Col lg="10" md="10" sm="10">
              <h3 className="mb-0"> Declaration </h3>
            </Col>
            <Col lg="2" md="2" sm="2">
              <Button color="success" onClick={getverification}>
                LOAD IMAGES
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <label style={{ marginLeft: "3%", marginRight: "3%" }}>
          I hereby declare that the Information provided by me in this form is
          acurate to he best of my knowledege and that i have read and
          understood the terms of allotment and schedules of price and payment
          and accept the same unconditionally. Furthermore, I declare that i
          shall abide by the rules and regulations of the company, which are
          intimated to me by the management from time to time.
          <br />
          Date: ________
        </label>
        <CardBody>
          <form>
            <div className="pl-lg-4">
              <Row style={{ alignContent: "center" }}>
                <Col
                  lg="3"
                  md="3"
                  sm="3"
                  style={{ alignItems: "center" }}
                ></Col>
                <Col lg="3" md="3" sm="3" style={{ alignItems: "center" }}>
                  <div className="cardd">
                    <img
                      // src="https://d2znhq0qo3pk40.cloudfront.net/Biometric/789798788975FingerPrint.jpg"
                      src={
                        filepath.SignaturePath !== "" &&
                        filepath.SignaturePath !== undefined &&
                        filepath.SignaturePath !== null
                          ? filepath.SignaturePath
                          : Response?.TransfertoUser?.SignaturePath !== null
                          ? Response?.TransfertoUser?.SignaturePath
                          : ""
                      }
                      style={{ width: "54%", marginTop: "3px" }}
                      alt="img"
                    />
                  </div>
                  <p>___________________________</p>
                  <h4> Applicant Signature</h4>
                </Col>
                <Col lg="3" md="3" sm="3" style={{ alignItems: "center" }}>
                  <div className="cardd">
                    <img
                      // src="https://d2znhq0qo3pk40.cloudfront.net/Biometric/789798788975FingerPrint.jpg"
                      src={
                        filepath.FingerPrintPath !== "" &&
                        filepath.FingerPrintPath !== undefined &&
                        filepath.FingerPrintPath !== null
                          ? filepath.FingerPrintPath
                          : Response?.TransfertoUser?.FingerPrintPath !== null
                          ? Response?.TransfertoUser?.FingerPrintPath
                          : ""
                      }
                      style={{ width: "54%", marginTop: "3px" }}
                      alt="img"
                    />
                  </div>
                  <p>___________________________</p>
                  <h4> Applicant Thumb Impression</h4>
                </Col>

                <Col
                  lg="3"
                  md="3"
                  sm="3"
                  style={{ alignItems: "center" }}
                ></Col>
              </Row>
            </div>
          </form>
        </CardBody>
        <CardHeader className="border-0">
          <h3 className="mt-0">Verification of information</h3>
        </CardHeader>
        <CardBody>
          <label>
            I have read and understand all the terms and condtions and i hereby
            agree to abide these unconditionally as well as any future rules and
            regulations from the company. <br />
            <br />
            <br />
            Signature of Applicant ________________ &nbsp; Date ____________{" "}
            <br />
            <br />
            Note: The Management of Palm Dream/KGCP, reservses the right to
            change or ammend the application form, may alter and append the
            construction by-laws, terms and conditions and rules and regulations
            if required as its discretion with or without assigning any reason
            or noice thereof and allotee shall accept the decision in this
            regard.
          </label>
        </CardBody>
        <Row style={{ padding: "15px", marginLeft: "5%" }}>
          <Col lg="4" md="4" sm="4">
            <Button
              color="danger"
              size="sm"
              onClick={saveFile}
              // onClick={RequestInitiate}
              // onClick={handleTest}
            >
              <i class="fa fa-save"></i> Save
            </Button>
          </Col>
          <Col lg="4" md="4" sm="4">
            <Button color="success" size="sm" onClick={PrintFile}>
              <i class="fas fa-print"></i> Print
            </Button>
          </Col>
          <Col lg="4" md="4" sm="4">
            {uploadRequestForm !== null ? (
              <div style={{ dipslay: "flex", flexDirection: "row" }}>
                <span>{uploadRequestForm?.name}</span> &nbsp;
                <i
                  onClick={deleteReqForm}
                  style={{ cursor: "pointer" }}
                  class="fas fa-trash"
                ></i>
              </div>
            ) : (
              <>
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="application/pdf"
                  ref={fileUploadRef}
                  onChange={handleUploadReqForm}
                />
                <Button
                  color="warning"
                  size="sm"
                  onClick={(e) =>
                    fileUploadRef.current && fileUploadRef.current.click()
                  }
                >
                  <i class="fas fa-file-upload"></i> Upload
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default UserInfoForm;
