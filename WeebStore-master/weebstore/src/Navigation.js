import React from 'react';
import './App.css';
import Home from './Home.js';
import Store from './Store.js'
import ContactUs from './ContactUs.js'
import {Navbar, Nav} from 'react-bootstrap';

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/Home">Weeb Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Store">Store</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
