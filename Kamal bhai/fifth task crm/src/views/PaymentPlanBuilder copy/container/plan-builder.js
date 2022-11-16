import React, { useState, useEffect } from "react";
import Headers from "components/Headers/Header1";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useLocation, useHistory } from "react-router";
import PaymentPlan from "./PaymentPlan";

export const PlanBuilder = (props) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const Toggler = () => {
    setIsOpen(!isOpen);
  };
const [calculatedValue, setCalculatedValue] = useState({
totalNetAmount:location.state?.amount,
discountPercentage:"0",
afterDiscount:location.state?.amount,
downpaymentPercentage:"30",
downpaymentAmount:"",
//tokenMoney:"20000",
tokenMoney:location.state?.TokenMoney,
netAmount:"",
downpaymentInstallment:"",
downpaymentInstallmentAmount:"",
possessionPercentage:"20",
possessionAmount:"",
paymentPlan:"",
installmentAmount:"",
totalInstallmentAmount:"",
disabled:true,
noOfBalloonInst:"",
noOfMonthlyInst:"",
perBalloonInst:"",
changeNoOfBalloonInst:"",
totalBalloonAmount:""

});
//changes in discountpercentage
useEffect(() => {

if(calculatedValue.discountPercentage!=="" )
  {

let afterDiscount=(calculatedValue.discountPercentage/100)*calculatedValue.totalNetAmount;

setCalculatedValue({...calculatedValue,afterDiscount:calculatedValue.totalNetAmount-afterDiscount})
  }
  
}, [calculatedValue.discountPercentage])
// changes in discountedAmount and Downpayment percentage
useEffect(() => {
  if(calculatedValue.downpaymentPercentage!=="" && calculatedValue.downpaymentPercentage >=10 
  && calculatedValue.downpaymentPercentage<=80 
  &&
  calculatedValue.possessionPercentage!=="" && calculatedValue.possessionPercentage>=10)
  
  {
    let afterDownPaymentPercentage=(calculatedValue.downpaymentPercentage/100)*calculatedValue.afterDiscount;
    let afterPossessionPercentage=(calculatedValue.possessionPercentage/100)*calculatedValue.afterDiscount;
    
  setCalculatedValue({...calculatedValue,possessionAmount:afterPossessionPercentage,netAmount:calculatedValue.afterDiscount-afterDownPaymentPercentage-afterPossessionPercentage,
    downpaymentAmount:afterDownPaymentPercentage-calculatedValue.tokenMoney})
}
else if(calculatedValue.downpaymentPercentage==100 ){

  setCalculatedValue({...calculatedValue,possessionAmount:0,netAmount:0,
    downpaymentAmount:calculatedValue.afterDiscount-calculatedValue.tokenMoney})

}
else if(calculatedValue.downpaymentPercentage>100 || calculatedValue.downpaymentPercentage>80  ){

  setCalculatedValue({...calculatedValue,possessionAmount:0,netAmount:0,
    downpaymentAmount:0})

}

}, [calculatedValue.afterDiscount,calculatedValue.downpaymentPercentage,calculatedValue.possessionPercentage])

//changes in downpayment installment
useEffect(() => {
  if(calculatedValue.downpaymentInstallment!=="" )
  {
    let downpaymentInstallmentAmount=Math.ceil(calculatedValue.downpaymentAmount/calculatedValue.downpaymentInstallment) ;
setCalculatedValue({...calculatedValue,downpaymentInstallmentAmount:downpaymentInstallmentAmount})

  }
 
}, [calculatedValue.downpaymentInstallment])


//Change in months
useEffect(() => {
  
  if(calculatedValue.paymentPlan!=="")
  {
    let installmentAmount=  calculatedValue.netAmount/calculatedValue.paymentPlan;
    setCalculatedValue({...calculatedValue,installmentAmount:installmentAmount,
    totalBalloonAmount:0,perBalloonInst:0,noOfBalloonInst:0})
  }
}, [calculatedValue.paymentPlan])


//Change in installmentAmount
useEffect(() => {
 if(calculatedValue.installmentAmount!=="" && calculatedValue.paymentPlan!=="" && calculatedValue.disabled==false)
 {
   if(calculatedValue.paymentPlan=="1")
   {
    let installmentAmount= calculatedValue.installmentAmount*1;
   
    
    if(installmentAmount>calculatedValue.netAmount)
    {
     console.log("installmentAmount Is  larger")
    }
    else{
      let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      let noOfBalloonInst=0;
      let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
     setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      console.log("this is installment amount",installmentAmount);
      console.log("this is balloon amount",totalBalloonAmount)
 
    }
   }
   else if(calculatedValue.paymentPlan=="12")
   {
    let installmentAmount= calculatedValue.installmentAmount*11;
   
    
    if(installmentAmount>calculatedValue.netAmount)
    {
     console.log("installmentAmount Is  larger")
    }
    else{
      let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      let noOfBalloonInst=1;
      let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
     setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      console.log("this is installment amount",installmentAmount);
      console.log("this is balloon amount",totalBalloonAmount)
 
    }
   
   }
   else if(calculatedValue.paymentPlan=="24")
   {
    let installmentAmount= calculatedValue.installmentAmount*22;
   
    
    if(installmentAmount>calculatedValue.netAmount)
    {
     console.log("installmentAmount Is  larger")
    }
    else{
      let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
     let noOfBalloonInst=2;
     let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
     let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
     setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      console.log("this is installment amount",installmentAmount);
      console.log("this is balloon amount",totalBalloonAmount)
 
    }
   }
   else if(calculatedValue.paymentPlan=="36")
   {
    let installmentAmount= calculatedValue.installmentAmount*33;
   
    
    if(installmentAmount>calculatedValue.netAmount)
    {
     console.log("installmentAmount Is  larger")
    }
    else{
      let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      let noOfBalloonInst=3;
      let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
     setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      console.log("this is installment amount",installmentAmount);
      console.log("this is balloon amount",totalBalloonAmount)
 
    }

   }
   else if(calculatedValue.paymentPlan=="48")
   {
    let installmentAmount= calculatedValue.installmentAmount*44;
   
    
    if(installmentAmount>calculatedValue.netAmount)
    {
     console.log("installmentAmount Is  larger")
    }
    else{
      let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      let noOfBalloonInst=4;
      let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
     setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      console.log("this is installment amount",installmentAmount);
      console.log("this is balloon amount",totalBalloonAmount)
 
    }

   }
   else if(calculatedValue.paymentPlan=="60")
   {
    let installmentAmount= calculatedValue.installmentAmount*55;
   
    
    if(installmentAmount>calculatedValue.netAmount)
    {
     console.log("installmentAmount Is  larger")
    }
    else{
      let totalBalloonAmount=calculatedValue.netAmount-installmentAmount;
      let noOfBalloonInst=5;
      let perBalloonInst=totalBalloonAmount/noOfBalloonInst;
      let noOfMonthlyInst=calculatedValue.paymentPlan-noOfBalloonInst;
     setCalculatedValue({...calculatedValue,noOfMonthlyInst:noOfMonthlyInst,totalBalloonAmount:totalBalloonAmount,noOfBalloonInst:noOfBalloonInst,perBalloonInst:perBalloonInst})
      console.log("this is installment amount",installmentAmount);
      console.log("this is balloon amount",totalBalloonAmount)
 
    }

   }
  
   }
   }, [calculatedValue.installmentAmount])


  //  useEffect(() => {

  //   let perBalloonInst=calculatedValue.totalBalloonAmount/calculatedValue.noOfBalloonInst;
  //   setCalculatedValue({...calculatedValue,perBalloonInst:perBalloonInst})
   
  //  }, [calculatedValue.noOfBalloonInst])
   


  const onChangeballoonInst=(e)=>{
    let perBalloonInst=calculatedValue.totalBalloonAmount/e;
    setCalculatedValue({...calculatedValue,noOfBalloonInst:e,perBalloonInst:perBalloonInst})

  }

//check uncheck Code
  const handleCheck=({target})=>{

    if(target.checked)
    {
      setCalculatedValue({...calculatedValue,disabled:false,paymentPlan:"",installmentAmount:"",noOfBalloonInst:"",perBalloonInst:"",totalBalloonAmount:""})
 
    }
    else{
      
      setCalculatedValue({...calculatedValue,disabled:true,paymentPlan:"",installmentAmount:"",noOfBalloonInst:"",perBalloonInst:"",totalBalloonAmount:""})
    }
  }




 
  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader>
                <Row>
                  <Col lg="4" md="4" sm="6" xs="12">
                    <h2>Payment Builder 34</h2>
                  </Col>
                  <Col lg="4" md="4" sm="6" xs="12"></Col>
                  <Col lg="2" md="2" sm="6" xs="12">
                  <h2>
                      {location.state !== null && location.state !== undefined
                        ? location.state.plotNo + "_Custom"
                        : ""}
                    </h2>
                  </Col>
                  <hr />
                </Row>
              </CardHeader>

              <CardBody>
                <Row>
                  <Col lg="4" md="4" sm="6" xs="12">
                    <label className="form-control-label">
                      Total Net Amount
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      value={calculatedValue.totalNetAmount}
                      disabled
                    ></Input>

                    {/* {Error.CnicError !== "" && Error.CnicError !== null && (
                      <small>
                        <span style={{ color: "red" }}>{Error.CnicError}</span>
                      </small>
                    )} */}
                  </Col>

                  <Col lg="4" md="4" sm="6" xs="12">
                    <label className="form-control-label">
                      Discount Percentage
                    </label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        const regex = /\b([0-9]|[1-9][0-9]|100)\b/;
                        if (e.target.value === "" || regex.test(e.target.value)) {
                         // onChange(e.target.value, "yearsOfExperience");
                         setCalculatedValue({...calculatedValue,discountPercentage:e.target.value})
                        }
                      }}
                      // onKeyPress={(event) => {
                      //   if (!/([0-9]|[1-9][0-9]|100)/.test(event.key)) {
                      //     event.preventDefault();
                      //   }
                      // }}
                      maxLength="3"
                     // pattern="\b([1-9]|[1-9][0-9]|100)\b"
                      value={calculatedValue.discountPercentage}
                    //  onChange={(e)=>{setCalculatedValue({...calculatedValue,discountPercentage:e.target.value})}}
                      
                    ></Input>
                   
                  </Col>
                  <Col lg="4" md="4" sm="6" xs="12">
                    <label className="form-control-label">
                      After Discount Amount
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      disabled
                    value={calculatedValue.afterDiscount}
                    ></Input>
                  </Col>
                </Row>
                <hr />
                <h3>Downpayment</h3>
                <Row>
                <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">Token Money</label>
                    <Input
                      type="text"
                      placeholder="%"
                      disabled
                       value={calculatedValue.tokenMoney}
                      
                     
                    ></Input>
                   
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12"></Col>
                  <Col lg="4" md="4" sm="8" xs="12"></Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">{"Percentage (>=10 and <=80 or 100)"}</label>
                    <Input
                      type="text"
                      placeholder="%"
                     //  value={calculatedValue.downpaymentPercentage}
                       onChange={(e) => {
                        const regex = /\b([0-9]|[1-7][0-9]|80|100)\b/;
                        if (e.target.value === "" || regex.test(e.target.value)) {
                          setCalculatedValue({...calculatedValue,downpaymentPercentage:e.target.value})
                         
                        }
                      }}
                      value={calculatedValue.downpaymentPercentage}
                      maxLength="3"
                    //   onChange={(e)=>{setCalculatedValue({...calculatedValue,downpaymentPercentage:e.target.value})}}
                     
                    ></Input>
                   
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Down payment Amount
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      value={calculatedValue.downpaymentAmount}
                      disabled
                     
                    ></Input>
                    {/* {Error.Error !== "" && Error.Error !== null && (
                      <small>
                        <span style={{ color: "red" }}>{Error.Error}</span>
                      </small>
                    )}
                       */}
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12"></Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      No Of DownPayment Installment (1-9)
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                
                      onChange={(e) => {
                        const regex = /\b([1-9])\b/;
                        if (e.target.value === "" || regex.test(e.target.value)) {
                          setCalculatedValue({...calculatedValue,downpaymentInstallment:e.target.value})
                         
                        }
                      }}
                      value={calculatedValue.downpaymentInstallment}
                      maxLength="1"
                     // onChange={(e)=>{setCalculatedValue({...calculatedValue,downpaymentInstallment:e.target.value})}}
                    
                    ></Input>
                    
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      DownPayment per Installment Amount{" "}
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      disabled
                      value={calculatedValue.downpaymentInstallmentAmount}
                    ></Input>
                  </Col>
                </Row>
                <hr />
                <label className="form-control-label">{"On Possession (>=10 and <=20))"}</label>
              
                <Row>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">Percentage</label>
                    <Input
                      type="text"
                      placeholder="%"
                      value={calculatedValue.possessionPercentage}
                     // onChange={(e)=>{setCalculatedValue({...calculatedValue,possessionPercentage:e.target.value})}}
                      onChange={(e) => {
                        const regex = /\b([1-9]|[1][0-9]|20)\b/;
                        if (e.target.value === "" || regex.test(e.target.value)) {
                          setCalculatedValue({...calculatedValue,possessionPercentage:e.target.value})
                         
                        }
                      }}
                      
                      maxLength="3"
                    ></Input>
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Possession Amount
                    </label>
                    <Input
                      type="text"
                      disabled
                       value={calculatedValue.possessionAmount}
                    ></Input>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col lg="10" md="10" sm="10" xs="12">
                    <h3>Installments</h3>
                  </Col>
                  <Col lg="2" md="2" sm="2" xs="12">
                    {/* <Button color="danger" onClick={Calculate}>
                      Calculate
                    </Button> */}
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>{calculatedValue.netAmount}</Label>
                  </Col>
                </Row>
                {/* Months New Loginc Starts Here */}
                <Row>
                  <Col lg="4" md="4" sm="6">
                    <label className="form-control-label">Plan</label>
                    <Input
                      type="select"
                      value={calculatedValue.paymentPlan}
                      onChange={(e)=>{setCalculatedValue({...calculatedValue,paymentPlan:e.target.value})}}
                    
                    >
                      <option value="">Select</option>
                      <option value="1">1 Month</option>
                      <option value="12">1 year</option>
                      <option value="24">2 years</option>
                      <option value="36">3 years</option>
                      <option value="48">4 years</option>
                      <option value="60">5 years</option>
                     
                    </Input>
                    
                  </Col>
                  <Col lg="4" md="4" sm="6">
                    <label className="form-control-label">
                      Installment Amount
                    </label>
                    <Input
                      type="text"
                     disabled={calculatedValue.disabled}
                    value={calculatedValue.installmentAmount}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                      onChange={(e)=>{setCalculatedValue({...calculatedValue,installmentAmount:e.target.value})}}
                      // onChange={(e) => {
                      //   const regex = /([0-9])/;
                      //   if (e.target.value === "" || regex.test(e.target.value)) {
                      //     setCalculatedValue({...calculatedValue,installmentAmount:e.target.value})
                         
                      //   }
                      // }}
                      
                    
                    ></Input>
                  </Col>

                  <Col lg="1" md="1" sm="2">
                    <label className="form-control-label"></label>
                    <Input
                      type="checkbox"
                    onClick={handleCheck}
                    >
                 
                    </Input>
                  </Col>
                  <Col lg="2" md="2" sm="2">
                    <Label>Add Balloon Payment</Label>
                  </Col>
                </Row>

                <Row>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Balloon Installment (1-9)
                    </label>
                    <Input
                       disabled={calculatedValue.disabled}
                      type="text"
                    value={calculatedValue.noOfBalloonInst}
                  // onChange={(e)=>onChangeballoonInst(e.target.value)}

                    onChange={(e) => {
                      const regex = /\b([1-9])\b/;
                      if (e.target.value === "" || regex.test(e.target.value)) {
                        onChangeballoonInst(e.target.value)
                       
                      }
                    }}
                    // onChange={(e)=>{setCalculatedValue({...calculatedValue,noOfBalloonInst:e.target.value})}}
                    ></Input>
                   
                  </Col>

                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Amount Per Balloon Installment
                    </label>
                    <Input
                    type="text"
                    disabled
                    value={calculatedValue.perBalloonInst}
                    
                    >
                      {" "}
                    </Input>
                    {/* {error.noOfMonthsError !== "" &&
                      error.noOfMonthsError !== null && (
                        <small>
                          <span style={{ color: "red" }}>
                            {error.noOfMonthsError}
                          </span>
                        </small>
                      )} */}
                  </Col>

                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Total Balloon Amount
                    </label>
                    <Input
                      disabled={true}
                      type="text"
                      value={calculatedValue.totalBalloonAmount}
                    
                    >
                      {" "}
                    </Input>
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    {/* <Label>{label}</Label> */}
                  </Col>
                </Row>

                <Row>
                  {/* <Col lg="4" md="4" sm="8" xs="12"> */}
                    {/* <label className="form-control-label">
                      No of Installment
                    </label>
                    <Input
                      type="text"
                     
                    ></Input>
                   
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12">
                    <label className="form-control-label">
                      Installment Amount
                    </label>
                    <Input
                      type="text"
                      // value={state.installmentAmount}
                    
                    ></Input>
                  </Col>
                  <Col lg="4" md="4" sm="8" xs="12"></Col>
                  <Col className="mt-3" lg="4" md="4" sm="8" xs="12"> */}
                 
<Button color="info" size="sm" onClick={Toggler}>
                      <span className="btn-inner--icon">Generate</span>
                    </Button>
                  {/* </Col> */}
                </Row>
                <hr />
              </CardBody>
              <CardBody>
              <CardBody>
                {isOpen === true ? (
                  <PaymentPlan state={calculatedValue}  location={location.state} 
                  />
                ) : (
                  ""
                )}
              </CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
