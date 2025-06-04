import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { Container, Card, Button, Badge, Col, Row } from "react-bootstrap";
import NotFound from "../NotFoundPage/NotFoundPage";
import ProductCard from "../../components/CardComponent/Card";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>();

  const mockProducts: Product[] = [
    {
      id: 1,
      name: "Tênis Esportivo",
      price: 199.99,
      imageUrl:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Roupas",
    },
    {
      id: 2,
      name: "Relógio Moderno",
      price: 349.99,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
      category: "Acessórios",
    },
    {
      id: 3,
      name: "Jaqueta de Couro",
      price: 499.99,
      imageUrl:
        "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Roupas",
    },
    {
      id: 4,
      name: "Smartphone",
      price: 1299.99,
      imageUrl:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Eletrônicos",
    },
    {
      id: 5,
      name: "Sofá 3 Lugares",
      price: 999.99,
      imageUrl:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Casa",
    },
    {
      id: 6,
      name: "Boneca de Pano",
      price: 59.99,
      imageUrl:
        "https://images.pexels.com/photos/3661355/pexels-photo-3661355.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Brinquedos",
    },
  ];

  useEffect(() => {
    const found = mockProducts.find((p) => p.id === Number(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex(
      (item: any) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} foi adicionado ao carrinho.`);
  };

  return (
    <div className="full-page-layout">
      <HeaderComponent />
      <Container style={{ width: "100%" }} className="mt-5 col-12 d-flex">
        <Col sm={12} md={7} className="mx-auto mt-5">
          <Row className="">
            <Col sm={12} md={8}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  position: "relative",
                  background: "#f8f9fa",
                  borderRadius: "12px",
                  overflow: "hidden",
                  margin: "0 auto",
                  paddingTop: "100%",
                }}>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </Col>
            <Col sm={12} md={4} className="mt-3">
              <Card.Body>
                <span>
                  Categoria:{" "}
                  <Badge pill bg="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                </span>
                <Card.Title style={{ fontSize: "3.5vh" }}>
                  {product.name}
                </Card.Title>
                <Card.Text style={{ fontSize: "2.5vh" }}>
                  R$ <strong>{product.price.toFixed(2)}</strong>
                </Card.Text>
                <Button
                  variant="success"
                  className="w-100 mb-2"
                  onClick={() => handleAddToCart(product)}>
                  <strong>Adicionar ao Carrinho</strong>
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Col>
      </Container>
      <Container style={{ width: "100%" }} className="mt-5 col-12 d-flex">
        <Row>
          <Card.Title>
            <h2 className="mb-5">Ver mais produtos</h2>
          </Card.Title>
          {mockProducts.map((product) => (
            <Col key={product.id} sm={6} md={4} className="mb-4">
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default ProductPage;