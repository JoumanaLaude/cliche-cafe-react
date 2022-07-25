import React, { useState } from 'react';
import { Container, Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/cliche-cafe-logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <Navbar isOpen={isOpen} className="navbar navbar-expand-lg navbar-light">
        <Container>
          <NavbarBrand><NavLink onClick={() => setIsOpen(false)} className="nav-link-logo" to="/"><img src={logo} alt="logo" width="286" height="56" /></NavLink></NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="justify-content-end mobile-link" style={{ width: "100%" }}>
              <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/">Home</NavLink></NavItem>
              <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/menu">Menu</NavLink></NavItem>
              <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/about">About Us</NavLink></NavItem>
              <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/reserve">Reserve</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
