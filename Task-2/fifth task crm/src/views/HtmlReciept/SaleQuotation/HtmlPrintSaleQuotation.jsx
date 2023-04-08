import React, { useRef } from "react";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Table,
  Col,
  Input,
} from "reactstrap";
import "./HtmlPrintSaleQuotation.css";
import moment from "moment/moment";
function DateFormat(date) {
  let d = date.split("T")[0];
  // var date = date.split("T");
  // return d[0];

  // const d = new Date(date[0]);

  return moment(d).format("DD-MM-YYYY");
}
class HtmlPrintSaleQuotation extends React.Component {
  render() {
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
                  <h1>{this.props.paymentMethod} RECEIPT</h1>
                  <h3 style={{ marginTop: "5%" }}>
                    Quotation No: {this.props?.SQ_No}
                  </h3>
                  {/* <h3 style={{ marginTop: "1%" }}>Date: 12-9-2022</h3>
                  <div
                    style={{
                      borderRadius: "6px",
                      marginTop: "-5px",
                      borderBottomColor: "#6A88A1",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "3px",
                    }}
                  /> */}
                  <h3 style={{ marginTop: "5%" }}>Date: {this.props?.date}</h3>
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
                    <h3 style={{ color: "black" }}>User Information</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div className="divTableHead">Client Name</div>
                          <div className="divTableHead">CNIC</div>
                          <div className="divTableHead">Agent Name</div>
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {this.props.user?.[0]?.user_name}
                          </div>
                          <div className="divTableCell">
                            {this.props.user?.[0]?.CNIC}
                          </div>
                          <div className="divTableCell">
                            {" "}
                            {this.props.body?.Agent}
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
                    <h3 style={{ color: "black" }}> Payment Information.</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div className="divTableHead">Plot No.</div>
                          <div className="divTableHead">Amount Recieved</div>
                          <div className="divTableHead">Payment Method</div>
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {this.props.body?.Plotno}
                          </div>
                          <div className="divTableCell">
                            {this.props.body?.TokenMoney.toLocaleString(
                              "en-US"
                            )}
                          </div>
                          <div className="divTableCell">
                            {" "}
                            {this.props.paymentMethod}
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
                    <h3 style={{ color: "black" }}>Validate</h3>
                    <div className="divTable">
                      <div className="divTableHeading">
                        <div className="divTableRow">
                          <div className="divTableHead">Valid From</div>
                          <div className="divTableHead">Valid To</div>
                        </div>
                      </div>
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">
                            {DateFormat(this.props.body?.Validfrom)}
                          </div>
                          <div className="divTableCell">
                            {DateFormat(this.props.body?.Validto)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* <div style={{ marginTop: "0%" }}>
                <label className="form-control-label" for="input-username">
                  Remarks.
                </label>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
              </div> */}
              <div style={{ marginTop: "0%" }}>
                <h3 style={{ color: "black" }}>ACKNOWLEDGMENT</h3>
                <p style={{ padding: "5px", border: "2px solid black" }}>
                  This receipt is subject to realization of payment transfer,
                  This is a computer generated receipt therefore it does not
                  require any signature.
                </p>
              </div>
              <div
                style={{
                  marginTop: "3%",
                  marginLeft: "2%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {/* <h4>Signature:____________________</h4> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HtmlPrintSaleQuotation;
