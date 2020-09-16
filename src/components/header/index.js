import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/images/header/logo.png'

const Header = () => (
      <div className="header-wrapper">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="/home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/">Portfolio</Nav.Link>
                            <Nav.Link href="/">FAQ</Nav.Link>
                            <Nav.Link href="/">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>
            </div>
      </div>
);

export default Header;
