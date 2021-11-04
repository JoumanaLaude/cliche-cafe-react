import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { PageContent } from './PageContent';
import TitleText from './TitleText';
import halohalo from '../assets/images/pages/halo-halo.jpg';
import coffeemug from '../assets/images/pages/coffee.jpg';
import { NavLink } from 'react-router-dom';

function About() {
   return (
      <main className="section">
         <Container className="pt-5 px-5">
            <Row>
               <Col lg={8} pr={1}>
                  <TitleText title={PageContent.aboutUs.title} content={PageContent.aboutUs.content} />
                  <TitleText content={PageContent.aboutUs.content2} />
               </Col>
               <Col>
                  <img src={halohalo} className="img-fluid rounded float-right pt-5 d-none d-md-block" alt="Halohalo dessert" />
               </Col>
            </Row>
         </Container>
         <Container className="pt-5 px-5">
            <Row className="justify-content-md-center">
               <Col lg={9} className="d-none d-lg-block">
                  <TitleText title={PageContent.foodSection.title} content={PageContent.foodSection.content} />
                  <p className="text-left"><NavLink to="/menu">View Full Menu</NavLink></p>
               </Col>
            </Row>
         </Container>
         <Container className="pt-5 px-5">
            <Row>
               <Col>
                  <TitleText title={PageContent.eventSection.title} content={PageContent.eventSection.content} />
                  <img src={coffeemug} className="img-fluid rounded mx-auto d-block" alt="Coffee" />
                  <TitleText content={PageContent.eventSection.content2} />
               </Col>
            </Row>
         </Container>
      </main>
   );
}

export default About;