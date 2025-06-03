import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import "./Card.css";

const ProductCardSkeleton: React.FC = () => {
    return (
        <Card className="product-card">
            <div className="skeleton-image" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={8} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={4} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
    );
};

export default ProductCardSkeleton;
