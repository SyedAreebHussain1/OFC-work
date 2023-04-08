import React ,  { useState, useEffect } from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";
import Select from "react-select";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import { Tooltip } from "reactstrap";
import TableOfChangePlotType from "./TableOfChangePlotType";

import { connect } from "react-redux";


import swal from "sweetalert";

const Filteration = (props) => {
 
  const [noOfRows, setnoOfRows] = useState(10);
  const [posts, setPosts] = useState([]);
 const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    props.ShowAllPlotReturn(pageNumber,noOfRows,onSuccess,onFailure)
  }, [true,pageNumber,noOfRows])
const onSuccess=()=>{}
const onFailure=()=>{}

  useEffect(() => {
    setPosts(null);
    setPageNumber(1);
    if (props.PlotReturn !== null && props.PlotReturn !== undefined) {
    
        setPosts(props.PlotReturn.response);
      
    }
    
  }, [props.PlotReturn]);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
  
   if (props.PlotReturn?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
     } else {
      return;
    }
  };


  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  //   //Change No Of Rows

  //   let numberOfRows;
  //   const onChangeNoOfRows = (val) => {
  //     setnoOfRows(parseInt(val));
  //     numberOfRows = parseInt(val);
  //     setPageNumber(1);
  //   };
  // //Pagination
  
  //   let postNumber = 10;
  //   if (noOfRows != "") {
  //     postNumber = noOfRows;
  //   }
  //   let paginatedPosts, total_pages;
  //   const start = pageNumber * postNumber - postNumber;
  //   const end = start + postNumber;
  //   if (posts !== null) {
  //     paginatedPosts = posts.slice(start, end);
  //     total_pages = Math.ceil(posts.length / postNumber);
  //   }
  //   const handlePrev = () => {
  //     if (pageNumber === 1) return;
  //     setPageNumber(pageNumber - 1);
  //   };
  //   const handleNext = () => {
  //     if (total_pages > pageNumber) {
  //       setPageNumber(pageNumber + 1);
  //     } else {
  //       return;
  //     }
  //   };


    return (
        <CardHeader className="border-0">
     
      <h3 className="mb-0"> Change Plot Type</h3>
      {/* <CardBody>
        <form>
          <div className="pl-lg-4">
            <Row>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                File
                </label>
                <input
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  id="input-username"
                  className="form-control"
                  placeholder=""
                //   onBlur={() => CheckFields("phoneNumber")}
                //   value={state.ClientPhone}
                //   onChange={(e) => onChange(e.target.value, "ClientPhone")}
                ></input>
              
              </Col>
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Client Email Address
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                //   onBlur={() => CheckFields("email")}
                //   placeholder=""
                //   value={state.ClientEmail}
                //   onChange={(e) => onChange(e.target.value, "ClientEmail")}
                ></input>
               
              </Col>
             
              <Col lg="4" md="4" sm="6">
                <label className="form-control-label" for="input-username">
                  Client Name
                </label>
                <input
                  type="text"
                  id="input-username"
                  className="form-control"
                //   value={state.ClientName}
                  disabled
                ></input>
                &nbsp;
              </Col>
              &nbsp;
            </Row>
            <Button
              color="info"
              size="sm"
              id="search"
            //   onClick={(e) => findValueInArray(state.userName)}
            //   onClick={(e) => onSearchButton(state.userName)}
            >
              <span className="btn-inner--text"></span>
              <span className="btn-inner--icon">
                <i className="fas fa-search"></i>
              </span>
            </Button>
           

            <Button color="danger" size="sm" id="reset"
         
             >
              <span className="btn-inner--text"></span>
              <span className="btn-inner--icon">
                <i className="fas fa-undo"></i>
              </span>
            </Button>
           
          </div>
        </form>
        <br />
        <br />
      
      </CardBody> */}
      <CardBody>
        <Row>
          <Col lg="2" md="2" sm="4" xs="4">
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
        <TableOfChangePlotType
         ShowAllPlotReturn={props.ShowAllPlotReturn} PlotReturn={props.PlotReturn} 
          paginatedPosts={posts}
          ShowPlotInfo={props.ShowPlotInfo} PlotInfo={props.PlotInfo}
          UpdatePlotReturnStatus={props.UpdatePlotReturnStatus} UpdateStatus={props.UpdateStatus}
         
        ></TableOfChangePlotType>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">Page {pageNumber}</li>
          </ul>
        </nav>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" 
             onClick={handlePrev}
            >
                <i class="fa fa-angle-left"></i>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" 
            onClick={handleNext}
              >
                <i class="fa fa-angle-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </CardBody>
    </CardHeader>
  );
};
export default Filteration
