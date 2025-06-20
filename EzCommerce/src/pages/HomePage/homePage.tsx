import { useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import ProductCard from "../../components/CardComponent/Card";
import ProductCardSkeleton from "../../components/CardComponent/CardSkeleton"; // Novo componente
import "./HomePage.css";
import { useCategory } from "../../contexts/CategoryContext";
import type { Product } from "../../types/Product";
import { fetchProducts } from "../../services/productService";

const HomePage = () => {
  const { selectedCategory } = useCategory();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

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

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        const formatted = data.map((p: any) => ({
          id: p.id,
          nome: p.nome,
          preco: p.preco,
          categoria: p.categoria,
          imagem: p.imagem,
        }));
        setProducts(formatted);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoria === selectedCategory)
    : products;

  return (
    <div className="full-page-layout home-page">
      <HeaderComponent />

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

      <Container className="mt-5 fade-in">
        <h2 className="mb-4">
          {selectedCategory
            ? `Produtos de ${selectedCategory}`
            : "Todos os Produtos"}
        </h2>
        <Row>
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
              <Col key={i} md={4} className="mb-4">
                <ProductCardSkeleton />
              </Col>
            ))
            : filteredProducts.map((product) => (
              <Col key={product.id} md={4} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </Container>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
