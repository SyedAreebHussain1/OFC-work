import React from 'react';
import { Row, Col, Container } from 'reactstrap'

import img1 from 'assets/img/wip1.jpg';
import img2 from 'assets/img/wip2.jpg';
import img3 from 'assets/img/wip3.jpg';
import img4 from 'assets/img/wip4.jpg';
import img5 from 'assets/img/wip5.JPG';
import img6 from 'assets/img/wip6.JPG';
import img7 from 'assets/img/wip7.JPG';
import img8 from 'assets/img/wip8.JPG';

import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { AiFillInfoCircle } from "react-icons/ai"

import Pfcard from './pfcard'




export const Work = () => {

    const { t, i18n } = useTranslation();

    const images = [
        {
            src: img1,
        },
        {
            src: img2,
        },
        {
            src: img3,
        },
        {
            src: img4,
        },
        {
            src: img5,
        },
        {
            src: img6,
        },
    ]
    const options = {
        settings: {

            disableKeyboardControls: false,
            disablePanzoom: true,
            disableWheelControls: true,
            hideControlsAfter: true,
        },
        caption: {
            showCaption: false
        },
        buttons: {
            showAutoplayButton: false,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
        },
        thumbnails: {},
        progressBar: {},
    }
    const datas = 'en'


    let propsajao = [
        {
            heading: 'SHOPPING MALLS',
            bgcardclass: 'pfcard__background--main',
            description: 'A modern shopping center with a wide range of products has been created in compliance with international standards',
        },
        {
            heading: 'COMMUNITY CENTRES',
            bgcardclass: 'pfcard__background--main2',
            description: 'Our community centers are designed to make it easy to socialize with your community and have activities and meetings in a safe setting',
        },
        {
            heading: 'GYM FACILITY',
            bgcardclass: 'pfcard__background--main3',
            description: 'Model Town Residents will have access to all gym amenities as well as exercise equipment with separate male and female areas',
        },
        {
            heading: 'HOSPITALS AND CLINICS',
            bgcardclass: 'pfcard__background--main4',
            description: 'Emergency medical and healthcare services are provided around the clock by highly skilled doctors and healthcare professionals',
        },
        {
            heading: 'MOSQUES',
            bgcardclass: 'pfcard__background--main5',
            description: 'Mosques restoring the city traditions, including a large mosque, will be built in lovely gardens',
        },
        {
            heading: 'RESTAURANTS AND CAFES',
            bgcardclass: 'pfcard__background--main6',
            description: 'If you want to start a food business, you can enjoy the great ambiance and tasty food, as well as a fantastic business opportunity.',
        },
        {
            heading: 'CINEMAS',
            bgcardclass: 'pfcard__background--main7',
            description: 'Enjoy the comfort of seeing a movie in an air-conditioned theatre with the best sound effects',
        },
        {
            heading: 'SCHOOLS AND COLLEGES',
            bgcardclass: 'pfcard__background--main8',
            description: 'All educational institutions established in Model Town Karachi will be staffed by qualified teachers from across the country',
        },
        {
            heading: 'PARKS AND GROUNDS',
            bgcardclass: 'pfcard__background--main9',
            description: 'Model Town Karachi will have beautiful parks, playgrounds, and jogging pathways, as well as 24-hour CCTV surveillance',
        },
    ]
    return (
        <>

            <Container style={{marginTop:'10%',marginBottom:'10%'}}>
                <Row>
                    <Col className="flex flex-wrap justify-center text-center mt-5">
                        <h1 className="h1" id='amenities' style={{ fontWeight: 'bold', textTransform: 'uppercase' }}><span className='text-kgcred'>{t("work")}</span> {t("inProgress")}</h1>
                    </Col>
                </Row>
                <br />

                {/* <SRLWrapper options={options} images={images}>
                    <Row>
                        <Col lg="4" md="6" sm="6" xs="6">

                            <img src={img1} alt="img1" className="mt-1" />

                        </Col>
                        <Col lg="4" md="6" sm="6" xs="6">

                            <img src={img2} alt="img2" className="mt-1" />

                        </Col>
                        <Col lg="4" md="6" sm="6" xs="6">

                            <img src={img2} alt="img2" className="mt-1" />

                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="6">
                            <img src={img3} alt="img3" className="mt-1" />
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="6">
                            <img src={img4} alt="img4" className="mt-1" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="6">
                            <img src={img5} alt="img5" className="mt-1" />
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="6">
                            <img src={img6} alt="img" />
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="6">
                            <img src={img7} alt="img3" />
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="6">
                            <img src={img8} alt="img4" />
                        </Col>
                    </Row>
                </SRLWrapper> */}




                {/* hr */}

                <div
                    style={{ marginLeft: "10%", marginRight: "10%" }}
                    className="hr-theme-slash-2"
                >
                    <div className="hr-line"></div>
                    <div className="hr-icon">
                        <AiFillInfoCircle color="#9f1c33" size={20} />
                    </div>
                    <div className="hr-line"></div>
                </div>
                <Row className="">
                        {
                            propsajao.map((val, i) => {
                                // console.log('value', val)
                                return (
                                    <Col  lg="4" md="4" sm="12" xs="12" className="p-4" key={i}>
                                        <div
                                            data-aos="flip-up"
                                            style={{ marginTop: "2%", marginLeft: "0%", marginRight: "0%"}}
                                            className="pesharwarow"
                                            
                                        >

                                        <div className="moderninfracolumn">
                                            <Pfcard
                                                heading={val.heading}
                                                description={
                                                    val.description
                                                }
                                                bgcardclass={val.bgcardclass}
                                            />
                                        </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                </Row>
                {/*
                    <div
                        data-aos="flip-up"
                        style={{ marginTop: "2%", marginLeft: "0%", marginRight: "0%" }}
                        className="pesharwarow"
                    >
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Cinemas"}
                                description={
                                    "Experience the luxury of watching a movie in an air-conditioned theatre equipped with the best sound effects"
                                }
                                bgcardclass={"pfcard__background--main1"}
                            />
                        </div>
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Hospitals and Clinics"}
                                description={
                                    "Emergency medical and healthcare services are available 24/7 with highly skilled doctors and healthcare workers"
                                }
                                bgcardclass={"pfcard__background--main2"}
                            />
                        </div>
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Community Centers"}
                                description={
                                    "Our community centres are designed to make it convenient to conduct activities and meetings in a secure environment"
                                }
                                bgcardclass={"pfcard__background--main3"}
                            />
                        </div>
                    </div>

                    <div
                        data-aos="flip-up"
                        style={{ marginTop: "2%", marginLeft: "0%", marginRight: "0%" }}
                        className="pesharwarow"
                    >
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Gym Facility"}
                                description={
                                    "Khyber Golf City residents will have access to all gym amenities as well as gym equipment with individual spaces for men and women"
                                }
                                bgcardclass={"pfcard__background--main4"}
                            />
                        </div>
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Mosques"}
                                description={
                                    "Mosques reviving the traditions of the city, with a grand mosque among them will be built in the middle of beautiful gardens"
                                }
                                bgcardclass={"pfcard__background--main5"}
                            />
                        </div>
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Restaurants and Cafes"}
                                description={
                                    "Enjoy the lovely ambiance and delicious Peshawar cuisine with a fantastic business opportunity if you wish to establish a food business"
                                }
                                bgcardclass={"pfcard__background--main6"}
                            />
                        </div>
                    </div>


                    <div
                        data-aos="flip-up"
                        style={{ marginTop: "2%", marginLeft: "0%", marginRight: "0%" }}
                        className="pesharwarow"
                    >
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Shopping Malls"}
                                description={
                                    "An advanced shopping centre has been built in accordance with international standards, offering a variety of products"
                                }
                                bgcardclass={"pfcard__background--main7"}
                            />
                        </div>
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Schools and Colleges"}
                                description={
                                    "All educational institutions built at Khyber Golf City will house qualified teachers from all over the country to provide their services"
                                }
                                bgcardclass={"pfcard__background--main8"}
                            />
                        </div>
                        <div className="moderninfracolumn">
                            <Pfcard
                                heading={"Parks and Grounds"}
                                description={
                                    "There will be lovely parks, playgrounds, and jogging trails in Khyber Golf City with 24/7 CCTV surveillance"
                                }
                                bgcardclass={"pfcard__background--main9"}
                            />
                        </div>
                    </div> */}

            </Container>
        </>
    )
}