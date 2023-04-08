import React, { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";

// react plugin used to create charts
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Label,
  Card,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  CardBody,
  Input,
  FormGroup,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// import { getToken } from "../firebaseInit.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import firebase from "config/firebase";
import Header from "../components/Headers/Header/container/Header";
import { ALL_LEAD_USER } from "./AppRequest/constant";

const Index = (props) => {
  // const [isTokenFound, setTokenFound] = useState(false)

  // useEffect(() => {

  // //   const message=firebase.messaging;

  // // // messaging.requestPermission().then(()=>
  // // // {
  // // //   return messaging.getToken()
  // // // }).then((token)=>{

  // // // }).catch(()=>{

  // // // })
  // let data;
  // async function tokenFunc(){
  //   data=await getToken(setTokenFound);
  //   if(data){

  //   }
  //   return data;
  // }
  // tokenFunc();

  // }, [setTokenFound])
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const toggler = () => {
    setIsOpen(!isOpen);
  };
  const Assign = () => {
    setChecked(!checked);
  };
  let AssignArray = [
    { name: "Campaign" },
    { name: "Leads" },
    { name: "View Customer Detail" },
    { name: "Inventory" },
    { name: "Agent" },
  ];

  return (
    <>
      <Header />
      {/* Page content */}
      {/* <AddNew modal={isOpen} toggle={toggler} /> */}
      <Container className="mt-3" fluid>
        <Row>
          <h2>Coming Soon</h2>

          <Col lg="3" md="3" sm="3" xs="3">
            {/* <Listener/> */}
            {/* <Button color="success" onClick={toggler}>
              <i style={{fontSize:'18px'}} className="ni ni-fat-add" />
            </Button> */}
          </Col>
          <Modal isOpen={isOpen}>
            <ModalHeader>Assign</ModalHeader>
            <ModalBody>
              <Form>
                {/* <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Agent
                  </Label>
                </FormGroup> */}
                {AssignArray.map(({ name }) => (
                  <FormGroup check>
                    <Label check>
                      <input
                        type="checkbox"
                        // id={AssignArray}
                        name={name}
                        value={name}
                      />
                    </Label>
                  </FormGroup>
                ))}
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button variant="primary" onClick={Assign}>
                Assign{" "}
              </Button>
              <Button variant="secondary" onClick={toggler}>
                Close{" "}
              </Button>
            </ModalFooter>
          </Modal>
          {/* <Col className="mb-5 mb-xl-0" xl="8">
            <Card className=" shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Sales value</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Index;

// export const Listener = () => {
//   useEffect(() => {

//     const messageing = firebase.messaging();
//     messageing.onMessage((payload) => {

//     })
//   }, [])
//   return(
//     <>
//     <h1>Notfication</h1>
//     </>
//   )
// }
