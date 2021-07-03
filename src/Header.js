import React, { Component } from 'react';
import { Nav, Navbar, NavLink, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
//import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isNavOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
}

toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
}

toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}

  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar navbar-expand-lg navbar-light py-1" fixed="top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem><NavLink className="nav-link" to="/home"><FontAwesomeIcon icon={faHeart} /></NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/home">Home</NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/about">About</NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/menus">Menus</NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/reserve">Reserve</NavLink></NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
