import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Products = ({ data }) => {
    return (
        <Container>
            {data.map(({img, name, desc, price, origin}, index) => {
                return (
                    <ItemBox key={index}>
                        <Row className="mt-3 py-3">
                            <Col md={{ size: 5, offset: 1 }}>
                                <img src={img} alt={name} width="230" height="160" />
                            </Col>
                            <Col md={{ size: 5 }}>
                                <ItemName className="pt-3">{name}</ItemName>
                                {desc} | {price}
                                <i className="d-none d-md-block pt-2">{origin}</i>
                            </Col>
                        </Row>
                    </ItemBox>
                )
            })}
        </Container>
    )
}

export const ItemName = styled.h4`
    font-family: Libre Baskerville, serif;
    font-size: 1.5em;
    text-align: center;
    color: #55433B;
`

export const ItemBox = styled.div`
    margin: auto;
    width: 90%;
    background: #fff1e3;
`

export default Products;