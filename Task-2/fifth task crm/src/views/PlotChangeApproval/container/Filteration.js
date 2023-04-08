import React from "react";

import { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import InfoModal from "../helpers/InfoModal";
import ActionModal from "../helpers/ActionModal";
// import UpdateModal from '../helpers/UpdateModal';
import { Badge } from "reactstrap";
import { CardBody, CardHeader, Row, Col, Input } from "reactstrap";

import Select from "react-select";
import TableOfPlotChangeApproval from "./TableOfPlotChangeApproval";

const Filteration = (props) => {
 
  const [state, setState] = useState("");
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  
  const [noOfRows, setnoOfRows] = useState(10);
  useEffect(() => {
    props.ShowAllChangeRequest(pageNumber,noOfRows,state,onSuccess, onFailure);

    props.ShowAllStatus(onSuccess, onFailure);
  }, [true]);
  useEffect(() => {
    props.ShowAllChangeRequest(pageNumber,noOfRows,state,onSuccess, onFailure);
  }, [pageNumber,noOfRows])

  useEffect(() => {
    setPageNumber(1)
    props.ShowAllChangeRequest(pageNumber,noOfRows,state,onSuccess, onFailure);
  }, [state])
  
  


  useEffect(() => {
    setPosts([])
    //setPageNumber(1)
    if (props.ChangeRequest !== null && props.ChangeRequest !== undefined) {
     setPosts(props.ChangeRequest.response)
     
    }
  }, [props.ChangeRequest]);
  // useEffect(() => {

  
  //   setPosts(null);
  //   setPageNumber(1);
  //   if (changePlotData !== null &&
  //       changePlotData !== undefined &&
  //       changePlotData?.length > 0) {
  //     for (let i = 0; i < changePlotData.length; i++) {
  //       if (state == changePlotData[i].requestStatusId) {
  //         dataInArrayForPaginaion.push(changePlotData[i]);
  //         setPosts(dataInArrayForPaginaion);
  //       }
  //     }
  //   }
  // }, [state]);

  

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
  
   if (props.ChangeRequest?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
     } else {
      return;
    }
  };


  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };

  const [status, setStatus] = useState([null]);
  useEffect(() => {
    if (props.AllStatus !== null && props.AllStatus !== undefined) {
      let arr = [];
      for (let i = 0; i < props.AllStatus.length; i++) {
        let obj = {
          value: props.AllStatus[i].status_name,
          label: props.AllStatus[i].status_name,
        };
        arr.push(obj);
      }
      setStatus(arr);
    }
  }, [props.AllStatus]);
  const onSuccess = () => {};
  const onFailure = () => {};
  const onChange = (val, name) => {

      setState(val);
    
  };
  const reset=()=>{
    setState("")
  }

  return (
    <CardHeader className="border-0">
      <h3 className="mb-0"> Plot Change Approval</h3>
      <CardBody>
        <Row>
          <Col lg="4" md="4" sm="6" xs="12">
            <label className="form-control-label" for="input-username">
              Status
            </label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              options={status}
              id="exampleFormControlSelect1"
              type="select"
              value={{label:state}}
              onChange={(e) => onChange(e.value, "status")}
            />
          </Col>
          <Col lg="4" md="4" sm="6" xs="12">
          <Button color="danger" size="sm" id="reset" onClick={reset}
            >
              <span className="btn-inner--text"></span>
              <span className="btn-inner--icon">
                <i className="fas fa-undo"></i>
              </span>
            </Button>
            </Col>
        </Row>
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
          <Col lg="8" md="8" sm="4" xs="4"></Col>
        </Row>

        <TableOfPlotChangeApproval
          ShowAllChangeRequest={props.ShowAllChangeRequest}
          
          ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus}
          Update={props.Update}
          paginatedPosts={posts}
        />

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">Page {pageNumber}</li>
          </ul>
        </nav>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" onClick={handlePrev}>
                <i class="fa fa-angle-left"></i>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" onClick={handleNext}>
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

export default Filteration;
