import React from 'react';
import { useCart } from 'react-use-cart';
import { Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Cart = () => {
    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <p>Your cart is empty!</p>

    return (
        <section>
            {items.map((item, index) => {
                return (
                    <ModalMenu key={index}>
                        <Row className="mt-3">
                            <Col xs={5}>
                                <img width="150" className="img-fluid" src={item.img} alt={item.name} />
                            </Col>
                            <Col className="mt-2" align="center">
                                <span align="center">{item.name} ({item.price})<br />
                                    Quantity: {item.quantity} {' '}
                                </span>
                                <br />
                                <Button
                                    className="add-button button-padding"
                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                >
                                    -
                                </Button>
                                {' '}
                                <Button
                                    className="add-button button-padding"
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </Button>
                                {' '}
                                <Button
                                    className="add-button"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </ModalMenu>
                )
            })}
            <div align="center">
                <p>Number of items: {totalItems}</p>
                <p><strong>Total Price: ${cartTotal}</strong></p>
                <Button
                    className="add-button"
                    onClick={() => emptyCart()}
                >
                    Clear Cart
                </Button>
            </div>
        </section>
    );
};

export const ModalMenu = styled.div`
    margin: auto;
    width: 90%;
    background: #fff1e3;
`

export default Cart;