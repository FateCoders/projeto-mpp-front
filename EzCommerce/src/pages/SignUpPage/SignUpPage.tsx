import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "../../App.css";
import "./SignUpPage.css"; // crie se quiser estilos específicos

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    cep: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const nextStep = () => setStep(step + 1);
  const backStep = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Cadastro finalizado!");
  };

  const renderDots = () => (
    <div className="step-dots-container mt-4 text-center">
      <span className={`step-dot ${step === 1 ? "active" : ""}`} />
      <span className={`step-dot ${step === 2 ? "active" : ""}`} />
    </div>
  );

  return (
    <>
      <div className="full-page-layout contact-page">
        <HeaderComponent />
        <div className="full-page-content fade-in">
          <Container className="py-5">
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="p-4 shadow">
                  <Card.Body>
                    {step === 1 && (
                      <>
                        <h2 className="text-center mb-4">Bem-vindo ao EzCommerce</h2>
                        <Form>
                          {/* Campos */}
                          <Form.Floating className="mb-3">
                            <Form.Control
                              type="text"
                              name="nome"
                              id="nome"
                              value={formData.nome}
                              onChange={handleChange}
                              placeholder="Nome"
                              required
                            />
                            <label htmlFor="nome">Nome</label>
                          </Form.Floating>

                          <Form.Floating className="mb-3">
                            <Form.Control
                              type="email"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email"
                              required
                            />
                            <label htmlFor="email">Email</label>
                          </Form.Floating>

                          <Form.Floating className="mb-3">
                            <Form.Control
                              type="tel"
                              name="telefone"
                              id="telefone"
                              value={formData.telefone}
                              onChange={handleChange}
                              placeholder="Telefone"
                              required
                            />
                            <label htmlFor="telefone">Telefone</label>
                          </Form.Floating>

                          <Form.Floating className="mb-3">
                            <Form.Control
                              type="password"
                              name="senha"
                              id="senha"
                              value={formData.senha}
                              onChange={handleChange}
                              placeholder="Senha"
                              required
                            />
                            <label htmlFor="senha">Senha</label>
                          </Form.Floating>

                          <div className="text-end">
                            <Button
                              variant="primary"
                              onClick={nextStep}
                              disabled={
                                !formData.nome.trim() ||
                                !formData.email.trim() ||
                                !formData.telefone.trim() ||
                                !formData.senha.trim()
                              }
                            >
                              Próximo
                            </Button>
                          </div>
                          {renderDots()}
                        </Form>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <h2 className="text-center mb-4">Cadastro - Endereço</h2>
                        <Form onSubmit={handleSubmit}>
                          {/* Campos */}
                          <Form.Floating className="mb-3">
                            <Form.Control
                              type="text"
                              name="cep"
                              id="cep"
                              value={formData.cep}
                              onChange={handleChange}
                              placeholder="CEP"
                              required
                            />
                            <label htmlFor="cep">CEP</label>
                          </Form.Floating>

                          <Form.Floating className="mb-3">
                            <Form.Control
                              type="text"
                              name="endereco"
                              id="endereco"
                              value={formData.endereco}
                              onChange={handleChange}
                              placeholder="Endereço"
                              required
                            />
                            <label htmlFor="endereco">Endereço</label>
                          </Form.Floating>

                          <Form.Floating className="mb-3">
                            <Form.Control
                              type="text"
                              name="bairro"
                              id="bairro"
                              value={formData.bairro}
                              onChange={handleChange}
                              placeholder="Bairro"
                              required
                            />
                            <label htmlFor="bairro">Bairro</label>
                          </Form.Floating>

                          <Form.Floating className="mb-3">
                            <Form.Control
                              type="text"
                              name="cidade"
                              id="cidade"
                              value={formData.cidade}
                              onChange={handleChange}
                              placeholder="Cidade"
                              required
                            />
                            <label htmlFor="cidade">Cidade</label>
                          </Form.Floating>

                          <Form.Floating className="mb-4">
                            <Form.Control
                              type="text"
                              name="estado"
                              id="estado"
                              value={formData.estado}
                              onChange={handleChange}
                              placeholder="Estado"
                              required
                            />
                            <label htmlFor="estado">Estado</label>
                          </Form.Floating>

                          <div className="d-flex justify-content-between">
                            <Button variant="danger" onClick={backStep}>
                              Anterior
                            </Button>
                            <Button variant="primary" type="submit"
                              disabled={
                                !formData.cep.trim() ||
                                !formData.endereco.trim() ||
                                !formData.bairro.trim() ||
                                !formData.cidade.trim() ||
                                !formData.estado.trim()
                              }
                            >
                              Finalizar Cadastro
                            </Button>
                          </div>
                          {renderDots()}
                        </Form>
                      </>
                    )}
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

