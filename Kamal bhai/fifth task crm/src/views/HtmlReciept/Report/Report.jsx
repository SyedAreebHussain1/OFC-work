import React from "react";
import { Row, Table, Col } from "reactstrap";
import "./Report.css";
import moment from "moment/moment";
import imgLogo from "../../../assets/img/reportlogo.png";
const dateFunction = (date) => {
  let d = date?.split("T")[0];

  return moment(d).format("DD-MM-YYYY");
};
class Report extends React.Component {
  render() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return (
      <div
      // style={{ padding: "52px" }}
      // className="d-none d-print-block"
      >
        <div className="main-div">
          <div className="main-div-receipt">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // padding: "20px",
                justifyContent: "space-between",
              }}
            >
              <img
                src={imgLogo}
                style={{ width: "150px", height: "150px" }}
                //  className="left-img"
              />
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
                          <div className="divTableHead">CNIC</div>
                          <div className="divTableHead">S/o-D/o-W/o</div>
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {this.props?.date?.user_name}
                          </div>
                          <div className="divTableCell">
                            {this.props?.date?.CNIC}
                          </div>
                          <div className="divTableCell">
                            {" "}
                            {this.props?.date?.tbl_user_Father_Spouse_Name}
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
                          <div className="divTableHead">Description</div>
                          <div className="divTableHead">Amount Recieved</div>
                          <div className="divTableHead">Mode of Payment</div>
                          {/* <div className="divTableHead">PLOT / UNIT NO</div> */}
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {this.props?.date?.Description}
                          </div>
                          <div className="divTableCell">
                            {this.props?.date?.Amount?.toLocaleString("en-US")}
                          </div>
                          <div className="divTableCell">
                            {" "}
                            {this.props?.date?.PaymentTypeName}
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
                            {this.props?.date?.Plot_no}
                          </div>
                          <div className="divTableCell">
                            {this.props?.date?.Sector_Name}
                          </div>
                          <div className="divTableCell">
                            {this.props?.date?.CategoryName} &nbsp; (sq.yds)
                          </div>
                          <div className="divTableCell">
                            {" "}
                            {this.props?.date?.PlotType_Name}
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
                    <h3 style={{ color: "black" }}>Bank Information</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div className="divTableHead">Drawn through</div>
                          <div className="divTableHead">Pay type</div>
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {this.props?.date?.through}
                          </div>
                          <div className="divTableCell">
                            {this.props?.date?.PaymentthroughName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: "3%" }}>
                <h3 style={{ color: "black" }}>Remarks</h3>
                {/* <p>{this.props?.date?.Remarks}</p> */}
                <p style={{ padding: "5px", border: "2px solid black" }}>
                  {this.props?.date?.Remarks}
                </p>
              </div>
              <div style={{ marginTop: "0%" }}>
                <h3 style={{ color: "black" }}>ACKNOWLEDGMENT</h3>
                <p style={{ padding: "5px", border: "2px solid black" }}>
                  This receipt is subject to realization of payment transfer,
                  This is a computer generated receipt therefore it does not
                  require any signature.
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

export default Report;
