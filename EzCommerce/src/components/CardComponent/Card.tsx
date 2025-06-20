// src/components/CardComponent/Card.tsx

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

  const handleNavigate = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <Card
      className="product-card fade-in"
      style={{ cursor: "pointer" }}
      onClick={handleNavigate}
    >
      <Card.Img variant="top" src={product.imagem} alt={product.nome}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>{product.nome}</Card.Title>
        <Card.Text>R$ {product.preco}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;