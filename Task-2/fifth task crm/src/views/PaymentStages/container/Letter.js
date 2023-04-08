import React from "react";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import PalmDreamLogo from "../../Payments/images/palm_dreams_logo.png";
import { InsertVerificationFile } from "views/CertificateOfConfirmation/middleware";
import { connect } from "react-redux";
import swal from "sweetalert";
const Letter = (props) => {
  const formData = new FormData();
  const Letter = () => {
    var today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

    let outDate = today.getDate() + "/" + today.getFullYear();
    var lMargin = 20; //left margin in mm
    var rMargin = 30; //right margin in mm
    var pdfInMM = 210;
    //let name= props.name;
    const doc = new jsPDF();
    doc.setFont("Helvetica");
    doc.setFontSize(11);

    doc.addImage(PalmDreamLogo, "JPEG", 130, 3, 66, 50);

    doc.text("PD/DD/OUT/" + props.state.SaleOrderNo + "/" + outDate, 130, 50);
    doc.text(date, 158, 55);
    doc.text("Mr " + props.state.user_name, 25, 65);
    doc.setFont("Helvetica", "bold");
    doc.text("Subject:", 25, 85);
    doc.text("Confirmation Of Plot in Palm Dreams", 45, 85);
    const textWidth = doc.getTextWidth("Confirmation Of Plot in Palm Dreams");
    doc.line(45, 86, 45 + textWidth, 86);
    doc.setFont("Helvetica", "normal");
    doc.text("Dear Mr." + props.state.user_name + ",", 25, 100);
    doc.text("Congratulations!", 25, 110);
    doc.text(
      "We are pleased to welcome you to the world of Palm Dreams!",
      25,
      120
    );
    let para1 =
      "You have made an excellent decision in securing a piece of future in Palm Dreams and we hope that  in the times to come you and your family would be pround to call it your home.";

    let paragraph1 = doc.splitTextToSize(para1, pdfInMM - lMargin - rMargin);
    doc.text(paragraph1, 25, 135, { maxWidth: 158, align: "justify" });

    let para2 =
      "Becoming part of our family at Palm Dreams is the beginning of our very special relationship.Together with us, you will discover the wonders that we have planned and which will gradually be introduced to ensure that the life gets a new meaning.";
    let paragraph2 = doc.splitTextToSize(para2, pdfInMM - lMargin - rMargin);
    doc.text(paragraph2, 25, 150, { maxWidth: 158, align: "justify" });

    let para3 =
      "We encourage you to dream because we will always be here to transfer your dreams into reality.";
    let paragraph3 = doc.splitTextToSize(para3, pdfInMM - lMargin - rMargin);
    doc.text(paragraph3, 25, 170, { maxWidth: 158, align: "justify" });
    doc.text(
      "Once Again, Please accept Our gratitude and warm welcome.",
      25,
      185
    );

    doc.text("Profound regards,", 25, 195);
    doc.setFont("Helvetica", "bold");
    doc.text(
      "Note: Plot details and allotment particulars are on the following page.",
      25,
      220,
      { maxWidth: 185, align: "justify" }
    );
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.text(
      `Print by ${
        localStorage.getItem("username")
      }/ID: ${localStorage.getItem("Userid")}`,
      25,
      235
    );
    doc.text(new Date().toLocaleString(), 25, 240);
   
    doc.setTextColor(169, 169, 169);
    doc.text(
      "B-6(A),Miran Mohammad Shah Road, M.A.C.H.S, Karachi",
      100,
      260,
      "center"
    );
    doc.text("info@kgcp.com.pk", 100, 263, "center");
    doc.text(props.VerificationRef, 150, 240);

    // doc.save("Letter_" + props.state.user_name + "_" + date);
    // var blob = doc.output("blob");
    let todayDate = new Date().toISOString().slice(0, 10);
    var blob = doc.output("blob");
    const randomGenrator =
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36);
    var file = new File(
      [blob],
      props.state.CNIC + "_" + "Letter" + "_" + todayDate + ".pdf"
    );
    // doc.save(props.state.CNIC + "_" + "Letter" + "_" + todayDate);

    formData.append("Varification", file);
    formData.append("FilePathId", props.LetterPath);
    props.InsertVerificationFile(formData, onSuccessFile, onFailureFile);

    // formData.append("Varification", file);
    // formData.append("FilePathId", props.AllotteePath);
    // props.InsertVerificationFile(formData, onSuccessFile, onFailureFile);
  };
  const onSuccessFile = () => {
    swal({
      title: "Successful",
      text: "Letter Save Successfully",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
      } else {
      }
    });
    props.GetPayment(
      props.pageNumber,
      props.noOfRows,
      props.SaleOrderNo,
      props.OnSuccess,
      props.OnFailure
    );
  };
  const onFailureFile = () => {
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
  return (
    <>
      <Button
        color="success"
        size="sm"
        onClick={Letter}
        disabled={props.stateLetter}
      >
        <i class="fas fa-print"></i>
        <span className="btn-inner--icon">Letter</span>
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  Verification: state.certificateOfConfirmation.Verification,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    InsertVerificationFile: (body, OnSuccess, OnFailure) =>
      dispatch(InsertVerificationFile(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Letter);
