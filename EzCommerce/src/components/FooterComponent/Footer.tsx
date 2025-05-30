import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={6}
            md={12}
            className="text-center text-lg-start mb-3 mb-lg-0"
          >
            <p className="mb-0 footer-text">
              &copy; {new Date().getFullYear()} EzCommerce. Todos os direitos
              reservados.
            </p>
          </Col>
          <Col lg={6} md={12} className="text-center text-lg-end">
            <Link to="/privacy-policy" className="footer-link me-3">
              Política de Privacidade
            </Link>
            <Link to="/terms-of-service" className="footer-link">
              Termos de Serviço
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
