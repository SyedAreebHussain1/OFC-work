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



import "./pfcard.scss";


export const Pfcard = (props) => {
    console.log('hus', props)

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




    // let propss = [
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'
    //     },
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'

    //     },
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'

    //     },
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'

    //     },
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'

    //     },
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'

    //     },
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'

    //     },
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'

    //     },
    //     {
    //         heading: props.heading,
    //         bgcardclass: props.bgcardclass,
    //         description: props.description,
    //         // img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqREzufUxo6LsTjq4OOZz1V6PP25ytTAUg&usqp=CAU'
    //     }
    // ]
    const data = 'en'
    const { heading, description, bgcardclass } = props;


    return (

        // <>
        //     <Container>
        //         <Row>
        //             <Col className="flex flex-wrap justify-center text-center mt-5">
        //                 <h1 className="h1" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}><span className='text-kgcred'>{t("work")}</span> {t("inProgress")}</h1>
        //             </Col>
        //         </Row>
        //         <div
        //             style={{ marginLeft: "10%", marginRight: "10%" }}
        //             className="hr-theme-slash-2"
        //         >
        //             <div className="hr-line"></div>
        //             <div className="hr-icon">
        //                 <AiFillInfoCircle className="text-kgcred" size={20} />
        //             </div>
        //             <div className="hr-line"></div>
        //         </div>
        //         {/* <br /> */}
        //         <SRLWrapper options={options} images={images}>
        //             <Row>
        //                 <Col lg="4" md="6" sm="6" xs="6">

        //                     <img src={img1} alt="img1" className="mt-1" />

        //                 </Col>
        //                 <Col lg="4" md="6" sm="6" xs="6">

        //                     <img src={img2} alt="img2" className="mt-1" />

        //                 </Col>
        //                 <Col lg="4" md="6" sm="6" xs="6">

        //                     <img src={img2} alt="img2" className="mt-1" />

        //                 </Col>
        //             </Row>

        //             <br />
        //             <Row>
        //                 <Col lg="6" md="6" sm="6" xs="6">
        //                     <img src={img3} alt="img3" className="mt-1" />
        //                 </Col>
        //                 <Col lg="6" md="6" sm="6" xs="6">
        //                     <img src={img4} alt="img4" className="mt-1" />
        //                 </Col>
        //             </Row>
        //             <br />
        //             <Row>
        //                 <Col lg="6" md="6" sm="6" xs="6">
        //                     <img src={img5} alt="img5" className="mt-1" />
        //                 </Col>
        //                 <Col lg="6" md="6" sm="6" xs="6">
        //                     <img src={img6} alt="img" />
        //                 </Col>
        //             </Row>

        //             <br />
        //             <Row>
        //                 <Col lg="6" md="6" sm="6" xs="6">
        //                     <img src={img7} alt="img3" />
        //                 </Col>
        //                 <Col lg="6" md="6" sm="6" xs="6">
        //                     <img src={img8} alt="img4" />
        //                 </Col>
        //             </Row>
        //         </SRLWrapper>
        //     </Container>
        // </>
        <>
            {/* <Container> */}
            {/* <div className=""> */}
                <div style={{ width: "100%" }} className="">
                    <article className="pfblog-card">
                        <div className="pfblog-card__background">
                            <div className="pfcard__background--wrapper">
                                <div
                                    className={bgcardclass}
                                    style={{
                                        //   backgroundImage: "url(" + peshawar1 + ")",
                                        width: "100%",
                                        //   objectFit: "inherit",
                                    }}
                                // style="background-image: url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg');"
                                >
                                    <div className="pfcard__background--layer"></div>
                                </div>
                            </div>
                        </div>
                        <div className="pfblog-card__head">
                            <span className="pfdate__box">
                                <div
                                    className={
                                        data == "en" ? `pfheading-card-en` : `pfheading-card-ur`
                                    }
                                >
                                    <span
                                        style={
                                            data == "ur" || data == "ps"
                                                ? {
                                                    fontSize: "1.rem",
                                                    color: "#9f1c33",
                                                    fontFamily: "JameelNoori",
                                                    fontWeight:'bold'
                                                    // alignItems:'center'
                                                }
                                                : { fontSize: "", color: "#9f1c33",fontWeight:'bold' }
                                        }
                                        
                                    >
                                        {heading}
                                    </span>
                                </div>
                                {/* hr */}

                                <p
                                    // style={
                                    //     data == "ps" || data == "ur"
                                    //         ? { fontFamily: "" }
                                    //         : {}
                                    // }
                                    className={
                                        data == "en"
                                            ? `pfu-text-small-card`
                                            : `pfu-text-small-card-ur`
                                    }
                                    style={{fontSize:'',padding:'10px'}}
                                >
                                    {description}
                                </p>
                            </span>
                        </div>
                        {/* <div className="pfblog-card__info">
                            <h2
                                style={
                                    data == "ps" || data == "ur"
                                        ? {
                                            justifyContent: "center",
                                            textAlign: "center",
                                            fontFamily: "JameelNoori",
                                            color: "#2D3748",
                                        }
                                        : { justifyContent: "center", textAlign: "center" }
                                }
                            >
                                {heading}
                            </h2>
                            <hr
                                style={{
                                    maxWidth: "100%",
                                    marginLeft: "28%",
                                    marginRight: "30%",
                                    marginTop: "1%",
                                    fontWeight: "bold",
                                    // color: "white",
                                    backgroundColor: "black",
                                    height: 0,
                                }}
                            />
                        </div> */}
                    </article>
                </div>
            {/* </div> */}
            {/* </Container> */}
        </>
    )
}
export default Pfcard