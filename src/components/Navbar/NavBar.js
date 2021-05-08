import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <div className="container">
        <NavLink className="navlink-brand" to="/">
          Kusikuy
        </NavLink>
        {/* <Navbar.Brand href="/" className="navbar-home">
          Guitar Nation
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="navlink-item" to="/category/cabañas">
              Cabañas
            </NavLink>
          </Nav>
          <Nav>
            <a href="#">
              <CartWidget />
            </a>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Menu;