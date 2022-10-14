
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="Navbar">
            {/* <h1>React Router v6</h1> */}
            {/* <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>

                </ul> */}
            {/* NavLink color change kar karta ha link ka jis NavLink pe hum click karty ha usko */}
            {/* <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li> */}

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
                                <NavDropdown.Item href="#action/3.4">
                                    <Link to='/'>Create new account</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/login'>Log Out</Link>
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