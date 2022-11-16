import React from "react";
import jsPDF from "jspdf";
import imgKGC from "../images/KGC LOGO.png";
import imgLogo from "../images/squareproone_logo_black.png";
import palmDreamLogo from "../images/palm_dreams_logo.png";

import { Button } from "reactstrap";

const Report = (props) => {
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  const reportGenerate = () => {
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    if (props.paginatedPosts !== null && props.paginatedPosts !== undefined) {
      for (let i = 0; i < props.paginatedPosts.length; i++) {
        if (props.paginatedPosts[i].status_name == "Unpaid") {
          arr[j] = props.paginatedPosts[i];

          j++;
        } else if (props.paginatedPosts[i].status_name == "Paid") {
          arr1[k] = props.paginatedPosts[i];

          k++;
        } else if (
          props.paginatedPosts[i].status_name == "Varification in Progress"
        ) {
          arr2[l] = props.paginatedPosts[i];

          l++;
        } else if (props.paginatedPosts[i].status_name == "Pending") {
          arr3[m] = props.paginatedPosts[i];

          m++;
        }
      }
    }

    //  arr=paginatedPosts
    const updatedArr = arr.map((p) =>
      p["Dated"] ? { ...p, Dated: p.Dated?.split("T")[0] } : p
    );
    const updatedArr1 = arr1.map((p) =>
      p["Dated"] ? { ...p, Dated: p.Dated?.split("T")[0] } : p
    );
    const updatedArr2 = arr2.map((p) =>
      p["Dated"] ? { ...p, Dated: p.Dated?.split("T")[0] } : p
    );
    const updatedArr3 = arr3.map((p) =>
      p["Dated"] ? { ...p, Dated: p.Dated?.split("T")[0] } : p
    );
    const doc = new jsPDF();
    var imgData = "/";
    //doc.text("", 20, 10);
    doc.addImage(imgKGC, "JPEG", 15, 40, 180, 160);
    if (props.state.ProjectName == "") {
      // doc.text(state.ProjectName, 20, 10);
      doc.addImage(imgLogo, "JPEG", 15, 15, 20, 20);
    } else if (props.state.ProjectName == "Palm-Dreams") {
      doc.addImage(palmDreamLogo, "JPEG", 15, 15, 20, 20);
    } else {
    }

    // doc.text("UnPaid Records", 120, 50);

    // doc.setFont("Helvetica", "bold");
    doc.text("Receipts Report", 90, 40);
    doc.setFontSize(5);
    doc.autoTable({
      // startY: 50,
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 15 },
        2: { cellWidth: 15 },
        3: { cellWidth: 15 },
        4: { cellWidth: 15 },
        5: { cellWidth: 16 },
        6: { cellWidth: 14 },
        7: { cellWidth: 12 },
        8: { cellWidth: 10 },
        9: { cellWidth: 20 },
        10: { cellWidth: 25 },
        11: { cellWidth: 15 },
        12: { cellWidth: 15 },
        // etc
      },
      body: updatedArr,
      margin: { top: 50 },
      styles: {
        fontSize: 6,
        textAlign: "center",
      },
    });
    // doc.text("Paid Records", 20, 10);
    // doc.setFont("Helvetica", "bold");
    // doc.text("Paid Records", 95, 95);
    doc.autoTable({
      // startY: 80,
      columns: columns4.map((col) => ({ ...col, dataKey: col.field })),
      body: updatedArr3,
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 15 },
        2: { cellWidth: 15 },
        3: { cellWidth: 15 },
        4: { cellWidth: 15 },
        5: { cellWidth: 16 },
        6: { cellWidth: 14 },
        7: { cellWidth: 12 },
        8: { cellWidth: 10 },
        9: { cellWidth: 20 },
        10: { cellWidth: 25 },
        11: { cellWidth: 15 },
        12: { cellWidth: 15 },
        // etc
      },
      styles: {
        fontSize: 6,
        textAlign: "center",
      },
      // margin: { top: 20 },
    });
    // doc.text("Paid Records", 20, 10);
    // doc.setFont("Helvetica", "bold");
    // doc.text("Paid Records", 95, 95);
    doc.autoTable({
      // startY: 80,
      columns: columns2.map((col) => ({ ...col, dataKey: col.field })),
      body: updatedArr1,
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 15 },
        2: { cellWidth: 15 },
        3: { cellWidth: 15 },
        4: { cellWidth: 15 },
        5: { cellWidth: 16 },
        6: { cellWidth: 14 },
        7: { cellWidth: 12 },
        8: { cellWidth: 10 },
        9: { cellWidth: 20 },
        10: { cellWidth: 25 },
        11: { cellWidth: 15 },
        12: { cellWidth: 15 },
        // etc
      },
      styles: {
        fontSize: 6,
        textAlign: "center",
      },
      // margin: { top: 20 },
    });
    // doc.text("Verification in Progress", 20, 10);
    doc.autoTable({
      columns: columns3.map((col) => ({ ...col, dataKey: col.field })),
      body: updatedArr2,
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 15 },
        2: { cellWidth: 15 },
        3: { cellWidth: 15 },
        4: { cellWidth: 15 },
        5: { cellWidth: 16 },
        6: { cellWidth: 14 },
        7: { cellWidth: 12 },
        8: { cellWidth: 10 },
        9: { cellWidth: 20 },
        10: { cellWidth: 25 },
        11: { cellWidth: 15 },
        12: { cellWidth: 15 },
        // etc
      },
      styles: {
        fontSize: 6,
        textAlign: "center",
      },
    });
    doc.save(
      "Payment Report " + props.state.MonthTo + " - " + props.state.MonthFrom
    );
  };

  const columns = [
    { title: "UnPaid Records" },
    { title: "user Name", field: "user_name" },
    { title: "Installment No", field: "InstallmentNo" },
    // { title: "index", field: "CNIC" },
    { title: "user Email", field: "user_email" },

    { title: "user_phone", field: "user_phone" },
    { title: "CNIC", field: "CNIC" },
    { title: "Plot No", field: "Plot_no" },
    { title: "Plot Size", field: "CategoryName" },
    { title: "Block", field: "Sector_Name" },
    { title: "Project_name", field: "Project_name" },
    { title: "Amount", field: "Amount" },
    { title: "Issuance Date", field: "Dated" },
  ];
  const columns2 = [
    { title: "Paid Records" },
    { title: "user Name", field: "user_name" },
    { title: "Installment No", field: "InstallmentNo" },
    // { title: "index", field: "CNIC" },
    { title: "user Email", field: "user_email" },

    { title: "user_phone", field: "user_phone" },
    { title: "CNIC", field: "CNIC" },
    { title: "Plot No", field: "Plot_no" },
    { title: "Plot Size", field: "CategoryName" },
    { title: "Block", field: "Sector_Name" },
    { title: "Project_name", field: "Project_name" },

    { title: "Amount", field: "Amount" },
    { title: "Issuance Date", field: "Dated" },
  ];
  const columns3 = [
    { title: "verification in Progress" },
    { title: "user Name", field: "user_name" },
    { title: "Installment No", field: "InstallmentNo" },
    // { title: "index", field: "CNIC" },
    { title: "user Email", field: "user_email" },

    { title: "user_phone", field: "user_phone" },
    { title: "CNIC", field: "CNIC" },
    { title: "Plot No", field: "Plot_no" },
    { title: "Plot Size", field: "CategoryName" },
    { title: "Block", field: "Sector_Name" },
    { title: "Project_name", field: "Project_name" },
    { title: "Amount", field: "Amount" },
    { title: "Issuance Date", field: "Dated" },
  ];
  const columns4 = [
    { title: "Pending" },
    { title: "user Name", field: "user_name" },
    { title: "Installment No", field: "InstallmentNo" },
    // { title: "index", field: "CNIC" },
    { title: "user Email", field: "user_email" },

    { title: "user_phone", field: "user_phone" },
    { title: "CNIC", field: "CNIC" },
    { title: "Plot No", field: "Plot_no" },
    { title: "Plot Size", field: "CategoryName" },
    { title: "Block", field: "Sector_Name" },
    { title: "Project_name", field: "Project_name" },
    { title: "Amount", field: "Amount" },
    { title: "Issuance Date", field: "Dated" },
  ];
  return (
    <div>
      <Button color="danger" size="sm" id="reset" onClick={reportGenerate}>
        <span className="btn-inner--text"></span>
        <span className="btn-inner--icon">
          Report
          {/* <i className="fas fa-undo"></i> */}
        </span>
      </Button>
    </div>
  );
};

export default Report;
