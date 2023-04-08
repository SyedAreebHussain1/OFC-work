import React from "react";
import { Row, Table, Col } from "reactstrap";
import "./TransferReceipt.css";
import moment from "moment/moment";

const dateFunction = (date) => {
  let d = date?.split("T")[0];

  return moment(d).format("DD-MM-YYYY");
};
class TransferReceipt extends React.Component {
  render() {
    console.log("THIS PROPS", this.props);
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return (
      <div
        // style={{ padding: "52px" }}
        className="d-none d-print-block"
      >
        <div className="main-div">
          <div className="main-div-receipt">
            <div className="second-div">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="https://dwe49upqkapnx.cloudfront.net/HIGH+RES+PNG-01-01.png"
                  className="left-img"
                />
                <div className="righ-div">
                  <h2>Transfer Payment Receipt</h2>
                  <h4 style={{ marginTop: "1%" }}>
                    Date of issuance: &nbsp; {currentDate}
                    {/* {dateFunction(this.props?.date?.Dated)} */}
                  </h4>

                  <div
                    style={{
                      borderRadius: "6px",
                      marginTop: "-5px",
                      borderBottomColor: "#6A88A1",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "3px",
                    }}
                  />
                  <h4 style={{ marginTop: "5%" }}>
                    Sale Order No:{this.props?.transferFromData?.SaleOrderNo}
                  </h4>
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
            <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
              <div style={{ marginTop: "2%" }}>
                <Row className="mt-0">
                  <Col lg="12" md="12" sm="12" xs="12" xl="12">
                    <h3 style={{ color: "black" }}> User Information</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div className="divTableHead">
                            Recieved from Mr./Mrs./Ms
                          </div>
                          <div className="divTableHead">Email</div>

                          <div className="divTableHead">CNIC</div>
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {this.props?.transferToData?.TransferName}
                          </div>
                          <div className="divTableCell">
                            {this.props?.transferToData?.TransferEmail}
                          </div>
                          <div className="divTableCell">
                            {this.props?.transferToData?.CNIC}
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
                    <h3 style={{ color: "black" }}>Payment Information</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div className="divTableHead">Transfer Fee</div>
                          <div className="divTableHead">Amount Recieved</div>
                          <div className="divTableHead">Mode of Payment</div>
                          {/* <div className="divTableHead">PLOT / UNIT NO</div> */}
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            Rs. {this.props?.transferToData?.Transferfee}
                          </div>
                          <div className="divTableCell">
                            {this.props?.transferToData?.Transferfee?.trim()
                              .length > 0
                              ? this.props?.transferToData?.Transferfee
                              : "-"}
                          </div>
                          <div className="divTableCell">
                            {" "}
                            {this.props?.transferToData?.paymentType}
                          </div>
                          {/* <div className="divTableCell">
                            {" "}
                            {this.props?.date?.Plot_no}
                          </div> */}
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
              {this.props?.transferToData?.paymentType === "Cheque" && (
                <div style={{ marginTop: "3%" }}>
                  <Row className="mt-0">
                    <Col lg="12" md="12" sm="12" xs="12" xl="12">
                      <h3 style={{ color: "black" }}>Cheque Information</h3>
                      <div className="divTable">
                        <div className="divTableHeading">
                          <div className="divTableRow">
                            <div className="divTableHead">Cheque date</div>
                            <div className="divTableHead">Cheque No.</div>
                          </div>
                        </div>
                        <div className="divTableBody">
                          <div className="divTableRow">
                            <div className="divTableCell">
                              {this.props?.transferToData?.Chequedate}
                            </div>
                            <div className="divTableCell">
                              {this.props?.transferToData?.chequeno}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
              <div style={{ marginTop: "2%" }}>
                <h3 style={{ color: "black" }}>Remarks</h3>
                {/* <p>{this.props?.date?.Remarks}</p> */}
                <p style={{ padding: "5px", border: "2px solid black" }}>
                  {this.props?.transferToData?.Comment}
                </p>
              </div>

              {/* <div
                style={{
                  marginTop: "3%",
                  marginLeft: "2%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <h4>Signature:____________________</h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransferReceipt;
