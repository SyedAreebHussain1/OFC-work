import React from "react";
import "./TransferApplication.css";

class TransferApplication extends React.Component {
  render() {
    console.log("TRANSER APPLICATION", this.props);
    let paymentBody = {};
    let userCNIC = [];
    let nomineeCNIC = [];

    if (this.props?.personalInfo?.personal?.Cnic !== undefined) {
      for (
        var i = 0;
        i < this.props?.personalInfo?.personal?.Cnic.length;
        i++
      ) {
        userCNIC.push(this.props?.personalInfo?.personal?.Cnic.charAt(i));
      }
    }

    if (this.props?.personalInfo?.Nominee?.Cnic !== undefined) {
      for (var j = 0; j < this.props?.personalInfo?.Nominee?.Cnic.length; j++) {
        nomineeCNIC.push(this.props?.personalInfo?.Nominee?.Cnic.charAt(j));
      }
    }

    return (
      <div
        style={{
          marginTop: "0%",
          width: "1200px",
          height: "100%",
          margin: "0px",
          padding: " 0px 20px",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "24px",
          fontFamily: "Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif",
          color: "rgb(33, 33, 33)",
        }}
        // className="body12"
        // className="body12"
        // style={{ marginTop: "0%" }}
      >
        <title>AP</title>
        <div>
          <div
            // class="mainHeading"
            style={{ textAlign: "center" }}
          >
            <div>
              <img
                src="https://dwe49upqkapnx.cloudfront.net/HIGH+RES+PNG-01-01.png"
                // class="logo"
                style={{
                  top: " 0px",
                  bottom: "0px",
                  left: "-10px",
                  width: "350px",
                }}
              />
            </div>
          </div>

          <div class="regForm-header">
            {/* <div style={{ marginTop: "60px" ,color:"lightgray",fontSize:"12px "}}>
              <span class="dflex">
                <div class="flex3">Issuance Date:</div>
                <div class="flex4">
                  <input
                  readOnly
                    style={{
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      // borderBottom: "1px soild black",
                      borderBottom: "none",
                      outline: "none",
                      background: "transparent",
                      width: "100%",
                      color:"lightgray",
                      fontSize:"12px "
                    }}
                    // class="inputBorder"
                    type="text"
                    value={new Date().toLocaleString()}
                  />
                </div>
              </span>
            </div> */}
            <div class=" text_center app_req">
              <h2 class="d_Blk">Booking Form</h2>
            </div>
            <div class="flex2">
              <div style={{ color: "black" }}>
                Ref. No. {this.props.personalInfo?.PlotInfo?.SaleOrderNo}
              </div>
              <div class="photograph img_text">
                {/* <div>
                <small>
                  Please provide 2 passport
                  <br />
                  sized photographs &<br />1 CNIC I passport copy
                </small>
              </div> */}
                <img
                  //   src="abcd"
                  src={this.props.personalInfo?.Profile?.profileImg}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="sub_header">
            <small>
              This application request should be carefully and correctly filled.
              <br />
              Please use block letters and write NIA (Not Applicable) where ever
              relevant.
            </small>
          </div>

          <h4 className="headind4">PART 1 - Personal Information</h4>
          <div class="regForm-body mt20">
            <div class="section_one">
              <div>
                <div class="dflex mb10">
                  <small class="flex1">
                    <span class="dflex">
                      <div> First Name:</div>
                      <div>
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.personalInfo?.personal?.Name}
                        />
                      </div>
                    </span>
                  </small>
                  <small class="flex1">
                    <span class="dflex">
                      <div> Middle Name:</div>
                      <div>
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            textAlign: "center",
                          }}
                          // class="inputBorder"
                          // style={{ textAlign: "center" }}
                          type="text"
                          value="-"
                        />
                      </div>
                    </span>
                  </small>
                  <small class="flex1">
                    <span class="dflex">
                      <div> Last Name:</div>
                      <div>
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            textAlign: "center",
                          }}
                          // class="inputBorder"
                          // style={{ textAlign: "center" }}
                          type="text"
                          value="-"
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div class="flex_margin">
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Father's/Spouse's Name:</div>
                      <div class="flex4">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          //   value="-"
                          value={this.props.personalInfo?.personal?.spouse}
                          //   value={this.props?.father}
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div class="flex_margin">
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Date of Birth:</div>
                      <div class="flex3">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          //   value="-"

                          value={this.props.personalInfo?.personal?.Dateofbirth}
                        />
                      </div>
                    </span>
                  </small>
                  <small class="flex1">
                    <span>
                      <div>
                        CNIC No.
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[0] : ""}
                        </span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[1] : ""}
                        </span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[2] : ""}
                        </span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[3] : ""}
                        </span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[4] : ""}
                        </span>
                        <span class="cnic_col bgcolor-gray">-</span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[5] : ""}
                        </span>
                        <span class="cnic_col">
                          {" "}
                          {userCNIC.length > 0 ? userCNIC[6] : ""}
                        </span>
                        <span class="cnic_col">
                          {" "}
                          {userCNIC.length > 0 ? userCNIC[7] : ""}
                        </span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[8] : ""}
                        </span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[9] : ""}
                        </span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[10] : ""}
                        </span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[11] : ""}
                        </span>
                        <span class="cnic_col bgcolor-gray">-</span>
                        <span class="cnic_col">
                          {userCNIC.length > 0 ? userCNIC[12] : ""}
                        </span>
                      </div>
                    </span>
                  </small>
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Passport No. :</div>
                      <div class="flex3">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.personalInfo?.personal?.passport}
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div class="flex_margin">
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Address (Residence):</div>
                      <div class="flex5">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={
                            this.props.personalInfo?.personal?.AddressResidence
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div class="flex_margin">
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Profession:</div>
                      <div class="flex4">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.personalInfo?.personal?.Profession}
                        />
                      </div>
                    </span>
                  </small>
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Organization:</div>
                      <div class="flex4">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={
                            this.props.personalInfo?.personal?.Organization
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                {/* <div class="flex_margin">
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Address (Office):</div>
                      <div class="flex5">
                        <input
                        readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.addressO}
                        />
                      </div>
                    </span>
                  </small>
                </div> */}
                <div class="flex_margin">
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Tel. (Office):</div>
                      <div class="flex4">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.personalInfo?.personal?.Teloffice}
                        />
                      </div>
                    </span>
                  </small>
                  {/* <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Tel. (Residence):</div>
                      <div class="flex3">
                        <input
                        readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.tellR}
                        />
                      </div>
                    </span>
                  </small> */}
                </div>
                <div class="flex_margin">
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Mobile:</div>
                      <div class="flex7">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.personalInfo?.personal?.Mobile}
                        />
                      </div>
                    </span>
                  </small>
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Email:</div>
                      <div class="flex8">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.personalInfo?.personal?.email}
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div class="flex_margin">
                  <small class="flex1">
                    <span class="dflex">
                      <div class="flex1">Nationality:</div>
                      <div class="flex8">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                          }}
                          // class="inputBorder"
                          type="text"
                          value={this.props.personalInfo?.personal?.Nationality}
                        />
                      </div>
                    </span>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <h4 className="headind4">PART 2 - Nominee Information </h4>
          <div class="dflex">
            <div class="flex5">
              <div class="regForm-body mt20">
                <div class="section_one">
                  <div class="flex_margin">
                    <small class="flex1">
                      <span class="dflex">
                        <div>Name:</div>
                        <div>
                          <input
                            readOnly
                            style={{
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              borderBottom: "1px soild black",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                            }}
                            // class="inputBorder"
                            type="text"
                            value={
                              this.props.personalInfo?.Nominee?.NomineeName
                            }
                          />
                        </div>
                      </span>
                    </small>
                    <small class="flex2">
                      <span class="dflex">
                        <div class="flex2"> Relation with Applicant:</div>
                        <div class="flex3">
                          <input
                            readOnly
                            style={{
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              borderBottom: "1px soild black",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                            }}
                            // class="inputBorder"
                            type="text"
                            value={
                              this.props.personalInfo?.Nominee?.NomineeRelation
                            }
                          />
                        </div>
                      </span>
                    </small>
                  </div>
                  <div class="flex_margin">
                    <small class="flex1">
                      <span class="dflex">
                        <div class="flex5">
                          Son/wife/daughter of (incase not related by blood to
                          the applicant):
                        </div>
                        <div class="flex5">
                          <input
                            readOnly
                            style={{
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              borderBottom: "1px soild black",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                              textAlign: "center",
                            }}
                            // class="inputBorder"
                            // style={{ textAlign: "center" }}
                            type="text"
                            value="-"
                          />
                        </div>
                      </span>
                    </small>
                  </div>
                  <div class="flex_margin">
                    <small class="flex1">
                      <span>
                        <div>
                          CNIC No.
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[0] : ""}
                          </span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[1] : ""}
                          </span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[2] : ""}
                          </span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[3] : ""}
                          </span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[4] : ""}
                          </span>
                          <span class="cnic_col bgcolor-gray">-</span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[5] : ""}
                          </span>
                          <span class="cnic_col">
                            {" "}
                            {nomineeCNIC.length > 0 ? nomineeCNIC[6] : ""}
                          </span>
                          <span class="cnic_col">
                            {" "}
                            {nomineeCNIC.length > 0 ? nomineeCNIC[7] : ""}
                          </span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[8] : ""}
                          </span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[9] : ""}
                          </span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[10] : ""}
                          </span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[11] : ""}
                          </span>
                          <span class="cnic_col bgcolor-gray">-</span>
                          <span class="cnic_col">
                            {nomineeCNIC.length > 0 ? nomineeCNIC[12] : ""}
                          </span>
                          {/* <span class="cnic_last_col" /> */}
                        </div>
                      </span>
                    </small>
                    <small class="flex1">
                      <span class="dflex">
                        <div class="flex1">Passport No. :</div>
                        <div class="flex2">
                          <input
                            readOnly
                            style={{
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              borderBottom: "1px soild black",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                            }}
                            // class="inputBorder"
                            type="text"
                            value={this.props.personalInfo?.Nominee?.passport}
                          />
                        </div>
                      </span>
                    </small>
                  </div>
                  <div class="dflex">
                    <small class="flex1">
                      <span class="dflex">
                        <div class="flex1">Tel:</div>
                        <div class="flex7">
                          <input
                            readOnly
                            style={{
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              borderBottom: "1px soild black",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                            }}
                            // class="inputBorder"
                            type="text"
                            value={
                              this.props.personalInfo?.Nominee?.TelResidence
                            }
                          />
                        </div>
                      </span>
                    </small>
                    <small class="flex1">
                      <span class="dflex">
                        <div class="flex1">Mobile:</div>
                        <div class="flex4">
                          <input
                            readOnly
                            style={{
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              borderBottom: "1px soild black",
                              outline: "none",
                              background: "transparent",
                              width: "100%",
                            }}
                            // class="inputBorder"
                            type="text"
                            value={this.props.personalInfo?.Nominee?.Teloffice}
                          />
                        </div>
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="photograph flex1 ml3"
              style={{ height: "170px", marginTop: "-20px" }}
            >
              {/* <div class="nominee_information_img_text">
                <small>
                  Please provide 2 passport
                  <br />
                  sized photographs &<br />1 CNIC I passport copy
                </small>
              </div> */}
              <img
                src={this.props.personalInfo?.Profile?.nomineeProfileImg}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
          </div>

          <h4 className="headind4">PART 3 - Preference </h4>
          <div class="regForm-body mt20">
            <div class="section_one">
              <div class="flex_margin">
                {this.props.personalInfo?.PlotInfo?.PlotType_Name ===
                "residential" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Plot (Residential):</div>
                      <span class="cnic_col ml5">
                        {this.props.personalInfo?.PlotInfo?.PlotType_Name ===
                        "residential" ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.personalInfo?.PlotInfo?.PlotType_Name ===
                "commercial" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Commercial Plot:</div>
                      <span class="cnic_col">
                        {this.props.personalInfo?.PlotInfo?.PlotType_Name ===
                        "commercial" ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {/* <small class="flex1">
                  <span class="dflex">
                    <div> Any other Category:</div>
                    <span class="cnic_col"></span>
                  </span>
                </small>*/}
              </div>
              <div class="flex_margin">
                {this.props.personalInfo?.PlotInfo?.PlotType_Name ===
                  "residential" &&
                this.props.personalInfo?.PlotInfo?.CategoryName === "125" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> 125 Sq. Yards:</div>
                      <span class="cnic_col ml30">
                        {this.props.personalInfo?.PlotInfo?.PlotType_Name ===
                          "residential" &&
                        this.props.personalInfo?.PlotInfo?.CategoryName ===
                          "125" ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                "commercial" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Size:</div>
                      <div class="flex1">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            textAlign: "center",
                          }}
                          // class="inputBorder"
                          type="text"
                          // style={{ textAlign: "center" }}
                          value={
                            this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                            "commercial"
                              ? this.props.personalInfo?.PlotInfo?.CategoryName
                              : "-"
                          }
                        />
                      </div>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {/* <small class="flex1">
                  <span class="dflex">
                    <div> Size:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small> */}
              </div>
              <div class="flex_margin">
                {this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                  "residential" &&
                this.props.personalInfo?.PlotInfo?.CategoryName == "250" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> 250 Sq. Yards:</div>
                      <span class="cnic_col ml30">
                        {this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                          "residential" &&
                        this.props.personalInfo?.PlotInfo?.CategoryName ==
                          "250" ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                "commercial" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Type:</div>
                      <div class="flex1">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            textAlign: "center",
                          }}
                          // class="inputBorder"
                          type="text"
                          // style={{ textAlign: "center" }}
                          value={
                            this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                            "commercial"
                              ? this.props.personalInfo?.PlotInfo?.PlotType_Name
                              : "-"
                          }
                        />
                      </div>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {/* <small class="flex1">
                  <span class="dflex">
                    <div> Type:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small> */}
              </div>
              <div class="flex_margin">
                {this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                  "residential" &&
                this.props.personalInfo?.PlotInfo?.CategoryName == "500" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> 500 Sq. Yards:</div>
                      <span class="cnic_col ml30">
                        {this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                          "residential" &&
                        this.props.personalInfo?.PlotInfo?.CategoryName ==
                          "500" ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {/* <small class="flex1">
                  <span class="dflex">
                    <div> Other Details:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small> */}
                {/* <small class="flex1">
                  <span class="dflex">
                    <div> Other Details:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{  }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small> */}
              </div>
              <div class="dflex">
                {this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                  "residential" &&
                this.props.personalInfo?.PlotInfo?.CategoryName == "1000" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> 1,000 Sq. Yards:</div>
                      <span class="cnic_col ml17">
                        {this.props.personalInfo?.PlotInfo?.PlotType_Name ==
                          "residential" &&
                        this.props.personalInfo?.PlotInfo?.CategoryName ==
                          "1000" ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.personalInfo?.PlotInfo?.Plot_no !== "" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Plot No.:</div>
                      <div class="flex1">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            textAlign: "center",
                          }}
                          // class="inputBorder"
                          // style={{ textAlign: "center" }}
                          type="text"
                          value={this.props.personalInfo?.PlotInfo?.Plot_no}
                        />
                      </div>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.personalInfo?.PlotInfo?.Sector_Name !== "" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Block:</div>
                      <div class="flex1">
                        <input
                          readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            textAlign: "center",
                          }}
                          // class="inputBorder"
                          // style={{ textAlign: "center" }}
                          type="text"
                          value={this.props.personalInfo?.PlotInfo?.Sector_Name}
                        />
                      </div>
                    </span>
                  </small>
                ) : (
                  ""
                )}
              </div>
            </div>
            location
          </div>
          {/* POSITIONING START */}
          <h4 className="headind4">Positioning</h4>
          {/* <div class="regForm-body mt20">
            <div class="section_one">
              <div class="flex_margin">
                {this.props.Position?.some((item) => item.pos_id == 3) ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Standard:</div>
                      <span class="cnic_col">
                        {this.props.Position?.some(
                          (item) => item.pos_id == 3
                        ) ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                
                {this.props.Position?.some((item) => item.pos_id == 4) ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Park/green area Facing at 10% premium:</div>
                      <span class="cnic_col">
                        {this.props.Position?.some(
                          (item) => item.pos_id == 4
                        ) ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div class="flex_margin">
                {this.props.Position?.some((item) => item.pos_id == 6) ? (
                  <small class="flex3">
                    <span class="dflex">
                      <div> Road Facing at 10% premium:</div>
                      <span class="cnic_col">
                        {this.props.Position?.some(
                          (item) => item.pos_id == 6
                        ) ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.Position?.some((item) => item.pos_id == 1) ? (
                  <small class="flex2">
                    <span class="dflex">
                      <div> Corner at 10% premium:</div>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.Position?.some((item) => item.pos_id == 1) ? (
                  <small class="flex1">
                    <span class="dflex">
                      <span class="cnic_col" style={{ marginRight: "5px" }}>
                        {this.props.Position?.some(
                          (item) => item.pos_id == 1
                        ) ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                      <div> 10%</div>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                
              </div>
              <div class="flex_margin">
                {this.props.Position?.some((item) => item.pos_id == 5) ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> West Open:</div>
                      <span class="cnic_col">
                        {this.props.Position?.some(
                          (item) => item.pos_id == 5
                        ) ? (
                          <img
                            alt="..."
                            src={require("./check-solid.svg").default}
                            style={{ width: "100%", height: "100%" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
               
              </div>
            </div>
          </div> */}
          {/* POSITIONING END */}
          {/* <h4 className="headind4">PART 3 - Preference </h4> */}
          {/* <div class="regForm-body mt20">
            <div class="section_one">
              <div class="flex_margin">
                {this.props.personalInfo?.PlotInfo?.PlotType_Name == "residential" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Plot (Residential):</div>
                      <span class="cnic_col ml5">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.personalInfo?.PlotInfo?.PlotType_Name == "commercial" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Commercial Plot:</div>
                      <span class="cnic_col">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                <small class="flex1">
                  <span class="dflex">
                    <div> Any other Category:</div>
                    <span class="cnic_col"></span>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                {this.props.personalInfo?.PlotInfo?.PlotType_Name == "residential" &&
                 this.props.personalInfo?.PlotInfo?.CategoryName == "125" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> 125 Sq. Yards:</div>
                      <span class="cnic_col ml30">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                <small class="flex1">
                  <span class="dflex">
                    <div> Size:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        type="text"
                        // style={{ textAlign: "center" }}
                        value={
                          this.props.personalInfo?.PlotInfo?.PlotType_Name == "commercial"
                            ?  this.props.personalInfo?.PlotInfo?.CategoryName
                            : "-"
                        }
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div> Size:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                {this.props.personalInfo?.PlotInfo?.PlotType_Name == "residential" &&
                this.props.cname == "250" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> 250 Sq. Yards:</div>
                      <span class="cnic_col ml30">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {this.props.ptype == "commercial" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Type:</div>
                      <div class="flex1">
                        <input
                        readOnly
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            borderBottom: "1px soild black",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            textAlign: "center",
                          }}
                          // class="inputBorder"
                          type="text"
                          // style={{ textAlign: "center" }}
                          value={
                            this.props.ptype == "commercial"
                              ? this.props.ptype
                              : "-"
                          }
                        />
                      </div>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                {/* <small class="flex1">
                  <span class="dflex">
                    <div> Type:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small> 
              </div>
              <div class="flex_margin">
                {this.props.ptype == "residential" &&
                this.props.cname == "500" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> 500 Sq. Yards:</div>
                      <span class="cnic_col ml30">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                <small class="flex1">
                  <span class="dflex">
                    <div> Other Details:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div> Other Details:</div>
                    <div class="flex1">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{  }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="dflex">
                {this.props.ptype == "residential" &&
                this.props.cname == "1000" ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> 1,000 Sq. Yards:</div>
                      <span class="cnic_col ml17">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div> */}
          {/* <h4 className="headind4">Positioning</h4> */}
          {/* <div class="regForm-body mt20">
            <div class="section_one">
              <div class="flex_margin">
                {this.props.Position?.some((item) => item.pos_id == 3) ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Standard:</div>
                      <span class="cnic_col">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                <small class="flex1">
                  <span class="dflex">
                    <div> Special Location (at 10% premium):</div>
                    <span class="cnic_col"></span>
                  </span>
                </small>
                {this.props.Position?.some((item) => item.pos_id == 4) ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> Park/green area Facing at 10% premium:</div>
                      <span class="cnic_col">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div class="flex_margin">
                {this.props.Position?.some((item) => item.pos_id == 6) ? (
                  <small class="flex3">
                    <span class="dflex">
                      <div> Road Facing at 10% premium:</div>
                      <span class="cnic_col">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                <small class="flex2">
                  <span class="dflex">
                    <div> Corner at 10% premium:</div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <span class="cnic_col" style={{ marginRight: "5px" }}>
                      {this.props.Position?.some((item) => item.pos_id == 1) ? (
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      ) : (
                        ""
                      )}
                    </span>
                    <div> 10%</div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <span
                      class="cnic_col"
                      style={{ marginRight: "5px" }}
                    ></span>
                    <div> 20%</div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <span
                      class="cnic_col"
                      style={{ marginRight: "5px" }}
                    ></span>
                    <div> 30%</div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <span
                      class="cnic_col"
                      style={{ marginRight: "5px" }}
                    ></span>
                    <div> 40%</div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                {this.props.Position?.some((item) => item.pos_id == 5) ? (
                  <small class="flex1">
                    <span class="dflex">
                      <div> West Open:</div>
                      <span class="cnic_col">
                        <img
                          alt="..."
                          src={require("./check-solid.svg").default}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                    </span>
                  </small>
                ) : (
                  ""
                )}
                <small class="flex2">
                  <span class="dflex">
                    <span class="flex1"> Multiple Locations Facing:</span>
                    <div class="flex2">
                      <input
                      readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value=""
                      />
                    </div>
                  </span>
                </small>
              </div>
            </div>
          </div> */}

          <h4 className="headind4">
            PART 4 - Payment Details (For Office Use Only)
            <small class="f-s-small">
              (All Payments are to be made in favor of designated company bank
              account)
            </small>
          </h4>
          <div class="regForm-body mt20">
            <div class="section_one">
              <div class="flex_margin">
                <small class="flex3">
                  <span class="dflex">
                    <div class="flex1">
                      Crossed Cheque Demand Draft/Pay Order No.:
                    </div>
                    <div class="flex1">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div> Dated:</div>
                    <div>
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.date}
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1"> Currency:</div>
                    <div class="flex3">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.currency}
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1"> Amount:</div>
                    <div class="flex3">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.totalAmount}
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1"> Drawn on:</div>
                    <div class="flex3">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.drawnOn}
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                <small class="flex2">
                  <span class="dflex">
                    <div class="flex1">Bank:</div>
                    <div class="flex10">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.through}
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1"> Booking Date:</div>
                    <div class="flex2">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.date}
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                <small class="flex1">
                  <span class="dflex">
                    <div> Booking Price:</div>
                    <div>
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.totalAmount}
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div> Total Amount:</div>
                    <div>
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.plotPrice}
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1"> Total Installments:</div>
                    <div class="flex1">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={this.props.saleOrderById?.totalInstallments}
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                <small class="flex3">
                  <span class="dflex">
                    <div class="flex1">First Installment due on:</div>
                    <div class="flex2">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
                <small class="flex2">
                  <span class="dflex">
                    <div class="flex1"> Last Installment due on:</div>
                    <div class="flex1">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1">Form Received by:</div>
                    <div class="flex1">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1"> on dt.:</div>
                    <div class="flex4">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1"> Signature & Stamp:</div>
                    <div class="flex1">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1">Remarks:</div>
                    <div class="flex10">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={paymentBody.remarks}
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div class="flex_margin">
                <small class="flex1">
                  <span class="dflex">
                    <div class="flex1">Referred by:</div>
                    <div class="flex2">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                          textAlign: "center",
                        }}
                        // class="inputBorder"
                        // style={{ textAlign: "center" }}
                        type="text"
                        value="-"
                      />
                    </div>
                  </span>
                </small>
                <small class="flex2">
                  <span class="dflex">
                    <div class="flex1">Number:</div>
                    <div class="flex8">
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "100%",
                        }}
                        // class="inputBorder"
                        type="text"
                        value="-"
                        // value={this.props?.mobile}
                      />
                    </div>
                  </span>
                </small>
              </div>
            </div>
            <div style={{ fontSize: "15px" }}>
              <div>
                {`Print by ${localStorage.getItem(
                  "username"
                )}/ID: ${localStorage.getItem("Userid")}`}
              </div>
              <div>{new Date().toLocaleString()}</div>
            </div>
            <h4 className="declarationsHeading">PART 5 - Declarations </h4>
            <div class="regForm-body mt20">
              <div class="section_one">
                <div class="declarations_text">
                  <small>
                    <span>
                      {" "}
                      I hereby declare that the information provided by me in
                      this form is accurate to the best of my knowledge and that
                      I have read and understood the terms and conditions of
                      allotment and the schedules of price and payment and
                      accept the same unconditionally. Furthermore, I declare
                      that I shall abide by the rules and regulations of the
                      company, which are intimated to me by the management from
                      time to time. Date:
                    </span>
                    <span>
                      <input
                        readOnly
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "1px soild black",
                          outline: "none",
                          background: "transparent",
                          width: "10%",
                        }}
                        // class="inputBorder"
                        // style={{ width: "10%" }}
                        type="text"
                        value=""
                      />
                    </span>
                  </small>
                </div>
                <div
                  class="flex_margin-10 f-s-small text_al_center"
                  style={{ marginBottom: "10px" }}
                >
                  <div
                    class="flex1 ml3 "
                    style={{
                      height: "150px",
                      // width: "120px",
                      border: "1px solid black",
                    }}
                  >
                    <div class="declarations_boxes">
                      <small>Applicant Signature</small>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "130px", height: "110px" }}>
                        <img
                          src={this.props.personalInfo?.filepath?.SignaturePath}
                          style={{ width: "100%", height: "100%" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex1 ml3"
                    style={{
                      height: "150px",
                      // width: "90px",
                      border: "1px solid black",
                    }}
                  >
                    <div class="declarations_boxes">
                      <small>Applicant Signature</small>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "130px", height: "110px" }}>
                        <img
                          src={this.props.personalInfo?.filepath?.SignaturePath}
                          style={{ width: "100%", height: "100%" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex1 ml3"
                    style={{
                      height: "150px",
                      // width: "90px",
                      border: "1px solid black",
                    }}
                  >
                    <div class="declarations_boxes">
                      <small>Applicant Thumb Impression</small>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "130px", height: "110px" }}>
                        <img
                          src={
                            this.props.personalInfo?.filepath?.FingerPrintPath
                          }
                          style={{ width: "100%", height: "100%" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex1 ml3"
                    style={{
                      height: "150px",
                      // width: "90px",
                      border: "1px solid black",
                      padding: "5px",
                      justifyContent: "center",
                    }}
                  >
                    <div class="declarations_boxes">
                      <small>Applicant Thumb Impression</small>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "130px", height: "110px" }}>
                        <img
                          src={
                            this.props.personalInfo?.filepath?.FingerPrintPath
                          }
                          style={{ width: "100%", height: "100%" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="regForm-body">
              <div class="text_al_justify">
                <small class="note">
                  <i>
                    Note. For allotment transfer cases separate forms will be
                    filled and relevant documentation required land necessary
                    process and documentation fulfilled.
                  </i>
                </small>
                <br />
                <span class="terms_conditions">Terms & Conditions </span>
                <br />
                <small class="terms_conditions_points">
                  1. One form can be used to apply for one ploUunit. For more
                  than one booking separate forms are to be used for each
                  plot/unit. Incomplete application wil l not be entertained.
                  <br />
                  2. Incorrect information given in the application will be
                  rendering the allotment liable to cancellation without any
                  indemnity.
                  <br />
                  3. The application once filled will not be allowed to be
                  withdrawn without consent in writing of both the parties.
                  <br />
                  4. The applicant/allottee will neither use the plot/unit for
                  any purposes other than applied for and approved by the
                  company.
                  <br />
                  5. The applicanUallottee cannot carry out any construction on
                  the plot/unit without the approval from concerned authority &
                  Management of Palm Dreams /KGCP.
                  <br />
                  6. All payments are to be made according to the size of the
                  plot/unit, as per payment schedule of payment (Cash
                  transactions are strictly not acceptable by any means, the
                  company will not be held responsible for any cash dealings b/w
                  applicanUallottee, Company Officials or others).
                  <br />
                  7. All the payments will be acceptable only through Crossed
                  Cheque/ Pay Order/Bank Draft/Bank Deposit Slip (subject to
                  realization of payment) in favor of the designated company
                  bank account. Overseas Pakistanis may remit their payments by
                  bank transfer in favor of the designated company bank account.
                  <br />
                  8. Payment receipt issued upon receiving of the payment is
                  *temporary and is only valid for 15 days from the date of
                  payment (after which it wil l become null & void and will not
                  be valid for any claim at any forum), which shall only be
                  confirmed upon receiving thee-receipt, issued from the Head
                  Office Account department & through official designated email
                  address and via ESCIS (Electronic Software Client Information
                  System). In case of not receiving the e-receipt within 20 days
                  then email at picc@kgc.com.pk at Payment & Installment
                  Complaint Cell and incase of not receiving any response from
                  the cell then contact the concerned office. (*ESC IS procedure
                  has been designed to safeguard the client's payments and
                  documents to avoid any kind of fraud and forgery)
                  <br />
                  9. The applicant shall pay all the installments/payments as
                  per the agreed or company's standard payment schedule or
                  within extended period.
                  <br />
                  10. The plot payment schedule is monthly & quarterly in case
                  the applicant/allottee wants a change then refer to the
                  Payment schedule change policy.
                  <br />
                  11. There shall be no increase in the said price of the
                  allotment provided installments are paid by the applicant
                  strictly in accordance with payment schedule agreed at the
                  time of booking.
                  <br />
                  12. In case due to any reason, if the request of the allottee
                  is not acceded then the Crossed Cheque/Bank Draft/Pay Order
                  submitted with this application will be refunded to the
                  applicant within 60 days without any mark-up or interest on
                  the amount with due deduction of service charges.
                  <br />
                  13. For each preferential location, i.e. corner, green
                  area/facing park, west open and boulevard etc. applicants wil
                  l pay 10% premium/ each. In case of multiple preferences in
                  location, the applicant will pay in multiples of 10%, 20%,30%
                  and 40%.
                  <br />
                  14. If the applicant/allottee requests for a refund of the
                  agreed plot price no later than 12 months after the issuance
                  of the allotment letter, the allotment will be cancelled and
                  the agreed plot price will be refunded after a deduction of
                  25% without mark up or interest on that amount subject to
                  rebooking of the plot.
                  <br />
                  15. The management of Palm Dreams/KGCP reserves the right to
                  allot/sell an allotment surrendered by the applicant/allottee
                  (or cancelled from the name of the allottee due to non-payment
                  of dues) to any other applicant and the ex-allottee shall have
                  no right to such a plot. The decision of management will be
                  final and shall not be challenged before any forum.
                  <br />
                  16. An applicant/allottee will not be entitled to any rights
                  of objection in case of any change/amendment in the master or
                  location plans of Palm Dreams. However, if an
                  applicant/allottee wishes to surrender the allotment then a
                  refund will be provided without mark up or interest on that
                  amount, 12 months after completion of the project and after
                  deduction at 20% of the total cost of the allotment from the
                  refundable amount.
                  <br />
                  17. Installment received after the due date from the
                  allottees/applicants will only be accepted with penalty@ 3%
                  per month (*penalty amount will be utilized according to Riba
                  policy of Islamic Banking System). If the applicant/allottee
                  fails to pay three consecutive installments within the
                  prescribed period, the allotment of the plot will be
                  automatically cancelled. In such case the applicanUallottee
                  will be refunded the amount paid towards the cancelled plot
                  after the deduction of 25% without any interest or markup, of
                  the total cost of the allotment will be deducted from the
                  refundable amount 12 months after the completion of the
                  project.
                  <br />
                  18. The price of any allotment is based on the standard size
                  of the plot. In case of increase or decrease in the ploUunit
                  size (over and above the allotted area), proportionate amount
                  per square yard will be added or deducted to the total amount.
                  <br />
                  19. The construction/development will be done according to the
                  plan/specification; however minor changes in
                  designing/specifications and/or layout of the allotment may be
                  made by the company, if necessary and the allottee will have
                  no-objection to it including increase in price per sq. yds. if
                  any.
                  <br />
                  20. Development charges include the charges of internal
                  development for roads, main water supply and sewerage but does
                  not include the ground rent, cost/charges of provision of
                  electricity, gas, telephone, fiber optic, special development,
                  maintenance and transport system etc. Provision of utility and
                  service charges shall be obtained later by the applicant on
                  demand.
                  <br />
                  21. If any allottee after making all payments towards the
                  allotment and obtaining possession of the same, wishes to
                  acquire a registered Sales/Lease Deed executed in their favor,
                  then all expenses and charges, including stamp duty,
                  registration, mutation and service charges will be borne by
                  the allottee.
                  <br />
                  22. Unforeseen increase in development charges could raise the
                  price of the plot/unit, increase in development charges shall
                  be passed onto the al lottee proportionally.
                  <br />
                  23. The applicant will pay documentation charges and all other
                  ancillary and miscellaneous expenses to the company for
                  fulfillment of the formalities of various departments/agencies
                  as and when demanded by the company.
                  <br />
                  24. The rights of the Facility Area will be retained by
                  management of Palm Dreams/KGCP at al l times and unit
                  occupants/applicants will have no share, claim or interest in
                  and over the Facility Area.
                  <br />
                  25. All serial numbers and/or other identification numbers and
                  markings given in the layout plans, booking and/or allocation
                  letters pertaining to allotments and unit number, the company
                  reserves the right to amend/change or renumber the same if
                  found necessary.
                  <br />
                  26. Transfer of plot allotted to an applicant shall be allowed
                  only after receipt of updated paymenU charges will be
                  applicable as per •transter policy.
                  <br />
                  27. The validity of all the documents of plots/unit pertaining
                  to the booking , allotment, payments and transfer will be
                  linked through ESCIS (Electronic Software Client Information
                  System), hence without confirmation from the ESCIS the
                  documents will not be considered valid and the company will
                  not be liable any claim from the applicant/allottee for in
                  valid documents. (•ESCIS procedure has been designed to
                  safeguard the client's payments and documents to avoid any
                  kind of fraud and forgery).
                  <br />
                  28. In case of transfer of plot, first & existing allottee
                  will be bound to clear all committed dues, till that time with
                  the company before the transfer.
                  <br />
                  29. some applicanUallottee will abide by these Terms &
                  Conditions in addition to any other procedural by-laws, rules
                  and regulations, governing allotment policies, transfer,
                  possession and ownership rules and construction regulations of
                  Palm Dreams & concerned authority.
                  <br />
                  30. In case of any dispute between the allottee and the
                  management of the company, the dispute will be referred to the
                  arbitration of a Management of the designated committee, the
                  decision of which shall be final and binding to the parties in
                  dispute.
                  <br />
                  31. After/ Upon 30% of the payment a detailed SPA will be
                  signed between the company and the allottee, having
                  elaborations of terms & condition and rights.
                  <br />
                  32. In case illegal money has been found involved for the
                  purchasing of the plot/unit from the allottee then the said
                  allotment will be cancelled with immediate effect and the
                  responsibility of any/all type of loss shall lie on the
                  allottee. *further elaboration in SPA.
                </small>
              </div>
            </div>
            <h4 class="headind4 mt0 mb0">Verification of Information </h4>
            <div class="text_al_justify">
              <small class="Verification_of_information_text">
                I have read and understood all the terms & conditions and I
                hereby agree to abide by these unconditionally as well as any
                future rules & regulations from the company.
                <br />
                {/* <span> Signature of Applicant</span>
                <span>
                  <input
                  readOnly
                    style={{
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottom: "1px soild black",
                      outline: "none",
                      background: "transparent",
                      width: "10%",
                    }}
                    // class="inputBorder"
                    // style={{ width: "10%" }}
                    type="text"
                    value=""
                  />
                </span> */}
                <span> Date</span>
                <span>
                  <input
                    readOnly
                    style={{
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottom: "1px soild black",
                      outline: "none",
                      background: "transparent",
                      width: "10%",
                    }}
                    // class="inputBorder"
                    // style={{ width: "10%" }}
                    type="text"
                    value={new Date().toLocaleString().split(",")[0]}
                  />
                </span>
                <br />
                Note. The Management of the Palm Dreams/KGCP, reserves the right
                to change or amend this application form, may alter and append
                the construction by-laws, terms and conditions and rules and
                regulations if required at its discretion with or without
                assigning any reason or notice thereof and the allottee shall
                accept the decision in this regard.
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransferApplication;
