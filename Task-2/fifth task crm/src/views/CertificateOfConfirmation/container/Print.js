import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import PalmDreamLogo from "../../Payments/images/palm_dreams_logo.png";
import kgcLOGO from "../../Payments/images/palmlogohd.png";
import { Row, Col } from "reactstrap";
import swal from "sweetalert";
import axios from "axios";

const Print = (props) => {
  const dateFunction = (date) => {
    const nDate = new Date(date).toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
    });
    return nDate;
  };
  let date = dateFunction(props.state?.Datetime).toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
  });
  const Letter = () => {
    var today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
    var lMargin = 15; //left margin in mm
    var rMargin = 15; //right margin in mm
    var pdfInMM = 210;
    //let name= props.name;
    const doc = new jsPDF();
    doc.setFont("Helvetica");
    doc.setFontSize(10);
    doc.addImage(PalmDreamLogo, "JPEG", 80, 1, 40, 40);
    doc.text("Client Ref. #: " + props.state.SaleOrderNo, 160, 50);
    doc.text("Date: " + date, 160, 55);
    doc.text("CERTIFICATE OF CONFIRMATION", 80, 60);

    doc.autoTable({
      // head: [['Plot Size', 'Type & Category', 'Plot No.','Total Price']],
      body: [
        ["Name of Allotee", ":", props.state.user_name],
        ["Father's/Spouse Name:", ":", props.state.Father_Spouse_Name],
        ["CNIC #", ":", props.state.CNIC],
        ["Plot #", ":", props.state.Plot_no],
        [
          "Category",
          ":",
          props.state.CategoryName + "sq. yds." + props.state.PlotType_Name,
        ],
        ["Location", ":", props.state.Position],
        ["Verfication Ref. #", ":", props.verificationNo],
      ],
      margin: { top: 70 },
      styles: { fontSize: 10 },
    });
    doc.addImage(props.verificationImg, "JPEG", 30, 130, 150, 80);

    let para1 =
      "• The Management of the project is not responsible for the cerificate original file loss or damage";
    let para2 =
      "• No sale purchase of this certificate. Original file will be carried out without verification of the office of palm dreams.";

    let para3 =
      "• 3 original currency notes of Rs. of 10,50 & 100 is part of this certificate. Any submission without this certificate will not be acceptable.";
    let para4 =
      "• Complete original plot file with (certificate of confirmation. Company attested application request form. Letter of confirmation payment acknowledgments compnay receipts,E-receipt through HSCIS & payment schedule) will be required at the time of verification. Request with missing documents will not be intertained.";
    let para5 =
      "• Standard development charges (partial) included in payment schedule. Hence special development charges will be paid by the allotee after one year of booking in installments within the time of completion of project or final payment.";

    let paragraph1 = doc.splitTextToSize(para1, pdfInMM - lMargin - rMargin);
    doc.text(paragraph1, 10, 220);

    let paragraph2 = doc.splitTextToSize(para2, pdfInMM - lMargin - rMargin);
    doc.text(paragraph2, 10, 225);
    let paragraph3 = doc.splitTextToSize(para3, pdfInMM - lMargin - rMargin);
    doc.text(paragraph3, 10, 230);
    let paragraph4 = doc.splitTextToSize(para4, pdfInMM - lMargin - rMargin);
    doc.text(paragraph4, 10, 240);
    let paragraph5 = doc.splitTextToSize(para5, pdfInMM - lMargin - rMargin);
    doc.text(paragraph5, 10, 255);

    doc.text("________________", 30, 270);
    doc.text("Document Department", 30, 275);
    doc.text("Manager Documentation", 30, 280);
    doc.text("Palm Dreams", 30, 285);

    doc.text("________________", 140, 270);
    doc.text("Authorized By", 140, 275);
    // doc.internal.scaleFactor = 1.33;
    doc.addImage(kgcLOGO, "JPEG", 170, 270, 30, 30);
    let todayDate = new Date().toISOString().slice(0, 10);
    doc.save(props.state.CNIC + "_" + "VF" + "_" + todayDate);
  };

  const Save = () => {
    // Create an object of formData
    const formData = new FormData();
    let file = state.selectedFile;
    formData.append("Varification", file);
    formData.append("FilePathId", props.cocFilePath);
    props.InsertVerificationFile(formData, onSuccess, onFailure);
  };
  const onSuccess = () => {
    swal({
      title: "Successful",
      text: "successfully Entered",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
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

  const [state, setstate] = useState({
    // Initially, no file is selected
    selectedFile: null,
  });

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setstate({ selectedFile: event.target.files[0] });
  };
  return (
    <div>
      <Row>
        <Col lg="4" md="4" sm="6"></Col>
        <Col lg="4" md="4" sm="6"></Col>
        <Col lg="4" md="4" sm="6">
          <Button color="danger" size="sm" onClick={Letter}>
            <i className="fas fa-print"></i>
            <span className="btn-inner--icon">Print</span>
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h3>Select a Certificate Of Confirmation file for save</h3>
          <input type="file" onChange={onFileChange} />

          <Button color="info" onClick={Save} size="sm">
            <i class="fas fa-save"></i>
            <span className="btn-inner--icon">Save</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default Print;
