import React, { useState } from 'react'
import background from 'assets/img/1.3.jpg'
import { Col, Nav, Row, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { WebNavBar } from "components/Navbars/WebNavBar";
import SideImage from "assets/img/karachi_stock.jpg";
import KolachiImage from "assets/img/kolachi.jpg";


import Footer from 'components/Footers/Footer';
import classnames from 'classnames';
import { useTranslation } from "react-i18next";
import { KGC } from './parts/kgc';
import { SDA } from './parts/sda';
import FooterUrdu from 'components/Footers/FooterUrdu';
import { UrduNavBar } from 'components/Navbars/WebNavBar_Urdu';





export const AboutCompanyUrdu = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [active, setActive] = useState(0);

    const { t, i18n } = useTranslation();
   
    const toggle = tab => {

        if (tab !== activeTab) setActiveTab(tab);
    }
    const change = (value) => {
        if (value === 0) {
            //   setText(data[0].data);
               setActive(0);
        } else if (value === 1) {
            //   setText(data[1].data);
               setActive(1);
        }
    };
    return (
        <>
           <UrduNavBar/>

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
                            <div className="flex flex-wrap justify-center text-center inline-block">

                                <Row>
                                    <Col lg="12" md="12" sm="12" xs="12">
                                        <Row>
                                            <Col lg="12" md="12" sm="12" xs="12">
                                            <hr className="hr" />
                                                <h5
                                                    className="h5 flex flex-wrap justify-center text-center"
                                                    style={{ cursor: "pointer", fontWeight: "bolder" }}
                                                >
                                                    <span
                                                        onClick={() => change(0)}
                                                        style={{
                                                            color: active === 0 ? "#a0843a" : "",
                                                            marginRight: "8px",
                                                        }}
                                                    >
                                                        {" "}
                                                        {/* {t("tab1")}{" "} */}
                                                        KGC
                                                    </span>
                  |
                  <span
                                                        onClick={() => change(1)}
                                                        style={{
                                                            color: active === 1 ? "#a0843a" : "",
                                                            marginRight: "8px",
                                                            marginLeft: "8px",
                                                        }}
                                                    >
                                                        {" "}
                                                        {/* {t("tab2")}{" "} */}
                                                        SDA
                                                    </span>
                                                </h5>
                                                <hr className="hr" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>


                         


                      {active === 0 ? <KGC/> : <SDA/>}






                        </div>
                    </div>
                </section>
            </main>
           <FooterUrdu/>
        </>
    );
}