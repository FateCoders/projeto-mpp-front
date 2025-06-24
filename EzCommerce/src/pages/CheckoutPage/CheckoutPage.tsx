// src/pages/CheckoutPage/CheckoutPage.tsx

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { placeOrder } from '../../services/orderService';
import HeaderComponent from '../../components/HeaderComponent/Header';
import FooterComponent from '../../components/FooterComponent/Footer';
import Swal from 'sweetalert2';
import type { CartItem } from '../CartPage/CartPage';
import './CheckoutPage.css';

export default function CheckoutPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    const { items, total } = location.state as { items: CartItem[], total: string } || { items: [], total: '0.00' };

    const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('cartao');
    const [giftWrap, setGiftWrap] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleFinalizeOrder = async () => {
        if (!user) {
            Swal.fire('Erro', 'Você precisa estar logado para finalizar o pedido.', 'error');
            return;
        }
        setIsLoading(true);
        try {
            const orderPromises = items.map(item => {
                const payload = {
                    id_user_fk: user.id,
                    id_produto_fk: item.id,
                    pagamento: paymentMethod,
                    embalagem_presente: giftWrap,
                    valor: item.preco * item.quantidade,
                    descricao: `Pedido de ${item.quantidade}x ${item.nome}`
                };
                return placeOrder(payload);
            });

            await Promise.all(orderPromises);

            sessionStorage.removeItem('cart');

            await Swal.fire({
                icon: 'success',
                title: 'Pedidos Realizados!',
                text: 'Seus pedidos foram criados com sucesso e podem ser vistos no seu perfil.',
            });

            navigate('/perfil');
        } catch (error) {
            console.error(error);
            Swal.fire('Ops!', 'Ocorreu um erro ao finalizar seus pedidos.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    if (items.length === 0) {
        // ... (retorno para carrinho vazio)
    }


    return (
        <div className="full-page-layout checkout-page-container">
            <HeaderComponent />
            <div className="full-page-content fade-in">
                <Container className="py-5">
                    <div className="text-center mb-5">
                        <h1>Finalizar Compra</h1>
                        <p className="lead text-muted">Quase lá! Revise seu pedido e confirme o pagamento.</p>
                    </div>

                    <Row className="justify-content-center">
                        <Col lg={10} xl={9}>
                            <Card className="checkout-card">
                                <Row className="g-0">
                                    <Col md={6} className="order-summary-section">
                                        <h4>Resumo do Pedido</h4>
                                        {items.map((item: CartItem) => (
                                            <div key={item.id} className="summary-item">
                                                <span className="summary-item-name">{item.nome} (x{item.quantidade})</span>
                                                <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                                            </div>
                                        ))}
                                        <div className="summary-total">
                                            <span>Total</span>
                                            <span>R$ {total}</span>
                                        </div>
                                    </Col>

                                    <Col md={6} className="payment-options-section">
                                        <h4>Selecione o Pagamento</h4>
                                        <div className={`payment-option ${paymentMethod === 'cartao' ? 'selected' : ''}`} onClick={() => setPaymentMethod('cartao')}>
                                            <i className="bi bi-credit-card icon"></i>
                                            <Form.Check type="radio" name="payment" id="cartao" value="cartao" label="Cartão de Crédito" checked={paymentMethod === 'cartao'} readOnly />
                                        </div>
                                        <div className={`payment-option ${paymentMethod === 'pix' ? 'selected' : ''}`} onClick={() => setPaymentMethod('pix')}>
                                            <i className="bi bi-qr-code icon"></i>
                                            <Form.Check type="radio" name="payment" id="pix" value="pix" label="Pix" checked={paymentMethod === 'pix'} readOnly />
                                        </div>
                                        <div className="gift-wrap-section">
                                            <Form.Check type="switch" id="gift-wrap" label="Embalar para presente" checked={giftWrap} onChange={(e) => setGiftWrap(e.target.checked)} />
                                        </div>
                                        <div className="d-grid">
                                            <Button variant="primary" onClick={handleFinalizeOrder} disabled={isLoading} className="finalize-button">
                                                {isLoading ? 'Processando...' : `Finalizar e Pagar R$ ${total}`}
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterComponent />
        </div>
    );
}