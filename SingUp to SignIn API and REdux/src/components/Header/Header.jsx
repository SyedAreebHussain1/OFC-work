
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import store from "../../store"


const Header = () => {
    const navigate = useNavigate()

    const logOut = () => {
        navigate('/login')
        localStorage.clear()
        store.dispatch({ type: "LOGIN", payload: null })
    }
    const createNewAccount = () => {
        navigate('/')
        localStorage.clear()
        store.dispatch({ type: "SIGNUP", payload: null })
    }
    return (
        <div className="Navbar">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>ES6</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link to='/contact'>Contact</Link></NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/userprofile'>User Profile</Link>
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" onClick={createNewAccount}>
                                    Create new account
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={logOut}>
                                    Log out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}
export default Header