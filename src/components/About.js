import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col, Row } from 'reactstrap';
import { PageContent } from './PageContent';
import TitleText from './TitleText';
import halohalo from '../assets/images/pages/halo-halo.jpg';
import coffeemug from '../assets/images/pages/coffee.jpg';

function About() {
   return (
      <main className="section">
         <Container className="pt-5 px-5">
            <Breadcrumb listTag="div">
               <BreadcrumbItem
                  href="/"
                  tag="a"
               >
                  Home
               </BreadcrumbItem>
               <BreadcrumbItem
                  active
                  tag="span"
               >
                  About Us
               </BreadcrumbItem>
            </Breadcrumb>
            <Row>
               <Col lg={8} pr={1}>
                  <TitleText title={PageContent.aboutUs.title} content={PageContent.aboutUs.content} />
               </Col>
               <Col>
                  <img src={halohalo} lg={4} xs={12} className="img-fluid rounded mx-auto d-block" alt="Halohalo dessert" />
               </Col>
            </Row>
            <Row>
               <Col className="col-margin">
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