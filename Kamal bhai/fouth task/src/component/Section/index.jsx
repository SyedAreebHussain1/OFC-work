import "../../App.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
// import FontAwesomeIcon from "@fortawesome";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import Button from "react-bootstrap/Button";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import Footer from "../Footer";
import React, { useEffect, useState } from "react";
import { Link } from "@mui/material";

const Section = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      let _list = [];
      for (let i = 0; i < 21; i++) {
        // _list.push(<AdItem placeholder={true} />);
      }
      setList(_list);
    }
  }, list);
  return (
    <div>
      <section className="banner" id="banner">
        <div className="content">
          <h2> Bringing Restaurants To You...</h2>
          {/* <p> */}
          <div style={{ display: "flex", background: "#fff" }}>
            <div
              style={{
                width: "70%",
                height: "50px",
                border: "1px solid black",
                margin: "12px",
                borderRadius: "5px",
                display: "flex",
                margin: "12px 12px 12px 12px",
              }}
            >
              <InputGroup
                style={{
                  boxShadow: "none",
                  margin: "5px",
                  border: "none",
                  outline: 0,
                  background: "transparent",
                  // borderBottom: "3px solid white",
                  borderRadius: "5px",
                }}
                className="mb-3"
                size="md"
              >
                <Form.Control
                  style={{
                    boxShadow: "none",
                    // margin:'12px',
                    border: "none",
                    outline: 0,
                    // background: "transparent",
                    // borderBottom: "3px solid white",
                    // borderRadius: "5px",
                  }}
                  placeholder="Enter Delivery Address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <div style={{ margin: "9px 8px" }}>
                <LocationSearchingIcon />
              </div>
            </div>
            <div
              // style={{margin:'20px 0px'}}
              style={{
                width: "55%",
                // border: "1px solid black",
                // margin: "12px 22px",
                // borderRadius: "5px",
              }}
            >
              <Button
                // size="sm"
                style={
                  {
                    // marginLeft: "2%",
                  }
                }
                variant="danger"
              >
                Find RESTAURANTS
              </Button>
            </div>
          </div>
          {/* <a href="#" className=""="btn">
            Our Menu
          </a> */}
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="title">
          <h3 className="titleText">
            Featured <span>Restaurants</span>
          </h3>
          {/* <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
        </div>
        <div className="content">
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/themes/default/assets/images/shopplaceholder.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Sweets N Things</h3>
              <p>Local</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/themes/default/assets/images/shopplaceholder.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Flavours of The Grill</h3>
              <p>Local</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/themes/default/assets/images/shopplaceholder.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Rituals Sushi</h3>
              <p>Sushi</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller/13/mE0Plh20F7RgSqRYKTdhYngQfVmhlBi2q90IxNZQ.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Rawr</h3>
              <p>Spanish</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/themes/default/assets/images/shopplaceholder.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Special Of India</h3>
              <p>India</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/themes/default/assets/images/shopplaceholder.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Le Mesa</h3>
              <p>Healthy</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller/5/jd1ExFehlojxeGXXFu1dLFmXgz36IkOc9ZwJ7u2X.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Mc Donald's</h3>
              <p>Asian</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller/6/4gWGrJwUaODwsVQSIoLsHYLGrtv3PRxVVQcWA5dc.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              <h3>KFC</h3>
              <p>Asian</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller/11/zjIKaAgV3jKlvG8PLZ8Wk2DlnNAzlRyIcHKZdZM4.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Pan Coconut</h3>
              <p>American</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div style={{ display: "flex" }}>
                  <p>Delivery</p> <CheckCircleOutlineTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="title">
          <a href="#" className="btn">
            View All
          </a>
        </div> */}
      </section>
      <section class="testimonials" id="testimonials">
        <div
          className="imgulli"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            {" "}
            <img
              style={{ width: "100%" }}
              src="https://quickdeliveryslu.com/themes/default/assets/images/bbq1.jpg"
              alt="img"
            />{" "}
          </div>
          <div className="col50">
            <h2 className="titleText">
              <span>C</span>onvience on your terms
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              at velit minim quis iusto! Molestias Lorem ipsum dolor sit amet
              consectetur Food elit. Laborum ror est aliquam minus ea
              perspiciatis optio repellat, vel nisi nemo. <br />
              <Button
                style={{
                  marginLeft: "2%",
                }}
                variant="danger"
              >
                Order Now
              </Button>{" "}
              {/* Lorem ipsum dol or sit amet consectetur adipisicing elit. Magni,
              cumque velit. Numquam perferendis nisi ut repellendus vel dolorum
              explicabo! Doloremque deleniti dolorem et qui laboriosam itaque
              ullam corporis suscipit accusantium. ut repellendus vel dolorum
              explicabo! Doloremque deleniti dolorem et qui laboriosam itaque
              ullam corporis suscipit accusantium.{" "} */}
            </p>
          </div>
        </div>
      </section>

      <section className="expert" id="expert">
        <div className="title">
          <h2 className="titleText">
            Restaurants Near <span>Me</span>
          </h2>
          {/* <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
        </div>
        <div className="content">
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/2/gkfaevkiEFvfg2gzddaFXamBQjGEB4svk4yZUYkS.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/3/5pQEifsTjBs1IlSFV9YUrWbJDe9F2argi5JffUlv.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/4/FG7tILSuO7RLJM0gsGbuBdKKSct1NESdsxfJPKLS.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/6/Pdn1H50jsHJ8VUkBhbsNXkmP3ttErtnja7KaUETb.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/5/zpBQZgm0Y4hg9aJB3kPLT0BIf1NBauTJmLMJt2y2.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/10/Aymqb4AlO9d7LBZXAN29zafkP9dXwGFbgeLb3B9o.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/14/Ib2uq8Os3FvIo7fvHGxvUA1ZtVTpCk1AQvnhL5g7.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/20/q73d1MLl5auI7vwP3IXdpHzMLK66QD0bN5qrSnuW.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/17/7A1WQIAA9L3ZFtwi6aGvQL23dbeXA0C1d8Xb9ww5.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/25/wpSYcZlSPBlU2gkE5uzYeKXtpjhIvzXGxaVwyLt4.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/8/IdRFQmaepzVYJkaln739PkNB93pTOJ2rCPZrpRvk.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/21/As87uYaDdI3tFkqeWg1NM12vYAyOsmmXForJQ2Pv.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/19/XoOZNydOrheQ7AgjRddpboVcXeUcCDBLX8J5Op8e.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/15/8uK9KyQEyQ2YfdOLTJeenlUlqSeA3RaX6PCc6sbd.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/10/Aymqb4AlO9d7LBZXAN29zafkP9dXwGFbgeLb3B9o.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img
                src="https://quickdeliveryslu.com/storage/seller_type/12/Reo7D3YnawmNIDom2BqpNjahCj3OmYt6OuABFIza.jpeg"
                alt=""
              />
            </div>
            <div className="text">
              {/* <h3> Someone Famous</h3> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Section;
