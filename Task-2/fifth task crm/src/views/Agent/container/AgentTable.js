import React, { useState, useEffect } from "react";
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
  Badge,
  Tooltip,
} from "reactstrap";
import Loader from "react-loader-spinner";
import Mod from "views/Agent/helpers/Mod";
import Update_Agent from "views/Agent/helpers/Update_Agent";
import swal from "sweetalert";
import { blue } from "@material-ui/core/colors";
import moment from "moment";

export const AgentTable = (props) => {
  const [posts, setPosts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);

  const [Detail, setDetail] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  useEffect(() => {
    setPosts([]);

    props.CheckAgent(
      pageNumber,
      noOfRows,
      props.state?.roleId,
      props.state?.teamid,
      onSuccess,
      onFailure
    );
  }, [
    true,
    pageNumber,
    noOfRows,
    props.state.roleId,
    props.state.teamid,
    props.Response,
    props.Update,
    props.AssignResponse,
  ]);

  useEffect(() => {
    if (props.Data !== null && props.Data !== undefined) {
      //  dataInArrayForPaginaion.push(props.data[i]);
      setPosts(props.Data?.response);
      setMetaData(props.Data?.metaData);
    }
  }, [props.Data]);
  const SplitDateTime = (date) => {
    var date = date.split("T");
    // return d[0];

    const d = new Date(date[0]);

    return moment(d).format("DD-MM-YYYY");
  };

  //Pagination
  // let dataInArrayForPaginaion = [];
  // useEffect(() => {
  //     setPosts(null);
  //     setPageNumber(1);
  //     if (props.data !== null && props.data !== undefined) {
  //         for (let i = 0; i < props.data.length; i++) {

  //           if(props.data[i].teamid=== props.id.teamid && props.id.role_id==="")
  //            {
  //             dataInArrayForPaginaion.push(props.data[i]);
  //             setPosts(dataInArrayForPaginaion);
  //            }
  //            else if(props.data[i].role_id== props.id.role_id && props.id.teamid==="")
  //            { dataInArrayForPaginaion.push(props.data[i]);
  //             setPosts(dataInArrayForPaginaion);

  //            }
  //            else if(props.data[i].role_id== props.id.role_id && props.data[i].teamid=== props.id.teamid )
  //            { dataInArrayForPaginaion.push(props.data[i]);
  //             setPosts(dataInArrayForPaginaion);

  //            }
  //            else{

  //            }

  //         //    else
  //         //    {
  //         //     //  dataInArrayForPaginaion.push(null);
  //         //     setPosts(null);
  //         //    }

  //         }
  //     }

  // }, [props.id]);

  // //number of row in one page code
  // const [noOfRows, setnoOfRows] = useState("");
  // let numberOfRows;
  // const onChangeNoOfRows = (val) => {

  //     setnoOfRows(parseInt(val));
  //     numberOfRows = parseInt(val);

  //     setPageNumber(1);
  // };

  // const [posts, setPosts] = useState([]);
  // const [pageNumber, setPageNumber] = useState(2);
  // let postNumber = 10;
  // if (noOfRows != "") {
  //     postNumber = noOfRows;
  // }
  // let paginatedPosts, total_pages;
  // const start = pageNumber * postNumber - postNumber;
  // const end = start + postNumber;
  // if (posts !== null) {
  //     paginatedPosts = posts.slice(start, end);
  //     total_pages = Math.ceil(posts.length / postNumber);
  // }
  // const handlePrev = () => {
  //     if (pageNumber === 1) return;
  //     setPageNumber(pageNumber - 1);
  // };
  // const handleNext = () => {
  //     if (total_pages > pageNumber) {
  //         setPageNumber(pageNumber + 1);
  //     } else {
  //         return;
  //     }
  // };

  const togglerr = (opt) => {
    setIsOpen(!isOpen);
    setDetail(opt);
  };

  const onEdit = (opt) => {
    setIsOpenEdit(!isOpenEdit);
    setDetail(opt);
  };
  const onDelete = (opt) => {
    let body = {
      Dashboarduserid: opt.Dashboarduserid,
    };
    swal({
      title: "Remove",
      text: "Are you sure you want to Remove this record?",
      icon: "warning",
      //   type: "info",
      //   className: "customSwal",

      buttons: true,
      //   color: "#716add",
    }).then(function (isConfirm) {
      if (isConfirm) {
        props.DeleteAgent(body, onSuccess, onFailure);
      } else {
      }
    });

    //props.DeleteAgent(body,onSuccess,onFailure)
  };
  const onSuccess = () => {};
  const onFailure = () => {};

  useEffect(() => {
    if (props.Delete !== null && props.Delete !== undefined) {
      // swal({
      //     title: "Successfully Remove",
      //     text: "Employee Remove successfully",
      //     icon: "success",
      //     type: "success",
      //   }).then(function (isConfirm) {
      //     if (isConfirm) {

      //     } else {

      //     }
      //   });
      props.CheckAgent(
        pageNumber,
        noOfRows,
        props.state?.roleId,
        props.state?.teamid,
        onSuccess,
        onFailure
      );
    }
  }, [props.Delete]);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (props.Data?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const onChangeNoOfRows = (val) => {
    setnoOfRows(val);
    setPageNumber(1);
  };

  return (
    <>
      <Mod modal={isOpen} toggle={togglerr} detail={Detail} />
      <Update_Agent
        modal={isOpenEdit}
        toggle={onEdit}
        detail={Detail}
        UserRole={props.UserRole}
        GetTeam={props.GetTeam}
        Role={props.Role}
        Team={props.Team}
        showUpdateEmployee={props.showUpdateEmployee}
        Update={props.Update}
      />
      <CardBody>
        <Row>
          <Col lg="2" md="4" sm="4" xs="4">
            <label className="form-control-label"> Rows Per Pages </label>
            <Input
              id="exampleFormControlSelect1"
              type="select"
              onChange={(e) => onChangeNoOfRows(e.target.value)}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Input>
          </Col>
        </Row>
        <br />
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Phone NO</th>
              <th scope="col">Date</th>
              <th scope="col">Designation</th>
              <th scope="col">Team Name</th>

              <th scope="col">Modal</th>
            </tr>
          </thead>
          <tbody>
            {posts !== null && posts !== undefined ? (
              posts.map((dataOption, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dataOption.name}</td>
                    <td>{dataOption.phoneNo}</td>
                    <td>{SplitDateTime(dataOption?.Datetime)}</td>
                    <td>
                      {" "}
                      <Badge color="info" pill>
                        {dataOption.user_role_name}
                      </Badge>
                    </td>
                    <td>
                      <Badge color="danger" pill>
                        {dataOption.TeamName === null
                          ? "NAN"
                          : dataOption.TeamName}
                      </Badge>
                    </td>

                    <td>
                      <Button
                        color="success"
                        size="sm"
                        onClick={() => togglerr(dataOption)}
                      >
                        <span className="btn-inner--icon">
                          <i class="fas fa-info-circle"></i>
                        </span>
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        onClick={() => onEdit(dataOption)}
                      >
                        <span className="btn-inner--icon">
                          <i class="fas fa-edit"></i>
                        </span>
                      </Button>

                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => onDelete(dataOption)}
                      >
                        <span className="btn-inner--icon">
                          <i class="fas fa-trash-alt"></i>
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
                <th></th>
                <th>
                  <h3>No data found</h3>
                </th>
                <th></th>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            Page {pageNumber} - {metaData?.totalPages}
          </li>
        </ul>
      </nav>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={handlePrev}>
              <i className="fa fa-angle-left"></i>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={handleNext}>
              <i className="fa fa-angle-right"></i>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
