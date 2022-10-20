import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { signUpAction } from "../../store/action/index"

function SignUpForm(props) {
  console.log('SignUpForm=>', props)
  console.log('SignUpForm=>', props.signup)
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [whatsapp_no, setWhatsappNo] = useState(null);
  const [cnic, setCnic] = useState(null);
  const [dob, setDob] = useState(null);
  const [countryId, setCountryId] = useState(1);
  const [cityId, setCityId] = useState(1);
  const [gender, setGender] = useState(null);

  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault()
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
    console.log(total)
    if (firstName && lastName && email && password && phone && whatsapp_no && cnic && dob && countryId && cityId && gender) {
      props.signUpAction(total)
    } else {
      alert(props.signup.error)
    }
  }
  const signIn = () => {
    navigate('/login')
  }
  useEffect(() => {
    if (props.signup?.statusCode == 201) {
      navigate("/accountverify");
      alert(props.signup.message)
    } else if (props.signup?.statusCode == 400) {
      alert(props.signup.message)
    }
  }, [props.signup])

  return (
    <div>
      <div style={{
        border: "1px solid gray",
        padding: '20px',
        width: "50%",
        height: "100%",
        marginTop: "10px",
        marginLeft: "25%",
      }}>
        <div><h2 style={{ fontFamily: 'sans' }}>Sign Up</h2></div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control value={firstName} onChange={(text) => setFirstName(text.target.value)} type="text" name='firstName' placeholder="First Name" autoComplete="off" />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" value={lastName} onChange={(text) => setLastName(text.target.value)} name='lastName' placeholder="Last Name" autoComplete="off" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Phone</Form.Label>
              <Form.Control value={phone} maxLength={13} onChange={(text) => setPhone(text.target.value)} type="text" name='phone' placeholder="Phone" autoComplete="off" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Whatsapp no</Form.Label>
              <Form.Control value={whatsapp_no} type="text" maxLength={13} onChange={(text) => setWhatsappNo(text.target.value)} name='whatsapp_no' placeholder="Whatsapp" autoComplete="off" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} onChange={(text) => setEmail(text.target.value)} type='email' placeholder="Email" name='email' autoComplete="off" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} type='password' onChange={(text) => setPassword(text.target.value)} placeholder="Password" name='password' autoComplete="off" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CNIC</Form.Label>
            <Form.Control value={cnic} maxLength={13} onChange={(text) => setCnic(text.target.value)} type='text' placeholder="#cnin" name='cnic' autoComplete="off" />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>DOB</Form.Label>
              <Form.Control value={dob} onChange={(text) => setDob(text.target.value)} type='text' name='dob' autoComplete="off" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Control value={countryId} onChange={(text) => setCountryId(text.target.value)} type='number' name="countryId" autoComplete="off" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control value={cityId} onChange={(text) => setCityId(text.target.value)} type='number' name="cityId" autoComplete="off" />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Gender</Form.Label>
              <Form.Control value={gender} onChange={(text) => setGender(text.target.value)} type='text' name='gender' placeholder="Gender" autoComplete="off" />
            </Form.Group>
          </Row>
          {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" onClick={signUp}>
            Sign Up
          </Button>
          {/* &nbsp; */}
          <Button onClick={signIn} variant="Link">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  signup: state.signup,
  // profile: state.profile
});
const mapDispatchToProps = (dispatch) => ({
  signUpAction: (data) => dispatch(signUpAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
