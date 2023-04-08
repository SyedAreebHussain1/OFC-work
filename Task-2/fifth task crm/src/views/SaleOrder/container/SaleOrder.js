/* eslint-disable no-unused-vars */
import Headers from "components/Headers/Header1";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, Container, Row } from "reactstrap";
import { useHistory, useLocation } from "react-router";
import AddPaymentModal from "../AddPaymentModal";
import Split_Saleorder from "./Split_Saleorder";

export const SaleOrder = (props) => {
  const [state, setState] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.stateData !== null && location.stateData !== undefined) {
      setState(location.stateData);
    }
  }, [location]);

  useEffect(() => {
    if (state?.PaymentPlaneId == null && state?.Plotid !== undefined) {
      props.showPlotPrice(state?.Plotid, onSuccess, onFailure);
    }
  }, [state?.PaymentPlaneId]);
  const current = new Date();

  useEffect(() => {
    if (props.PlotPrice !== null && props.PlotPrice !== undefined) {
      setState({
        ...location.stateData,
        NetAmount: props.PlotPrice?.plotPrice?.NetAmount,
      });
    }
  }, [props.PlotPrice, location]);

  const onSuccess = () => {};
  const onFailure = () => {};

  const [isTrue, setIsTrue] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const Toggler = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <AddPaymentModal
          modal={isOpen}
          toggle={Toggler}
          amount={state?.amount}
        />
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Sale Order</h3>
              </CardHeader>
              {/* <CardBody>
                <Row>
                  <Col>
                    <Button
                      className="mt-3"
                      onClick={NewPlan}
                      color="danger"
                      // comment by iqra because of payment schedule from backend
                      disabled={isTrue}
                    >
                      ADD NEW{" "}
                    </Button>
                  </Col>
                </Row>
              </CardBody> */}
              <Split_Saleorder
                state={state}
                setIsTrue={setIsTrue}
                // FullSaleOrderPlan={FullSaleOrderPlan}
                getFullSaleOrderPlan={props.getFullSaleOrderPlan}
              />
              {/* comment by iqra because of payment schedule is by backend */}
              {/* {state !== null &&
              state !== undefined &&
              location.body1 !== null &&
              location.body1 !== undefined ? (
                <Split_Saleorder
                setIsTrue={setIsTrue}
                  body={location.body1}
                  state={location.state}
                  paymentScheduleArray={location.arrayForapi}
                />
              ) : (
                <Split_Saleorder
                setIsTrue={setIsTrue}
                  body={location.body1}
                  paymentScheduleArray={location.arrayForapi}
                />
              )}
              {state !== null && state !== undefined ? (
                <PaymentPlan state={location.state} />
              ) : (
                ""
              )} */}

              {/* <Split_SaleTable/> */}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
