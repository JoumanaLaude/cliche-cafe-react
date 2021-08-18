import React, { useState } from 'react';
import { Button, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Products from './/Menu/MenuItemComponent';
import { cafeMenu } from './Menu/menuItems';

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

               {/* <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader charCode="Close" toggle={toggle}>Order for Pickup</ModalHeader>
                  <ModalBody>
                     <Row>
                        {menuItems.map((menuItem, index) => (
                           <div className="container" key={index}>
                              <span>{menuItem.name} {menuItem.price}</span>
                              <Button> + </Button>
                           </div>
                        ))}
                     </Row>
                  </ModalBody>
                  <ModalFooter>
                     <p>Items:</p>
                     <p>Total:</p>
                  </ModalFooter>
                  <Button className="order-button" onClick={toggle}>Submit Order for Pickup</Button>
               </Modal> */}
            </Col>

            <Products data={cafeMenu} />

         </Container>
      </>
   );
}

export default MenuPage;