import React, { useState } from 'react';
import { Button, Col, Container, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Products from './MenuCard';
import data from './data';
import { PageContent } from '../PageContent';
import { CartProvider } from 'react-use-cart';
import TitleText from '../TitleText';
import ModalForm from './Form';

function MenuPage() {
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    alert(`Thank you for your order! ^_^ Please check your texts for updates!`);
   //    toggle();
   // };

   // const clearCartStorage = () => {
   //    localStorage.clear();
   // };

   // const formSubmitted = () => {
   //    handleSubmit();
   //    clearCartStorage();
   // }

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

                     <ModalForm />

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