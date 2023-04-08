import React from "react";
import { useState, useEffect } from "react";
import { Button, Row, Col, Input, Tooltip } from "reactstrap";
import swal from "sweetalert";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import Select from "react-select";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import PaymentTable from "./PaymentTable";
import { useHistory } from "react-router-dom";
import UpdateModal from "../helpers/UpdateModal";
import {
  InsertPaymentSale_Middleware,
  getPaymentPlan,
} from "../middleware/index";
import jsPDF from "jspdf";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PalmDreamLogo from "../images/palm_dreams_logo.png";
import HtmlPrintSaleQuotation from "views/HtmlReciept/SaleQuotation/HtmlPrintSaleQuotation";
import moment from "moment";

const QuatationForm = (props) => {
  const componentRef = useRef();
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [posts, setPosts] = useState([]);
  const [validToMin, setValidToMin] = useState(null);
  const location = useLocation();
  const [body, setBody] = useState({
    // id: "",
    Taskid: "",
    Validfrom: "",
    Validto: "",
    PaymentPlaneId: "",
    TokenMoney: "",
    Plotid: "",
    Plotno: "",
    Agent: "",
    packageId: "",
    AgentId: "",
    planPackageName: "",
  });

  useEffect(() => {
    setPosts([]);

    if (body.PaymentPlaneId !== "") {
      var today = new Date();

      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      var data = {
        PaymentPlaneId: body.PaymentPlaneId,
        plotId: body.Plotid,
        Validfrom: date,
      };
      props.getPaymentPlan(data, onSuccess, onFailure);
    }
  }, [body.PaymentPlaneId]);
  useEffect(() => {
    if (props.Values !== null && props.Values !== undefined) {
      setPosts(props.Values);
    }
  }, [props.Values]);

  let history = useHistory();
  const [error, setError] = useState({
    tokenError: "",
  });
  const onSuccess = () => {};
  const onFailure = () => {};
  let d = new Date().toISOString().split("T")[0];
  // var date = date.split("T");
  // return d[0];

  // const d = new Date(date[0]);

  var date = moment(d).format("DD-MM-YYYY");
  const printDocument = () => {
    let x = paymentMethod;
    // let date = new Date().toISOString().split("T")[0];
    if (props.User !== null && props.User !== undefined) {
      const doc = new jsPDF();
      doc.addImage(PalmDreamLogo, "png", 15, 0, 30, 30);
      doc.text("SALE QUOTATION", 88, 40);
      doc.setFontSize(10);
      //  doc.text("Date: " + date, 168, 18);
      doc.autoTable({
        theme: "grid",
        head: [["Details", ""]],
        body: [
          ["Sold To Party", props.User[0]?.user_name],
          ["CNIC No.", props.User[0]?.CNIC],
          ["Plot No.", body?.Plotno],
          ["Payment Method", x],

          ["Amount", body?.TokenMoney],
          ["Ship To Party", body?.Agent],
          ["Valid From", body?.Validfrom],
          ["Valid To", body?.Validto],
        ],
        margin: { top: 55 },
        styles: { lineColor: 10, cellWidth: 91 },
      });
      doc.setFontSize(10);
      doc.text("Singnature:________________", 145, 180);

      doc.save("receipt.pdf");
    }
  };
  useEffect(() => {
    if (props.dropDown !== null && props.dropDown !== undefined) {
      let arr = [];
      for (let i = 0; i < props.dropDown.length; i++) {
        let obj = {
          value: props.dropDown[i].PaymentPlaneId,
          label: props.dropDown[i].PlaneName,
        };
        arr.push(obj);
      }
      // setOptions(arr);
    }
  }, [props.dropDown]);
  useEffect(() => {
    if (body.Validfrom !== "") {
      var today = new Date(body.Validfrom);
      var day = today.getDate() + 1;
      var mon = new String(today.getMonth() + 1);
      var yr = today.getFullYear();
      var date = `${yr}-${mon}-${day < 10 ? `0${day}` : day}`;
      setValidToMin(date);
    }
  }, [body.Validfrom]);

  const OnChange = (value, name) => {
    setBody({
      ...body,
      [name]: value,
    });
    // new Date(day !== NaN ? date : body.Validfrom)
    // ?.toISOString()
    // ?.split("T")[0]
  };

  const CheckFields = (name) => {
    if (name === "required") {
      setError({
        ...error,
        tokenError: validate("required", body.TokenMoney),
      });
    }
  };
  useEffect(() => {
    // setBody({ ...body, PaymentPlaneId: "" });

    props.showPlans(
      body.packageId,
      location.state?.state.projectid,
      location.state?.Plot.Category_id,
      onSuccess,
      onFailure
    );
    if (props.planPackage !== null && props.planPackage !== undefined) {
      for (let i = 0; i < props.planPackage?.length; i++) {
        if (props.planPackage[i]?.id == body.packageId) {
          setBody({
            ...body,
            planPackageName: props.planPackage[i]?.title,
            PaymentPlaneId: "",
          });
        }
      }
    }

    // setBody({ ...body, TokenMoney: "", PaymentPlaneId: "" });
    // setPaymentMethod("");
    // setdownpayment("");
  }, [body.packageId]);

  const [items, setItems] = useState(null);

  useEffect(() => {
    if (props.Response !== null && props.Response !== undefined) {
      setItems(props.Response);
    }
  }, [props.Response]);

  const toggle = (name) => {
    if (name == "search") {
      setTooltipOpen({ ...tooltipOpen, search: !tooltipOpen.search });
    } else if (name == "info") {
      setTooltipOpen({ ...tooltipOpen, info: !tooltipOpen.info });
    } else if (name == "proceed") {
      setTooltipOpen({ ...tooltipOpen, proceed: !tooltipOpen.proceed });
    }
  };
  const [tooltipOpen, setTooltipOpen] = useState({
    proceed: false,
    info: false,
    search: false,
  });

  //   const [updateVal, setUpdateVal] = useState(false)
  //   const Save = (value) => {
  // setUpdateVal(value);

  // if (
  //   InsertBodyQuotation.Validfrom !== null &&
  //   InsertBodyQuotation.Validto !== null
  // ) {
  //   ToggleUpdateModal();
  // } else {
  //   swal("Sorry!", "select 'valid from' and 'valid to' Date", "error");
  // }
  //};
  const onSave = () => {
    if (
      props?.User[0]?.CNIC == null ||
      props?.User[0]?.CNIC == "" ||
      props?.User[0]?.CNIC.length !== 13 ||
      props?.User[0]?.user_name == null ||
      props?.User[0]?.user_name == "" ||
      props?.User[0]?.user_email == null ||
      props?.User[0]?.user_email == "" ||
      props?.User[0]?.user_phone == null ||
      props?.User[0]?.user_phone == "" ||
      props?.User[0]?.Father_Spouse_Name == null ||
      props?.User[0]?.Father_Spouse_Name == "" ||
      props?.User[0]?.Dateofbirth == null ||
      props?.User[0]?.Dateofbirth == "" ||
      props?.User[0]?.Address_Residence == null ||
      props?.User[0]?.Address_Residence == "" ||
      props?.User[0]?.Tel_Residence == null ||
      props?.User[0]?.Tel_Residence == "" ||
      props?.User[0]?.Nationality == null ||
      props?.User[0]?.Nationality == ""
    ) {
      ToggleUpdateModal();
    } else if (
      paymentMethod === "TOKEN" &&
      body.TokenMoney >= 20000 &&
      body.planPackageName !== "Custom" &&
      body.planPackageName !== "" &&
      body.packageId !== "" &&
      body.Taskid !== "" &&
      body.Validfrom !== "" &&
      body.Validto !== "" &&
      body.PaymentPlaneId !== "" &&
      body.TokenMoney !== "" &&
      body.Plotid !== ""
    ) {
      let quotationBody = {
        Taskid: body.Taskid,
        Validfrom: body.Validfrom,
        Validto: body.Validto,
        PaymentPlaneId: body.PaymentPlaneId,
        amount: body.TokenMoney,
        Plotid: body.Plotid,
        amountType: paymentMethod,
        AgentId: body.AgentId,
      };

      props.InsertPaymentSale_Middleware(
        quotationBody,
        onProjectSuccessQuotation,
        onProjectFailureQuotation,
        push
      );
    } else if (
      paymentMethod === "TOKEN" &&
      body.TokenMoney >= 20000 &&
      body.planPackageName == "Custom" &&
      body.Taskid !== "" &&
      body.Validfrom !== "" &&
      body.Validto !== "" &&
      body.TokenMoney !== "" &&
      body.Plotid !== ""
    ) {
      let quotationBody = {
        Taskid: body.Taskid,
        Validfrom: body.Validfrom,
        Validto: body.Validto,

        amount: body.TokenMoney,
        Plotid: body.Plotid,
        amountType: paymentMethod,
        AgentId: body.AgentId,
      };
      // handlePrint();
      // setTimeout(() => {
      //   // push();
      // }, 1000);
      props.InsertPaymentSale_Middleware(
        quotationBody,
        onProjectSuccessQuotation,
        onProjectFailureQuotation,
        push
      );
    } else if (
      paymentMethod === "DOWNPAYMENT" &&
      body.planPackageName !== "Custom" &&
      body.planPackageName !== "" &&
      body.Taskid !== "" &&
      body.PaymentPlaneId !== "" &&
      body.Plotid !== ""
    ) {
      let quotationBody = {
        Taskid: body.Taskid,
        PaymentPlaneId: body.PaymentPlaneId,
        Plotid: body.Plotid,
        amountType: paymentMethod,
        AgentId: body.AgentId,
      };
      props.InsertPaymentSale_Middleware(
        quotationBody,
        onProjectSuccessQuotation,
        onProjectFailureQuotation,
        push
      );
    } else if (
      paymentMethod === "DOWNPAYMENT" &&
      body.planPackageName == "Custom" &&
      body.Taskid !== "" &&
      body.Plotid !== ""
    ) {
      let quotationBody = {
        Taskid: body.Taskid,

        Plotid: body.Plotid,
        amountType: paymentMethod,
        AgentId: body.AgentId,
      };
      props.InsertPaymentSale_Middleware(
        quotationBody,
        onProjectSuccessQuotation,
        onProjectFailureQuotation,
        push
      );
    } else if (
      paymentMethod === "FULLPAYMENT" &&
      body.Taskid !== "" &&
      body.Plotid !== ""
    ) {
      let quotationBody = {
        Taskid: body.Taskid,

        Plotid: body.Plotid,
        amountType: paymentMethod,
        AgentId: body.AgentId,
      };
      props.InsertPaymentSale_Middleware(
        quotationBody,
        onProjectSuccessQuotation,
        onProjectFailureQuotation,
        push
      );
    } else {
      //   setCheckTokenMoney(true);
      swal("Sorry!", "Please Enter Required Fields", "error");
    }
  };

  const onProjectSuccessQuotation = (e) => {
    setBody({ ...body, QuotationNo: e?.SQ_No });
    if (e?.amountType == "TOKEN") {
      handlePrint();
      setTimeout(() => {
        push();
      }, 1000);
    } else {
      push();
    }
  };
  const push = () => {
    history.push({
      pathname: "/admin/ViewQuotationDetail",
    });
  };

  // const handlePrintHtml = (data) => {
  //   setData(data);
  //   setTimeout(() => {
  //     handlePrint();
  //   }, 500);
  // };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onProjectFailureQuotation = (msg) => {
    swal("Sorry!", msg, "error");
  };
  const ToggleUpdateModal = () => {
    setIsOpenUpdate(!isOpenUpdate);
    //SetStateData(info);
  };
  useEffect(() => {
    let user_id = {
      user_id: location.state?.body?.user_id,
    };
    props.ShowLeadUser(user_id, props.onSuccess, props.onFailure);
  }, [location.state, props.UpdateUser]);
  useEffect(() => {
    setBody({
      ...body,
      packageId: "",
      PaymentPlaneId: "",
      planPackageName: "",
      QuotationNo: "",
    });
    if (paymentMethod == "TOKEN") {
      setBody({ ...body, TokenMoney: "20000" });
    }
  }, [paymentMethod]);
  useEffect(() => {
    setBody({
      ...body,
      Taskid: location.state?.body?.Taskid,
      Agent: location.state?.body?.Agent,
      Plotid: location.state?.Plot.Plotid,
      Plotno: location.state?.Plot.Plot_no,
      AgentId: location.state?.body?.agentid,
    });
  }, [location.state]);

  const commaNumber = (item) => {
    if (item !== null && item !== undefined) {
      let val = item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return val;
    }
  };

  return (
    <>
      <HtmlPrintSaleQuotation
        user={props.User}
        body={body}
        paymentMethod={paymentMethod}
        date={date}
        ref={componentRef}
        SQ_No={body.QuotationNo}
      />
      <UpdateModal
        modal={isOpenUpdate}
        toggle={ToggleUpdateModal}
        detail={props.detail}
        User={props.User}
        ShowLeadUser={props.ShowLeadUser}
        // onSave={Save}
        //stateData={stateData}
        // UpdatePayment={props.UpdatePayment} ShowUpdatePayment={props.ShowUpdatePayment}
      />

      <Row>
        <Col lg="11" md="4" sm="6"></Col>
        <Col lg="1" md="4" sm="6">
          <Button
            className="btn-icon btn-2 fas fa-edit"
            color="info"
            type="button"
            id="info"
            onClick={() => {
              ToggleUpdateModal();
            }}
            //onClick={() => DeAssign()}
          ></Button>
        </Col>
      </Row>
      <form>
        <div className="pl-lg-4">
          <Row>
            <Col lg="6" md="4" sm="6">
              <label className="form-control-label" for="input-username">
                CNIC No
              </label>
              <input
                type="text"
                id="input-username"
                disabled={true}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className="form-control"
                placeholder="XXXXX-XXXXXXX-X"
                maxLength={13}
                value={
                  props.User !== undefined && props.User !== null
                    ? props.User[0]?.CNIC
                    : ""
                }
                onChange={(e) => OnChange(e.target.value, "cnic")}
              ></input>
            </Col>
            <Col lg="6" md="4" sm="6">
              <label className="form-control-label" for="input-username">
                Plot No
              </label>
              <input
                type="text"
                id="input-username"
                className="form-control"
                placeholder=""
                disabled={true}
                value={body.Plotno}
                // onBlur={() => CheckFields("AccountNameRequired")}

                //  onChange={(e) => OnChange(e.target.value, "Plotno")}
              ></input>
              {/* {error.PlotnoError !== "" && error.PlotnoError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.PlotnoError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )} */}
            </Col>
            <Col lg="3" md="3" sm="6">
              <label className="form-control-label" for="input-username">
                Client Name
              </label>
              <input
                type="text"
                id="input-username"
                className="form-control"
                disabled={true}
                placeholder=""
                value={
                  props.User !== undefined && props.User !== null
                    ? props.User[0]?.user_name
                    : ""
                }
                // onChange={(e) => OnChange(e.target.value, "s1")}
              ></input>
              {/* {error.SoldtoPError !== "" && error.SoldtoPError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.SoldtoPError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )} */}
            </Col>
            <Col lg="3" md="3" sm="6">
              <label className="form-control-label" for="input-username">
                Agent Name
              </label>
              <input
                type="text"
                id="input-username"
                className="form-control"
                placeholder=""
                disabled={true}
                value={body.Agent}
              ></input>
            </Col>
            <Col lg="3" md="3" sm="6">
              <label className="form-control-label" for="input-username">
                Plot Price
              </label>
              <input
                type="text"
                id="input-username"
                className="form-control"
                placeholder=""
                disabled
                value={commaNumber(props.plotPrice)}
              ></input>
            </Col>
            <Col lg="3" md="3" sm="6">
              <label className="form-control-label" for="input-username">
                Payment Method *
              </label>
              <Input
                id="exampleFormControlSelect1"
                type="select"
                onChange={(e) => setPaymentMethod(e.target.value)}
                value={paymentMethod}
                // disabled={body.PaymentPlaneId == ""}
              >
                <option value="">Select</option>
                <option value="TOKEN">Token</option>
                <option value="FULLPAYMENT">Full Payment</option>
                <option value="DOWNPAYMENT">Downpayment</option>
              </Input>
            </Col>
          </Row>

          {paymentMethod == "TOKEN" ? (
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Package *
                </label>
                <Input
                  type="select"
                  onChange={(e) => OnChange(e.target.value, "packageId")}
                  value={body.packageId}
                  //onChange={(e) => onChange(e.target.value, "PaymentPlaneId")}
                >
                  <option key="" value="">
                    Select
                  </option>

                  {props.planPackage !== null &&
                    props.planPackage !== undefined &&
                    props.planPackage.map((role) => {
                      return (
                        <option key={role.id} value={role.id}>
                          {role.title}
                        </option>
                      );
                    })}
                </Input>
              </Col>
              {body.planPackageName !== "Custom" ? (
                <>
                  <Col lg="4" md="4" sm="6">
                    <label className="form-control-label" for="input-username">
                      Plan *
                    </label>
                    <Input
                      type="select"
                      onChange={(e) =>
                        OnChange(e.target.value, "PaymentPlaneId")
                      }
                      value={body.PaymentPlaneId}
                      //onChange={(e) => onChange(e.target.value, "PaymentPlaneId")}
                    >
                      <option key="" value="">
                        Select
                      </option>

                      {items !== null &&
                        items !== undefined &&
                        items.map((role) => {
                          return (
                            <option
                              key={role.PaymentPlaneId}
                              value={JSON.stringify(
                                role.paymentscheduletype?.PaymentPlaneId
                              )}
                            >
                              {role.paymentscheduletype?.PlaneName}
                            </option>
                          );
                        })}
                    </Input>
                  </Col>
                  <Col lg="4" md="4" sm="6">
                    <br />

                    <PaymentTable
                      posts={posts}
                      User={props.User}
                      body={body}
                      plotPrice={props.plotPrice}
                    />
                  </Col>
                </>
              ) : (
                ""
              )}

              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Amount
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                  placeholder=""
                  onBlur={() => CheckFields("required")}
                  value={body.TokenMoney}
                  onChange={(e) => OnChange(e.target.value, "TokenMoney")}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  disabled={
                    paymentMethod == ""
                      ? true
                      : paymentMethod === "TOKEN"
                      ? false
                      : true
                  }
                ></input>
                {paymentMethod === "TOKEN" && body.TokenMoney < 20000 ? (
                  <small style={{ marginTop: "2px" }}>
                    <span style={{ color: "red" }}>
                      Token money should be more than Rs.20000
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                  </small>
                ) : (
                  error.tokenError !== "" &&
                  error.tokenError !== null && (
                    <small style={{ marginTop: "2px" }}>
                      <span style={{ color: "red" }}>
                        {error.tokenError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )
                )}
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Valid from *
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={body.Validfrom}
                  onChange={(e) => OnChange(e.target.value, "Validfrom")}
                  id="input-username"
                  className="form-control"
                ></input>
              </Col>

              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Valid to *
                </label>
                <input
                  type="date"
                  id="input-username"
                  min={validToMin}
                  value={body.Validto}
                  onChange={(e) => OnChange(e.target.value, "Validto")}
                  className="form-control"
                ></input>
              </Col>
            </Row>
          ) : paymentMethod == "DOWNPAYMENT" ? (
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Package *
                </label>
                <Input
                  type="select"
                  onChange={(e) => OnChange(e.target.value, "packageId")}
                  value={body.packageId}
                  //onChange={(e) => onChange(e.target.value, "PaymentPlaneId")}
                >
                  <option key="" value="">
                    Select
                  </option>

                  {props.planPackage !== null &&
                    props.planPackage !== undefined &&
                    props.planPackage.map((role) => {
                      return (
                        <option key={role.id} value={role.id}>
                          {role.title}
                        </option>
                      );
                    })}
                </Input>
              </Col>

              {body.planPackageName !== "Custom" ? (
                <>
                  <Col lg="4" md="4" sm="6">
                    <label className="form-control-label" for="input-username">
                      Plan *
                    </label>
                    <Input
                      type="select"
                      onChange={(e) =>
                        OnChange(e.target.value, "PaymentPlaneId")
                      }
                      value={body.PaymentPlaneId}
                      //onChange={(e) => onChange(e.target.value, "PaymentPlaneId")}
                    >
                      <option key="" value="">
                        Select
                      </option>

                      {items !== null &&
                        items !== undefined &&
                        items.map((role) => {
                          return (
                            <option
                              key={role.PaymentPlaneId}
                              value={JSON.stringify(
                                role.paymentscheduletype?.PaymentPlaneId
                              )}
                            >
                              {role.paymentscheduletype?.PlaneName}
                            </option>
                          );
                        })}
                    </Input>
                  </Col>

                  <Col lg="4" md="4" sm="6">
                    <br />

                    <PaymentTable
                      posts={posts}
                      User={props.User}
                      body={body}
                      plotPrice={props.plotPrice}
                    />
                  </Col>
                </>
              ) : (
                ""
              )}
            </Row>
          ) : (
            ""
          )}
          {/* 
          {paymentMethod !== "FULLPAYMENT" ||
          body.planPackageName !== "Custom" ? (
          
          ) : (
            ""
          )} */}

          <br />

          <Row>
            <Col lg="2" md="4" sm="6" xs="8">
              <Button
                className="btn-icon btn-2"
                color="danger"
                type="button"
                size="sm"
                id="info"
                //   disabled={updateVal!==true}
                // disabled={
                //   props.User !== undefined && props.User !== null? props.User[0].cnic !== null || props.User[0].cnic !== ""? false: true
                //     : true
                // }
                onClick={onSave}
              >
                <span className="btn-inner--icon">
                  <i className="fas fa-save"></i>
                </span>
              </Button>
              <Tooltip
                placement="bottom"
                isOpen={tooltipOpen.info}
                autohide={false}
                target="info"
                toggle={() => toggle("info")}
              >
                Save
              </Tooltip>
              {/* <Button color="success" size="sm" onClick={printDocument}>
                Print &nbsp;
                <i class="fas fa-print"></i>
              </Button> */}
            </Col>
            <Col lg="2" md="4" sm="6" xs="8"></Col>
          </Row>
        </div>
      </form>
      <br />

      <br />
    </>
  );
};

const mapStateToProps = (state) => ({
  InsertQuotationData: state.saleQotation.InsertQuotationData,
  UpdateUser: state.saleQotation.UpdateUser,
  Values: state.saleQotation.Values,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    getPaymentPlan: (body, OnSuccess, OnFailure) =>
      dispatch(getPaymentPlan(body, OnSuccess, OnFailure)),
    InsertPaymentSale_Middleware: (body, OnSuccess, OnFailure, push) =>
      dispatch(InsertPaymentSale_Middleware(body, OnSuccess, OnFailure, push)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(QuatationForm);
