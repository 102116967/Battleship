import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import Store from './Store.js'
import ContactUs from './ContactUs.js'
import {Navbar, Nav} from 'react-bootstrap';

function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
          <Nav bg="dark" variant="dark"  className="ml-auto" fixed="bottom">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Store">Store</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;
