import React, { useState } from 'react';
import { Button, Row, Col, Container, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Products from './/Menu/MenuItemComponent';
import { cafeMenu } from './Menu/menuItems';
import Counter from './Menu/Counter';
import styled from 'styled-components';

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
                     <Form onSubmit={handleSubmit}>
                        <FormGroup>
                           <Label for="yourName">Your Name: </Label><Input type="name" name="name" id="yourName" placeholder="Your Name" required={true} />< br />
                           <Label for="yourName">Phone (We will text you when order is ready): </Label><Input type="text" name="number" id="phoneNumber" placeholder="Phone Number" required={true} />< br />

                           {cafeMenu.map((cafeMenu, index) => (
                              <ItemBox key={index}>
                                    <Row className="mt-3">
                                       <Col><img width="100" className="img-fluid" src={cafeMenu.img} alt={cafeMenu.name} /></Col>
                                       <Col>{cafeMenu.name} {cafeMenu.price}<br /><Counter /></Col>
                                    </Row>
                                 </ItemBox>
                           ))}


                           <p className="text-center"><Button className="order-button mt-4" type="submit">Submit Order for Pickup</Button></p>
                        </FormGroup>
                     </Form>
                  </ModalBody>
               </Modal>
            </Col>

            <Products data={cafeMenu} />

         </Container>
      </>
   );
}

export const ItemBox = styled.div`
    margin: auto;
    width: 90%;
    background: #fff1e3;
`

export default MenuPage;