import React from 'react';
import { Col, Row } from 'reactstrap';

const MenuItem = ({ name, src, price, desc, origin }) => {

   return (
      <div className="container">
         <Row className="pt-5"><p className="menuTitle">{name}</p>
            <Col><img className="img-fluid float-left" src={src} alt="menu item" width="230" height="160" fluid/></Col>
            <Col>{desc} | {price}
            <p className="mt-1"><i className="d-none d-md-block">{origin}</i></p></Col>
         </Row>
      </div>
   )
}


export default MenuItem;