import React from "react";
import Headers from "components/Headers/Header1";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useLocation } from "react-router";
import { CardBody, Container, CardHeader, Card, Row } from "reactstrap";
// import validate from "../../../components/Utilities Component/ValidationWrapper";
// import Select from "react-select";

// import dateFormat from "dateformat";
import { useHistory } from "react-router";
import QuatationForm from "./Form";

// import { PaymentTable } from "./PaymentTable";

const SaleQotation = (props) => {
  let history = useHistory();
  const location = useLocation();

  // const OnChange = (value, name) => {
  //   setBody({
  //     ...body,
  //     [name]: value,
  //   });
  //   setDate1({
  //     ...date1,
  //     [name]: value,
  //   });

  //   if (name === "cnic") {
  //     setError({
  //       ...error,
  //       CNICError: validate("CNIC", body.cnic),
  //     });
  //   } else if (name === "PlotNo") {
  //     setError({
  //       ...error,
  //       PlotnoError: validate("PlotNo", body.PlotNo),
  //     });
  //   }
  // };

  // useEffect(() => {
  //   setState({
  //     ...state,
  //     ClientId: location.state?.id,
  //     ClientName: location.state?.name,
  //     Clientcnic: location.state?.cnic,
  //     TaskId: parseInt(location.state?.taskid),
  //   });
  // }, [location]);

  // const [state, setState] = useState({
  //   ClientId: null,
  //   ClientName: null,
  //   Clientcnic: null,
  //   projectid: null,
  //   projectName: null,
  //   sectorid: null,
  //   streetId: null,
  //   plotno: null,
  //   plotid: null,
  //   category: null,
  //   type: null,
  //   direction: null,
  //   status: null,
  //   position: null,
  //   TaskId: null,
  // });
  //   if (location.state=== undefined ) {
  //     swal({
  //       title: "Data Not Found!",
  //       text: "Data not found redirecting to Lead",
  //       type: "Warning",
  //     }).then((isOk)=> {
  //       if (isOk) {
  //         history.push("/admin/lead");
  //       } else {

  //       }
  //     });
  //   }
  // const [body, setBody] = useState({
  //   //SaleQuotationNo: "852147",
  //   Taskid: location.state?.body?.Taskid,
  //   Validfrom: "",
  //   Validto: "",
  //   PaymentPlaneId: "",
  //   TokenMoney: "",
  //   status_id: 4,
  //   QuotationStatus: 4,
  //   //AgentId: 5,
  //   cnic: location.state?.body.CNIC,
  //   Plotno: location.state?.Plot.Plot_no,
  //   Amount: location.state?.Plot.NetAmount,
  //   QNo: "",
  //   s1: location.state?.body.user_name,
  //   s2: location.state?.body.Agent,
  // });

  // const [error, setError] = useState({
  //   PlotnoError: "",
  //   passwordError: "",
  //   CNICError: "",
  //   QotationNoError: "",
  //   SoldtoPError: "",
  //   ShipToPError: "",
  // });
  // const Save = () => {
  //   props.showQuotation(body, onProjectSuccess, onProjectFailure);
  // };
  useEffect(() => {
    // let objec = {
    //   catigoryid: location.state?.Plot.Category_id,
    //   Project_id: location.state?.state.projectid,
    //   PlotType_id:location.state?.Plot.PlotType_id,
    // };
    //  props.saveQuotation(objec, onProjectSuccess, onProjectFailure);
    props.showPlotPrice(location.state?.Plot.Plotid, onSuccess, onFailure);
    props.showPackages(location.state?.Plot.PlotType_id, onSuccess, onFailure);
  }, [true]);
  const [plotPrice, setPlotPrice] = useState(null);
  const [planPackage, setPlanPackage] = useState(null);
  useEffect(() => {
    let arr = [];
    if (props.Packages !== null && props.Packages !== undefined) {
      setPlanPackage(props.Packages);
      // if (props.Packages?.length > 0) {
      //   for (let i = 0; i < props.Packages?.length; i++) {
      //     if (props.Packages[i]?.title !== "Custom") {
      //       arr.push(props.Packages[i]);
      //     } else {
      //     }
      //     setPlanPackage(arr);
      //   }
      // }
    }
  }, [props.Packages]);
  useEffect(() => {
    if (props.PlotPrice !== null && props.PlotPrice !== undefined) {
      setPlotPrice(props.PlotPrice?.plotPrice?.NetAmount);
    }
  }, [props.PlotPrice]);

  // const [drop, setDrop] = useState({
  //   PaymentPlaneId: "1",
  // });

  // useEffect(() => {
  //   props.getQuotation(drop, onProjectSuccessM, onProjectFailureM);
  // }, [drop]);
  // const onProjectSuccessM = () => {};
  // const onProjectFailureM = () => {};

  const [planValue, setPlanValue] = useState(null);
  useEffect(() => {
    if (props.Values !== null && props.Values !== undefined) {
      setPlanValue(props.Values);
    }
  }, [props.Values]);

  const onProjectSuccess = () => {};
  const onProjectFailure = () => {};

  const onSuccess = () => {};
  const onFailure = () => {};
  // useEffect(()=>{
  //   let user_id={
  //     user_id:location.state?.body?.user_id
  //   }
  //   props.ShowLeadUser(user_id,OnSuccess,onFailure)
  // },[location.state])

  // const validatefunction = () => {
  //   if (body !== null) {
  //     setError({
  //       ...error,
  //       CNICError: validate("CNIC", body.cnic),
  //       PlotnoError: validate("AccountNameRequired", body.PlotNo),
  //       ShipToPError: validate("country", body.s2),
  //       QotationNoError: validate("required", body.QNo),
  //       SoldtoPError: validate("city", body.s1),
  //     });
  //   }
  // };
  // const main = new Date().toISOString().split("T")[0];
  // const [date1, setDate1] = useState({
  //   validfrom: new Date().toISOString().split("T")[0],
  //   validto: "",
  // });
  // var valv = date1.validfrom.slice(8, 15);
  // var valv1 = date1.validfrom.slice(5, 7);
  // var valv2 = date1.validfrom.slice(0, 4);

  // var newvar = parseInt(valv);
  // var newvar1 = parseInt(valv1);
  // var final = newvar + 1;
  // var date = new Date();
  // var abc = valv2 + "-" + "0" + newvar1 + "-" + final;
  // dateFormat(date, "yyyy-mm-dd");
  // const [queue, setqueue] = useState({
  //   Uname: "",
  //   Quotation: "",
  //   Cnic: "",
  //   Currency: "",
  //   soldtoparty: "",
  //   shiptoparty: "",
  // });

  // useEffect(() => {
  //   if (
  //     queue.Uname !== "" &&
  //     queue.Cnic !== "" &&
  //     queue.Quotation !== "" &&
  //     queue.Currency !== "" &&
  //     queue.soldtoparty !== "" &&
  //     queue.shiptoparty !== ""
  //   ) {
  //     history.push({
  //       pathname: "/admin/SaleOrder",
  //       state: {
  //         Uname: queue.Uname,
  //         Cnic: queue.Cnic,
  //         Quotation: queue.Quotation,
  //         Currency: queue.Currency,
  //         soldtoparty: queue.soldtoparty,
  //         shiptoparty: queue.shiptoparty,
  //       },
  //     });
  //   }
  // }, [queue]);

  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0"> Sales Quotation </h3>
              </CardHeader>
              <CardBody>
                <QuatationForm
                  // body={body}
                  planPackage={planPackage}
                  showPlans={props.showPlans}
                  Response={props.Response}
                  value={planValue}
                  detail={location.state?.body}
                  User={props.User}
                  onFailure={onFailure}
                  onSuccess={onSuccess}
                  ShowLeadUser={props.ShowLeadUser}
                  plotPrice={plotPrice}

                  // id={drop}
                />
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default SaleQotation;
