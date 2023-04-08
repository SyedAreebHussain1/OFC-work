import React from "react";
import { Button } from "reactstrap";
import jsPDF from "jspdf";
import PalmDreamLogo from "../../Payments/images/palm_dreams_logo.png";
import swal from "sweetalert";
import { InsertVerificationFile } from "views/CertificateOfConfirmation/middleware";
import { connect } from "react-redux";

const AlloteeDetail = (props) => {
  const onSuccessFile = () => {
    swal({
      title: "Successful",
      text: "Allotee Detail Letter Save Successfully",
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

  const Allotee = () => {
    const formData = new FormData();
    var today = new Date();
    var lMargin = 25; //left margin in mm
    var rMargin = 30; //right margin in mm
    var pdfInMM = 210;
    //let name= props.name;
    let outDate = today.getDate() + "/" + today.getFullYear();

    // let d = date?.split("T")[0];

    // moment(d).format("DD-MM-YYYY");

    const doc = new jsPDF();
    doc.setFont("Helvetica");
    doc.setFontSize(11);

    doc.addImage(PalmDreamLogo, "JPEG", 130, 3, 66, 50);
    doc.text("PD/DD/OUT/" + props.state.SaleOrderNo + "/" + outDate, 130, 50);

    doc.text("The Plot bears the following particulars", 25, 60);

    // doc.text(
    //   "In case of any information tht you may require, please feel free to contact us at offdocs@kgcp.com.",
    //   25,
    //   70
    // );
    let para2 =
      "In case of any information tht you may require, please feel free to contact us at docdept2@gmail.com.";

    let paragraph2 = doc.splitTextToSize(para2, pdfInMM - lMargin - rMargin);
    doc.text(paragraph2, 25, 70, { maxWidth: 155, align: "justify" });
    doc.setFont("Helvetica", "bold");
    doc.text("PERSONAL DETAILS OF ALLOTTEE", 70, 80);

    doc.autoTable({
      //  head: [['Name', 'Email', 'Country']],
      body: [
        ["Name of Allotee", props.state.user_name],
        ["Name of Father/Spouse", props.state.Father_Spouse_Name],
        ["Residential Address", props.state.Address_Residence],
        ["CNIC/Passport No.", props.state.CNIC],
        ["Email id", props.state.user_email],
        ["Official Contact No.", props.state.user_phone],
      ],
      margin: { top: 90, right: 30, bottom: 10, left: 25 },
      // styles: { fontSize: 11 },
      styles: {
        fontSize: 11,
        fillColor: [255, 255, 255],
        lineColor: [0, 0, 0],
        // lineWidth: 0,
        cellPadding: 1,
      },
      bodyStyles: {
        // fillColor: ["#fff"],
        textColor: ["#000"],
      },
      theme: "grid",
    });
    doc.setFont("Helvetica", "bold");
    doc.text("PLOT DETAILS", 90, 136);
    doc.setFont("Helvetica", "normal");

    doc.autoTable({
      startY: 140,
      margin: { top: 20, right: 30, bottom: 0, left: 25, startY: 140 },
      head: [
        ["Plot Size", "Type & Category", "Plot No.", "Block", "Plot Price"],
      ],
      body: [
        [
          props.state.CategoryName + " Square Yards",
          props.state.PlotType_Name,
          props.state.Plot_no,
          props.state.Sector_Name,
          `Rs:${props.state.SoldAmounmt.toLocaleString("en-US")}`,
        ],
      ],

      theme: "grid",
      styles: {
        fontSize: 11,
        startY: 140,
        fillColor: [255, 255, 255],
        lineColor: [0, 0, 0],
        cellPadding: 1,
      },
      headStyles: {
        lineWidth: 0.3,
        startY: 140,
        lineColor: [0, 0, 0],
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        fontSize: 11,
        cellPadding: 1,
      },
      // columnStyles: { 0: { columnWidth: "15%" } },

      bodyStyles: {
        // fillColor: ["#fff"],
        textColor: ["#000"],
        startY: 140,
      },
    });
    doc.text(
      "Note: Development Charges will be charged as per demand.",
      25,
      158,
      { maxWidth: 155, align: "justify" }
    );

    let para1 =
      "It is requested to please keep us informed of any change in your personal details such as your address and please do mention the Referece Number (" +
      props.state.SaleOrderNo +
      ") in all future correspondence with us.";

    let paragraph1 = doc.splitTextToSize(para1, pdfInMM - lMargin - rMargin);
    doc.text(paragraph1, 25, 170, { maxWidth: 155, align: "justify" });

    doc.text("Committed to your satisfaction.", 25, 190);
    doc.setFont("Helvetica", "bold");
    doc.text("For Palm Dreams", 25, 200);
    doc.text("Documentation Department", 25, 230);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    // doc.setTextColor(169, 169, 169);
    doc.text(
      `Print by ${
        localStorage.getItem("username")
      }/ID: ${localStorage.getItem("Userid")}`,
      25,
      245
    );
    doc.text(new Date().toLocaleString(), 25, 250);
    doc.setTextColor(169, 169, 169);
    doc.text(props.VerificationRef, 150, 250);
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    var blob = doc.output("blob");
    const randomGenrator =
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36);
    let todayDate = new Date().toISOString().slice(0, 10);
    var file = new File(
      [blob],
      props.state.CNIC + "_" + "AD" + "_" + todayDate + ".pdf"
    );
    // doc.save(props.state.CNIC + "_" + "AD" + "_" + todayDate);

    formData.append("Varification", file);
    formData.append("FilePathId", props.AllotteePath);
    props.InsertVerificationFile(formData, onSuccessFile, onFailureFile);
  };
  return (
    <>
      <Button
        color="success"
        size="sm"
        onClick={Allotee}
        disabled={props.stateAllotee}
      >
        <i class="fas fa-print"></i>
        <span className="btn-inner--icon">Allotee Detail</span>
      </Button>
    </>
  );
};

//export default AlloteeDetail;
const mapStateToProps = (state) => ({
  Verification: state.certificateOfConfirmation.Verification,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    InsertVerificationFile: (body, OnSuccess, OnFailure) =>
      dispatch(InsertVerificationFile(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AlloteeDetail);
