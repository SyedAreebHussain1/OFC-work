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

const RejectModal = (props) => {
    const [state, setstate] = useState({
        Comment: ""
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
        if (name === "Comment") {
          setstate({
            ...state,
            Comment: value,
          });
        }
      }
    
      const [error, setError] = useState({
        CommentError: "",
    
      });


      const Reject = () => {
      
        let body = {
         remarksaprovel:state.Comment,
          RequestStatusId:64,
          deductionPercentage:null,
         
          filepath:null,
          reqId:props.stateData?.PlotReturnRequestId,
         
        }
        
        props.UpdatePlotReturnStatus(body, onSuccess, onFailure)

        
        setstate({ ...state,Comment: "", });
       
       
        props.toggle(false)
        
      

    
   
      
      
  
      // props.ShowApprovalReceipt(onSuccess,onFailure)
    }
  
    // useEffect(() => {
    //   if(props.UpdateStatus!==null && props.UpdateStatus!==undefined)
    // {
    //   swal("Successful","Request Rejected","success")

    // }
    // }, [props.UpdateStatus])
  
  const onSuccess=()=>{}
  const onFailure=()=>{}
    
    return (
        <Modal size="lg" isOpen={props.modal}
        toggle={props.toggle} data={props.stateData}
        ShowUpdateApprovalStatus={props.ShowUpdateApprovalStatus} Update={props.Update}
 
        ShowApprovalReceipt={props.ShowApprovalReceipt}>
        <ModalHeader toggle={props.toggle}>
         
        
          <h3>Reject</h3>
          <h4>Remarks: {props.stateData?.remarksByRequestInitiator}</h4>
         
        </ModalHeader>
        <ModalBody>
          <Row>
  
            <Col lg="12" md="10" sm="10">
                <label>Comment</label> 
            <Input
              type="textArea"
              placeholder="Enter Comment"
              //value={body.SaleQuotationNo}
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
             

  
  
          </Row>
  
  
        </ModalBody>
        <ModalFooter>
          {
            ///props.stateData.ConfirmationStatusName == "Approved" ?
              //"" : 
              <Button color="danger" 
              disabled={state.Comment == "" }
               onClick={Reject}
              >
                Reject
              </Button>
         
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
export default RejectModal
