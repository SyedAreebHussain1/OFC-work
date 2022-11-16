import React, { useState,useEffect } from 'react';
import {
    CardBody,
    Button,
    Container,
    CardHeader,
    Card,
    Row,
    Table,
    Col,
    Input,
} from "reactstrap";
import Chart from "chart.js";
import '../../../assets/css/style.css'
import {
    chartOptions,
    parseOptions,
} from "variables/charts.js";
import {JwtDashboard} from "../../../store/helpers/JwtTimer/middleware";
import { connect } from "react-redux";
import Projects from "../../../components/Graph/ProjectsGraph/container";
import AllProjects from "../../../components/Graph/AllProjectsGraph/container";

const AllGraph = (props) => {
    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }
    var well = {
        boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
        borderRadius: '5%',
    }
    const [show, setShow] = useState(true);
    const onChange = (check) => {
 
        if (check === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    };

    const OnSuccessJwt = ()=>{}
    const OnFailureJwt = ()=>{}
  
    useEffect(() => {
      props.JwtDashboard( OnSuccessJwt, OnFailureJwt)
  
    },[true])
  

  
    useEffect(() => {
      if(props.GetUserJWTLogin === false) {
        localStorage.removeItem("auth")
        window.location.href="/auth/login"
      }
    })
    return (
        <div>
            <Row>
                <Col className="mb-5 mb-xl-0" xl="8">
                    <Card className="bg-gradient-white" style={well}>
                        <CardHeader className="bg-transparent">
                            <Row className="align-items-center">
                                <div className="col">
                                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                                        All Projects Graphs
                                    </h6>
                                    <h2 className="mb-0">Projects</h2>
                                </div>
                                <Col lg="6" md="6" sm="6">
                                    <label
                                        className="form-control-label"
                                        for="input-username"
                                    >
                                        Show Separate Projects
                                    </label>
                                    <Col lg="6" md="6" sm="6">
                                        <Input type="checkbox" name="check"
                                            onChange={(e) => onChange(e.target.checked)}
                                        />
                                    </Col>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="chart">
                                <Projects />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <AllProjects hidden={show}/>
            <br />
            <Row className="footerstyle">
                {/* <Button color="success" onClick={printDocument}>
                Generate Report &nbsp;
                <i class="fas fa-print"></i>
                </Button> */}
            </Row>
        </div>
    )
}
// export default AllGraph

const mapStateToProps = (state) => ({
    GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin
  });
  const mapDispatchToPrpos = (dispatch) => {
    return {
        JwtDashboard: ( OnSuccess, OnFailure) =>
        dispatch(JwtDashboard( OnSuccess, OnFailure)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToPrpos)(AllGraph);
