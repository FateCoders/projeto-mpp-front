import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "../../App.css";
import "./SignUpPage.css";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmPassword: "",
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

  const animationProps = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.2 },
  };

  return (
    <div className="full-page-layout contact-page">
      <HeaderComponent />
      <div className="full-page-content fade-in">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="p-4 shadow">
                <Card.Body>
                  <h2 className="text-center mb-4">Bem-vindo ao EzCommerce</h2>

                  <Form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div key="step1" {...animationProps}>
                          <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>
                              <i className="bi bi-person-fill me-2"></i>Nome:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="nome"
                              value={formData.nome}
                              onChange={handleChange}
                              placeholder="Digite seu nome completo"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="email">
                            <Form.Label>
                              <i className="bi bi-envelope-fill me-2"></i>Email:
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Digite seu email"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="telefone">
                            <Form.Label>
                              <i className="bi bi-telephone-fill me-2"></i>
                              Telefone:
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="telefone"
                              value={formData.telefone}
                              onChange={handleChange}
                              placeholder="Digite seu telefone"
                              required
                            />
                          </Form.Group>

                          <PasswordInput
                            label={
                              <>
                                <i className="bi bi-lock-fill me-2"></i>Senha:
                              </>
                            }
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                          />

                          <PasswordInput
                            label={
                              <>
                                <i className="bi bi-lock-fill me-2"></i>
                                Confirmar Senha:
                              </>
                            }
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />

                          <div className="text-end">
                            <Button
                              variant="primary"
                              onClick={nextStep}
                              disabled={
                                !formData.nome.trim() ||
                                !formData.email.trim() ||
                                !formData.telefone.trim() ||
                                !formData.senha.trim() ||
                                !formData.confirmPassword.trim() ||
                                formData.senha !== formData.confirmPassword
                              }
                            >
                              Próximo
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div key="step2" {...animationProps}>
                          <Form.Group className="mb-3" controlId="cep">
                            <Form.Label>
                              <i className="bi bi-geo-alt-fill me-2"></i>CEP:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="cep"
                              value={formData.cep}
                              onChange={handleChange}
                              placeholder="Digite seu CEP"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="endereco">
                            <Form.Label>
                              <i className="bi bi-house-door-fill me-2"></i>
                              Endereço:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="endereco"
                              value={formData.endereco}
                              onChange={handleChange}
                              placeholder="Digite seu endereço"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="bairro">
                            <Form.Label>
                              <i className="bi bi-signpost-2-fill me-2"></i>
                              Bairro:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="bairro"
                              value={formData.bairro}
                              onChange={handleChange}
                              placeholder="Digite seu bairro"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="cidade">
                            <Form.Label>
                              <i className="bi bi-building me-2"></i>Cidade:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="cidade"
                              value={formData.cidade}
                              onChange={handleChange}
                              placeholder="Digite sua cidade"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-4" controlId="estado">
                            <Form.Label>
                              <i className="bi bi-globe-americas me-2"></i>
                              Estado:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="estado"
                              value={formData.estado}
                              onChange={handleChange}
                              placeholder="Digite seu estado"
                              required
                            />
                          </Form.Group>

                          <div className="d-flex justify-content-between">
                            <Button variant="danger" onClick={backStep}>
                              Anterior
                            </Button>
                            <Button
                              variant="primary"
                              type="submit"
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
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {renderDots()}
                    <div className="text-center mt-3">
                      <span>Já tem uma conta? </span>
                      <Link
                        to="/signin"
                        className="text-primary fw-bold text-decoration-none"
                      >
                        Entrar
                      </Link>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </div>
  );
}
