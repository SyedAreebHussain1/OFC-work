import React from "react";
import Headers from "../../../components/Headers/Header/container/Header";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Button,
  Container,
  CardBody,
  Row,
  Table,
  Input,
  Col,
} from "reactstrap";
import { Badge } from "reactstrap";
import swal from "sweetalert";
import Loader from "react-loader-spinner";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
// import { BASEURL } from "config/api/URL";
import socketIOClient from "socket.io-client";
import { networkPoll } from "socket/Networkpolling";
import moment from "moment";
const TableOfCampaign = (props) => {
  // const SelectChecked = () => {
  //   var checkboxes = document.getElementsByName("check");

  //   for (var i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i].type == "checkbox") {0
  //       checkboxes[i].checked = false;
  //       props.arrayForCheck=[]

  //       // for (let i = 0; i < props.arrayForCheck.length; i++) {
  //       //   props.arrayForCheck.pop(i);
  //       // }
  //     }
  //   }
  // };
  // var noOfCheckBox;
  const [stateCheck, setStatecheck] = useState("");
  const [selected, setSelected] = useState("");
  //
  var checkboxes = document.getElementsByName("check");
  const GridChange = (val) => {
    setStatecheck(5);
    setSelected(val);
    for (var i = 1; i <= 5; i++) {
      if (val.includes("select")) {
        checkboxes[i].checked = true;
        if (
          props.paginatedPosts[i - 1] !== null &&
          props.paginatedPosts[i - 1] !== undefined
        ) {
          // setoneByOneSelected(0)
          AddInArray(true, props.paginatedPosts[i - 1]);
          //setStatecheck("");
          // setCheckedState(true)
        }
        // props.arrayForCheck=[]

        // for (let i = 0; i < props.arrayForCheck.length; i++) {
        //   props.arrayForCheck.push(i);
        // }
      }
      if (val.includes("un")) {
        checkboxes[i].checked = false;

        // for (let i = 0; i < props.arrayForCheck.length; i++) {
        props.arrayForCheck.shift(i);
        // }

        // setCheckedState(false)
      }
    }
    // if (checkedState==true ) {
    //     checkboxes[i].checked = false;
    //     // for (let i = 0; i < props.arrayForCheck.length; i++) {
    //     //     props.arrayForCheck.pop(i);
    //     //   }
    //       setCheckedState(false)
    //     // if (
    //     //             props.paginatedPosts[i] !== null &&
    //     //             props.paginatedPosts[i] !== undefined
    //     //           ) {
    //     //             AddInArray(true, props.paginatedPosts[i]);
    //     //             setStatecheck("");
    //     //           }
    //     // props.arrayForCheck=[]

    //     // for (let i = 0; i < props.arrayForCheck.length; i++) {
    //     //   props.arrayForCheck.push(i);
    //     // }
    // //  }
    // }
  };

  // const GridChange = (val) => {
  //   var checkboxes = document.getElementsByName("check");
  //   setStatecheck(val);

  //   noOfCheckBox = val;
  //   if (props.postNumber < parseInt(val)) {
  //   } else if (props.postNumber == parseInt(val)) {
  //     if (props.paginatedPosts?.length > 0) {
  //       for (var i = 0; i <= val; i++) {
  //         checkboxes[i].checked = true;
  //         if (
  //           props.paginatedPosts[i] !== null &&
  //           props.paginatedPosts[i] !== undefined
  //         ) {
  //           AddInArray(true, props.paginatedPosts[i]);
  //           setStatecheck("");
  //         }
  //       }
  //       val = "";
  //     }
  //   } else {
  //     if (props.postNumber > parseInt(val)) {
  //       if (props.paginatedPosts?.length > 0) {
  //         for (var i = 0; i <= val; i++) {
  //           checkboxes[i].checked = true;

  //           if (
  //             props.paginatedPosts[i] !== null &&
  //             props.paginatedPosts[i] !== undefined
  //           ) {
  //             AddInArray(true, props.paginatedPosts[i]);
  //           }
  //         }
  //         for (var i = props.postNumber; i > parseInt(val); i--) {
  //           checkboxes[i].checked = false;
  //         }
  //       }
  //     }
  //   }
  // };
  const assginSingleLead = () => {};
  const AddInArray = (check, value) => {
    if (check == true) {
      props.setLeadStageStatus(value.LeadStageStatus);

      props.arrayForCheck.unshift(value.Taskid + "+" + value.orderstatus);
    } else {
      props.arrayForCheck.pop(value.Taskid + value.orderstatus);
    }
  };
  const [oneByOneSelected, setoneByOneSelected] = useState(0);
  //var j=0
  const AddInArrayOneByOne = (check, value) => {
    if (check == true) {
      setoneByOneSelected(oneByOneSelected + 1);
      props.setLeadStageStatus(value.LeadStageStatus);
      props.arrayForCheck.push(value.Taskid + "+" + value.orderstatus);
    } else {
      // setoneByOneSelected(j++)
      // props.arrayForCheck.pop(value.Taskid + value.orderstatus);
      for (var i = 0; i < props.arrayForCheck.length; i++) {
        if (props.arrayForCheck[i] === value.Taskid + "+" + value.orderstatus) {
          props.arrayForCheck.splice(i, 1);
          i--;
        }
      }
    }
  };
  const [contact, setContact] = useState(null);
  // const DeAssign = (user) => {
  //   let body = {
  //     assigned_by: null,
  //     handled_by: null,
  //     Taskid: user,
  //     LeadStageStatus: null,
  //   };

  //   props.Assign(body.assigned_by, body.handled_by, body, onSuccessDeAssign);
  // };
  // const onSuccessDeAssign = () => {
  //   swal("Congratulations!", "Lead DeAssign", "info");

  //   props.GetUser(props.pageNumber, props.noOfRows,props.body.sourceid,props.body.orderstatus, OnSuccess, onFailure);
  // };
  // const OnSuccess = () => {
  //   if (props.Users !== null) {
  //     setContact(props.Users);
  //   }
  // };
  // const onFailure = () => {
  //   swal(
  //     "Sorry!",
  //     "Something Went Wrong Please Try Again Later or Contact Admin",
  //     "error"
  //   );
  // };
  const dateFunction = (date) => {
    // const nDate = new Date(date).toLocaleString("en-US", {
    //   timeZone: "Asia/Karachi",
    // });
    // return nDate;
    var date = date.split("T");
    // return d[0];

    const d = new Date(date[0]);

    return moment(d).format("DD-MM-YYYY");
  };
  const OnSuccessJwt = () => {};
  const OnFailureJwt = () => {};
  useEffect(() => {
    props.JwtDashboard(OnSuccessJwt, OnFailureJwt);
  }, [true]);

  useEffect(() => {
    if (props.GetUserJWTLogin === false) {
      window.location.href = "/admin/login";
    }
  });
  useEffect(() => {
    if (props.postNumber > 1) {
      setSelected("");
    }
  }, [props.postNumber]);
  const [uncheck, setuncheck] = useState("");
  const assignLeads = () => {
    props.AssignLead();
    //setuncheck(false)

    // checkboxes.checked=false
    for (let i = 0; i <= props.paginatedPosts.length; i++) {
      checkboxes[i].checked = false;
      props.arrayForCheck.pop(i);
    }

    //if (checkedState==true ) {

    // if()
    //             for(let i=0;i<=oneByOneSelected;i++)
    //             {
    //               checkboxes[i].checked = false;
    //               props.arrayForCheck.pop(i);
    //             }
    // }
    setStatecheck("");
    setSelected("un");
    setoneByOneSelected(0);
  };
  // Socket start
  // const SOCKET_URL = "https://backendcrm.squarepro.net";
  // let socket = socketIOClient(`${SOCKET_URL}`, networkPoll);
  // useEffect(() => {
  //   socket.on(`new-lead`, (data) => {
  //   });

  // }, []);
  // Socket end
  return (
    <>
      <Row>
        <Col>
          <Button color="info" onClick={assignLeads} id="assignLeads">
            Assign Leads
          </Button>
          <hr />
        </Col>
        <br />
      </Row>
      {/* <Row>
        <Col>
          <Button color="success" onClick={SelectChecked}>
            Uncheck
          </Button>
        </Col>
      </Row>
      <br />*/}
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">
              <Input
                id="exampleFormControlSelect1"
                type="select"
                name="check"
                value={selected}
                onChange={(e) => GridChange(e.target.value)}
                style={{ width: "100px" }}
              >
                <option value="un">Unselect Top 5</option>
                <option value="select">Select Top 5</option>
                {/* <option value="10">Top 10</option> */}
                {/* <option value="2">Top 10</option> */}

                {/* <option value="5">Rows</option>
                {props.paginatedPosts?.length == 10 ?  (
                  <option value="10">10</option>
                ) : props.paginatedPosts?.length == 25 ? (
                  <>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  </>
                ) : props.paginatedPosts?.length == 50 ? (
                  <>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  </>
                ) : props.paginatedPosts?.length == 100 ? (
                  <>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  </>
                ) : (
                  ""
                )} */}
              </Input>
            </th>

            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Order Status</th>
            <th scope="col">Agent</th>
            <th scope="col">Source</th>
            <th scope="col">Added On</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.paginatedPosts !== null &&
          props.paginatedPosts !== undefined ? (
            props.paginatedPosts.map((user, index) => {
              if (props.posts.Assignby !== "N/A") {
                return (
                  <tr key={user.Taskid} style={
                    props.isSocketData && index == 0
                      ? { backgroundColor: "rgba(112,181,249,0.2)" }
                      : {}
                  }>
                    <td>
                      <Input
                        style={{ position: "static" }}
                        type="checkbox"
                        name="check"
                        disabled={
                          selected === "select" && index > -1 && index <= 4
                        }
                        onChange={(e) =>
                          AddInArrayOneByOne(e.target.checked, user)
                        }
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{user.user_name}</td>
                    <td>{user.user_email}</td>
                    <td>{user.user_phone}</td>
                    <td>{user.orderstatusname}</td>
                    <td>{user.Agent}</td>
                    <td>
                      {user.sourcename == "Facebook" ? (
                        <Badge color="info" pill>
                          {user.sourcename}
                        </Badge>
                      ) : user.sourcename == "Instagram" ? (
                        <Badge color="danger" pill>
                          {user.sourcename}
                        </Badge>
                      ) : user.sourcename == "Self" ? (
                        <Badge color="success" pill>
                          {user.sourcename}
                        </Badge>
                      ) : (
                        <Badge color="danger" pill>
                          {user.sourcename}
                        </Badge>
                      )}
                    </td>
                    <td>
                      {dateFunction(user.Datetime).toLocaleString("en-US", {
                        timeZone: "Asia/Karachi",
                      })}
                    </td>
                  </tr>
                );
              }
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
// export default TableOfCampaign
const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (body, OnSuccess, OnFailure) =>
      dispatch(JwtDashboard(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(TableOfCampaign);
