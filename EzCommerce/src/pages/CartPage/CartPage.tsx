import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import "../../App.css";
import "./CartPage.css";

export default function CartPage() {
  // Mock data for cart items
  const cartItems = [
    { id: 1, name: "Produto A", price: 20.0, quantity: 2 },
    { id: 2, name: "Produto B", price: 50.0, quantity: 1 },
    { id: 3, name: "Produto C", price: 30.0, quantity: 3 },
  ];

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="full-page-layout shopping-cart-page">
        <HeaderComponent />
        <div className="full-page-content fade-in">
          <Container className="py-5">
            <h1 className="text-center mb-4">Seu Carrinho de Compras</h1>
            <p className="text-center mb-5">
              Veja os produtos adicionados e finalize sua compra.
            </p>

            <Row className="justify-content-center">
              <Col lg={10}>
                <Card className="cart-card">
                  <Card.Body>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th className="borderRadiusTableLeft">Produto</th>
                          <th>Preço</th>
                          <th>Quantidade</th>
                          <th>Total</th>
                          <th className="borderRadiusTableRight">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>R$ {item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                              <Button variant="danger" size="sm">
                                Remover
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <h5>Total: R$ {calculateTotal()}</h5>
                  <Button variant="primary">Finalizar Compra</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
