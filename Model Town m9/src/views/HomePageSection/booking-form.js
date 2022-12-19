import React from "react";
import { Link } from "react-router-dom";

// components
import { Parallax, Background } from "react-parallax";
import { AiFillInfoCircle } from "react-icons/ai"

import { useTranslation } from "react-i18next";
// import Navbar from "components/Navbars/AuthNavbar.js";
// import BackgroundSlider from "react-background-slider";
// import bi1 from "assets/img/1.1.jpg";
// import bi2 from "assets/img/1.2.jpg";
// import bi3 from "assets/img/1.3.jpg";


// import { Parallax, Background } from "react-parallax";

// 
// import bione from "assets/imgfolder1/1.1.jpg";
// import bitwo from "assets/imgfolder1/1.2.jpg";
// import bithreee from "assets/imgfolder1/1.3.jpg";
// 

import { Row, Col, Button, Container, UncontrolledCarousel, FormGroup, Label, Input, Form, FormText } from "reactstrap";




const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
};
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
};
const ShowTime = () => {
    //   let date = Date.now;
    //   console.log(date);
};
export default function BookingForm() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="container">
                {/* <Container> */}
                <Row>
                    <Col className="flex flex-wrap justify-center text-center mt-5">
                        <h1
                            className="h1"
                            style={{ fontWeight: "bold", textTransform: "uppercase" }}
                        >
                            <span className="text-kgcred">
                                {t("booking")}
                            </span> {t("form")}
                        </h1>
                    </Col>
                </Row>
                <div
                    style={{ marginLeft: "10%", marginRight: "10%" }}
                    className="hr-theme-slash-2"
                >
                    <div className="hr-line"></div>
                    <div className="hr-icon">
                        <AiFillInfoCircle className="text-kgcred" size={20} />
                    </div>
                    <div className="hr-line"></div>
                </div>
                <br />
                {/* <hr className="hr" /> */}


                {/* </Container> */}

                <br />
                <div style={{ alignItems: '', border: '' }}>
                    {/* <h1>Hello</h1> */}
                    <div style={{margin:'auto',border:'1px solid black',width: '60%',padding: '10px'}}>
                        <Form style={{ }}>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            id="exampleEmail"
                                            name=""
                                            placeholder="First name"
                                            type=""
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>

                                        <Input
                                            id="examplePassword"
                                            name=""
                                            placeholder="Last name"
                                            type=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>

                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            id="exampleEmail"
                                            name=""
                                            placeholder="Phone no."
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>

                                        <Input
                                            id="examplePassword"
                                            name=""
                                            placeholder="Address"
                                            type=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                            Country
                                        </option>
                                        <option>
                                            Pakistan
                                        </option>
                                        <option>
                                            India
                                        </option>
                                        <option>
                                            China
                                        </option>
                                        <option>
                                            Turkey
                                        </option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            id="exampleEmail"
                                            name=""
                                            placeholder="Cnic no."
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>

                                        <Input
                                            id="examplePassword"
                                            name=""
                                            placeholder="Address"
                                            type=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            {/* <FormGroup row>
                                <Col sm={12}>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                            Select Country
                                        </option>
                                        <option>
                                            2
                                        </option>
                                        <option>
                                            3
                                        </option>
                                        <option>
                                            4
                                        </option>
                                        <option>
                                            5
                                        </option>
                                    </Input>
                                </Col>
                            </FormGroup> */}
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            id="exampleSelect"
                                            name="select"
                                            type="select"
                                        >
                                            <option>
                                                Select State
                                            </option>
                                            <option>
                                                2
                                            </option>
                                            <option>
                                                3
                                            </option>
                                            <option>
                                                4
                                            </option>
                                            <option>
                                                5
                                            </option>
                                        </Input>

                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            id="exampleSelect"
                                            name="select"
                                            type="select"
                                        >
                                            <option>
                                                Select City
                                            </option>
                                            <option>
                                                2
                                            </option>
                                            <option>
                                                3
                                            </option>
                                            <option>
                                                4
                                            </option>
                                            <option>
                                                5
                                            </option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Input
                                        id="exampleSelect"
                                        name=""
                                        type="text"
                                        placeholder="Contact Number"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Input
                                        id="exampleText"
                                        name="text"
                                        type="textarea"
                                        placeholder="Feedback"
                                    />
                                </Col>
                            </FormGroup>
                            <Button color="primary">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    );
}
