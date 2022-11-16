/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row,} from "reactstrap";

const Header = () => {



  return (
    <>
      <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {/* <Col lg="6" xl="3" onClick={FacebookTab}>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col"  >
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                          
                        >
                          Facebook
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0"  >
                          999
                        </span>
                        
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                     
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
              {/* <Col lg="6" xl="3" onClick={YouTubeTab}>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          YouTube
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">450</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
              {/* <Col lg="6" xl="3" onClick={InstagramTab}>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Instagram
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                     
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
              {/* <Col lg="6" xl="3" onClick={LinkedInTab}>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          LinkedIn
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">120</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
            {/* <Row>
            <img 
              alt="..."
              src={
                require("../../assets/img/square-pro-1.png")
                .default
              }
              style={{marginTop:'-80px'}}
              // width='80'
              // height='80'
              className="rounded-circle"
              />
              </Row> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
