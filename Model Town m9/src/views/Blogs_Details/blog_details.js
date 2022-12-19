import React, { useState, useEffect, useContext } from 'react';
import { WebNavBar } from "components/Navbars/WebNavBar";
import background from "assets/img/1.3.jpg";
import Footer from "components/Footers/Footer";

import {
    Col, Container, Row, Card, CardImg, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from "reactstrap";
import img1 from "assets/img/en1.png";
import axios from 'axios';
import { StateContext } from 'context/state_context';
import { SPECIFIC_POST, ALL_POSTS } from 'constants/constants'

import { BrowserRouter, Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

const BlogDetails = ({ props }) => {
    let history = useHistory();
    const [cards, setCards] = useState(null);
    const [myId, setMyId] = useState(null);
    const [data, setData] = useState();
    let counter = 0;
    const [sel, setSel] = useState(true);
    useEffect(() => {
        FetchData();
        FetchCard();
    }, [sel])
    useEffect(() => {
        FetchData();
        FetchCard();
    }, [true])
    useEffect(() => {
        console.log(data);
    }, [data])
    const FetchData = () => {
        let slug_name = history.location.pathname;
        let res = slug_name.split("/", 3);
        let slug = res[2];

        axios.get(`${SPECIFIC_POST}/${slug}`)
            .then((res) => {
                console.log(res.data[0]);
                setData(res.data);
                setMyId(res.data[0].id);
                console.log(data);
                console.log(res.data);
            });
    }
    const FetchCard = () => {

        axios.get(ALL_POSTS)
            .then((res) => {
                console.log(res.data);
                setCards(res.data);
            });
    }
    const Redirect = (value) => {
        let path = `/blogs/${value}`;
        history.push(path, value)
        setSel(!sel)
    }
    return (
        <>

            <WebNavBar />
            <main>

                <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h1-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url(" + background + ")",
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

                <section className="mb-5">

                    {data !== undefined && data.map((rec) => {
                        let dateTime = rec.date;
                        let date = dateTime.split("T")
                        return (
                            <>

                                <Row>
                                    <Col lg="3" md="3" sm="3" xs="2">

                                    </Col>
                                    <Col lg="6" md="6" sm="6" xs="8">
                                        <Row>
                                            <Col lg="12" md="12" sm="12" xs="12">
                                                <h1 className="h1 mt-5 text-center" dangerouslySetInnerHTML={{ __html: rec.title.rendered }}></h1>

                                            </Col>
                                        </Row>
                                        <hr className="hr"></hr>
                                        <Row>
                                            <Col lg="12" md="12" sm="12" xs="12">
                                                <div  >
                                                    <img className="h-auto " src={rec.featured_media_src_url} style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr className="hr"></hr>
                                        <Row>
                                            <Col lg="12" md="12" sm="12" xs="12">
                                                <h6 className="h6">{`Published On ${date[0]}`}</h6>

                                            </Col>
                                        </Row>
                                        <hr className="hr"></hr>
                                        <Row>
                                            <Col lg="12" md="12" sm="12" xs="12">
                                                <h6 dangerouslySetInnerHTML={{ __html: rec.content.rendered }}></h6>

                                            </Col>
                                        </Row>


                                    </Col>
                                    <Col lg="3" md="3" sm="3" xs="2">
                                    </Col>
                                </Row>

                            </>
                        );
                    })}
                    <hr className="hr" />
                </section>

                <Container>
                    <section className="mb-5">
                        <h6 className="h6">
                            Other Blogs:
                        </h6>
                        <Row>
                            <Col className="flex flex-wrap justify-center text-center mt-2">
                                <Row>
                                    {cards !== null && cards !== undefined && cards.map((card) => {

                                        let str = card.content.rendered;
                                        if (str.length > 90) {
                                            str = str.substring(0, 90);
                                            str = str + "...";
                                        }

                                        counter = counter + 1;
                                        return (
                                            <>
                                                {

                                                    card.id !== myId && counter < 4
                                                        ?
                                                        <Col lg="3" md="3" sm="6" xs="12" className="mt-2">
                                                            <Card>
                                                                {/* <CardImg top width="100%" style={{width : '100%' , height : '50%'}} src={card.featured_media_src_url !== null ? card.featured_media_src_url : ''} alt="Card image cap" /> */}
                                                                <img src={card.featured_media_src_url !== null ? card.featured_media_src_url : ''} height="40px" />
                                                                <CardBody>
                                                                    <CardTitle tag="h5" dangerouslySetInnerHTML={{ __html: card.title.rendered }}></CardTitle>

                                                                    {/* <CardText dangerouslySetInnerHTML={{__html: card.excerpt.rendered}}></CardText> */}
                                                                    <CardText dangerouslySetInnerHTML={{ __html: str }}></CardText>


                                                                </CardBody>
                                                                <CardFooter>
                                                                    {/* <Link to={`/blogs/${card.id}`} data={card.id}> */}
                                                                    <Button style={{ backgroundColor: '#a0843a' }} onClick={() => Redirect(card.slug)} >Read More</Button>

                                                                    {/* </Link> */}
                                                                </CardFooter>
                                                            </Card>

                                                        </Col> : ''
                                                }

                                            </>
                                        )
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </main>

            <Footer />
        </>
    );
}


export default BlogDetails;