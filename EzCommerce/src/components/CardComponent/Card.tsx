import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import "../../App.css";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
  id: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      className="product-card fade-in"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/produto/${id}`)}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>R$ {price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
