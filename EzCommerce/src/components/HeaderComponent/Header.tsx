import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importa os ícones
import logo from "../../assets/images/svg/logo.svg";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="success"
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{ color: "white" }}
          className="fw-bold d-flex align-items-center gap-2"
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
              style={{ color: "white" }}
              href="#home"
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-house-door-fill me-1"></i>
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="#about"
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-info-circle-fill me-1"></i>
              Sobre
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="#cart"
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
