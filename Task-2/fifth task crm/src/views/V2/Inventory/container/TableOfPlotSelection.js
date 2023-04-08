import React from "react";
import Loader from "react-loader-spinner";
import { Tooltip } from "reactstrap";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Col,
  Table,
  Input,
} from "reactstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router";
import RecordingModal from "../Plot_information";
const TableOfPlotSelection = (props) => {
  const location = useLocation();
  const [tooltipOpen, setTooltipOpen] = useState({
    proceed: false,
    info: false,
    search: false,
  });
  // const toggle = (name) => {
  //   if (name == "search") {
  //     setTooltipOpen({ ...tooltipOpen, search: !tooltipOpen.search });
  //   } else if (name == "info") {
  //     setTooltipOpen({ ...tooltipOpen, info: !tooltipOpen.info });
  //   } else if (name == "proceed") {
  //     setTooltipOpen({ ...tooltipOpen, proceed: !tooltipOpen.proceed });
  //   }
  // };

  let history = useHistory();
  const onLock = (posts) => {
    // let body = {
    //   Plot: posts,
    //   Taskid: location.state.taskid,
    //   userid: location.state.id,
    // };
    history.push({
      pathname: "/admin/salequotation",
      state: {
        Plot: posts,
        body: props.body,
        state: props.state,
        // Taskid: location.state.taskid,
        // userid:location.state.id,
        // name:location.state.name,
        // email:location.state.email,
        // cnic:location.state.cnic,
        // phone:location.state.phone,
        // sourcename:location.state.sourcename,
        // Agent:location.state.Agent,
      },
    });
  };
  // const onLockk = (val) => {
  //   let body = {
  //     Plot: val,
  //     Taskid: location.state.taskid,
  //     userid: location.state.id,
  //   };
  //   history.push({
  //     pathname: "/admin/AppRequest",
  //     state: {
  //       Plot: val,
  //       Taskid: location.state.taskid,
  //       userid: location.state.id,
  //       name: location.state.name,
  //       email: location.state.email,
  //       cnic: location.state.cnic,
  //       phone: location.state.phone,
  //       sourcename: location.state.sourcename,
  //       Agent: location.state.Agent,
  //     },
  //   });
  // };

  const [isOpen, setIsOpen] = useState(false);
  const [send, setsend] = useState();

  const plotinfo = (posts) => {
    setIsOpen(!isOpen);
    setsend(posts);
  };
  return (
    <>
      <RecordingModal modal={isOpen} toggle={plotinfo} send_to_plot={send} />
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Select Plot</th>
            <th scope="col">S.No</th>
            <th scope="col">PLOT NO</th>
            <th scope="col">PLOT CATEGORY</th>
            <th scope="col">PLOT TYPE</th>
            {/* <th scope="col">PLOTDIRECTION</th> */}
            <th scope="col">PLOT STATUS</th>
            {/* <th scope="col">PLOT POSITION</th> */}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.paginatedPosts !== null &&
            props.paginatedPosts !== undefined ? (
              props.paginatedPosts.map((posts, index) => {
                return (
                  <tr key={index}>
                    <td
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Input
                        style={{ position: "static" }}
                        type="radio"
                        name="radio_btn"
                        value={posts.Plotid}
                        onChange={(e) =>
                          props._handleRadio(e.target.value, posts)
                        }
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{posts.Plot_no}</td>
                    <td>{posts.CategoryName}</td>
                    <td>{posts.PlotType_Name}</td>
                    <td>{posts.House_StatusName}</td>
                    <td>
                      {/* disabled={posts.House_StatusName!=='Available'}  */}
                      <Button
                        color="success"
                        id="search"
                        size="sm"
                        onClick={() => plotinfo(posts)}
                      >
                        <span className="btn-inner--text"></span>
                        <span className="btn-inner--icon">
                          <i class="far fa-eye"></i>
                        </span>
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th></th>
                <th></th>

                <th>
                  <h4>No data found</h4>
                </th>
                <th></th>
                <th></th>
              </tr>
            )

            // (
            //   <Loader
            //     type="ThreeDots"
            //     color="#8dbc4c"
            //     height={80}
            //     width={80}
            //     visible={props.isLoading}
            //     secondaryColor="#4f9cb9"
            //   />
            // )
          }
        </tbody>
      </Table>
    </>
  );
};

export default TableOfPlotSelection;
