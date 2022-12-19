import React, { useState, useEffect } from "react";
import { WebNavBar } from "components/Navbars/WebNavBar";

import background from 'assets/img/1.3.jpg'
import Footer from 'components/Footers/Footer';
import { Col, Row } from 'reactstrap';


export const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      });

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
                            <div className="justify-center text-center">

                                <Row>
                                    <Col lg="12" md="12" sm="12" xs="12">
                                        <h3 className="h3">Privacy Policy</h3>
                                    </Col>


                                </Row>
                                <hr className="hr" />
                            </div>
                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        Following is our privacy policy which will govern the way in which we process any personal information provided to us by you. If there are any changes to this privacy policy, you will be duly notified. The kind of information we collect is as follows:
                                        </h6>

                                </Col>
                            </Row>





                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">

                                    <li>Name</li>
                                    <li>Email</li>
                                    <li>Phone Number</li>
                                    <li>CNIC</li>



                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        You can visit our home page, view the investments and access other pages without providing your personal information. However, there is certain behavioral data that still might be recorded by cookies we use (more info provided below)                                        </h6>

                                </Col>
                            </Row>



                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h5
                                        className="h5"
                                        style={{ color: "#323232", fontWeight: "bold" }}
                                    >
                                        Data Collection
                                        </h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        In the majority of the cases, the data we will collect will be provided by you via portal.karachihills.com. However, your personal information may also be collected through third parties or affiliates with whom we have arrangements with for collection of information through their tools. In those cases, this privacy policy will still apply.
                                </h6>
                                </Col>
                            </Row>



                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h5
                                        className="h5"
                                        style={{ color: "#323232", fontWeight: "bold" }}
                                    >
                                        Purpose of data collection                                        </h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        The main purpose of us collecting your data when you sign up is to help us process any transaction requested by you and to conduct customer and market research to provide tailored offers and marketing information to you via different mediums.                                </h6>
                                </Col>
                            </Row>





                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h5
                                        className="h5"
                                        style={{ color: "#323232", fontWeight: "bold" }}
                                    >
                                        Data Protection and Access to information
                                        </h5>                       </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        Measures and security policies have been put in place to protect your personal information being held on our servers and to keep it safe from unauthorized access, destruction or loss.
</h6>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        Access to information will be strictly limited to ourselves. We might provide your information to our business partners only if it is needed to complete your transaction.                                         </h6>
                                </Col>
                            </Row>








                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h5
                                        className="h5"
                                        style={{ color: "#323232", fontWeight: "bold" }}
                                    >
                                        Disclosure of information
                                        </h5>                       </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        Your personal information will not be disclosed to any third-party unless it is required by the law. Karachi Hills reserves the right to disclose any non-personal information collected via the cookies, traffic data or that shared by you for the purpose so customer behaviour and market research.
</h6>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        In the following events your data might be disclosed               </h6>                 </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    1.) As a part of a merger
                                <br />
                                        2.) Required by Law
                                        <br />
                                        3.) To our business partners to help complete your requested transactions



                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        In the cases numbered 1 and 3, this privacy policy will still be applicable and for the case numbered 2, that process cannot be affected by Karachi Hills.</h6> </Col>                           </Row>



                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h5
                                        className="h5"
                                        style={{ color: "#323232", fontWeight: "bold" }}
                                    >
                                        Cookies
                                        </h5>                       </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        Our website may track your Computer’s IP address and save information on your system in the form of cookies. Cookies allow us to improve your website experience, bring consistency to your visits and offer you personalised experience by tracking your behaviour via these cookies. The information provided to us by you may be linked with the information we get through cookies. </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        You always have the option of opting out of providing us with cookies by changing your browser settings but that may partially or fully limit the functionality of some of the areas of the website.</h6>                                </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h5
                                        className="h5"
                                        style={{ color: "#323232", fontWeight: "bold" }}
                                    >
                                        Copyright
                                        </h5>                       </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: "lighter" }}
                                    >
                                        All the content and this website is copyright of © 2021, Karachi Hills, All rights Reserved. </h6>                                </Col>
                            </Row>




                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h5
                                        className="h5"
                                        style={{ color: "#323232", fontWeight: "bold" }}
                                    >
                                        Disclaimer
                                        </h5>                       </Col>
                            </Row>

                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">

                                    <li>
                                        We do not claim the content and information on this website to be accurate, complete or current, However we try to make sure that all the content is true to the best of our ability. Karachi Hills does not accept any liability for the accuracy of this website at any given point in time.
                                           </li>

                                    <li>

                                        Karachi Hills makes every effort to ensure that the website infrastructure is error and virus free. However we do not provide assurance that any material you download from the website or that the website will be virus-free. Hence you are encouraged to take all necessary actions to safeguard your device from viruses.
                                        </li>


                                    <li>Neither Karachi Hills nor any of its agents, employees and Partners shall be liable to you or any other party for any claim, loss, demand or damages whatsoever (whether such claims, loss, demands or damages were foreseeable, known or otherwise) arising out of or in connection with the use of the Website or information, content or materials included on the Website.</li>
                                </Col>                            </Row>




                            <Row>
                                <Col lg="12" md="12" sm="12" xs="12">
                                    <h6
                                        className="h6"
                                        style={{ color: "#323232", fontWeight: 'bold', fontStyle: 'italic' }}
                                    >
                                        If you sign up on this website or visit this website you agree to all the terms in this privacy policy. If you do not agree with these terms, it is important that you leave the website now.
                                        </h6>                       </Col>
                            </Row>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}