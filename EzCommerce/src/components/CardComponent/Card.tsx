import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cardd: React.FC = () => {
  return (
    <Card className="w-100" style={{ maxWidth: '18rem' }}>
      <Card.Img style={{ maxHeight: '114px' }} variant="top" src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/mm1012723121410486.jpg?w=1900&h=2849" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="w-100">
          Detalhes
        </Button>
        <div style={{padding:'3%'}}></div>
        <Button variant="success" className="w-100">
          Adicionar ao Carrinho
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cardd;