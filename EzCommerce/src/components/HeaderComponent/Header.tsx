import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/images/svg/logo.svg";
import "./Header.css";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold d-flex align-items-center gap-2 text-white"
        >
          <img src={logo} alt="Logo EzCommerce" height="30" />
          EzCommerce
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-section ${isActive("/") ? "active" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-house-door-fill me-1"></i>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-section ${isActive("/about") ? "active" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-info-circle-fill me-1"></i>
              Sobre
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              className={`nav-section ${isActive("/cart") ? "active" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-cart-fill me-1"></i>
              Carrinho
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
