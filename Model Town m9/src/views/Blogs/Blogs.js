import React, { useState, useEffect, useContext } from "react";
import { WebNavBar } from "components/Navbars/WebNavBar";
import background from "assets/img/1.3.jpg";
import Footer from "components/Footers/Footer";
import {
  Col,
  Container,
  Row,
  Card,
  CardImg,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import img1 from "assets/img/en1.png";
import axios from "axios";
import { ALL_POSTS } from "constants/constants";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
  Link,
} from "react-router-dom";
import { StateContext } from "context/state_context";
import BlogDetails from "views/Blogs_Details/blog_details";

const Blogs = () => {
  const { data } = useContext(StateContext);
  let history = useHistory();
  // <BrowserRouter>
  // <Switch>

  // </Switch>
  // </BrowserRouter>
  const [cards, setCards] = useState(null);
  useEffect(() => {
    FetchData();
  }, [true]);

  const Redirect = (value) => {
    let path = `/blogs/${value}`;
    history.push(path, value);
    // return(
    //     <BlogDetails data={value}/>
    // )

    //history.push(path, { id: 1, value });

    // return <Redirect to={{
    //     pathname: path,
    //     state: value,
    //   }} />
  };
  const FetchData = () => {
    axios.get(ALL_POSTS).then((res) => {
      console.log(res.data);
      setCards(res.data);
    });
    // axios({
    //     method : 'get',
    //     url : ALL_POSTS,
    // }).then((res) => console.log(res.data));
    // console.log(ALL_POSTS);
  };
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
        <Container>
          <section className="mb-5">
            <Row>
              <Col className="flex flex-wrap justify-center text-center mt-5">
                <Row>
                  {cards !== null &&
                    cards !== undefined &&
                    cards.map((card) => {
                      let str = card.content.rendered;
                      if (str.length > 90) {
                        str = str.substring(0, 90);
                        str = str + "...";
                      }
                      return (
                        <Col lg="4" md="4" sm="6" xs="12" className="mt-2">
                          <Card>
                            {/* <CardImg top width="100%" style={{width : '100%' , height : '50%'}} src={card.featured_media_src_url !== null ? card.featured_media_src_url : ''} alt="Card image cap" /> */}
                            <img
                              src={
                                card.featured_media_src_url !== null
                                  ? card.featured_media_src_url
                                  : ""
                              }
                              height="40px"
                            />
                            <CardBody>
                              <CardTitle
                                tag="h5"
                                dangerouslySetInnerHTML={{
                                  __html: card.title.rendered,
                                }}
                              ></CardTitle>

                              {/* <CardText dangerouslySetInnerHTML={{__html: card.excerpt.rendered}}></CardText> */}
                              <CardText
                                dangerouslySetInnerHTML={{ __html: str }}
                              ></CardText>
                            </CardBody>
                            <CardFooter>
                              {/* <Link to={`/blogs/${card.id}`} data={card.id}> */}
                              <Button
                                style={{ backgroundColor: "#a0843a" }}
                                onClick={() => Redirect(card.slug)}
                              >
                                Read More
                              </Button>

                              {/* </Link> */}
                            </CardFooter>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
      <br></br>
      <Footer />
    </>
  );
};

export default Blogs;
