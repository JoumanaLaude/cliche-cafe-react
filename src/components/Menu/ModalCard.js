import React from 'react';
import { useCart } from 'react-use-cart';
import { Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const ModalCard = (props) => {
    const { addItem } = useCart();

    return (
        <>
            <ModalMenu>
                <Row className="mt-3">
                    <Col xs={5}>
                        <img width="150" className="img-fluid" src={props.img} alt={props.title} />
                    </Col>
                    <Col className="mt-3" align="center">
                        <span>{props.name} (${props.price})<br />
                            <Button className="add-button"
                                onClick={() => addItem(props.item)}
                            >Add to cart</Button>
                        </span>
                    </Col>
                </Row>
            </ModalMenu>
        </>
    )
}

export const ModalMenu = styled.div`
    margin: auto;
    width: 90%;
    background: #fff1e3;
`

export default ModalCard;