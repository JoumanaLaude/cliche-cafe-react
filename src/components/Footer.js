import React, { useState } from 'react';
import { Container, Col, Row, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { faYelp, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   return (
      <footer className="site-footer">
         <Container>
            <Row>
               <Col lg={6} className="text-center mt-2">
                  <a href="http://yelp.com/" aria-label="Yelp" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYelp} className="fa-2x fa-fw icon-space" /></a>
                  <a href="http://instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-2x fa-fw icon-space" /></a>
                  <a href="http://youtube.com/" aria-label="Youtube" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className="fa-2x fa-fw icon-space" /></a>
                  <a href="http://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="fa-2x fa-fw icon-space" /></a>
               </Col>
               <Col className="pt-2 text-center">
                  <Button onClick={toggle} className="footer-button">Contact Us</Button>
               </Col>
            </Row>
         </Container>
         <Modal isOpen={modal} returnFocusAfterClose={false} toggle={toggle}>
            <ModalHeader toggle={toggle}>Contact Us</ModalHeader>
            <ModalBody>
               <Container className="text-center">
                  <p>Open every day: 9AM - 8PM</p>
                  <span className="small">📍 1332 Maple Street</span><br />
                  <span className="small"> 📞 2-133-312-3111</span>
               </Container>
            </ModalBody>
         </Modal>
      </footer>
   );
}


export default Footer;
