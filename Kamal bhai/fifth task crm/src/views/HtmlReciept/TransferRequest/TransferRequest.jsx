import React from "react";
import { Row, Table, Col } from "reactstrap";
import "./TransferRequest.css";
import moment from "moment/moment";

const dateFunction = (date) => {
  let d = date?.split("T")[0];

  return moment(d).format("DD-MM-YYYY");
};
class TransferRequest extends React.Component {
  render() {
    // console.log("THIS PROPS", this.props);
    var today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
    let outDate = today.getDate() + "/" + today.getFullYear();
    // doc.text("PD/DD/OUT/" + props.state.SaleOrderNo + "/" + outDate, 130, 50);
    return (
      <div className="d-none d-print-block">
        <div className="main-div">
          <div className="main-div-receipt">
            <div className="second-div">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="https://dwe49upqkapnx.cloudfront.net/HIGH+RES+PNG-01-01.png"
                  className="left-img"
                />
                <div className="righ-div">
                  <h1>Transfer NOC</h1>
                  <h3 style={{ marginTop: "1%" }}>
                    Date:
                    {dateFunction(
                      this.props?.transferPrintData?.dto?.Date ||
                        this.props?.transferPrintData?.createdAt
                    )}
                  </h3>
                  <div
                    style={{
                      borderRadius: "6px",
                      marginTop: "-5px",
                      borderBottomColor: "#6A88A1",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "3px",
                    }}
                  />
                  <h3 style={{ marginTop: "5%" }}>
                    PD/DD/OUT/
                    {this.props?.transferFromData?.SaleOrderNo} / {outDate}
                  </h3>
                  <div
                    style={{
                      borderRadius: "6px",
                      marginTop: "-5px",
                      borderBottomColor: "#6A88A1",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "3px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
              <div
                style={{
                  marginTop: "2%",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                <Row className="mt-0">
                  <h3 style={{ color: "black" }}>Transfer From</h3>
                  <div className="divTable">
                    <div className="divTableHeading">
                      <div className="divTableRow">
                        <div className="divTableHead">Mr./Mrs./Ms</div>
                        <div className="divTableHead">CNIC</div>
                        <div className="divTableHead">S/o-D/o-W/o</div>
                      </div>
                    </div>
                    <div className="divTableBody">
                      <div className="divTableRow">
                        <div className="divTableCell">
                          {this.props?.transferFromData?.user_name}
                        </div>
                        <div className="divTableCell">
                          {this.props?.transferFromData?.CNIC}
                        </div>
                        <div className="divTableCell">
                          {" "}
                          {this.props?.transferFromData?.Father_Spouse_Name}
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>

              <div style={{ marginTop: "2%" }}>
                <Row className="mt-0">
                  <Col lg="12" md="12" sm="12" xs="12" xl="12">
                    <h3 style={{ color: "black" }}>Transfer To</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div className="divTableHead">Mr./Mrs./Ms</div>
                          <div className="divTableHead">CNIC</div>
                          <div className="divTableHead">Email</div>
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {this.props?.transferToData.TransferName}
                          </div>
                          <div className="divTableCell">
                            {this.props?.transferToData?.TransferCnic}
                          </div>
                          <div className="divTableCell">
                            {" "}
                            {this.props?.transferToData?.TransferEmail}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: "3%" }}>
                <Row className="mt-0">
                  <Col lg="12" md="12" sm="12" xs="12" xl="12">
                    <h3 style={{ color: "black" }}>Plot Information</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div className="divTableHead">PLOT / UNIT NO</div>
                          <div className="divTableHead">Sector</div>
                          <div className="divTableHead">Plot Size</div>
                          <div className="divTableHead">Plot Category</div>
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {" "}
                            {this.props?.transferFromData?.Plot_no}
                          </div>
                          <div className="divTableCell">
                            {this.props?.transferFromData?.Sector_Name}
                          </div>
                          <div className="divTableCell">
                            {this.props?.transferFromData?.CategoryName} &nbsp;
                            (sq.yds)
                          </div>
                          <div className="divTableCell">
                            {" "}
                            {this.props?.transferFromData?.PlotType_Name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: "2%" }}>
                <Row className="mt-0">
                  <Col lg="12" md="12" sm="12" xs="12" xl="12">
                    <h3 style={{ color: "black" }}>Payment Details</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left", width: "50%" }}
                            className="divTableHead"
                          >
                            Total Amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {this.props?.transferPaymentDetails?.totalAmount}
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Total paid Amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {this.props?.transferPaymentDetails
                              ?.totalPaidAmount !== null
                              ? this.props?.transferPaymentDetails
                                  ?.totalPaidAmount
                              : "0"}
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Total unpaid Amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {this.props?.transferPaymentDetails
                              ?.totalUnpaidAmount !== null
                              ? this.props?.transferPaymentDetails
                                  ?.totalUnpaidAmount
                              : "0"}
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Total No. of Installment
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.noOfInstallment
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            No. of Paid Installment
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.noOfPaidInstallment
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            No. of UnPaid Installment
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.noOfUnpaidInstallment
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Total possession Installment
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.totalPossessionAmount
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Extra charges amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.totalExtaChargesAmount
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Total downpayment Amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.totalDownPaymentAmount
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Total paid downpayment Amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.totalPaidDownPaymentAmount
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Total Ballon Installment Amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.totalBalloonInstallmentAmount
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Paid Ballon Installment Amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.totalPaidBalloonInstallmentAmount
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            Unpaid Ballon Installment Amount
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.totalUnpaidBalloonInstallmentAmount
                            }
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            No. of ballon Installment
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.noOfBalloonInstallment
                            }
                          </div>
                        </div>
                        {/* <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            No. of Paid ballon Installment
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.noOfPaidBalloonInstallment
                            }
                          </div>
                        </div> */}
                        {/* <div className="divTableRow">
                          <div
                            style={{ textAlign: "left" }}
                            className="divTableHead"
                          >
                            No. of Unpaid ballon Installment
                          </div>
                          <div
                            style={{ fontWeight: "500" }}
                            className="divTableHead"
                          >
                            {
                              this.props?.transferPaymentDetails
                                ?.noOfUnpaidBalloonInstallment
                            }
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: "4%" }}>
                {/* <h3>ACKNOWLEDGMENT</h3> */}
                <p>
                  <span style={{ color: "black", fontWeight: "400" }}>
                    Please note:
                  </span>{" "}
                  * Transfer charges will be applied as per demand.
                </p>
              </div>
              <div
                style={{
                  marginTop: "4%",
                  marginLeft: "2%",
                  marginBottom: "2%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <h4>Signature:____________________</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransferRequest;
