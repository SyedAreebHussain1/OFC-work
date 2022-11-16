import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Col,
  Row,
  Input,
} from "reactstrap";
import { useState, useEffect } from "react";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import swal from 'sweetalert';

const ActionModal = (props) => {
    const [state, setstate] = useState({
        Comment: "",
        Detuction:30,
      })
      const CheckFields = (name) => {
        if (name === "Comment") {
          setError({
            ...error,
            CommentError: validate("required", state.Comment),
          });
        }
      };
      const onChange = (name, value) => {
        
          setstate({
            ...state,
            [name]: value,
          });
        
      }
    
      const [error, setError] = useState({
        CommentError: "",
        DetuctionError:"",
    
      });


     

     
        const Approve = () => {
          if(state.Detuction!=="" && state.Detuction==30 )
          {
          let body = {
           remarksaprovel:state.Comment,
            RequestStatusId:63,
            deductionPercentage:state.Detuction,
            filepath:null,
            reqId:props.stateData.PlotReturnRequestId,
           
          }
          setError({
            ...error,
            DetuctionError: null
          });
          props.UpdatePlotReturnStatus(body, onSuccess, onFailure)

          // if(props.UpdateStatus!==null && props.UpdateStatus!==undefined)
          // {
          //   swal("Successful","Request Approve","success")
   
          // }
         
          setstate({ ...state,Comment: "", });
          props.toggle(false)
          
         
        

      }
      else{
        setError({
          ...error,
          DetuctionError: "Detuction Amount Must Be 30"
        });
      }
     
        
        
    
        
      }
    
    const onSuccess=()=>{}
    const onFailure=()=>{}

    
  
    
    return (
        <Modal size="lg" isOpen={props.modal}
        toggle={props.toggle} data={props.stateData}
        ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus} Update={props.Update}
 
        ShowApprovalReceipt={props.ShowApprovalReceipt}>
        <ModalHeader toggle={props.toggle}>
         
         
          <h3>Approval</h3>
          <h4>Remarks: {props.stateData.remarksByRequestInitiator}</h4>
         
        </ModalHeader>
        <ModalBody>
          <Row>
  
            <Col lg="12" md="10" sm="10">
                <label>Comment</label> 
            <Input
              type="textArea"
              placeholder="Enter Comment"
              value={state.Comment}
              onBlur={(e) => CheckFields("Comment")}
              onChange={(e) => onChange("Comment", e.target.value)}
            ></Input>
            {error.CommentError !== "" &&
              error.CommentError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.CommentError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
              </Col>
              <Col lg="12" md="12" sm="10">
              <label>Detuction %</label> 
               <Input
              type="textArea"
              placeholder="Detuction %"
              value={state.Detuction}
              onBlur={(e) => CheckFields("Detuction")}
              onChange={(e) => onChange("Detuction", e.target.value)}
            ></Input>
            {error.DetuctionError !== "" &&
              error.DetuctionError !== null && (
                <small style={{ marginTop: "2px" }}>
                  <span style={{ color: "red" }}>
                    {error.DetuctionError}{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                </small>
              )}
   </Col>
  
  
          </Row>
  
  
        </ModalBody>
        <ModalFooter>
          {
            ///props.stateData.ConfirmationStatusName == "Approved" ?
              //"" : 
              <Button color="danger" 
              // disabled={state.Comment=="" || error.CommentError!==null || state.Detuction=="" || state.Detuction!==30}
              disabled={state.Comment=="" || state.Detuction==""}
              onClick={Approve}
              >
                Approve
              </Button>
            //    <Button color="danger" disabled={state.Comment==""} disabled={state.Comment==""}  >
            //    Approve
            //  </Button>
  
          }
          {/* <Button color="danger" disabled={state.Comment==""} >
              Approve
            </Button> */}
         
       
  
          <Button color="info" onClick={props.toggle} >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  };
export default ActionModal
