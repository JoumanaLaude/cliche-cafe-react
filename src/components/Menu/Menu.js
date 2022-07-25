import React, { useState } from 'react';
import { Button, Col, Container, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MainMenu from './MenuCard';
import data from './data';
import { PageContent } from '../PageContent';
import { CartProvider } from 'react-use-cart';
import TitleText from '../TitleText';
import ModalForm from './Form';

const MenuPage = () => {
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   return (
      <>
         <CartProvider>
            <Container className="text-center pt-3 col-margin">
               <Col>
                  <TitleText title={PageContent.menuPage.title} content={PageContent.menuPage.content} />
                  <TitleText content={PageContent.aboutMenu.content} />
                  <Button className="order-button" onClick={toggle}>Order for Pickup</Button>

                  <Modal isOpen={modal} toggle={toggle} returnFocusAfterClose={false}>
                     <ModalHeader charCode="Close" toggle={toggle}>Order for Pickup</ModalHeader>

                     <ModalBody>
                        <ModalForm />
                     </ModalBody>
                  </Modal>
               </Col>

               <MainMenu data={data} />

            </Container>
         </CartProvider>
      </>
   );
};

export default MenuPage;