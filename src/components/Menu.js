import React, { useState } from 'react';
import { Button, Row, Col, Container, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Products from './/Menu/MenuItemComponent';
import { cafeMenu } from './Menu/menuItems';
import Counter from './Menu/Counter';

function MenuPage() {
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Thank you for your order! ^_^`);
      toggle();
   };

   return (
      <>
         <Container className="text-center pt-3">
            <Col className="lead">
               <p><h2>Menu</h2>Cliche Cafe is currently serving our spring season menu.</p>
               <Button className="order-button" onClick={toggle}>Order Pickup</Button>
               <Modal isOpen={modal} toggle={toggle} returnFocusAfterClose={false}>
                  <ModalHeader charCode="Close" toggle={toggle}>Order for Pickup</ModalHeader>
                  <ModalBody>
                     <Row>
                        <Form onSubmit={handleSubmit}>
                           <FormGroup>
                              <Label for="yourName">Your Name: </Label><Input type="name" name="name" id="yourName" placeholder="Your Name" required={true} />< br />
                              <Label for="yourName">Phone (We will text you when order is ready): </Label><Input type="text" name="number" id="phoneNumber" placeholder="Phone Number" required={true} />< br />
                              {cafeMenu.map((cafeMenu, index) => (
                                 <div className="container" key={index}>
                                    <img width="100" className="img-fluid p-2" src={cafeMenu.img} alt={cafeMenu.name} /> {cafeMenu.name} {cafeMenu.price} <Counter />
                                 </div>
                              ))}
                              <p className="text-center"><Button className="order-button" type="submit">Submit Order for Pickup</Button></p>
                           </FormGroup>
                        </Form>
                     </Row>
                  </ModalBody>
               </Modal>
            </Col>

            <Products data={cafeMenu} />

         </Container>
      </>
   );
}

export default MenuPage;