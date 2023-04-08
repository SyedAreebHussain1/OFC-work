import React from "react";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { Button, Container, Row, Table, Col, Input } from "reactstrap";
import { Tooltip } from "reactstrap";
import Mod from "views/Invent/Mod/container";
import PlotDetails from "../PlotDetails";
import Select from "react-select";
import { post } from "jquery";
import { JwtDashboard } from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";

const Filteration = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [Detail, setDetail] = useState({});
  const toggler = (opt) => {
    setIsOpen(!isOpen);
    setDetail(opt);
  };
  const onSuccess = () => {
    setIsOpenn(false);
    setIsOpen(false);
  };
  const onFailure = () => {};
  const [data, setdata] = useState({});
  const togglerr = (opt) => {
    setIsOpenn(!isOpenn);
    setdata(opt);
  };
  useEffect(() => {
    // if (isOpen !== true) {
    props.showPlotInfo(
      props.pageNumber,
      props.noOfRows,
      props.state?.projectid,
      props.state?.sectorid,
      props.state?.typeid,
      props.state?.sizeid,
      props.state?.statusid,
      props.state?.Plot_no,
      onSuccess,
      onFailure
    );
    // }
  }, [props.deleteRes, props.addRes]);

  const [isOpenAddProject, setIsOpenAddProject] = useState(false);
  const togglerForAddProjects = (opt, opt1) => {
    setIsOpenAddProject(!isOpenAddProject);
  };

  useEffect(() => {}, [isOpen]);
  const [stateForAddProject, setStateForAddProject] = useState({
    projectid: null,
    Project_name: null,
  });
  const [project, setproject] = useState([null]);

  let projectName = null;
  const onChangeForAddFile = (val, label, name) => {
    if (name == "ProjectName") {
      projectName = label;
      setStateForAddProject({
        ...stateForAddProject,
        projectid: val,
        Project_name: label,
      });
    }
  };
  let dataInArrayForPaginaion = [];
  // useEffect(() => {
  //   setPosts(null);
  //   setPageNumber(1);
  //   if (props.pposts !== null && props.pposts !== undefined) {
  //     for (let i = 0; i < props.pposts.length; i++) {
  //       dataInArrayForPaginaion.push(props.pposts[i]);
  //       setPosts(props.pposts);
  //     }
  //   }

  // }, [props.Info]);
  // const [noOfRows, setnoOfRows] = useState("");
  // let numberOfRows;
  // const onChangeNoOfRows = (val) => {
  //   setnoOfRows(parseInt(val));
  //   numberOfRows = parseInt(val);
  //   setPageNumber(1);
  // };

  // const [posts, setPosts] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);

  // let postNumber = 10;
  // if (noOfRows != "") {
  //   postNumber = noOfRows;
  // }
  // let paginatedPosts, total_pages;
  // const start = pageNumber * postNumber - postNumber;
  // const end = start + postNumber;
  // if (posts !== null) {
  //   paginatedPosts = posts.slice(start, end);
  //   total_pages = Math.ceil(posts.length / postNumber);
  // }
  // const handlePrev = () => {
  //   if (pageNumber === 1) return;
  //   setPageNumber(pageNumber - 1);
  // };
  // const handleNext = () => {
  //   if (total_pages > pageNumber) {
  //     setPageNumber(pageNumber + 1);
  //   } else {
  //     return;
  //   }
  // };
  const [tooltipOpen, setTooltipOpen] = useState({
    proceed: false,
    info: false,
    search: false,
  });
  const toggle = (name) => {
    if (name == "search") {
      setTooltipOpen({ ...tooltipOpen, search: !tooltipOpen.search });
    } else if (name == "info") {
      setTooltipOpen({ ...tooltipOpen, info: !tooltipOpen.info });
    } else if (name == "proceed") {
      setTooltipOpen({ ...tooltipOpen, proceed: !tooltipOpen.proceed });
    }
  };
  const input = document.getElementById("fileinput");
  // useEffect(() => {
  //   if(props.pposts !== null && props.pposts !== undefined){
  //         for(let i = 0; i < props.pposts.length; i++){
  //           if(props.id==25 && posts?.House_Status==25){}
  //           else if(props.id==28 && posts?.House_Status==28){}
  //           else if(props.id==28 && posts?.House_Status==28){}
  //           else if(props.id==26 && posts?.House_Status==26){}
  //           else if(props.id==27 && posts?.House_Status==27){}
  //           else if(props.id==null){}
  //         }
  //   }
  // },[props.pposts])
  return (
    <>
      <Mod modal={isOpen} toggle={toggler} detail={Detail} />
      <PlotDetails modal={isOpenn} toggle={togglerr} detail={data} />
      {/* <Container className="mt--7" fluid> */}
      <Row>
        <Table className="align-items-center" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">PLOT NO</th>
              <th scope="col">PLOT SIZE</th>
              <th scope="col">PLOT TYPE</th>
              <th scope="col">HOUSE STATUS</th>
              <th scope="col">Sector</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              props.posts !== null && props.posts !== undefined ? (
                props.posts?.map((posts, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{posts.Plot_no}</td>
                      <td>{posts.CategoryName}</td>
                      <td>{posts.PlotType_Name}</td>
                      <td>{posts.House_StatusName}</td>
                      <td>{posts.Sector_Name}</td>

                      <td>
                        {" "}
                        <Button
                          color="info"
                          id="info"
                          size="sm"
                          onClick={() => toggler(posts)}
                        >
                          <span className="btn-inner--text"></span>
                          <span className="btn-inner--icon">
                            <i class="far fa-eye"></i>
                          </span>
                        </Button>
                        <Tooltip
                          placement="bottom"
                          isOpen={tooltipOpen.info}
                          autohide={false}
                          target="info"
                          toggle={() => toggle("info")}
                        >
                          Detail
                        </Tooltip>
                        <Button
                          color="success"
                          size="sm"
                          onClick={() => togglerr(posts)}
                        >
                          <span className="btn-inner--icon">
                            <i class="fas fa-align-center"></i>
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
              )
              // stateForAddProject.projectid!== null? (
              //   <Loader
              //     type="ThreeDots"
              //     color="#8dbc4c"
              //     height={80}
              //     width={80}
              //     visible={props.isLoading}
              //     secondaryColor="#4f9cb9"
              // ):''
            }
          </tbody>
        </Table>
      </Row>
      {/* </Container> */}
    </>
  );
};
export default Filteration;

// const mapStateToProps = (state) => ({
//   GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin
// });
// const mapDispatchToPrpos = (dispatch) => {
//   return {
//       JwtDashboard: (body, OnSuccess, OnFailure) =>
//       dispatch(JwtDashboard(body, OnSuccess, OnFailure)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToPrpos)(Filteration);
