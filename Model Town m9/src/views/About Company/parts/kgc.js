import React from 'react'
import { Col, Nav, Row, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useTranslation } from "react-i18next";
import kgc1 from "assets/img/kgc1.jpg";
import kgc2 from "assets/img/kgc2.png";

export const KGC = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Row>
                <Col className="flex flex-wrap justify-center text-center mt-5">
                    <h1
                        className="h1"
                        style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                        <span style={{ color: "#A0843A" }}>{t("kgc")} </span> {t("properties")}
                    </h1>
                </Col>
            </Row>
            <hr className="hr" />
            <br />

            <Row className="pb-5    ">
                <Col lg="12" md="12" sm="12" xs="12">

                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "lighter" }}
                            >
                                {t("prop1")}
                            </h6>


                        </Col>
                    </Row>





                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "lighter" }}
                            >
                                {t("prop2")}</h6>


                        </Col>
                    </Row>




                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "lighter" }}
                            >
                                {t("prop3")}</h6>


                        </Col>
                    </Row>



                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "lighter" }}
                            >
                                {t("prop4")}</h6>


                        </Col>
                    </Row>


                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "lighter" }}
                            >
                                {t("prop5")}</h6>


                        </Col>
                    </Row>


                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "lighter" }}
                            >
                                {t("prop6")}</h6>


                        </Col>
                    </Row>
                </Col>

            </Row>

            <Row>
                <Col lg="6" md="6" sm="12" xs="12">
                    <img src={kgc1} alt="SideImage" className="rounded" />

                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                    <img src={kgc2} alt="SideImage" className="rounded" />

                </Col>
            </Row>

        </>
    );
}