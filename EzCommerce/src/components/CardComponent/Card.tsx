import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card.css";
import "../../App.css"

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
  id: number;
  onAddToCart: (product: { id: number; name: string; price: number }) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  onAddToCart,
}) => {
  return (
    <Card className="product-card fade-in">
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>R$ {price.toFixed(2)}</Card.Text>
        <Button
          variant="primary"
          onClick={() => onAddToCart({ id, name, price })}
        >
          Adicionar ao Carrinho
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
