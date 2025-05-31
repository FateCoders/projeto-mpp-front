import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import "./HomePage.css";

const HomePage = () => {
  const carouselImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      alt: "Promoção de Verão",
      caption: "Promoção de Verão",
      description: "Aproveite nossas ofertas de verão com até 50% de desconto!",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      alt: "Novos Produtos",
      caption: "Novos Produtos",
      description: "Confira nossos lançamentos e novidades!",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      alt: "Ofertas Especiais",
      caption: "Ofertas Especiais",
      description: "Descontos exclusivos para você!",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Tênis Esportivo",
      price: 199.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Relógio Moderno",
      price: 349.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Jaqueta de Couro",
      price: 499.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Óculos de Sol",
      price: 129.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Bolsa Feminina",
      price: 249.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Headphones Bluetooth",
      price: 299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 7,
      name: "Headphones Bluetooth",
      price: 299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      name: "Headphones Bluetooth",
      price: 299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 9,
      name: "Headphones Bluetooth",
      price: 299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 10,
      name: "Headphones Bluetooth",
      price: 299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="full-page-layout home-page">
      <HeaderComponent />

      {/* Carousel */}
      <div className="w-100 carousel-container fade-in">
        <Carousel>
          {carouselImages.map((image) => (
            <Carousel.Item key={image.id}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
              <Carousel.Caption>
                <h3>{image.caption}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Product Listing */}
      <Container className="mt-5 fade-in">
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
