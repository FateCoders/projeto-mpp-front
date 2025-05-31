import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "../../App.css";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <div className="full-page-layout contact-page">
        <HeaderComponent />
        <div className="full-page-content fade-in">
          <Container className="py-5">
            <h1 className="text-center mb-4">Entre em Contato Conosco</h1>
            <p className="text-center mb-5">
              Precisa de ajuda? Utilize as opções abaixo para entrar em contato
              com a nossa equipe.
            </p>

            <Row>
              <Col md={6} className="mb-4">
                <Card className="contact-card">
                  <Card.Body>
                    <Card.Title>Chat Online</Card.Title>
                    <Card.Text>
                      Converse com um de nossos atendentes em tempo real.
                    </Card.Text>
                    <Button variant="primary">Iniciar Chat</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="mb-4">
                <Card className="contact-card">
                  <Card.Body>
                    <Card.Title>Email</Card.Title>
                    <Card.Text>
                      Envie um email para nossa equipe de suporte.
                    </Card.Text>
                    <a href="mailto:suporte@example.com">suporte@example.com</a>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="mb-4">
                <Card className="contact-card">
                  <Card.Body>
                    <Card.Title>Telefone</Card.Title>
                    <Card.Text>
                      Ligue para nossa central de atendimento.
                    </Card.Text>
                    <p>+55 (11) 4002-8922</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="mb-4">
                <Card className="contact-card">
                  <Card.Body>
                    <Card.Title>Formulário de Contato</Card.Title>
                    <Card.Text>
                      Preencha o formulário abaixo para enviar sua mensagem.
                    </Card.Text>
                    <Form>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" placeholder="Seu nome" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Seu email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Mensagem:</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Sua mensagem"
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Enviar
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
