import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/teslaLogoSmall.svg';
const NavTop = () => {
    return (
        <Navbar fixed="top" expand="lg" className="ms-5 me-5">
           
                <Navbar.Brand  href="#home">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-3 text-dark"  href="#home" >Model S</Nav.Link>
                        <Nav.Link className="ms-3 text-dark" href="#home">Model 3</Nav.Link>
                        <Nav.Link className="ms-3 text-dark" href="#home">Model X</Nav.Link>
                        <Nav.Link className="ms-3 text-dark" href="#home">Model Y</Nav.Link>
                        <Nav.Link className="ms-3 text-dark" href="#home">Solar Roof</Nav.Link>
                        <Nav.Link className="ms-3 text-dark" href="#home">Solar Panels</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-3 text-dark" href="#home">Shop</Nav.Link>
                        <Nav.Link className="ms-3 text-dark" href="#link">Account</Nav.Link>
                        <Nav.Link className="ms-3 text-dark" href="#link">Menu</Nav.Link>
                    </Nav>
                 
                </Navbar.Collapse>
           
          
        </Navbar>
    );
};

export default NavTop;