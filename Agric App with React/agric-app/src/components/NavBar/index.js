import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Farmly from '../../assets/img/Farmly.png';
import './navbar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='main-nav'>
      <LinkContainer to='/'>
        <Navbar.Brand className='mr-5'>
          <img
            src={Farmly}
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer to='#'>
            <Nav.Link className='mx-3'>How It Works</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/crops'>
            <Nav.Link className='mx-3'>Crops</Nav.Link>
          </LinkContainer>
          <NavDropdown
            className='mx-3'
            title='Market Place'
            id='collasible-nav-dropdown'
          >
            <LinkContainer to='/buy'>
              <NavDropdown.Item>Buy</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/sell'>
              <NavDropdown.Item>Sell</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/hire'>
              <NavDropdown.Item>Hire</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to='#explore'>
              <NavDropdown.Item>Explore</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav>
          <LinkContainer to='#login'>
            <Nav.Link className='mx-3'>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/register'>
            <Nav.Link className='mx-3 signup-btn'>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
