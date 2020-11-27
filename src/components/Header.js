import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Nav
} from 'reactstrap';
import githublogo from '../assets/github.png'

const Header = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >
          <img src={githublogo} alt="github" width="50" height="50" />
          Github User Finder</NavbarBrand>
          <Nav className="mr-auto d-flex w-100" navbar>
          {/* <NavbarText className="d-flex"> */}
          <input type="search" value={props.search} className="form-control" onChange={(e)=> props.handleSearch(e.target.value)} placeholder="Search User by name" />
          <button className="btn btn-primary" 
          onClick={props.fetchUser}>Search</button>
          {/* </NavbarText> */}
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header;