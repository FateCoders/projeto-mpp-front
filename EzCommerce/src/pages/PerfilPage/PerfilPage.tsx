import { Container, Row, Col, Image, Button, Card, Accordion } from "react-bootstrap";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { useTheme } from "../../utils/useTheme";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./PerfilPage.css";
import "../../App.css";

function ProfilePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="full-page-layout profile-page">
      <HeaderComponent />

      <Container className="my-5 fade-in">
        <Row className="justify-content-center">
          <Col md={12}>
            <Card className="perfil-card shadow-sm border-0">

              <div className="text-center mt-n5 card-top" style={{ borderRadius: "0 0 40px 40px", paddingTop: "30px" }}>
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
                <h5 className="mt-3 mb-0 fw-semibold">Nome</h5>
                <p className="small">nome@email.com</p>
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
                        <div className="d-flex justify-content-between align-items-center"
                          onClick={toggleTheme}
                        >
                          <span>
                            Alternar para tema {theme === 'light' ? 'Escuro' : 'Claro'}
                          </span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            className="ms-2"
                            title="Alternar tema"
                          >
                            {theme === "light" ? (
                              <i className="bi bi-moon-stars-fill" />
                            ) : (
                              <i className="bi bi-sun-fill" />
                            )}
                          </Button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <hr className="my-1" />

                  </Accordion>

                  <InfoItem
                    icon="bi bi-geo-alt-fill"
                    label="R. Jouvenal Lau, 155, Vila Robertinho, 180000-00"
                  />
                  <InfoItem icon="telephone-fill" label="(15) 99999-9999" />
                  <InfoItem icon="bi bi-archive-fill" label="Histórico de Compras" />
                  <InfoItem icon="eye-fill" label="Senha" hasArrow />
                </div>

                <Button variant="primary" className="w-100 mt-4">
                  Editar Perfil
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <FooterComponent />
    </div>
  );
}

function InfoItem({
  icon,
  label,
  hasArrow = false,
}: {
  icon: string;
  label: string;
  hasArrow?: boolean;
}) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <div className="d-flex align-items-center">
          <i className={`bi bi-${icon} me-3 text-primary fs-5`}></i>
          <span>{label}</span>
        </div>
        {hasArrow && <i className="bi bi-chevron-right text-muted fs-6"></i>}
      </div>
      <hr className="my-1" />
    </div>
  );
}

export default ProfilePage;