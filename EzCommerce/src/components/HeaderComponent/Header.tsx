import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useCategory } from "../../contexts/CategoryContext";
import { useTheme } from "../../utils/useTheme";
import logo from "../../assets/images/svg/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";

interface HeaderProps {
  variant?: "default" | "back";
  backTitle?: string;
  onBack?: () => void;
}

const categories = ["Limpar", "Eletrônicos", "Roupas", "Casa", "Brinquedos"];

const HeaderComponent: React.FC<HeaderProps> = ({
  variant = "default",
  backTitle = "Voltar",
  onBack,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const location = useLocation();
  const { setSelectedCategory } = useCategory();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategories(false);
    setExpanded(false);
  };

  let content;

  if (variant === "back") {
    content = (
      <Button
        variant="link"
        className="text-white p-0 d-flex align-items-center"
        onClick={onBack}
      >
        <i className="bi bi-arrow-left me-2"></i>{" "}
        <span style={{ textDecoration: "none" }}>{backTitle}</span>
      </Button>
    );
  } else {
    content = (
      <Navbar.Brand
        as={Link}
        to="/"
        className="fw-bold d-flex align-items-center gap-2 text-white"
      >
        <img src={logo} alt="Logo EzCommerce" height="30" />
        EzCommerce
      </Navbar.Brand>
    );
  }

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="custom-navbar"
    >
      <Container>
        {content}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-section ${isActive("/") ? "active" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-house-door-fill me-1"></i> Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className={`nav-section ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-envelope-fill me-1"></i> Contato
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/cart"
              className={`nav-section ${isActive("/cart") ? "active" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-cart-fill me-1"></i> Carrinho
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/perfil"
              className={`nav-section ${isActive("/perfil") ? "active" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-person-fill me-1"></i> Perfil
            </Nav.Link>

            <Nav.Item
              className="nav-section position-relative"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center h-100 text-white">
                Categorias <i className="bi bi-caret-down-fill ms-1"></i>
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
                  {categories.map((cat) => {
                    const isClearFilter = cat === "Limpar";
                    return (
                      <div
                        key={cat || "limpar"}
                        className={`px-3 py-2 text-dark ${
                          isClearFilter
                            ? "bg-danger bg-opacity-10 text-danger fw-semibold"
                            : "hover-bg-light"
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleCategorySelect(isClearFilter ? "" : cat)
                        }
                      >
                        {isClearFilter ? "Limpar filtro" : cat}
                      </div>
                    );
                  })}
                </div>
              )}
            </Nav.Item>

            <Button
              variant={"outline-light"}
              size="sm"
              onClick={toggleTheme}
              className="ms-2 align-self-center"
              title="Alternar tema"
            >
              {theme === "light" ? (
                <i className="bi bi-moon-fill" />
              ) : (
                <i className="bi bi-sun-fill" />
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
