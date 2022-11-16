import React ,  { useState, useEffect } from "react";
import { CardBody, Button, CardHeader, Row, Col, Input } from "reactstrap";


const FormOfPlotTransferApproval = () => {
    return (
      <CardHeader className="border-0">
        <CardBody>
          <form>
            <div className="pl-lg-4">
              <Row>
              <Col lg="3" md="3" sm="3"> </Col>
              <Col lg="5" md="5" sm="5">
              <Button
                color="info"
                size="sm"
                id="search"
              >
                <span className="btn-inner--text">View NOC{" "}</span>
                <span className="btn-inner--icon">
                  <i className="fas fa-search"></i>
                </span>
              </Button>
              <Button
                color="info"
                size="sm"
                id="search"
              >
                <span className="btn-inner--text">View Customer Info{" "}</span>
                <span className="btn-inner--icon">
                  <i className="fas fa-search"></i>
                </span>
              </Button>
              <Button
                color="info"
                size="sm"
                id="search"
                >
                <span className="btn-inner--text">View Token Money{" "}</span>
                <span className="btn-inner--icon">
                  <i className="fas fa-search"></i>
                </span>
              </Button>
           
              </Col>
              <Col lg="3" md="3" sm="3"> </Col>
              </Row>
              <br/>
              <Row>
              <Col lg="2" md="2" sm="2"> </Col>
              <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Comment
                  </label>
                  <input
                    type="text"
                    id="input-username"
                    className="form-control"
                    placeholder=""
                    disabled
                    // onBlur={() => CheckFields("phoneNumber")}
                    
                    // onChange={(e) => onChange(e.target.value, "ClientPhone")}
                  ></input>
                  </Col>
                  <Col lg="2" md="2" sm="2"></Col>
              </Row>
              <br/>
              <Row>
                 <Col lg="4" md="4" sm="6"></Col>
                 <Col lg="4" md="4" sm="6">
                 <Button
                color="danger"
                size="sm"
                id="search"
              >
                <span className="btn-inner--text">Approve</span>
                <span className="btn-inner--icon"></span>
              </Button>
              <Button
                color="danger"
                size="sm"
                id="search"
              >
                <span className="btn-inner--text">Reject</span>
                <span className="btn-inner--icon"></span>
              </Button>
              <Button
                color="danger"
                size="sm"
                id="search"
                >
                <span className="btn-inner--text">Cancel</span>
                <span className="btn-inner--icon"></span>
              </Button>
              </Col>
              </Row>
          
             
            </div>
          </form>
          <br />
          
        
        
         
      
        </CardBody>
        <hr/>
      </CardHeader>
    )
}

export default FormOfPlotTransferApproval
