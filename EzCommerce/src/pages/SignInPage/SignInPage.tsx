import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { login as loginRequest } from "../../services/auth/authService";
import { useAuth } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import "./SignInPage.css";
import "../../App.css";

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await loginRequest(formData.email, formData.senha);
      login(data.token);

      await Swal.fire({
        icon: "success",
        title: "Login realizado!",
        text: data.mensagem,
        confirmButtonColor: "#3085d6",
      });

      const from =
        (location.state as { from?: Location })?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err: any) {
      const errorMessage = err.response?.data.erro || "Erro ao fazer login";
      setError(errorMessage);

      await Swal.fire({
        icon: "error",
        title: "Erro ao entrar",
        text: errorMessage,
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="full-page-layout signin-page">
      <HeaderComponent
        variant="back"
        backTitle="Voltar"
        onBack={() => navigate(-1)}
      />
      <div className="full-page-content fade-in">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="p-4 shadow">
                <Card.Body>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-center mb-4">Entrar no EzCommerce</h2>
                    <Form onSubmit={handleSubmit}>
                      {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      )}

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

                      <div className="text-center">
                        <Button
                          className="w-100 d-flex align-items-center justify-content-center"
                          type="submit"
                          variant="primary"
                          disabled={
                            loading ||
                            !formData.email.trim() ||
                            !formData.senha.trim()
                          }
                        >
                          {loading && (
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          )}
                          {loading ? "Entrando..." : "Entrar"}
                        </Button>
                      </div>

                      <div className="text-center mt-3">
                        <span>Ainda não tem uma conta? </span>
                        <Link
                          to="/signup"
                          className="text-primary fw-bold text-decoration-none"
                        >
                          Criar
                        </Link>
                      </div>
                    </Form>
                  </motion.div>
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
