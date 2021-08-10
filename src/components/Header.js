import React, { useState } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar isOpen={isOpen} className="navbar navbar-expand-lg navbar-light py-1" fixedTop>
          <div className="container">
          <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
                <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/home"><FontAwesomeIcon icon={faHeart} /></NavLink></NavItem>
                <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/home">Home</NavLink></NavItem>
                <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/about">About</NavLink></NavItem>
                <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/menu">Menu</NavLink></NavItem>
                <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/reserve">Reserve</NavLink></NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
    );
  }

export default Header;
