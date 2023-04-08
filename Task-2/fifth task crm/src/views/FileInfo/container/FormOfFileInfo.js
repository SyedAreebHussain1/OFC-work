import React ,  { useState, useEffect, useLayoutEffect } from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";
import Select from "react-select";
import "react-h5-audio-player/lib/styles.css";
import TableOfFileInfo from "./TableOfFileInfo"
import { useLocation } from "react-router";



const FormOfFileInfo = (props) => {
  const location=useLocation();
  const [options, setOptions] = useState();
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [noOfRows, setnoOfRows] = useState(10);
  const [teamId, setteamId] = useState(null);


  const [state, setState] = useState({
    AgentName:"",
    Date:"",
    Taskid:""
   });
   useEffect(() => {
    if (location.state !== null && location.state !== undefined) {

      setState({
      ...state,
       Taskid:location?.state?.Taskid,
   });
  }
  }, [location])

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
  
   if (props.Detail?.metaData?.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
     } else {
      return;
    }
  };


  const onChangeNoOfRows = (val) => {
    setnoOfRows(parseInt(val));
    setPageNumber(1);
  };


  
useEffect(() => {

  props.showAgent(onSuccess, onFailure);
  props.showDetailsOfClient(pageNumber,noOfRows,state.Taskid,state.AgentName,onSuccess,onFailure)
}, [true,state.Taskid,state.AgentName,pageNumber,noOfRows])


  

 

 
  let dataInArrayForPaginaion = [];
  // useEffect(() => {
  //   setPosts(null);
  //   setPageNumber(1);
      
  //     if (props.Detail !== null && props.Detail !== undefined) {
  //       for (let i = 0; i < props.Detail?.response?.length; i++) {
    
  
  //                     let str = props.Detail?.response[i].Datetime.toString()
  //                        str = str.split("T");
  //                    //for(let i = 0; i < dataInArrayForPaginaion.length; i++){
  //                   if (state.AgentName === "" && state.Date === ""){
                  
  //                       dataInArrayForPaginaion.push(props.Detail.response[i]);
  //                       setPosts(dataInArrayForPaginaion)
  //                     }
                     
  //       }
  //     }
  // }, [props.Detail]);



  // const onSearchButton=()=>{
  //   let body={
  //     Taskid:8
  //   }

  //   props.showDetailsOfClient(body,onSuccess,onFailure)
  // }
  useEffect(() => {
    if (props.Response !== null && props.Response !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Response.length; i++) {
        if (teamId === null) {
          let obj = {
            value: props.Response[i].Dashboarduserid,
            label: props.Response[i].name,
            phone: props.Response[i].phoneNo,
          };
          arr.push(obj);
        } else if (props.Response[i].teamid == teamId) {
          let obj = {
            value: props.Response[i].Dashboarduserid,
            label: props.Response[i].name,
            phone: props.Response[i].phoneNo,
          };
          arr.push(obj);
        } else {
       
        }
      }
      setOptions(arr);
    }
  }, [props.Response]);
  
  useEffect(()=>{
    if(props.Detail!==null && props.Detail!==undefined)
    {
      setPosts(props.Detail?.response)
    }

  },[props.Detail]);

  const onSuccess=()=>{}
  const onFailure=()=>{}

  
  // const [noOfRows, setnoOfRows] = useState("");
  // let numberOfRows;
  // const onChangeNoOfRows = (val) => {
  //   setnoOfRows(parseInt(val));
  //   numberOfRows = parseInt(val);
  //   setPageNumber(1);
  // };
  const onChange = (val, name) => {
   setState({ ...state, [name]: val });
  };
  const reset=()=>{
setState({...state,AgentName:"",
Date:""})
  }
  // useEffect(() => {
   
  //   if (props.Detail !== null && props.Detail !== undefined) {
  //     for (let i = 0; i < props.Detail.length; i++) {


  //                   let str = props.Detail[i].Datetime.toString()
  //                      str = str.split("T");
  //                  //for(let i = 0; i < dataInArrayForPaginaion.length; i++){
  //                 if (state.AgentName === "" && state.Date === ""){
                
  //                     dataInArrayForPaginaion.push(props.Detail[i]);
  //                     setPosts(dataInArrayForPaginaion)
  //                   }
  //                   else if(props.Detail[i].Agentname == state.AgentName && state.Date === ""){
                        
  //                       dataInArrayForPaginaion.push(props.Detail[i]);
  //                       setPosts(dataInArrayForPaginaion)
  //                     }
  //                     else if (str[0] == state.Date && state.AgentName === ""){
                    
  //                       dataInArrayForPaginaion.push(props.Detail[i]);
  //                       setPosts(dataInArrayForPaginaion)
  //                     }
  //                     else if (str[0] == state.Date && props.Detail[i].Agentname == state.AgentName) {
                     
  //                       dataInArrayForPaginaion.push(props.Detail[i]);
  //                       setPosts(dataInArrayForPaginaion)
  //                     }
                     
  //                     else{
  //                       //dataInArrayForPaginaion.push("");
  //                       setPosts(dataInArrayForPaginaion)
  //                     }
  //                  // }
  //              // }
        


  //      // setPosts(props.Detail);
  //     }
  //   }
    
  // }, [state])

  // const [posts, setPosts] = useState([]);
  // const [pageNumber, setPageNumber] = useState(2);
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

    return (
        <CardHeader className="border-0">
        {/* <RecordingModal modal={isOpen} toggle={toggler} Data={props.Call_Records} number={state.ClientPhone} /> */}
        <h3 className="mb-0"> File Details </h3>
        <CardBody>
          <form>
            <div className="pl-lg-4">
              <Row>
                {/* <Col lg="4" md="4" sm="6">
                  <label className="form-control-label" for="input-username">
                    Client Phone Number
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    onBlur={() => CheckFields("phoneNumber")}
                    value={state.ClientPhone}
                    onChange={(e) => onChange(e.target.value, "ClientPhone")}
                  ></input>
                  {error.phoneNumberError !== "" &&
                    error.phoneNumberError !== null && (
                      <small style={{ marginTop: "2px" }}>
                        <span style={{ color: "red" }}>
                          {error.phoneNumberError}{" "}
                          <i className="fas fa-exclamation-circle"></i>
                        </span>
                      </small>
                    )}
                </Col>
                <Col lg="4" md="4" sm="6">
                  <label className="form-control-label" for="input-username">
                    Client Email Address
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    onBlur={() => CheckFields("email")}
                    placeholder=""
                    value={state.ClientEmail}
                    onChange={(e) => onChange(e.target.value, "ClientEmail")}
                  ></input>
                  {error.emailError !== "" && error.emailError !== null && (
                    <small>
                      <span style={{ color: "red" }}>
                        {error.emailError}{" "}
                        <i className="fas fa-exclamation-circle"></i>
                      </span>
                    </small>
                  )}
                </Col> */}
                <Col lg="4" md="4" sm="6">
                  <label className="form-control-label" for="input-username">
                    Agent Name
                  </label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    options={options}
                    id="exampleFormControlSelect1"
                    type="select"
                  value={{label:state.AgentName}}
                    onChange={(e) => onChange(e.label, "AgentName")}
                  />
                </Col>
                <Col lg="4" md="4" sm="6">
                  <label className="form-control-label" for="input-username">
                    Date
                  </label>
                  <input
                    type="date"
                    id="input-username"
                    className="form-control"
                    value={state.date}
                    onChange={(e) => onChange(e.target.value, "Date")}
                  ></input>
                </Col>
                <Col lg="4" md="4" sm="6">
           
                <Button
                color="info"
                size="sm"
                id="search"
                // onClick={(e) => findValueInArray(state.userName)}
           onClick={reset}
              >
                <span className="btn-inner--text"></span>
                <span className="btn-inner--icon">
                <i className="fas fa-undo"></i>
                </span>
              </Button>
              </Col>
                {/* <Col lg="4" md="4" sm="6">
                  <label className="form-control-label" for="input-username">
                    Client Name
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    value={state.ClientName}
                    disabled
                  ></input>
                  &nbsp;
                </Col> */}
                &nbsp;
              </Row>
             
              {/* <Tooltip
                placement="bottom"
                isOpen={tooltipOpen.search}
                autohide={false}
                target="search"
                toggle={() => toggle("search")}
              >
                Search
              </Tooltip> */}
  
              {/* <Button color="danger" size="sm" id="reset" 
            //   onClick={onReset()}
              >
                <span className="btn-inner--text"></span>
                <span className="btn-inner--icon">
                  <i className="fas fa-undo"></i>
                </span>
              </Button> */}
              {/* <Tooltip
                placement="bottom"
                isOpen={tooltipOpen.reset}
                autohide={false}
                target="reset"
                toggle={() => toggle("reset")}
              >
                Reset
              </Tooltip> */}
            </div>
          </form>
    
          {/* <Button color="danger" size="sm" onClick={toggler}>
            View Recording..
          </Button> */}
        </CardBody>
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
          <TableOfFileInfo
            paginatedPosts={posts}
             state={state}
            // teamId={teamId}
          ></TableOfFileInfo>
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

export default FormOfFileInfo
