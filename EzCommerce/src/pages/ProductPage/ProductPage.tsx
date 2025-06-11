import { useParams } from "react-router-dom";
import { Container, Card, Button, Badge, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import type { Product } from "../../types/Product";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import NotFound from "../NotFoundPage/NotFoundPage";
import ProductCard from "../../components/CardComponent/Card";
import Swal from "sweetalert2";
import "./ProductPage.css";
import "../../App.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
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

    // Rola para o topo da página
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = async (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    if (!isAuthenticated) {
      const result = await Swal.fire({
        title: "Você precisa estar logado",
        text: "Deseja fazer login para adicionar produtos ao carrinho?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Fazer login",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        navigate("/signin", { state: { from: location.pathname } });
      }
      return;
    }

    // Lógica para adicionar ao carrinho
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

    Swal.fire({
      icon: "success",
      title: "Produto adicionado!",
      text: `${product.name} foi adicionado ao carrinho.`,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  if (!product) {
    return <NotFound />;
  }
  return (
    <div className="full-page-layout">
      <HeaderComponent variant="back" backTitle="Voltar" onBack={() => navigate(-1)}/>
      <Container style={{ width: "100%" }} className="mt-5 col-12 d-flex">
        <Col sm={12} md={7} className="mx-auto mt-5">
          <Row>
            <Col className="card_header_img" sm={12} md={7}>
              <div>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
              </div>
            </Col>
            <Col sm={12} md={5} className="mt-3">
              <Card.Body className="card_body">
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
                  onClick={() => handleAddToCart(product)}
                >
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
          {mockProducts
            .filter((p) => p.id !== product.id)
            .map((product) => (
              <Col key={product.id} sm={6} md={4} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default ProductPage;
