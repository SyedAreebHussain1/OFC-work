import "../../App.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
// import FontAwesomeIcon from "@fortawesome";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
const Section = () => {
  return (
    <div>
      <section className="banner" id="banner">
        <div className="content">
          <h2> Bringing Restaurants To You...</h2>
          {/* <p> */}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Delivery Address"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">
              FIND RESTAURANTS
            </InputGroup.Text>
          </InputGroup>
          {/* <a href="#" className=""="btn">
            Our Menu
          </a> */}
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="title">
          <h2 className="titleText">
            Featured <span>Restaurants</span>
          </h2>
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
              <h3>Mc Donalds</h3>
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
        <div className="imgulli" style={{ display: "flex", justifyContent: "space-between" }}>
          <div >
            {" "}
            <img
              style={{ width: "90%" }}
              src="https://st.hzcdn.com/simgs/pictures/kitchens/beach-cottage-transformation-custom-cabinetry-creates-light-and-airy-kitchen-urbana-design-studio-img~c4c1a6ce0e81569a_14-4122-1-d16a4ac.jpg"
              alt="img"
            />{" "}
          </div>
          <div class="title white">
            <p class="titleText">
              <p>
                {" "}
                <span>Convience on your terms</span>{" "}
              </p>
              <ul className="ulli">
                <li>
                  Spend more time doing the things that matter to you---we will
                  take care of the rest
                </li>
                <li>
                  Browse hundreds of menus, meals and restaurant options all
                  from one app
                </li>
                <li>
                  Whether you are at home, at work or an event, we will deliver
                  to you
                </li>
                <li>
                  With our highly sophisticated application you can track your
                  order in real time from beginning to end
                </li>
                <li>
                  Order your food with a few taps and get it delivered to you..
                </li>
                <li>
                  Conveniently pay with your credit card or cash on delivery
                </li>
                <li>
                  Round the clock customer support to answer any questions you
                  may have
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <div className="copyrightTextfle" style={{}}>
        <div class="copyrighText">
          <p>© Copyright 2019 QuickDelivery, All rights reserved.</p>
        </div>
        <div>
            <FacebookOutlinedIcon/>
            <FacebookOutlinedIcon/>
        </div>
      </div>
    </div>
  );
};
export default Section;
