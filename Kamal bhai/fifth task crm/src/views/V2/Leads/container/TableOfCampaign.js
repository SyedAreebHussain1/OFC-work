import React from "react";
import Headers from "../../../../components/Headers/Header/container/Header";
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
import { useHistory } from "react-router";
import swal from "sweetalert";
import Loader from "react-loader-spinner";
import { JwtDashboard } from "../../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
// import { BASEURL } from "config/api/URL";
import socketIOClient from "socket.io-client";
import { networkPoll } from "socket/Networkpolling";
import moment from "moment";
import UpdateLead from "../helpers/update_lead";
const TableOfCampaign = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lead, setLeadData] = useState("");
  let history = useHistory();
  const toggler = (data) => {
    console.log("DATA", data);
    setIsOpen(!isOpen);
    setLeadData(data);
  };

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

  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "If yes, then lead will be deleted",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Lead has been deleted!", {
          icon: "success",
        });
      }
    });
  };
  const handleProceed = (data) => {
    history.push({
      pathname: "/admin/invetoryV2",
      state: data,
    });
  };
  return (
    <>
      {isOpen && <UpdateLead modal={isOpen} toggle={toggler} data={lead} />}
      <Table
        className="align-items-center"
        style={{ marginTop: "4%" }}
        responsive
      >
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Order Status</th>
            <th scope="col">Agent</th>
            <th scope="col">Source</th>
            <th scope="col">Added On</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.paginatedPosts !== null &&
          props.paginatedPosts !== undefined ? (
            props.paginatedPosts.map((user, index) => {
              if (props.posts.Assignby !== "N/A") {
                return (
                  <tr
                    key={user.Taskid}
                    style={
                      props.isSocketData && index == 0
                        ? { backgroundColor: "rgba(112,181,249,0.2)" }
                        : {}
                    }
                  >
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
                    <td>
                      <Button
                        color="info"
                        id="search"
                        size="sm"
                        onClick={() => toggler(user)}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="fas fa-edit"></i>
                        </span>
                      </Button>
                      <Button
                        // color="info"
                        style={{
                          backgroundColor: "red",
                          borderColor: "red",
                          textAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        id="search"
                        size="sm"
                        onClick={() => handleDelete(user)}
                      >
                        <span className="btn-inner--text"></span>
                        <span
                          style={{ marginLeft: "2%" }}
                          className="btn-inner--icon"
                        >
                          <i
                            style={{
                              color: "white",
                              fontSize: "14px",
                            }}
                            class="fas fa-trash"
                          ></i>
                        </span>
                      </Button>
                      <Button
                        color="success"
                        id="search"
                        size="sm"
                        onClick={() => handleProceed(user)}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="fa fa-arrow-right"></i>
                        </span>
                      </Button>
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
