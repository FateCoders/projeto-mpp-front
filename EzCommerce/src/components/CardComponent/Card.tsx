import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/Product";
import "./Card.css";
import "../../App.css";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="product-card fade-in"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/produto/${product.id}`)}
    >
      <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
