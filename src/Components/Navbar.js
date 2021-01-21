import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

export const Header1 = () => {
  const [login, setLogin] = useState(true);
  let loggedIn = localStorage.getItem("loggedIn");
  const logout = () => {
    localStorage.removeItem("loggedIn");
  };
  const renderLogin = () => {
    if (loggedIn) {
      return (
        <Nav.Link href='/' onClick={logout}>
          Logout
        </Nav.Link>
      );
    } else {
      return (
        <>
          <Nav.Link href='/login'>Login</Nav.Link>
          <Nav.Link href='/signup'>Signup</Nav.Link>
        </>
      );
    }
  };
  return (
    <nav>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Technoholic</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {/* <Nav.Link href='/'>Home</Nav.Link> */}
            <Nav.Link href='/blog'>Blogs</Nav.Link>
            {renderLogin()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};
