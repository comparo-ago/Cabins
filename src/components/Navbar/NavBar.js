import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "../Navbar/NavBar.css";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <div className="container">
        <NavLink className="navlink-brand" to="/">
          Guitar Nation
        </NavLink>
        {/* <Navbar.Brand href="/" class="navbar-home">
          Guitar Nation
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="navlink-item" to="/category/guitars">
              Guitars
            </NavLink>
            <NavLink className="navlink-item" to="/category/amps">
              Amps
            </NavLink>
            <NavLink className="navlink-item" to="/category/effects">
              Effects
            </NavLink>
            {/* <Nav.Link href="/category/amps">Amps</Nav.Link>
            <Nav.Link href="/category/effects">EffectS</Nav.Link> */}
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