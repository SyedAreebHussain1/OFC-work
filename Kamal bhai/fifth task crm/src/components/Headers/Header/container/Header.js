import { connect } from "react-redux";
import { CheckCampaign } from "../middleware";
import React, { useState, useEffect } from "react";
import logo from "../../../../assets/img/square-pro-1.png";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
// import { AddNew } from "../../../../store/helpers/addnew";

import axios from "axios";
import { ShowNoofcompaigns } from "../../../../config/api/URL";
import picture from "../../../../assets/img/bg3.png";
const Header = (props) => {
  // const FacebookTab = () => {
  //   alert("facebook alert");
  // };
  // const YouTubeTab = () => {
  //   alert("Youtube alert");
  // };
  // const InstagramTab = () => {
  //   alert("Instagram alert");
  // };
  // const LinkedInTab = () => {
  //   alert("LinkedIn alert");
  // };
  useEffect(() => {
    props.CheckCampaign(OnSuccess, onFailure);
  }, [true]);
  const OnSuccess = () => {};
  const onFailure = () => {
    // window.alert("Fail");
  };

  // const [data, setData] = useState(null);
  // const [Body, setBodyAPI] = useState({
  //   campaign_name: "",
  //   totalleads: "",
  //   // user_email: "",
  //   // user_phone: "",
  // });

  // useEffect(() => {

  //   axios({
  //     method: "get",
  //     url: ShowNoofcompaigns,
  //     data: Body,
  //   }).then((res, err) => {
  //     if (res.data.status === true) {
  //       setData(res.data.response);
  //
  //     } else {
  //
  //     }
  //   });
  // }, [true]);
  var well = {
    boxShadow:
      "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: "15px",
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${picture})` }}
        className="header  pb-8 pt-5 pt-md-8"
      >
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            {/* <Row>
              <img
                alt="..."
                src={
                  require("../../../../assets/img/square-pro-1.png")
                    .default

                }
                style={{ marginTop: '-70px' }}
                width='110'
                height='110'
                className="rounded-circle"
              />
            </Row> */}
            <Row>
              {props.Data !== null &&
                props.Data !== undefined &&
                props.Data.map((opt, index) => {
                  if (opt.campaign_name === "Facebook") {
                    return (
                      <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0 " style={well}>
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-blue text-uppercase text-muted mb-0"
                                >
                                  {opt.campaign_name}
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {opt.totalleads}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape blue text-blue rounded-circle shadow">
                                  <i className="fab fa-facebook" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                      <span className="text-nowrap">Since last month</span> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  }
                })}
              {props.Data !== null &&
                props.Data !== undefined &&
                props.Data.map((opt, index) => {
                  if (opt.campaign_name === "Instagram") {
                    return (
                      <Col lg="6" xl="3">
                        <Card
                          className="card-stats mb-4 mb-xl-0 well"
                          style={well}
                        >
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-uppercase text-indigo text-muted mb-0"
                                >
                                  {opt.campaign_name}
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {opt.totalleads}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape  text-indigo rounded-circle shadow">
                                  <i className="fab fa-instagram" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              {/* <span className="text-warning mr-2">
                                <i className="fas fa-arrow-down" /> 1.10%
                              </span>{" "}
                              <span className="text-nowrap">Since yesterday</span> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  }
                })}
              {props.Data !== null &&
                props.Data !== undefined &&
                props.Data.map((opt, index) => {
                  if (opt.campaign_name === "Youtube") {
                    return (
                      <Col lg="6" xl="3">
                        <Card
                          className="card-stats mb-4 mb-xl-0 well"
                          style={well}
                        >
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-red text-uppercase text-muted mb-0"
                                >
                                  {opt.campaign_name}
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {opt.totalleads}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape  text-red  rounded-circle shadow">
                                  <i className="fab fa-youtube" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              {/* <span className="text-danger mr-2">
                              <i className="fas fa-arrow-down" /> 3.48%
                            </span>{" "}
                            <span className="text-nowrap">Since last week</span> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  }
                })}
              {props.Data !== null &&
                props.Data !== undefined &&
                props.Data.map((opt, index) => {
                  if (opt.campaign_name === "Self") {
                    return (
                      <Col lg="6" xl="3">
                        <Card
                          className="card-stats mb-4 mb-xl-0 well"
                          style={well}
                        >
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-uppercase text-orange text-muted mb-0"
                                >
                                  {opt.campaign_name}
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {opt.totalleads}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape text-orange rounded-circle shadow">
                                  <i className="fas fa-user-plus" />
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              {/* <span className="text-success mr-2">
                            <i className="fas fa-arrow-up" /> 12%
                          </span>{" "}
                          <span className="text-nowrap">Since last month</span> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  }
                })}
              {/* <Col lg="6" xl="3" onClick={YouTubeTab}>
                <Card className="card-stats mb-4 mb-xl-0 bg-red border-0 shadow-none">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-white text-uppercase text-muted mb-0"
                        >
                          YouTube
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">450</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white  ">
                          <i className="fab fa-youtube" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
              <Col> </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.getCampaign.isLoading,
  isError: state.getCampaign.isError,
  Data: state.getCampaign.Data,
  Error: state.getCampaign.error,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    CheckCampaign: (OnSuccess, OnFailure) =>
      dispatch(CheckCampaign(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Header);
