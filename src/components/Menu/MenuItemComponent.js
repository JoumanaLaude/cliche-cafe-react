import React from 'react';
import { Container, Col, Row } from 'reactstrap';
//import { MenuItemBox } from './menuStyle'

const Products = ({ data }) => {
    return (
        <Container>
            {data.map((product, index) => {
                return (
                    <div key={index}>
                        <Row className="mt-3 py-3">
                        <Col sm="12" md={{ size: 3, offset: 2 }}>
                                <p className="menuTitle">{product.name}</p>
                                <img className="img-fluid float-left" src={product.img} alt={product.name} width="230" height="160" />
                            </Col>
                            <Col sm="12" md={{ size: 4 }} className="pt-5">
                            {product.desc} | {product.price}
                            <i className="d-none d-md-block">{product.origin}</i>
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </Container>
    )
}


//       <div className="container">
//          <Row className="pt-5"><p className="menuTitle">{name}</p>
//             <Col md={12}><img className="img-fluid float-left" src={src} alt={name} width="230" height="160" fluid/></Col>
//             <Col>{desc} | {price}
//             <p className="mt-1"><i className="d-none d-md-block">{origin}</i></p></Col>
//          </Row>
//       </div>

export default Products;