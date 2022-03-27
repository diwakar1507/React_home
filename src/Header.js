import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import logo from './images/logo.svg'
class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <img className="h-8 w-8 mr-2" src={logo}></img>
                        <Navbar.Brand href="#home">Jigiriz Impex</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="Login">Login</Nav.Link>
                                <Nav.Link href="Register">Regsiter</Nav.Link>
                                <Nav.Link href="Cart">Your Orders</Nav.Link>
                                <NavDropdown title="User" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Your Account</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Status</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Refer&Earn</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
export default Header; 