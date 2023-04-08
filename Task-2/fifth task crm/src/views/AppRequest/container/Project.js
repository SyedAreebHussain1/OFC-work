import React from 'react';
import { useState, useEffect ,useRef} from "react";
import jsPDF from "jspdf";
import { useLocation } from "react-router";
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from "react-to-print";
import Personal from "./Personal";

import '../../../assets/css/style.css';
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  CardImg, CardText,

  CardTitle, CardSubtitle,
  Row,
  Col,
  Table,
  Label,
  Input,
  FormGroup,
} from "reactstrap";

function Project() {

    const location = useLocation();
   
        const componentRef = useRef();
        useEffect(() => {
        
          setState({
            ...state,
            ClientId: location.state.id,
            ClientName: location.state.name,
            Clientcnic: location.state.cnic,
            TaskId: parseInt(location.state.taskid)
          });
       
        }, [location])
       
      
        const [state, setState] = useState({
          ClientId: null,
          ClientName: null,
          Clientcnic: null,
          projectid: null,
          projectName: null,
          sectorid: null,
          streetId: null,
          plotno: null,
          plotid: null,
          category: null,
          type: null,
          direction: null,
          status: null,
          position: null,
          TaskId: null,
      
      
        });
    return (
        <div>
 <Card style={{ margin: '10px' }} className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">  </h3>
                <CardBody>
                  <form>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Project Name
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.Project_name}
                            editable={false}
                          ></input>
                        </Col>

                        <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Sector Name
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.Sector_Name}
                            editable={false}
                          ></input>
                        </Col>

                        {/* <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Street Name
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.Streename}
                            editable={false}
                          ></input>
                        </Col> */}
                        <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot No
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.Plot_no}
                            editable={false}
                          ></input>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot Type
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.PlotType_Name}
                            editable={false}
                          ></input>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot Category
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.CategoryName}
                            editable={false}
                          ></input>
                        </Col>
                        {/* <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot Direction
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.DirectionName}
                            editable={false}
                          ></input>
                        </Col> */}
                        <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot Status
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.status_name}
                            editable={false}
                          ></input>

                        </Col>
                        {/* <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot Position
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.PositionName}
                            editable={false}
                          ></input>
                        </Col> */}
                        {/* <Col lg="6" md="6" sm="6">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Plot Description
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control"
                            disabled={true}
                            value={location.state.Description}
                            editable={false}
                          ></input>
                        </Col> */}
                        <h1></h1>
                        <br />
                        <h1></h1>
                        <br />
                      </Row>
                    </div>
                  </form>
                </CardBody>
              </CardHeader>
            </Card>
        </div>
    )
}

export default Project
