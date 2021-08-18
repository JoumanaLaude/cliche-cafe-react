import React, { useState } from 'react';
import { Button, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Products from './/Menu/MenuItemComponent';
import { cafeMenu } from './Menu/menuItems';
import { CartButton } from './../components/Menu/menuStyle'

function MenuPage() {
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   return (
      <>
         <Container className="text-center pt-3">
            <Col className="lead">
               <p><h2>Menu</h2>Cliche Cafe is currently serving our spring season menu.</p>
               <p>We are currently accepting pickup orders for food and drink only. Bubble tea orders can only be taken at the cafe bar.</p>
               <Button className="order-button" onClick={toggle}>Order Pickup</Button>
               <Modal isOpen={modal} toggle={toggle} returnFocusAfterClose={false}>
                  <ModalHeader charCode="Close" toggle={toggle}>Order for Pickup</ModalHeader>
                  <ModalBody>
                     <Row>
                        {cafeMenu.map((cafeMenu, index) => (
                           <div className="container" key={index}>
                              <span><img width="100" className="img-fluid p-2" src={cafeMenu.img} alt={cafeMenu.name} /> {cafeMenu.name} {cafeMenu.price}</span>{' '}
                              <CartButton> + </CartButton>^_^<CartButton> - </CartButton>
                           </div>
                        ))}
                     </Row>
                  </ModalBody>
                  <ModalFooter>
                     <p>Items:</p>
                     <p>Total:</p>
                     <Button className="order-button" onClick={toggle}>Submit Order for Pickup</Button>
                  </ModalFooter>
               </Modal>
            </Col>

            <Products data={cafeMenu} />

         </Container>
      </>
   );
}

export default MenuPage;