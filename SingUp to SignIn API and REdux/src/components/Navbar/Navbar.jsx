import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    const setSign = () => {
        // window.location.assign('http://localhost:3000/')
        window.location.replace('http://localhost:3000/')
    }
    let setLogOut = () => {
        window.location.replace('http://localhost:3000/login')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home"  >Log Out</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
                        <NavDropdown title="Option" id="basic-nav-dropdown">
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                            <NavDropdown.Item href="#action/3.2" onClick={setSign} >
                                Create new account
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" onClick={setLogOut}>
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;