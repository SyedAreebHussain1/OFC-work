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
    return (
        <>

            <Container>

                <Row>
                    <Col className="flex flex-wrap justify-center text-center mt-5">
                        <h1 className="h1 urdu-font" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}><span style={{ color: "#A0843A" }}>ترقیاتی کام </span> جا ری ہے </h1>
                    </Col>
                </Row>
                <br />
                <SRLWrapper options={options} images={images}>
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="6">

                            <img src={img1} alt="img1" className="mt-1" />

                        </Col>
                        <Col lg="6" md="6" sm="6" xs="6">

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
                </SRLWrapper>
            </Container>
        </>
    )
}