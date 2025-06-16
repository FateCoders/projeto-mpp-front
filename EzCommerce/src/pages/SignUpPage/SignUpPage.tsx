import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "../../App.css";
import "./SignUpPage.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { register as registerRequest } from "../../services/auth/authService";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const nextStep = () => setStep((prev) => prev + 1);
  const backStep = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmPassword) {
      await Swal.fire({
        icon: "error",
        title: "Senhas não coincidem",
        text: "Verifique os campos de senha e confirmação.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        senha: formData.senha,
        cep: formData.cep,
        endereco: formData.endereco,
        bairro: formData.bairro,
        cidade: formData.cidade,
        estado: formData.estado,
      };

      const response = await registerRequest(payload);

      await Swal.fire({
        icon: "success",
        title: "Cadastro realizado!",
        text: response.mensagem || "Conta criada com sucesso.",
        confirmButtonColor: "#3085d6",
      });

      navigate("/signin");
    } catch (err: any) {
      const errorMessage = err.message || "Erro ao cadastrar";
      await Swal.fire({
        icon: "error",
        title: "Erro no cadastro",
        text: errorMessage,
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  const animationProps = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.2 },
  };

  return (
    <div className="full-page-layout contact-page">
      <HeaderComponent
        variant="back"
        backTitle="Voltar"
        onBack={() => navigate(-1)}
      />
      <div className="full-page-content fade-in">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="p-4 shadow">
                <Card.Body>
                  <h2 className="text-center mb-4">
                    Criar sua conta no EzCommerce
                  </h2>

                  <Form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div key="step1" {...animationProps}>
                          <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome:</Form.Label>
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
                            <Form.Label>Email:</Form.Label>
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
                            <Form.Label>Telefone:</Form.Label>
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
                            label="Senha:"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                          />

                          <PasswordInput
                            label="Confirmar Senha:"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />

                          <div className="text-end mt-3">
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
                            <Form.Label>CEP:</Form.Label>
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
                            <Form.Label>Endereço:</Form.Label>
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
                            <Form.Label>Bairro:</Form.Label>
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
                            <Form.Label>Cidade:</Form.Label>
                            <Form.Control
                              type="text"
                              name="cidade"
                              value={formData.cidade}
                              onChange={handleChange}
                              placeholder="Digite sua cidade"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="estado">
                            <Form.Label>Estado:</Form.Label>
                            <Form.Control
                              type="text"
                              name="estado"
                              value={formData.estado}
                              onChange={handleChange}
                              placeholder="Digite seu estado"
                              required
                            />
                          </Form.Group>

                          <div className="d-flex justify-content-between mt-3">
                            <Button variant="danger" onClick={backStep}>
                              Anterior
                            </Button>
                            <Button
                              variant="primary"
                              type="submit"
                              disabled={
                                loading ||
                                !formData.cep.trim() ||
                                !formData.endereco.trim() ||
                                !formData.bairro.trim() ||
                                !formData.cidade.trim() ||
                                !formData.estado.trim()
                              }
                            >
                              {loading ? (
                                <>
                                  <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                  ></span>
                                  Cadastrando...
                                </>
                              ) : (
                                "Finalizar Cadastro"
                              )}
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Form>

                  <div className="text-center mt-3">
                    <span>Já tem uma conta? </span>
                    <Link
                      to="/signin"
                      className="text-primary fw-bold text-decoration-none"
                    >
                      Entrar
                    </Link>
                  </div>
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
