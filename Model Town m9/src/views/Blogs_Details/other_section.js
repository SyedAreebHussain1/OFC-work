import React, { useState, useEffect, useContext } from 'react';

import {
    Col, Container, Row, Card, CardImg, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from "reactstrap";
import axios from 'axios';
import { ALL_POSTS } from 'constants/constants'

import { BrowserRouter, Route, Switch, Redirect, useHistory, Link } from "react-router-dom";



export const OtherSection = (myid) => {

    debugger;
    const [cards, setCards] = useState(null);



    useEffect(() => {
        FetchCard();
    }, [true]);
    const FetchCard = () => {

        axios.get(ALL_POSTS)
            .then((res) => {
                console.log(res.data);
                setCards(res.data);
            });
    }
    return (
        <section>
            <h3 className="h3">
                Other Blogs
        </h3>
            <Row>
                <Col className="flex flex-wrap justify-center text-center mt-5">
                    <Row>
                        {cards !== null && cards !== undefined && cards.map((card) => {
                            let str = card.content.rendered;
                            if (str.length > 90) {
                                str = str.substring(0, 90);
                                str = str + "...";
                            }

                            return (
                                <>
                                    {card.id !== myid
                                        ?
                                        <Col lg="4" md="4" sm="6" xs="12" className="mt-2">
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
    );
}