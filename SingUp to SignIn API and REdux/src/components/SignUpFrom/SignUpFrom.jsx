import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { signInFormAction } from "../../store/action";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const SignUp = (props) => {
  console.log("Props=>", props);
  console.log("signUp=>", props.signUp);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp_no, setWhatsappNo] = useState('');
  const [cnic, setCnic] = useState('');
  const [dob, setDob] = useState('');
  const [countryId, setCountryId] = useState(1);
  const [cityId, setCityId] = useState(1);
  const [gender, setGender] = useState('');
  // const [err, setErr] = useState('')

  const navigate = useNavigate();

  const signUpForm = (e) => {
    e.preventDefault();
    const total = {
      firstName,
      lastName,
      email,
      password,
      phone,
      whatsapp_no,
      cnic,
      dob,
      countryId,
      cityId,
      gender,
    };
    if (total) {
      props.signInFormAction(total);
    }
  };

  useEffect(() => {
    if (props.signUp) {
      navigate("/login");
    }
  }, [props.signUp]);

  // useEffect(() => {
  //     if (props.users) {
  //         navigate('/login', { state: {email:email,firstName:firstName} });
  //     }
  // }, [])
  // useEffect(() => {
  //     if (props.error) {
  //         setEmail('')
  //         setPassword('')
  //         alert(props.error)
  //     }
  // }, [props.error])
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "30%",
        height: "100%",
        marginTop: "10px",
        marginLeft: "35%",
      }}
    >
      <h2>SIGN UP</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>First Name</Form.Label> */}
          <Form.Control
            value={firstName}
            onChange={(text) => setFirstName(text.target.value)}
            type="name"
            name="firstName"
            autoComplete="off"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Last Name</Form.Label> */}
          <Form.Control
            value={lastName}
            onChange={(text) => setLastName(text.target.value)}
            type="name"
            name="lastName"
            autoComplete="off"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control
            value={email}
            onChange={(text) => setEmail(text.target.value)}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            value={password}
            onChange={(text) => setPassword(text.target.value)}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Phone</Form.Label> */}
          <Form.Control
            value={phone}
            onChange={(text) => setPhone(text.target.value)}
            type="text"
            name="phone"
            autoComplete="off"
            placeholder="Phone"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Whatsapp Number</Form.Label> */}
          <Form.Control
            value={whatsapp_no}
            onChange={(text) => setWhatsappNo(text.target.value)}
            type="text"
            name="whatsapp_no"
            autoComplete="off"
            placeholder="Whatsapp No"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Cnic</Form.Label> */}
          <Form.Control
            value={cnic}
            onChange={(text) => setCnic(text.target.value)}
            type="text"
            name="cnic"
            autoComplete="off"
            placeholder="CNIC"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Date Of Birth</Form.Label> */}
          <Form.Control
            value={dob}
            onChange={(text) => setDob(text.target.value)}
            type="text"
            name="dob"
            autoComplete="off"
            placeholder="Date Of Birth"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Country Id</Form.Label> */}
          <Form.Control
            value={countryId}
            onChange={(text) => setCountryId(text.target.value)}
            type="number"
            name="countryId"
            autoComplete="off"
            placeholder="Country Id"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>City ID</Form.Label> */}
          <Form.Control
            value={cityId}
            onChange={(text) => setCityId(text.target.value)}
            type="number"
            name="cityId"
            autoComplete="off"
            placeholder="City Id number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Gender</Form.Label> */}
          <Form.Control
            value={gender}
            onChange={(text) => setGender(text.target.value)}
            type="text"
            name="gender"
            autoComplete="off"
            placeholder="Gender"
          />
        </Form.Group>
        <Button onClick={signUpForm} variant="primary">
          SignUp
        </Button>
        <Link to='/login'> <Button variant="primary">
          Sign In
        </Button>
        </Link>
      </Form>
    </div >
  );
};

const mapStateToProps = (state) => ({
  signUp: state.signUp,
});
const mapDispatchToProps = (dispatch) => ({
  signInFormAction: (data) => dispatch(signInFormAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);