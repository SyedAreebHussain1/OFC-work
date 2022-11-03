import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory, useNavigate } from "react-router-dom";
import Header from "../Header";
// re
import { useDispatch, useSelector } from "react-redux";
// import { signUpAction } from "../../../store/action/index";
// import { authSignUp } from "../../../store/reducer/authSignUp";

const Formm = () => {
  const [body, setBody] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    phone: null,
    whatsapp_no: null,
    cnic: null,
    dob: null,
    countryId: null,
    cityId: null,
    gender: null,
  });
  // console.log(body);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const state = useSelector((state) => state.authSignUp);

  const sty = {
    boxShadow: "none",
    border: 0,
    outline: 0,
    background: "transparent",
    borderBottom: "1px solid black",
    borderRadius: "2px",
  };
  return (
    <>
      <div>
        <div>
            <Header/>
        </div>
        <Form>
          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "50%",
              height: "100%",
              marginTop: "10px",
              marginLeft: "25%",
            }}
          >
            <Row>
              <Col xs={4}></Col>
              <Col xs={4}>
                <img
                  style={{ width: "100px", marginTop: "-20px" }}
                  src="https://i.pinimg.com/originals/5d/b1/61/5db161c96c535ff826d387e010941e62.jpg"
                  alt=""
                />
              </Col>
              <Col xs={4}>
                <div style={{ border: "1px solid black", marginTop: "20px" }}>
                  <input type="file" />
                </div>
              </Col>
            </Row>
            {/* <br /> */}
            <div
              style={{
                borderBottom: "1px solid black",
                marginBottom: "10px",
                color: "green",
              }}
            >
              <h6 style={{ color: "green" }}>PART 1 - Personal Information</h6>
            </div>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  style={sty}
                  value={body.firstName}
                  onChange={(text) =>
                    setBody({ ...body, firstName: text.target.value })
                  }
                  type="text"
                  name="firstName"
                  // placeholder="First Name"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  value={body.lastName}
                  onChange={(text) =>
                    setBody({ ...body, lastName: text.target.value })
                  }
                  name="lastName"
                  // placeholder="Middle Name"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="Last Name"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Father's/Spouse's Name</Form.Label>
                <Form.Control
                  style={sty}
                  value={body.phone}
                  onChange={(text) =>
                    setBody({ ...body, phone: text.target.value })
                  }
                  type="text"
                  // placeholder="Father Name"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>CNIC No.</Form.Label>
                <Form.Control
                  style={sty}
                  maxLength={13}
                  type="text"
                  // placeholder="CNIC No."
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Passport No.</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  maxLength={13}
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Address (Residence)</Form.Label>
              <Form.Control
                style={sty}
                type="text"
                // placeholder="-"
                autoComplete="off"
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Profession</Form.Label>
                <Form.Control
                  style={sty}
                  value={body.phone}
                  maxLength={13}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  maxLength={13}
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Address (Office)</Form.Label>
              <Form.Control style={sty} type="text" autoComplete="off" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Tel. (Office)</Form.Label>
                <Form.Control
                  style={sty}
                  maxLength={13}
                  type="text"
                  name="phone"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Tel. (Residence)</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  maxLength={13}
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  style={sty}
                  maxLength={13}
                  type="text"
                  // placeholder="Phone"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  style={sty}
                  value={body.whatsapp_no}
                  type="email"
                  // placeholder="Email"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  name="phone"
                  // placeholder="YYYY/MM/DD"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  style={sty}
                  type="email"
                  onChange={(text) =>
                    setBody({ ...body, whatsapp_no: text.target.value })
                  }
                  name="whatsapp_no"
                  // placeholder="Nationality"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "50%",
              height: "100%",
              marginTop: "10px",
              marginLeft: "25%",
            }}
          >
            <div
              style={{ borderBottom: "1px solid black", marginBottom: "10px" }}
            >
              <h6 style={{ color: "green" }}>PART 2 - Preference</h6>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <Col>
                  <Form.Check label={`Plot (Residential)`} />
                  <Form.Check label={`125 sq. Yards`} />
                  <Form.Check label={`250 sq. Yards`} />
                  <Form.Check label={`500 sq. Yards`} />
                  <Form.Check label={`1,000 sq. Yards`} />
                </Col>
              </div>
              <div
              // style={{ border: '1px solid black'}}
              >
                <Form.Check label={`Commericial Plot`} />
                <Form.Group as={Col}>
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    style={sty}
                    type="text"
                    name="firstName"
                    placeholder="133.33"
                    autoComplete="off"
                  />
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    style={sty}
                    type="text"
                    placeholder="commerical"
                    autoComplete="off"
                  />
                  <Form.Label>Other Details</Form.Label>
                  <Form.Control
                    style={sty}
                    value="-"
                    type="text"
                    name="firstName"
                    // placeholder=""
                    autoComplete="off"
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Check label={`Any other Category`} />
                <Form.Group as={Col}>
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    style={sty}
                    type="text"
                    name="firstName"
                    placeholder="-"
                    autoComplete="off"
                  />
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    style={sty}
                    type="text"
                    name="firstName"
                    placeholder="-"
                    autoComplete="off"
                  />
                  <Form.Label>Other Details</Form.Label>
                  <Form.Control
                    style={sty}
                    type="text"
                    name="firstName"
                    placeholder="-"
                    autoComplete="off"
                  />
                </Form.Group>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "50%",
              height: "100%",
              marginTop: "10px",
              marginLeft: "25%",
            }}
          >
            <div
              style={{ borderBottom: "1px solid black", marginBottom: "10px" }}
            >
              <h6 style={{ color: "green" }}>Positioning</h6>
            </div>
            {/* <br /> */}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <Form.Check label={`Standard`} />
                <Form.Check label={`Road Facing at 10% premium`} />
                <Form.Check label={`west Open`} />
              </div>
              <div>
                <Form.Check label={`Special Location (at 10% premium)`} />
                <Form.Check label={`Corner at 10% premium`} />
                <Form.Label>Multiple Location Facing:</Form.Label>
              </div>
              <div>
                <Form.Check label={`Park/green area Facing at 10% premium`} />
                <Form.Control
                  style={{
                    marginTop: "20px",
                    height: "30px",
                    border: 0,
                    outline: 0,
                    background: "transparent",
                    borderBottom: "1px solid black",
                    boxShadow: "none",
                    border: 0,
                    borderRadius: "2px",
                  }}
                  type="text"
                  name=""
                  placeholder=""
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "50%",
              height: "100%",
              marginTop: "10px",
              marginLeft: "25%",
            }}
          >
            <div
              style={{ borderBottom: "1px solid black", marginBottom: "10px" }}
            >
              <h6 style={{ color: "green" }}>Part 3 - Nominee Information</h6>
            </div>
            <div>
              <Row>
                <Col>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        style={sty}
                        type="text"
                        autoComplete="off"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Relation with Applicant</Form.Label>
                      <Form.Control
                        style={sty}
                        type="text"
                        placeholder="son"
                        autoComplete="off"
                      />
                    </Form.Group>
                  </Row>
                </Col>
                <Col style={{ display: "flex", justifyContent: "right" }}>
                  <div
                    style={{
                      border: "2px solid black",
                      height: "150px",
                      width: "50%",
                      //  display: 'flex', justifyContent: 'right'
                    }}
                  >
                    <img src="" alt="photo" />
                  </div>
                </Col>
              </Row>
              <Form.Group as={Col}>
                <Form.Label>
                  Son/wife/daughter of (incase not related by blood to the
                  applicant)
                </Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>CNIC No.</Form.Label>
                  <Form.Control
                    style={sty}
                    maxLength={13}
                    type="text"
                    // placeholder="#cnic"
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Passport No.</Form.Label>
                  <Form.Control style={sty} type="text" autoComplete="off" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Tel</Form.Label>
                  <Form.Control
                    style={sty}
                    maxLength={13}
                    type="text"
                    // placeholder="-"
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    style={sty}
                    maxLength={13}
                    type="text"
                    // placeholder="-"
                    autoComplete="off"
                  />
                </Form.Group>
              </Row>
            </div>
          </div>
          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "50%",
              height: "100%",
              marginTop: "10px",
              marginLeft: "25%",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid black",
                marginBottom: "10px",
                // display: 'flex'
              }}
            >
              <div style={{ color: "green" }}>
                Part 4 - Payment Details (For Office Use Only){" "}
              </div>
            </div>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>
                  Crossed Cheque Demand Draft/Pay Order No.
                </Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Dated</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Currency</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Drawn on</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  name="lastName"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Bank</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Booking Dated</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Booking Price</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Total Amount</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Total Installments</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  placeholder="34"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>First Installment due on</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Last Installment due on</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Form Received by</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>on dt</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Signature & Stamp</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  placeholder=""
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Remarks</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Referred by</Form.Label>
                <Form.Control
                  style={sty}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Number</Form.Label>
                <Form.Control
                  style={sty}
                  maxLength={13}
                  type="text"
                  // placeholder="-"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
          </div>
        </Form>
      </div>
      <br />
    </>
  );
};
export default Formm;
