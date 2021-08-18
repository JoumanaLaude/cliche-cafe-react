import React, { useState } from 'react';
import { Container, Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/cafe-logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar isOpen={isOpen} className="navbar navbar-expand-lg navbar-light" sticky="top">
      <Container>
        <NavbarBrand><NavLink onClick={() => setIsOpen(false)} className="nav-link-logo" to="/home"><img src={logo} alt="logo" /></NavLink></NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="justify-content-end mobile-link" style={{ width: "100%" }}>
            <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/home">Home</NavLink></NavItem>
            <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/about">About</NavLink></NavItem>
            <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/menu">Menu</NavLink></NavItem>
            <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/reserve">Reserve</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
