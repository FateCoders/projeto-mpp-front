import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button, Badge, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import type { Product } from "../../types/Product";
import { fetchProductById, fetchProducts } from "../../services/productService";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import NotFound from "../NotFoundPage/NotFoundPage";
import ProductCard from "../../components/CardComponent/Card";
import ProductCardSkeleton from "../../components/CardComponent/CardSkeleton";
import Swal from "sweetalert2";
import "./ProductPage.css";
import "../../App.css";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);

      if (!id) {
        setIsLoading(false);
        setProduct(null);
        return;
      }

      let currentProduct: Product | null = null;

      try {
        if (location.state?.product && location.state.product.id === Number(id)) {
          currentProduct = location.state.product;
        } else {
          currentProduct = await fetchProductById(id);
        }

        setProduct(currentProduct);

        if (currentProduct) {
          const allProducts = await fetchProducts();
          const related = allProducts.filter(
            (p: Product) => p.id !== currentProduct!.id && p.categoria === currentProduct!.categoria
          );
          setRelatedProducts(related.slice(0, 6));
        }
      } catch (error) {
        console.error("Erro ao buscar dados do produto:", error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, location.state]);

  const handleAddToCart = async (productToAdd: Product) => {
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

    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((item: any) => item.id === productToAdd.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...productToAdd, quantity: 1 });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));

    Swal.fire({
      icon: "success",
      title: "Produto adicionado!",
      text: `${productToAdd.nome} foi adicionado ao carrinho.`,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  if (isLoading) {
    return (
      <div className="full-page-layout">
        <HeaderComponent />
        <Container style={{ marginTop: '4rem', marginBottom: '3rem' }}>
          <Row>
            <Col xs={12} className="mb-4">
              <div className="skeleton-box" style={{ width: '100px', height: '38px' }}></div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={7}>
              <div className="skeleton-box" style={{ paddingTop: '100%', borderRadius: '12px' }}></div>
            </Col>
            <Col md={5} className="mt-3 mt-md-0 d-flex flex-column justify-content-center">
              <div className="skeleton-box mb-3" style={{ width: '40%', height: '24px' }}></div>
              <div className="skeleton-box mb-3" style={{ width: '90%', height: '48px' }}></div>
              <div className="skeleton-box mb-3" style={{ width: '60%', height: '36px' }}></div>
              <div className="skeleton-box" style={{ width: '100%', height: '48px' }}></div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12}><h2 className="mb-4"><div className="skeleton-box" style={{ width: '250px', height: '38px' }}></div></h2></Col>
            {Array.from({ length: 6 }).map((_, i) => (
              <Col key={i} sm={6} md={4} lg={3} className="mb-4">
                <ProductCardSkeleton />
              </Col>
            ))}
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="full-page-layout">
      <HeaderComponent />
      <Container className="mt-5" style={{ paddingTop: "4rem" }}>
        <Row className="justify-content-center">
          <div className="mb-4">
            <Button variant="light" onClick={() => navigate(-1)} className="d-flex align-items-center">
              <i className="bi bi-arrow-left me-2"></i>
              Voltar
            </Button>
          </div>
          <Col md={10} lg={8}>
            <Row>
              <Col md={7} className="card_header_img">
                <div>
                  <Card.Img
                    variant="top"
                    src={product.imagem}
                    alt={product.nome}
                    className="product-image"
                  />
                </div>
              </Col>
              <Col md={5} className="mt-3 mt-md-0">
                <Card.Body className="card_body">
                  <span>
                    Categoria:{" "}
                    <Badge pill bg="secondary" className="mb-2">
                      {product.categoria}
                    </Badge>
                  </span>
                  <Card.Title style={{ fontSize: "3.5vh" }}>
                    {product.nome}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "2.5vh" }}>
                    R$ <strong>{product.preco}</strong>
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
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col xs={12}>
            <h2 className="mb-4">Ver mais produtos</h2>
          </Col>
          {relatedProducts.map((p) => (
            <Col key={p.id} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={p} />
            </Col>
          ))}
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default ProductPage;