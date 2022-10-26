import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory, useNavigate } from "react-router-dom";

// re
import { useDispatch, useSelector } from "react-redux";
// import { signUpAction } from "../../../store/action/index";
// import { authSignUp } from "../../../store/reducer/authSignUp";



const SignUp = () => {
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

  return (
    <>
      <div>
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
          {/* <div>
              <h2 style={{ fontFamily: "sans" }}>Sign Up</h2>
            </div> */}
          <Form>
            <div style={{ border: '1px solid black', width: '35%', height: '50px', display: 'flex', justifyItems: 'center' }}>
              <input type="file" />
            </div>
            <br />
            <div style={{ border: '1px solid black' }}>
              <h6>PART 1 - Personal Information</h6>
            </div>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={body.firstName}
                  onChange={(text) =>
                    setBody({ ...body, firstName: text.target.value })
                  }
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  value={body.lastName}
                  onChange={(text) =>
                    setBody({ ...body, lastName: text.target.value })
                  }
                  name="lastName"
                  placeholder="Middle Name"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={body.lastName}
                  onChange={(text) =>
                    setBody({ ...body, lastName: text.target.value })
                  }
                  name="lastName"
                  placeholder="Last Name"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Father's/Spouse's Name</Form.Label>
                <Form.Control
                  value={body.phone}
                  onChange={(text) =>
                    setBody({ ...body, phone: text.target.value })
                  }
                  type="text"
                  placeholder="Father Name"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>CNIC No.</Form.Label>
                <Form.Control
                  value={body.phone}
                  maxLength={13}
                  onChange={(text) =>
                    setBody({ ...body, phone: text.target.value })
                  }
                  type="text"
                  placeholder="CNIC No."
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Passport No.</Form.Label>
                <Form.Control
                  value={body.whatsapp_no}
                  type="text"
                  maxLength={13}
                  onChange={(text) =>
                    setBody({ ...body, whatsapp_no: text.target.value })
                  }
                  name="whatsapp_no"
                  placeholder="Whatsapp"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Address (Residence)</Form.Label>
              <Form.Control
                value={body.email}
                onChange={(text) =>
                  setBody({ ...body, email: text.target.value })
                }
                type="text"
                name="email"
                autoComplete="off"
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Profession</Form.Label>
                <Form.Control
                  value={body.phone}
                  maxLength={13}
                  onChange={(text) =>
                    setBody({ ...body, phone: text.target.value })
                  }
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  value={body.whatsapp_no}
                  type="text"
                  maxLength={13}
                  onChange={(text) =>
                    setBody({ ...body, whatsapp_no: text.target.value })
                  }
                  name="whatsapp_no"
                  placeholder="Whatsapp"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Address (Office)</Form.Label>
              <Form.Control
                value={body.password}
                type="text"
                onChange={(text) =>
                  setBody({ ...body, password: text.target.value })
                }
                name="password"
                autoComplete="off"
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Tel. (Office)</Form.Label>
                <Form.Control
                  value={body.phone}
                  maxLength={13}
                  onChange={(text) =>
                    setBody({ ...body, phone: text.target.value })
                  }
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Tel. (Residence)</Form.Label>
                <Form.Control
                  value={body.whatsapp_no}
                  type="text"
                  maxLength={13}
                  onChange={(text) =>
                    setBody({ ...body, whatsapp_no: text.target.value })
                  }
                  name="whatsapp_no"
                  placeholder="Whatsapp"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  value={body.phone}
                  maxLength={13}
                  onChange={(text) =>
                    setBody({ ...body, phone: text.target.value })
                  }
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={body.whatsapp_no}
                  type="email"
                  onChange={(text) =>
                    setBody({ ...body, whatsapp_no: text.target.value })
                  }
                  name="whatsapp_no"
                  placeholder="Whatsapp"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  value={body.phone}
                  maxLength={13}
                  onChange={(text) =>
                    setBody({ ...body, phone: text.target.value })
                  }
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  value={body.whatsapp_no}
                  type="email"
                  onChange={(text) =>
                    setBody({ ...body, whatsapp_no: text.target.value })
                  }
                  name="whatsapp_no"
                  placeholder="Whatsapp"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            {/* <Button variant="primary" onClick={signUpp}>
                Sign Up
              </Button>
              <Button onClick={signIn} variant="Link">
                Login
              </Button> */}
          </Form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
