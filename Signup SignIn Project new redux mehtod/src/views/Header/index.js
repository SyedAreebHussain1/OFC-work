import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

import { profileDataAction } from "../../store/action/profileData";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
// import Formm from "../Form";
// import CityList from "../CityList";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const state = useSelector((state) => state.dataProfile);
  //   console.log("profile=>", state.profile);
  // console.log("data",dataa)

    const logOut = () => {
      navigate("/login");
      localStorage.clear();
      store.dispatch({ type: "SIGNIN", payload: null });
    };
    const createNewAccount = () => {
      navigate("/");
      localStorage.clear();
      store.dispatch({ type: "SIGNUP", payload: null });
    };
    const userForm = () => {
      navigate("/user/form");
    };
    const userAbout = () => {
      navigate("/user/about");
    };
    useEffect(() => {
      dispatch(profileDataAction());
    }, []);

    useEffect(() => {
      if (state?.profile) {
        setData(state?.profile?.data);
      }
    }, [state?.profile]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            Welcome {state?.profile?.data?.firstName}{" "}
            {state?.profile?.data?.lastName}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>{state?.profile?.data?.country?.title}</Nav.Link>
              <Nav.Link>{state?.profile?.data?.user?.email}</Nav.Link>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  {state?.profile?.data?.firstName}{" "}
                  {state?.profile?.data?.lastName} Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={userAbout}>
                  {state?.profile?.data?.firstName}{" "}
                  {state?.profile?.data?.lastName} About
                </NavDropdown.Item>
                <NavDropdown.Item onClick={userForm}>
                  User Form
                </NavDropdown.Item>
                <NavDropdown.Item onClick={createNewAccount}>
                  Create account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
export default Header;
