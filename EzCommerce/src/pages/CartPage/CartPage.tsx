import HeaderComponent from "../../components/HeaderComponent/Header";
import FooterComponent from "../../components/FooterComponent/Footer";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import "../../App.css";
import "./CartPage.css";

interface CartItem {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedItems = sessionStorage.getItem("cart");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const updateSessionStorage = (items: CartItem[]) => {
    sessionStorage.setItem("cart", JSON.stringify(items));
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateSessionStorage(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.preco * item.quantidade, 0)
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
                    {cartItems.length === 0 ? (
                      <div className="text-center py-5">
                        <h5>Seu carrinho está vazio.</h5>
                        <p>Adicione produtos para visualizar aqui.</p>
                      </div>
                    ) : (
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
                              <td>{item.nome}</td>
                              <td>R$ {item.preco}</td>
                              <td>{item.quantidade}</td>
                              <td>
                                R$ {(item.preco * item.quantidade).toFixed(2)}
                              </td>
                              <td>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remover
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    )}
                  </Card.Body>
                </Card>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <h5>Total: R$ {calculateTotal()}</h5>
                  <Button variant="primary" disabled={cartItems.length === 0}>
                    Finalizar Compra
                  </Button>
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