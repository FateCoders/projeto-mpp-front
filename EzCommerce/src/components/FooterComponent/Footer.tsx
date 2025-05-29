import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="text-center text-lg-start mb-3 mb-lg-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
            </p>
          </Col>
          <Col lg={6} md={12} className="text-center text-lg-end">
            <Link
              to="/privacy-policy"
              className="text-muted me-3"
              aria-label="Política de Privacidade"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/terms-of-service"
              className="text-muted"
              aria-label="Termos de Serviço"
            >
              Termos de Serviço
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
