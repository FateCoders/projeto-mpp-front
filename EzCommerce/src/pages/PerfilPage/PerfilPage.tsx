import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import "./PerfilPage.css";

function ProfilePage() {
  return (
    <div className="full-page-layout profile-page fade-in">
      <HeaderComponent />

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-sm border-0">
              {/* Capa com botão de voltar */}
              <div
                className="position-relative rounded-top"
                style={{ height: "30px" }}
              >
                <Button
                  variant="light"
                  className="position-absolute top-0 start-0 m-2"
                  size="sm"
                  style={{ borderRadius: "50%" }}
                >
                  <i className="bi bi-arrow-left text-primary fs-5"></i>
                </Button>
              </div>

              {/* Foto e nome */}
              <div className="text-center mt-n5">
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
                <p className="text-muted small">nome@email.com</p>
              </div>

              <Card.Body>
                <div className="profile-info">
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
