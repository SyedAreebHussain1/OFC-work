import React from 'react'
import background from 'assets/img/1.3.jpg'
import { Col, Row } from 'reactstrap';
import { WebNavBar } from "components/Navbars/WebNavBar";
import SideImage from "assets/img/newkarachi.png";
import KolachiImage from "assets/img/kolachi.jpg";
import JoyImage from "assets/img/joy.png";
import Story from "assets/img/story_of_karachi.png";

import Oldkarachi from "assets/img/old_karachi-1.png";
import { useTranslation } from "react-i18next";

import gateWay from "assets/img/gateway.jpg";
import Footer from 'components/Footers/Footer';

export const About = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <WebNavBar />

            <main>
                <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h1-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url(" + background + ")"
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-blue"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-kgcbrown fill-current"
                                points="2560 50 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                </div>
                <section className="pb-20 relative block bg-white ">
                    <div className="container mx-auto px-4">
                        <div class="w-full md:w-3/5 mx-auto p-8">





                            <Row>
                                <Col className="flex flex-wrap justify-center text-center mt-5">
                                    <h1
                                        className="h1"
                                        style={{ fontWeight: "bold", textTransform: "uppercase" }}
                                    >
                                        <span style={{ color: "#A0843A" }}>{t("partnerOur")}</span> {t("story")}
                                    </h1>
                                </Col>
                            </Row>
                            <br />
                            <hr className="hr" />
                            <br />

                            <Row className="pb-5    ">
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <Row>
                                        <Col lg="12" md="12" sm="12" xs="12">
                                            <h3
                                                className="h3"
                                                style={{
                                                    color: "#A0843A",
                                                    fontWeight: "bold",
                                                    textTransform: "",
                                                }}
                                            >
                                                {t("storyHead")}
                                            </h3>
                                            <br />
                                            <hr className="hr" />
                                            <br />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12" xs="12">
                                            <h6
                                                className="h6"
                                                style={{ color: "#323232", fontWeight: "lighter" }}
                                            >
                                                {t("storyCont")}
                                            </h6>


                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <img src={Story} alt="SideImage" className="rounded" />
                                </Col>
                            </Row>






                            <br />
                            <hr />
                            <br />
                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h3
                                        className="h3"
                                        style={{
                                            color: "#A0843A",
                                            fontWeight: "bold",
                                            textTransform: "",
                                        }}
                                    >
                                        {t("kkHead")}                </h3>
                                        <br />
                                    <hr className="hr" />
                                    <br />
                                </Col>

                            </Row>
                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6 style={{ color: "#323232", fontWeight: "lighter" }}>
                                        {t("kkCont")}                                    </h6>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <img src={Oldkarachi} alt="SideImage" className="rounded" />

                                </Col>
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <img src={SideImage} alt="SideImage" className="rounded" />

                                </Col>
                            </Row>
                            {/* 
                            <Row className="pb-5    ">
                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    
                                            <h3
                                                className="h3"
                                                style={{
                                                    color: "#A0843A",
                                                    fontWeight: "bold",
                                                    textTransform: "",
                                                }}
                                            >
                                                FROM KOLACHI TO KARACHI
                </h3>
                                            <hr className="hr" />
                                       
                                    <Row>
                                        <Col lg="12" md="12" sm="12" xs="12">
                                            <h6
                                                className="h6"
                                                style={{ color: "#323232", fontWeight: "lighter" }}
                                            >
                                                Expansion of Karachi has been witnessed at the Karachi Hyderabad M9, Motorway/Super Highway dueto increase of population density. This expansion has made the area an Emerging Region of Opportunity suitable for integrated large-scale  housing development projects in both residential andcommercialsectors, hence creating a world class living environment for the society.                  .
                </h6>


                                        </Col>
                                    </Row>
                                </Col>
                                </Row>
                             



                                </Row> */}


                            <hr />
                            <br />
                            <br />

                            <Row className="pb-5    ">
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <Row>
                                        <Col lg="12" md="12" sm="12" xs="12">
                                            <h3
                                                className="h3"
                                                style={{
                                                    color: "#A0843A",
                                                    fontWeight: "bold",
                                                    textTransform: "",
                                                }}
                                            >
                                                {t("gateway")}                </h3>
                                                <br />
                                            <hr className="hr" />
                                            <br />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12" xs="12">
                                            <h6
                                                className="h6"
                                                style={{ color: "#323232", fontWeight: "lighter" }}
                                            >
                                                {t("gateCont")}                </h6>


                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <img src={gateWay} alt="SideImage" className="rounded" />
                                </Col>
                            </Row>






                            <br />
                            <hr />
                            <br />

                            <Row className="pb-5    ">

                                <Col lg="6" md="6" sm="12" xs="12">
                                    <img src={JoyImage} alt="SideImage" className="rounded" />
                                </Col>
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <Row>
                                        <Col lg="12" md="12" sm="12" xs="12">
                                            <h3
                                                className="h3"
                                                style={{
                                                    color: "#A0843A",
                                                    fontWeight: "bold",
                                                    textTransform: "",
                                                }}
                                            >
                                                {t("expHead")}                </h3>
                                                <br />
                                            <hr className="hr" />
                                            <br />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12" md="12" sm="12" xs="12">
                                            <h6
                                                className="h6"
                                                style={{ color: "#323232", fontWeight: "lighter" }}
                                            >
                                              {t("expCont")}  </h6>


                                        </Col>
                                    </Row>
                                </Col>
                            </Row>











                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}