import { Container, Row, Col, Carousel } from "react-bootstrap";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import ProductCard from "../../components/CardComponent/Card";
import "./HomePage.css";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

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

  const products: Product[] = [
    {
      id: 1,
      name: "Tênis Esportivo",
      price: 199.99,
      imageUrl:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Jaqueta de Couro",
      price: 499.99,
      imageUrl:
        "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Jaqueta de Couro",
      price: 499.99,
      imageUrl:
        "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Jaqueta de Couro",
      price: 499.99,
      imageUrl:
        "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const handleAddToCart = (product: { id: number; name: string; price: number }) => {
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} foi adicionado ao carrinho.`);
  };

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
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                onAddToCart={handleAddToCart}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
