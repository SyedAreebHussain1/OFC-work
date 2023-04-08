import jsPDF from 'jspdf';
import React from 'react';
import { useState, useEffect ,useRef} from "react";
import {
    CardBody,
    CardHeader,
    Card,
    Row,
    Col,
 
  } from "reactstrap";

function Positioning(props) {

useEffect(() => {
props.ShowAllPositions(onSuccess,onFailure);
}, [true])

const onSuccess=()=>{}
const onFailure=()=>{}


const checkHandle=(check,value)=>{
 if(check===true)
 {props.array.push(value);

 }
 else{
  let position = props.array.indexOf(value);
  props.array.splice(position, 1);
 }

}







  const [disabled, setDisabled] = useState(false);
  const [disabledd, setDisabledd] = useState(true);
  const [hide, setHide] = useState(false);

  

    return (
        <div>
            <Card  style={{ margin: '10px' }} className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0"> Positioning </h3>
                <CardBody>
                  <form>
                    <div className="pl-lg-4">
                      <Row>
                      {props.AllPositions !== null &&
            props.AllPositions !== undefined ? (
            props.AllPositions.map((posts, index) => {


              return (
         
             
                        <Col lg="4" md="6" sm="6" xs="4">
                     <label  className="form-control-label"
                            for="input-username">
                              {posts.PositionName}
                              
                            
            </label>
                  
                       <input
                        type="checkbox"
                         name="period"
                         id='ck'
                        onChange={(e)=>checkHandle(e.target.checked,posts.PositionName)}

                       />
                     </Col>
                     
                     
                     )}))
                     
                     :""}

                        
                      </Row>
                    </div>
                  </form>
                </CardBody>
              </CardHeader>
            </Card>

        </div>
    )
}

export default Positioning
