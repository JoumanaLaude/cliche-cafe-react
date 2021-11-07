import React, { useState } from 'react';
import { Button, Col, Container, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Products from './MenuCard';
import ModalCard from './ModalCard';
import data from './data';
import { PageContent } from '../PageContent';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import TitleText from '../TitleText';

function MenuPage() {
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Thank you for your order! ^_^`);
      toggle()
   };

   return (
      <>
         <CartProvider>
            <Container className="text-center pt-3">
               <Col>
                  <TitleText title={PageContent.menuPage.title} content={PageContent.menuPage.content} />
                  <Button className="order-button" onClick={toggle}>Order for Pickup</Button>
                  <Modal isOpen={modal} toggle={toggle} returnFocusAfterClose={false}>
                     <ModalHeader charCode="Close" toggle={toggle}>Order for Pickup</ModalHeader>
                     <ModalBody>
                        <Form
                           onSubmit={handleSubmit}
                        >
                           <FormGroup>
                              <Label for="yourName">Your Name: </Label><Input type="name" name="name" id="yourName" placeholder="Your Name" required={true} />< br />
                              <Label for="yourName">Phone (We will text you when order is ready): </Label><Input type="text" name="number" id="phoneNumber" placeholder="Phone Number" required={true} />< br />
                              <h3 align="center">Menu</h3>
                              {data.cafeMenu.map((item, index) => {
                                 return (
                                    <ModalCard
                                       img={item.img}
                                       name={item.name}
                                       desc={item.desc}
                                       origin={item.origin}
                                       price={item.price}
                                       item={item}
                                       key={index}
                                    />
                                 )
                              })}

                              <br />
                              <h3 align="center">Your Cart</h3>
                              <Cart />
                              <p className="text-center">
                                 <Button
                                    className="order-button mt-4"
                                    type="submit"
                                 >
                                    Submit Order
                                 </Button>
                              </p>
                           </FormGroup>
                        </Form>

                     </ModalBody>
                  </Modal>
               </Col>

               <Products data={data} />

            </Container>
         </CartProvider>
      </>
   );
};

export default MenuPage;