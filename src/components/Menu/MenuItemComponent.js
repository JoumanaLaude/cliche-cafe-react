import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { ItemName, ItemBox } from './menuStyle'

const Products = ({ data }) => {
    return (
        <Container>
            {data.map((product, index) => {
                return (
                    <ItemBox key={index}>
                        <Row className="mt-3 py-3">
                        <Col sm="12" md={{ size: 3, offset: 2 }}>
                                <img className="img-fluid float-left py-2" src={product.img} alt={product.name} width="230" height="160" />
                            </Col>
                            <Col sm="12" md={{ size: 5 }}>
                            <ItemName>{product.name}</ItemName>
                            {product.desc} | {product.price}
                            <i className="d-none d-md-block pt-2">{product.origin}</i>
                            </Col>
                        </Row>
                    </ItemBox>
                )
            })}
        </Container>
    )
}

export default Products;