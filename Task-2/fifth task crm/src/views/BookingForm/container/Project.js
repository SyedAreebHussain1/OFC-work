import React from 'react';
import { useState, useEffect, useRef } from "react";
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
import Select from "react-select";

function Project(props) {

  useEffect(() => {
   props.setlead({
     ...props.getlead,
     projectid: props.Project !== null && props.Project !== undefined && 2,
    })
  }, [props.Project])
  const onChange=(value,name)=>{
  props.setlead({...props.getlead,Category_id:value})
  }

  useEffect(() => {
    props.showProject(onSuccess, onFailure);
    let body = {
      projectid: 2,
    };
    props.showPlotSector(body, onSuccess, onFailure);
    props.showPlotType(onSuccess, onFailure);
    props.showPlotSize(onSuccess, onFailure);
    


  }, [true]);
  const onSuccess = () => { }
  const onFailure = () => { }
useEffect(() => {
  props.setlead({...props.getlead, projectid:props.Project?.[1]?.Project_id})
}, [props.Project])

  useEffect(() => {
   props.setlead({...props.getlead, Sector_id:props.Sector?.[0]?.Sector_id})

  }, [props.Sector])
useEffect(() => {
  let body2={
    Sector_id:props.getlead.Sector_id,
  }
  props.showPlotStreet(body2,onSuccess,onFailure);

    props.setlead({...props.getlead, PlotType_id:props.Type?.[1]?.PlotType_id})
   
  }, [props.Type])
  useEffect(() => {
    props.setlead({...props.getlead, streetid:props.Street?.[0]?.Street_id})
  }, [props.Street])




  const [size, setsize] = useState([null]);
  useEffect(() => {
    if (props.Size !== null && props.Size !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Size.length; i++) {
        if (props.Size[i].Category_id == 1 || props.Size[i].Category_id == 16 || props.Size[i].Category_id == 35) {
          let obj = {
            value: props.Size[i].Category_id,
            label: props.Size[i].CategoryName,
          };
          arr.push(obj);

        }

      }
      setsize(arr);
    }
  }, [props.Size]);



  const location = useLocation();

  const componentRef = useRef();
 

  
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
                   
                    <Input
                      id="exampleFormControlSelect1"
                      type="select"
                        disabled
                      value={props.Project?.[1].Project_id}
                      // onChange={(e) => OnChange("projectid", e.target.value)}
                    >
                  

                      {props.Project !== null &&
                        props.Project !== undefined &&
                        props.Project.map((source) => {
                          return (
                            <option
                              key={source.Project_id}
                              value={source.Project_id}
                            >
                              {source.Project_name}
                            </option>
                          );
                        })}
                    </Input>

                  </Col>

                  <Col lg="6" md="6" sm="6">
                    <label
                      className="form-control-label"
                      for="input-username"
                    >
                      Sector Name
                    </label>

                    <Input
                      disabled
                      id="exampleFormControlSelect1"
                      type="select"
                     value={props.getlead.sectorid}
                    // onChange={(e) => OnChangeSoures(e.target.value)}
                    >

                      {props.Sector !== null &&
                        props.Sector !== undefined &&
                        props.Sector.map((source) => {
                          return (
                            <option
                              key={source.Sector_id}
                              value={source.Sector_id}
                            >
                              {source.Sector_Name}
                            </option>
                          );
                        })}
                    </Input>
                  </Col>
                  <Col lg="6" md="6" sm="6">
                    <label
                      className="form-control-label"
                      for="input-username"
                    >
                      Plot Size
                    </label>

                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable={true}
                      options={size}
                      id="exampleFormControlSelect1"
                      type="select"
                    onChange={(e) => onChange(e.value, "Size")}
                    />
                   
                  </Col>
                  <Col lg="6" md="6" sm="6">
                    <label
                      className="form-control-label"
                      for="input-username"
                    >
                      Plot Type
                    </label>

                    <Input
                      disabled
                      id="exampleFormControlSelect1"
                      type="select"
                      value={props.Type?.[1].PlotType_Name}
                    // onChange={(e) => OnChangeSoures(e.target.value)}
                    >
                      {props.Type !== null &&
                        props.Type !== undefined &&
                        props.Type.map((source) => {
                          return (
                            <option
                              key={source.PlotType_id}
                              value={source.PlotType_Name}
                            >
                              {source.PlotType_Name}
                            </option>
                          );
                        })}
                    </Input>
                    
                  </Col>
                  <Col lg="6" md="6" sm="6">
                    <label
                      className="form-control-label"
                      for="input-username"
                    >
                      Street
                    </label>

                    <Input
                      disabled
                      id="exampleFormControlSelect1"
                      type="select"
                      // value={props.Type?.[1].PlotType_Name}
                    // onChange={(e) => OnChangeSoures(e.target.value)}
                    >
                      {props.Street !== null &&
                        props.Street !== undefined &&
                        props.Street.map((source) => {
                          return (
                            <option
                              key={source.Street_id}
                              value={source.Street_id}
                            >
                              {source.Streename}
                            </option>
                          );
                        })}
                    </Input>
                    </Col>

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
