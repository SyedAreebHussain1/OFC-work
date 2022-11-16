import React from 'react'
import { ModalFooter,Modal,ModalBody,ModalHeader } from 'reactstrap';
import { Button,Row,Input,Col,Card,CardBody,CardHeader } from 'reactstrap';
import { useEffect,useState } from 'react';
import { connect } from "react-redux";
import { showAmountMiddleware,showPaymentThroughMiddleware,showPaymentTypeMiddleware } from 'views/PaymentReceipt/middleware';
import swal from 'sweetalert';





const UpdateModal = (props) => {



    const dateFunction=(date)=>{
        const nDate = new Date(date).toLocaleString('en-US', {timeZone: 'Asia/Karachi',});
        return (nDate)
      }

    
    const saveData=()=>{
        let body={
            CurrencyTypeId:state.CurrencyTypeId,
            Amount:state.Amount,
            PaymentThroughId:state.PaymentThroughId,
            PaymentThroughDescription:state.paymentTypeDescription,
            Dated:state.Dated,
            InstallmentNo:state.InstallmentNo,
            through:state.through,
            PaymentTypeId:state.PaymentTypeId,
            Remarks:state.Remarks,
           
            ConfirmationStatus:props.stateData.ConfirmationStatus,
           PaymentReceiptId:props.stateData.PaymentReceiptId
            
        }
        props.ShowUpdatePayment(body,onsuccess,onfailure)
        props.toggle(false)


    }


//     useEffect(() => {



// if(props.UpdatePayment!==null && props.UpdatePayment!==undefined)
// {
//     swal({
//         title: "Success!",
//         text: "Updated",
//         type: "Success",
//       }).then(function (isConfirm) {
//         if (isConfirm) {
         
//         } else {
         
//         }
//       });
// }
      

    
//     }, [props.UpdatePayment])


    const onChange = (val, name) => {
     
            setState({ ...state, [name]: val })
       
    };


    useEffect(() => {
        props.showAmountMiddleware(onsuccess, onfailure)
        props.showPaymentThroughMiddleware(onsuccess, onfailure)
        props.showPaymentTypeMiddleware(onsuccess, onfailure)
    }, [true])
    
    const onsuccess = () => { }
    const onfailure = () => {
        swal({
            title: "Wrong!",
            text: " Not Updated",
            type: "warning",
          }).then(function (isConfirm) {
            if (isConfirm) {
             
            } else {
             
            }
          });

     }
    const [state, setState] = useState({
        
        Amount:"",
        Remarks:"",
        PaymentTypeId: "",
        drawnThrough:"",
        paymentTypeDescription:"",
        CurrencyTypeId: "",
        chequeNo:"",
        through:"",
    
        PaymentThroughId: "",
        Dated:"",
        InstallmentNo:"",
    });
   
useEffect(() => {

    if(props.stateData !== null && props.stateData !== undefined){
       //let d= dateFunction(props.stateData.Dated).toLocaleString('en-US', {timeZone: 'Asia/Karachi'})

let d,str;
       if(props.stateData.Dated !== null && props.stateData.Dated !== undefined){
        str = props.stateData.Dated;
        const myArr = str.split("T");
         d=myArr[0];
       }

        setState({
            ...state,
            Amount:props.stateData.Amount,
            Remarks:props.stateData.Remarks,
            PaymentTypeId: props.stateData.PaymentTypeId,
            drawnThrough:props.stateData.through,
            paymentTypeDescription:props.stateData.PaymentThroughDescription,
            CurrencyTypeId: props.stateData.CurrencyTypeId,
            chequeNo:props.stateData.chequeNo,
            through:props.stateData.through,
           // PaymentThroughDescription:props.stateData.PaymentThroughDescription,
            PaymentThroughId: props.stateData.PaymentThroughId,
           Dated:d,
            //props.stateData.Dated,
            InstallmentNo:props.stateData.InstallmentNo,
        })
    }
}, [props.stateData])





    return (

        <Modal size="lg" isOpen={props.modal}
         toggle={props.toggle} data={props.stateData}  
          UpdatePayment={props.UpdatePayment} ShowUpdatePayment={props.ShowUpdatePayment}
           // ShowApprovalReceipt={props.ShowApprovalReceipt}
           >
        {/* <ModalHeader toggle={props.toggle}>
         
        </ModalHeader> */}
        <ModalBody>
        <CardHeader className="border-0">
                        <Row>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label
                                    className="form-control-label"
                                    for="input-username"
                                >
                                    Sale Receipt No.
                                </label>
                                <input
                                   value={props.stateData.PaymentReceiptNo}
                                   disabled
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    ></input>
                            </Col>
                        </Row>
                    </CardHeader>
                    <hr style={{ margin: "0px" }} />
                    <CardBody>
                        <Row>
                            <Col lg="1" md="1" sm="6" xs="12">
                            <label className="form-control-label"
                                    for="input-username">
                                    Select
                                </label>
                                <Input
                                    id="exampleFormControlSelect1"
                                    type="select"
                                 //onChange={(e) => onChangeNoOfRows(e.target.value)}
                                >
                                    <option value="">Mr.</option>
                                    <option value="10">Ms.</option>
                                    <option value="25">Mrs.</option>
                                 </Input>

                            </Col>
                            <Col lg="3" md="3" sm="6" xs="12">
                            <label className="form-control-label"
                                    for="input-username">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Client Name"
                                     value={props.stateData.user_name}
                                     disabled
                                 
                                ></input>
                               
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Contact No.
                                </label>

                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Contact No"
                                     value={props.stateData.user_phone}
                                    disabled
                                    
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}

                                ></input>
                              

                            </Col>

                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Email"
                                    value={props.stateData.user_email}
                                    disabled
                                   

                                ></input>
                              
                            </Col>
                            <br />
                        </Row>
                        <Row>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Cnic
                                </label>

                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Cnic"
                                     value={props.stateData.CNIC}
                                    disabled
                                    
                                ></input>
                                
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Passport No.
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                   
                                     disabled
                                    
                                     value={props.stateData.PassportNo}
                                ></input>
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                          
          <label className="form-control-label">Currency</label>
          <Input
            type="select"
            value={state.CurrencyTypeId}
            onChange={(e) => onChange(e.target.value, "CurrencyTypeId")}
          >
            {props.PaymentAmount!== null &&
              props.PaymentAmount !== undefined &&
              props.PaymentAmount.map((val) => {
                return (
                  <option key={val.CurrencyTypeId} value={val.CurrencyTypeId}>
                    {val.CurrencyTypeName}
                  </option>
                );
              })}
          </Input>









                            
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Payment Through.
                                </label>
                                <Input
            type="select"
            value={state.PaymentThroughId}
            onChange={(e) => onChange(e.target.value, "PaymentThroughId")}
          >
            {props.PaymentThrough!== null &&
              props.PaymentThrough !== undefined &&
              props.PaymentThrough.map((val) => {
                return (
                  <option key={val.PaymentThroughId} value={val.PaymentThroughId}>
                    {val.PaymentthroughName}
                  </option>
                );
              })}
          </Input>

                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Amount
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Amount"
                                    onChange={(e) =>
                                        onChange(e.target.value, "Amount")}
                                     value={state.Amount}
                                    //  disabled
                                    // onBlur={() => CheckFields("Amount")}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                ></input>
                               
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Dated
                                </label>
                                <input
                                    type="date"
                                    id="input-username"
                                    className="form-control"
                                    placeholder="Only"
                                     value={state.Dated}
                                    onChange={(e) =>
                                        onChange(e.target.value, "Dated")}
                                ></input>
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Payment Type
                                </label>
                                <Input
            type="select"
            value={state.PaymentTypeId}
            onChange={(e) => onChange(e.target.value, "PaymentTypeId")}
          >
            {props.PaymentType !== null &&
              props.PaymentType  !== undefined &&
              props.PaymentType.map((val) => {
                return (
                  <option key={val.PaymentTypeId} value={val.PaymentTypeId}>
                    {val.PaymentTypeName}
                  </option>
                );
              })}
          </Input>





                              
                            </Col> 
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Payment Type Description
                                </label>

                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder=""

                                    // value={body.paymentType !== "Installment" ? state.paymentType : state.paymentType = ""}
                                    value={props.stateData.PaymentTypeDescription}
                                    onChange={(e) =>
                                        onChange(e.target.value, "paymentTypeDescription")}
                                    // onBlur={() => CheckFields("PaymentThroughDescription")}

                                ></input>
                               


                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Drawn Through
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder=""
                                   value={props.stateData.through}
                                   // onBlur={() => CheckFields("through")}
                                    onChange={(e) =>
                                        onChange(e.target.value, "through")}
                                ></input>
                              
                            </Col>
                            <Col lg="4" md="4" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                   Installment No
                                </label>
                                <input
                                    type="text"
                                    id="input-username"
                                    className="form-control"
                                    placeholder=""
                                   value={props.stateData.InstallmentNo}
                                   // onBlur={() => CheckFields("through")}
                                    onChange={(e) =>
                                        onChange(e.target.value, "InstallmentNo")}
                                ></input>
                               
                            </Col>
                            <Col lg="12" md="12" sm="6" xs="12">
                                <label className="form-control-label"
                                    for="input-username">
                                    Remarks:
                                </label>
                                <Input
                                    type="text"
                                    className="form-control"
                                   value={props.stateData.Remarks}
                                    // onBlur={() => CheckFields("remarks")}
                                   onChange={(e) =>onChange(e.target.value, "Remarks")}
                                ></Input>
                              
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Button
                                className="btn-icon btn-2"
                                color="danger"
                                type="button"
                               // size="sm"
                                id="save"
                               onClick={saveData}
                                >
                                <span className="btn-inner--icon">
                                    Save 
                                    {/* <i className="fas fa-save"></i> */}
                                </span>
                            </Button>
                            <Button color="info" onClick={props.toggle} >
            Close Modal
          </Button>
                            
                        </Row>
                        </CardBody>
                        </ModalBody>
                        <ModalFooter>
                     
         
        </ModalFooter>
      </Modal>
    );
  };

//export default UpdateModal

const mapStateToProps = (state) => ({
    PaymentAmount: state.paymentreceipt.PaymentAmount,
    PaymentThrough:state.paymentreceipt.PaymentThrough,
    PaymentType:state.paymentreceipt.PaymentType,


    
  });
  const mapDispatchToPrpos = (dispatch) => {
    return {
      showAmountMiddleware: (OnSuccess, OnFailure) =>
        dispatch(showAmountMiddleware(OnSuccess, OnFailure)),
        showPaymentThroughMiddleware: (OnSuccess, OnFailure) =>
        dispatch(showPaymentThroughMiddleware(OnSuccess, OnFailure)),
        showPaymentTypeMiddleware: (OnSuccess, OnFailure) =>
        dispatch(showPaymentTypeMiddleware(OnSuccess, OnFailure)),

     
        


    };
  };
  export default connect(mapStateToProps, mapDispatchToPrpos)(UpdateModal);