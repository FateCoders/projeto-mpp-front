import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/images/svg/logo.svg";
import "./Header.css";

const categories = ["Eletrônicos", "Roupas", "Casa", "Brinquedos"];

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategories(false);
    setExpanded(false);
    console.log("Categoria selecionada:", category);
  };

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
          <Nav className="ms-auto gap-3">
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
              to="/contact"
              className={`nav-section ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-envelope-fill me-1"></i>
              Contato
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

            <Nav.Item
              className="nav-section position-relative"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center  h-100 text-white">
                Categorias
                <i className="bi bi-caret-down-fill ms-1"></i>
              </div>

              {showCategories && (
                <div
                  className="position-absolute bg-white rounded shadow"
                  style={{
                    top: "100%",
                    left: 0,
                    minWidth: "150px",
                    zIndex: 1000,
                  }}
                >
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="px-3 py-2 text-dark hover-bg-light"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCategorySelect(cat)}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
