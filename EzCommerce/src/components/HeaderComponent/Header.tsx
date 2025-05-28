import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="success" expand="md" fixed="top" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          EzCommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
              Sobre
            </Nav.Link>
            <Nav.Link href="#services" onClick={() => setExpanded(false)}>
              Carrinho
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;