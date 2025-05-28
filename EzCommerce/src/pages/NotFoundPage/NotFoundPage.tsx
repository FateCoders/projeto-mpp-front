import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import animationData from '../../assets/animations/notFound.json';

export default function NotFound() {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy();
    }
  }, []);

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="text-center">
        <Col>
          <div ref={animationContainer} style={{ width: '300px', height: '300px', margin: '0 auto' }}></div>
          <h1 className="mb-4">Oops! Página não encontrada</h1>
          <p className="mb-4">
            A página que você está procurando não existe.
          </p>
          <Link to="/">
            <Button variant="primary" style={{ border: 'none', borderRadius: '30px', padding: '10px 20px' }}>
              Voltar para a página inicial
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
