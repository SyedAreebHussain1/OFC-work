import React from "react";
import {
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  Input,
  Card,
  CardImg,
} from "reactstrap";
import { useEffect, useState } from "react";
import Print from "./Print";
import Select from "react-select";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import PalmDreamLogo from "../../Payments/images/palm_dreams_logo.png";
import kgcLOGO from "../../Payments/images/palmlogohd.png";
import Certificate from "../../Payments/images/palmDream A_ Certificate.jpg";
import swal from "sweetalert";
import jsPDF from "jspdf";
import moment from "moment";
const CertificateForm = (props) => {
  let location = useLocation();
  let history = useHistory();
  const [wid, setWid] = useState({});
  const [hei, setHei] = useState({});
  const [state, setstate] = useState({
    VerificationNo: "",
    Note1: "",
    Note2: "",
    Note3: "",
  });
  const [upload, setUpload] = useState({
    profileImg: null,
  });

  const onChange = (val, name) => {
    // if (name == "VerificationNo") {
    setstate({ ...state, [name]: val });
    // }
  };

  const CheckFields = (name) => {
    if (name === "Note1") {
      setError({
        ...error,
        Note1Error: validate("Note1", state.Note1),
        VerificationNoError: validate("VerificationNo", state.VerificationNo),
      });
    } else if (name === "Note2") {
      setError({
        ...error,
        Note2Error: validate("Note2", state.Note2),
        VerificationNoError: validate("VerificationNo", state.VerificationNo),
      });
    } else if (name === "Note3") {
      setError({
        ...error,
        Note3Error: validate("Note3", state.Note3),
        VerificationNoError: validate("VerificationNo", state.VerificationNo),
      });
    }
  };

  const [error, setError] = useState({
    Note1Error: "",
    Note2Error: "",
    Note3Error: "",
    VerificationNoError: "",
  });
  const [selectedFile, setSelectedFile] = useState();
  const imageHandler = (e) => {
    const reader = new FileReader();
    setSelectedFile(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState == 2) {
        setUpload({ profileImg: reader.result });
      }
    };
    if (e.target.files[0] && e.target.files[0].type.match("image.*")) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (upload.profileImg !== null && upload.profileImg !== undefined) {
      var fileUpload = document.getElementById("i1");
      if (typeof fileUpload.files != "undefined") {
        var reader = new FileReader();

        if (fileUpload.files[0] && fileUpload.files[0].type.match("image.*")) {
          reader.readAsDataURL(fileUpload.files[0]);
        }
        reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function () {
            var height = this.height;
            var width = this.width;
            setHei(height);
            setWid(width);
          };
        };
      }
    }
  });

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};

  useEffect(() => {
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true]);

  useEffect(() => {
    if (props.GetUserJWTLogin === false) {
      localStorage.removeItem("auth");
      window.location.href = "/auth/login";
    }
  });
  const Back = () => {
    history.push({
      pathname: "/admin/PaymentStages",
      state: location.state,
    });
  };
  const Save = () => {
    const formData = new FormData();
    const formDataVerificationInfo = new FormData();
    var today = new Date(),
      // date =
      //   today.getDate() +
      //   "-" +
      //   (today.getMonth() + 1) +
      //   "," +
      //   today.getFullYear();
      date = moment(today).format("ll");
    var lMargin = 15; //left margin in mm
    var rMargin = 15; //right margin in mm
    var pdfInMM = 210;
    //let name= props.name;
    const doc = new jsPDF();
    doc.setFont("Helvetica");
    doc.setFontSize(10);
    doc.addImage(Certificate, "JPEG", 10, 0, 200, 285);
    // doc.addImage(PalmDreamLogo, "JPEG", 80, 1, 40, 40);
    doc.text("Client Ref. #: " + props.state.SaleOrderNo, 150, 40);
    doc.text("Date: " + date, 150, 45);
    // doc.text("CERTIFICATE OF CONFIRMATION", 80, 60);

    doc.autoTable({
      // head: [['Plot Size', 'Type & Category', 'Plot No.','Total Price']],
      body: [
        ["Name of Allotee", ":           ", props.state.user_name],
        ["Father's/Spouse Name:", ":", props.state.Father_Spouse_Name],
        ["CNIC #", ":", props.state.CNIC],
        ["Plot #", ":", props.state.Plot_no],
        ["Block", ":", props.state.Sector_Name],
        [
          "Category",
          ":",
          props.state.CategoryName + "sq. yds." + props.state.PlotType_Name,
        ],
        ["Location", ":", props.state.Position],
        ["Verfication Ref. #", ":", state.VerificationNo],
      ],
      // margin: { top: 70,right },
      // styles: { fontSize: 10 },
      margin: { top: 65, right: 20, bottom: 0, left: 40 },
      styles: {
        fontSize: 10,
        fillColor: [255, 255, 255],
        lineWidth: 0,
        cellPadding: 1,
      },
      // columnStyles: { 0: { columnWidth: "15%" } },
      theme: "plain",
      bodyStyles: {
        // fillColor: ["#fff"],
        textColor: ["#000"],
      },
    });
    // doc.setTextColor(169, 169, 169);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.text(
      `Print by ${
        localStorage.getItem("username")
      }/ID: ${localStorage.getItem("Userid")}`,
      40,
      260
    );
    doc.text(new Date().toLocaleString(), 40, 265);
    // doc.addImage(upload.profileImg, "JPEG", 30, 130, 150, 80);

    // let para1 =
    //   "• The Management of the project is not responsible for the cerificate original file loss or damage";
    // let para2 =
    //   "• No sale purchase of this certificate. Original file will be carried out without verification of the office of palm dreams.";

    // let para3 =
    //   "• 3 original currency notes of Rs. of 10,50 & 100 is part of this certificate. Any submission without this certificate will not be acceptable.";
    // let para4 =
    //   "• Complete original plot file with (certificate of confirmation. Company attested application request form. Letter of confirmation payment acknowledgments compnay receipts,E-receipt through HSCIS & payment schedule) will be required at the time of verification. Request with missing documents will not be intertained.";
    // let para5 =
    //   "• Standard development charges (partial) included in payment schedule. Hence special development charges will be paid by the allotee after one year of booking in installments within the time of completion of project or final payment.";

    // let paragraph1 = doc.splitTextToSize(para1, pdfInMM - lMargin - rMargin);
    // doc.text(paragraph1, 10, 220);

    // let paragraph2 = doc.splitTextToSize(para2, pdfInMM - lMargin - rMargin);
    // doc.text(paragraph2, 10, 225);
    // let paragraph3 = doc.splitTextToSize(para3, pdfInMM - lMargin - rMargin);
    // doc.text(paragraph3, 10, 230);
    // let paragraph4 = doc.splitTextToSize(para4, pdfInMM - lMargin - rMargin);
    // doc.text(paragraph4, 10, 240);
    // let paragraph5 = doc.splitTextToSize(para5, pdfInMM - lMargin - rMargin);
    // doc.text(paragraph5, 10, 255);

    // doc.text("________________", 30, 270);
    // doc.text("Document Department", 30, 275);
    // doc.text("Manager Documentation", 30, 280);
    // doc.text("Palm Dreams", 30, 285);

    // doc.text("________________", 140, 270);
    // doc.text("Authorized By", 140, 275);
    // // doc.internal.scaleFactor = 1.33;
    // doc.addImage(kgcLOGO, "JPEG", 170, 270, 30, 30);

    let todayDate = new Date().toISOString().slice(0, 10);
    var blob = doc.output("blob");
    const randomGenrator =
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36);
    var file = new File(
      [blob],
      props.state.CNIC + "_" + "VF" + "_" + todayDate + ".pdf"
    );
    // doc.save(props.state.CNIC + "_" + "Letter" + "_" + todayDate);

    formData.append("Varification", file);
    formData.append("FilePathId", props.cocFilePath);
    formDataVerificationInfo.append("SaleOrderId", props.state?.SaleOrderId);
    formDataVerificationInfo.append("VarificationNo", state.VerificationNo);
    formDataVerificationInfo.append("notes", selectedFile);

    props.InsertVerificationDetailMiddleware(
      formDataVerificationInfo,
      onSuccessData,
      onFailureData
    );
    props.InsertVerificationFile(formData, onSuccess, onFailure);
  };
  const onSuccessData = () => {};
  const onFailureData = () => {};
  const onSuccess = () => {
    swal({
      title: "Successful",
      text: "Certificate Of confirmation save successfully ",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
    Back();
  };
  const onFailure = () => {
    swal({
      title: "Un Successful",
      text: "Something is wrong Please contact to admin",
      type: "warning",
      // buttons: true,
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
  };
  useEffect(() => {
    setstate({
      ...state,
      VerificationNo: state.Note1 + state.Note2 + state.Note3,
    });
  }, [state.Note1, state.Note2, state.Note3]);

  return (
    <CardHeader className="border-0">
      <h3 className="mb-0"> Certificate Of Confirmation</h3>
      <CardBody>
        <form>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Name Of Allottee
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  placeholder=""
                  //  onBlur={() => CheckFields("phoneNumber")}
                  value={props.state?.user_name}
                  disabled
                  //   onChange={(e) =>
                  //  onChange(e.target.value, "ClientPhone")}
                ></input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Father's/Spouse Name
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={props.state?.Father_Spouse_Name}
                  disabled
                ></input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  CNIC #
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={props.state?.CNIC}
                  disabled
                ></input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Plot #
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={props.state?.Plot_no}
                  disabled
                ></input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Location
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={props.state?.CNIC}
                  disabled
                ></input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Category
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  value={
                    props.state?.CategoryName +
                    " sq. yds. " +
                    props.state?.PlotType_Name
                  }
                  disabled
                ></input>
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Note 1
                </label>
                <input
                  type="text"
                  id="input-username"
                  onKeyPress={(event) => {
                    if (/[^a-zA-Z0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  className="form-control"
                  onBlur={() => CheckFields("Note1")}
                  maxlength="6"
                  value={state.Note1}
                  onChange={(e) => onChange(e.target.value, "Note1")}
                ></input>
                {error.Note1Error !== "" && error.Note1Error !== null && (
                  <small style={{ marginTop: "2px" }}>
                    <span style={{ color: "red" }}>
                      {error.Note1Error}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Note 2
                </label>
                <input
                  type="text"
                  id="input-username"
                  onKeyPress={(event) => {
                    if (/[^a-zA-Z0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  className="form-control"
                  onBlur={() => CheckFields("Note2")}
                  maxlength="6"
                  value={state.Note2}
                  onChange={(e) => onChange(e.target.value, "Note2")}
                ></input>
                {error.Note2Error !== "" && error.Note2Error !== null && (
                  <small style={{ marginTop: "2px" }}>
                    <span style={{ color: "red" }}>
                      {error.Note2Error}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Note 3
                </label>
                <input
                  type="text"
                  id="input-username"
                  onKeyPress={(event) => {
                    if (/[^a-zA-Z0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  className="form-control"
                  onBlur={() => CheckFields("Note3")}
                  maxlength="6"
                  value={state.Note3}
                  onChange={(e) => onChange(e.target.value, "Note3")}
                ></input>
                {error.Note3Error !== "" && error.Note3Error !== null && (
                  <small style={{ marginTop: "2px" }}>
                    <span style={{ color: "red" }}>
                      {error.Note3Error}{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Verification Ref. #
                </label>
                <input
                  type="text"
                  id="input-username"
                  // onKeyPress={(event) => {
                  //   if (/[^a-zA-Z0-9]/.test(event.key)) {
                  //     event.preventDefault();
                  //   }
                  // }}
                  className="form-control"
                  // onBlur={() => CheckFields("VerificationNo")}
                  // maxlength="18"
                  disabled
                  value={state.VerificationNo}
                  // onChange={(e) => onChange(e.target.value, "VerificationNo")}
                ></input>
                {/* {error.VerificationNoError !== "" &&
                  error.VerificationNoError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.VerificationNoError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )} */}
                &nbsp;
              </Col>
              &nbsp;
            </Row>
            <Row>
              <Col lg="3" md="3" sm="6" xs="12"></Col>

              <Col className="centerr" lg="6" md="6" sm="6" xs="12">
                <input
                  type="file"
                  // hidden={upload.profileImg!==""}
                  accept=".png,  .jpg"
                  id="i1"
                  style={{ display: "true", color: "white" }}
                  onChange={imageHandler}
                ></input>

                <Card style={{ borderColor: "black", borderRadius: "10px" }}>
                  <CardImg
                    height="400px"
                    width="400px"
                    src={upload.profileImg}
                  />
                </Card>
                <br />
              </Col>
              <Col lg="3" md="3" sm="6" xs="12"></Col>
            </Row>

            {/* {upload.profileImg !== null && state.VerificationNo !== "" ? (
              <Print
                state={props.state}
                verificationImg={upload.profileImg}
                verificationNo={state.VerificationNo}
                InsertVerificationFile={props.InsertVerificationFile}
                Verification={props.Verification}
                cocFilePath={props.cocFilePath}
              />
            ) : (
              ""
            )} */}
            {/* {upload.profileImg !== null &&
            state.VerificationNo !== "" &&
            state.VerificationNo.length == 18 ? ( */}
            <Button color="success" onClick={Back} size="sm">
              <i class="fas fa-arrow-left"></i>
              Back
            </Button>
            <Button
              color="info"
              onClick={Save}
              size="sm"
              disabled={
                upload.profileImg !== null &&
                state.VerificationNo !== "" &&
                state.VerificationNo.length == 18
                  ? false
                  : true
              }
            >
              <i class="fas fa-save"></i>
              <span className="btn-inner--icon">Save</span>
            </Button>
            {error.VerificationNoError !== "" &&
              error.VerificationNoError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.VerificationNoError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
            {/* ) : (
              ""
            )} */}
          </div>
        </form>
      </CardBody>
    </CardHeader>
  );
};
// export default CertificateForm

const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(CertificateForm);
