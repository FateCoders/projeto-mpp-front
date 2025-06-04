import { useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import ProductCard from "../../components/CardComponent/Card";
import ProductCardSkeleton from "../../components/CardComponent/CardSkeleton"; // Novo componente
import "./HomePage.css";
import { useCategory } from "../../contexts/CategoryContext";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};

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

  // Simula carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

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

export default HomePage;
