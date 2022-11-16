import React, { useEffect, useState, useRef } from "react";

import { Button, Table } from "reactstrap";
import { useReactToPrint } from "react-to-print";
import { Badge } from "reactstrap";
import { useHistory } from "react-router";
// import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import jsPDF from "jspdf";
import PalmDreamLogo from "../images/palm_dreams_logo.png";
import HtmlPrint from "views/HtmlReciept/HtmlPrint";
import moment from "moment";

const TableOfPayments = (props) => {
  const componentRef = useRef();
  const [data, setData] = useState("");
  // const dateFunction = (date) => {
  //   const nDate = new Date(date).toLocaleString("en-US", {
  //     timeZone: "Asia/Karachi",
  //   });
  //   return nDate;
  // };
  const dateFunction = (date) => {
    let d = date?.split("T")[0];

    return moment(d).format("DD-MM-YYYY");
  };
  const [role, setRole] = useState(null);
  useEffect(() => {
    setRole(parseInt(localStorage.getItem("roleid")));
  }, [true]);
  //Proceed To Payment Receipt
  let history = useHistory();
  var arrayofMultipleInstallment = [];
  const proceed = (val) => {
    arrayofMultipleInstallment.push(val);
    history.push({
      pathname: "/admin/PaymentReceipt",
      state: {
        user_id: val.user_id,
        plot_no: val.Plot_no,
        sale_order_number: val.SaleOrderNo,
        sale_name: val.user_name,
        sale_phone: val.user_phone,
        sale_cnic: val.CNIC,
        sale_email: val.user_email,
        sale_amount: val.Amount,
        sale_paymentstagesid: val.PaymentStageId,
        sale_paymenttypeid: val.PaymenTypeId,
        sale_installmentNo: val.InstallmentNo,
        type: val.Description,
      },
      data: { arrayofMultipleInstallment },
    });
  };

  // const printDocument = (post) => {

  //   let date = new Date().toISOString().split("T")[0];

  //   const doc = new jsPDF();
  //   doc.addImage(PalmDreamLogo, "png", 15, 0, 30, 30);
  //   doc.text("Payment Receipt", 88, 40);
  //   doc.setFontSize(10);
  //   doc.text("Date: " + date, 168, 18);
  //   doc.autoTable({
  //     theme: "grid",
  //     head: [["Details", ""]],
  //     body: [
  //       ["File/Ref No.", post.SaleOrderNo],
  //       ["Receipt No.", post.PaymentReceiptNo],
  //       ["Recevied with gratitude from", post.user_name],
  //       ["CNIC No.", post.CNIC],
  //       ["Payment Description", post.Description],
  //       ["Amount Recevied", `${post.Amount} PKR`],
  //       ["Mode of Payment", post.PaymentTypeName],
  //       ["Transaction Date", post.Dated],
  //       ["Remarks", post.Remarks],
  //     ],
  //     margin: { top: 55 },
  //     styles: { lineColor: 10, cellWidth: 91 },
  //   });
  //   doc.setFontSize(10);
  //   doc.text("Singnature:________________", 145, 170);

  //   doc.save("Payment receipt.pdf");
  // };
  const handlePrintHtml = (data) => {
    setData(data);
    setTimeout(() => {
      handlePrint();
    }, 500);
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true]);

  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};

  useEffect(() => {
    if (props.GetUserJWTLogin === false) {
      localStorage.removeItem("auth");
      window.location.href = "/auth/login";
    }
  });
  return (
    <>
      <HtmlPrint date={data} ref={componentRef} />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">User Name</th>
            <th scope="col">CNIC</th>
            <th scope="col">Description</th>
            <th scope="col">File No</th>
            <th scope="col">Receipt No</th>
            <th scope="col">Email</th>
            <th scope="col">PLot No</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {props.paginatedPosts !== null &&
          props.paginatedPosts !== undefined ? (
            props.paginatedPosts.map((posts, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{posts.user_name}</td>
                  <td>{posts.CNIC}</td>
                  <td>{posts.Description}</td>
                  <td>{posts.SaleOrderNo}</td>
                  <td>{posts.PaymentReceiptNo}</td>
                  <td>{posts.user_email}</td>
                  <td>{posts.Plot_no}</td>
                  <td>
                    {posts.status_name === "Unpaid" ? (
                      <Badge color="warning" pill>
                        {posts.status_name}
                      </Badge>
                    ) : posts.status_name === "Paid" ? (
                      <Badge color="success" pill>
                        {posts.status_name}
                      </Badge>
                    ) : posts.status_name === "Varification in Progress" ? (
                      <Badge color="info" pill>
                        {posts.status_name}
                      </Badge>
                    ) : posts.status_name === "Pending" ? (
                      <Badge color="primary" pill>
                        {posts.status_name}
                      </Badge>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>{dateFunction(posts.Dated)}</td>

                  {role === 10 ? (
                    <td>
                      <Button
                        color="warning"
                        size="sm"
                        disabled={posts.status_name !== "Unpaid"}
                        onClick={(e) => proceed(posts)}
                        id="info"
                      >
                        <span className="btn-inner--icon">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                      </Button>
                    </td>
                  ) : role === 8 ||
                    role == 9 ||
                    role == 5 ||
                    role == 3 ||
                    role == 6 ? (
                    <td>
                      <Button
                        color="warning"
                        size="sm"
                        disabled={posts.status_name !== "Unpaid"}
                        onClick={(e) => proceed(posts)}
                        id="info"
                      >
                        <span className="btn-inner--icon">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                      </Button>
                      <Button
                        color="success"
                        size="sm"
                        disabled={posts.status_name !== "Paid"}
                        onClick={() => handlePrintHtml(posts)}
                        id="info"
                      >
                        <span className="btn-inner--icon">
                          <i className="fas fa-print"></i>
                        </span>
                      </Button>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              );
            })
          ) : (
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>
                <h3>No data found</h3>
              </th>
              <th></th>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};
// export default TableOfPayments

const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(TableOfPayments);
