import React from 'react'
import { Col, Nav, Row, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useTranslation } from "react-i18next";




export const SDA = () => {
    const { t, i18n } = useTranslation();
    return (

        <>
            <Row>
                <Col className="flex flex-wrap justify-center text-center mt-5">
                    <h1
                        className="h1"
                        style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                        <span style={{ color: "#A0843A" }}>{t("sehwan")} </span> {t("abber")}
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
                                {t("sda1")}
                            </h6>


                        </Col>
                    </Row>





                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "lighter" }}
                            >
                                {t("sda2")}</h6>


                        </Col>
                    </Row>




                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <h6
                                className="h6"
                                style={{ color: "#323232", fontWeight: "lighter" }}
                            >
                                {t("sda3")}</h6>


                        </Col>
                    </Row>


                </Col>

            </Row>
        </>
    );
}