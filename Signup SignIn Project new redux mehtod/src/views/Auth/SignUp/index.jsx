import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory, useNavigate } from "react-router-dom";

// re
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../../store/action/index";
import { authSignUp } from "../../../store/reducer/authSignUp";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.authSignUp);
  console.log("state=>", state.signup);
  const signUpp = (e) => {
    e.preventDefault();
    if (body) {
      dispatch(signUpAction(body));
    }
  };
  const signIn = () => {
    navigate('/login')
   };
  useEffect(() => {
    if (state?.signup?.statusCode == 201) {
      alert(state?.signup?.message);
     navigate('/account_verify')
    }
     else if (state?.signup?.statusCode == 400) {
      alert(state?.signup?.message);
    }
  }, [state.signup]);
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
          <div>
            <h2 style={{ fontFamily: "sans" }}>Sign Up</h2>
          </div>
          <Form>
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
                <Form.Label>Phone</Form.Label>
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
                <Form.Label>Whatsapp no</Form.Label>
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={body.email}
                onChange={(text) =>
                  setBody({ ...body, email: text.target.value })
                }
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={body.password}
                type="password"
                onChange={(text) =>
                  setBody({ ...body, password: text.target.value })
                }
                placeholder="Password"
                name="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CNIC</Form.Label>
              <Form.Control
                value={body.cnic}
                maxLength={13}
                onChange={(text) =>
                  setBody({ ...body, cnic: text.target.value })
                }
                type="text"
                placeholder="#cnin"
                name="cnic"
                autoComplete="off"
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  value={body.dob}
                  onChange={(text) =>
                    setBody({ ...body, dob: text.target.value })
                  }
                  type="text"
                  name="dob"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  value={body.countryId}
                  onChange={(text) =>
                    setBody({ ...body, countryId: text.target.value })
                  }
                  type="number"
                  name="countryId"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={body.cityId}
                  onChange={(text) =>
                    setBody({ ...body, cityId: text.target.value })
                  }
                  type="number"
                  name="cityId"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  value={body.gender}
                  onChange={(text) =>
                    setBody({ ...body, gender: text.target.value })
                  }
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  autoComplete="off"
                />
              </Form.Group>
            </Row>
            <Button variant="primary" onClick={signUpp}>
              Sign Up
            </Button>
            <Button onClick={signIn} variant="Link">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
