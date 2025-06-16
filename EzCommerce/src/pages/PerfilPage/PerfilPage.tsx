import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Accordion,
  Form,
} from "react-bootstrap";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { useTheme } from "../../utils/useTheme";
import { useAuth } from "../../contexts/AuthContext";
import "./PerfilPage.css";
import "../../App.css";

function ProfilePage() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  const enderecoCompleto = user
    ? `${user.endereco}, ${user.bairro}, ${user.cidade} - ${user.estado}`
    : "Carregando endereço...";

  const telefone = user ? user.telefone : "Carregando telefone...";

  return (
    <div className="full-page-layout profile-page">
      <HeaderComponent />

      <Container className="my-5 fade-in">
        <Row className="justify-content-center">
          <Col md={12}>
            <Card className="perfil-card shadow-sm border-0">
              <div
                className="text-center mt-n5 card-top"
                style={{ borderRadius: "0 0 40px 40px", paddingTop: "30px" }}
              >
                <Image
                  src="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  roundedCircle
                  className="border border-white border-5"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="mt-3 mb-0 fw-semibold">
                  {user ? user.nome : "Carregando..."}
                </h5>
                <p className="small">
                  {user ? user.email : "Carregando email..."}
                </p>
              </div>

              <Card.Body>
                <div className="profile-info">
                  <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <i className="bi bi-palette-fill me-3 text-primary fs-5"></i>
                        <span>Tema</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div
                          className="d-flex justify-content-between align-items-center"
                          onClick={toggleTheme}
                          style={{ cursor: "pointer" }}
                        >
                          <span>
                            Alternar para tema{" "}
                            {theme === "light" ? "escuro" : "claro"}
                          </span>
                          <i
                            className={`bi ${
                              theme === "light"
                                ? "bi-moon-stars-fill"
                                : "bi-sun-fill"
                            }`}
                          ></i>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <i className="bi bi-geo-alt-fill me-3 text-primary fs-5"></i>
                        <span>{enderecoCompleto}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control
                                  type="text"
                                  defaultValue={user?.cep}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control
                                  type="text"
                                  defaultValue={user?.endereco}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control
                                  type="text"
                                  defaultValue={user?.bairro}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control
                                  type="text"
                                  defaultValue={user?.cidade}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                  type="text"
                                  defaultValue={user?.estado}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <div className="d-grid">
                            <Button variant="secondary">Salvar Endereço</Button>
                          </div>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <i className="bi bi-telephone-fill me-3 text-primary fs-5"></i>
                        <span>{telefone}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                              type="text"
                              defaultValue={user?.telefone}
                            />
                          </Form.Group>
                          <div className="d-grid">
                            <Button variant="secondary">Salvar Telefone</Button>
                          </div>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <i className="bi bi-archive-fill me-3 text-primary fs-5"></i>
                        <span>Histórico de Compras</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        Sem histórico de compras no momento.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        <i className="bi bi-eye-fill me-3 text-primary fs-5"></i>
                        <span>Alterar Senha</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Senha Atual</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Digite sua senha atual"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Nova Senha</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Digite sua nova senha"
                            />
                          </Form.Group>
                          <div className="d-grid">
                            <Button variant="secondary">Mudar Senha</Button>
                          </div>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
}

export default ProfilePage;
