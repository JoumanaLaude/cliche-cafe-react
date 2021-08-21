import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { PageContent } from './PageContent';
import TitleText from './TitleText';

function About() {
   return (
      <>
         <Container className="pt-4 px-5">
            <Row>
               <Col lg={6} pr={1}>
                  <TitleText title={PageContent.aboutUs.title} content={PageContent.aboutUs.content} />
                  <TitleText content={PageContent.aboutUs.content2} />
               </Col>
               <Col>
                  <img src={PageContent.aboutUs.img} width="600" height="300" className="img-fluid rounded float-right pt-5 d-none d-md-block" alt="Halo-halo dessert" />
               </Col>
            </Row>
         </Container>
         <Container className="pt-3 px-5">
            <Row>
               <Col>
                  <TitleText title={PageContent.eventSection.title} content={PageContent.eventSection.content} />
                  <img src={PageContent.eventSection.img} width="800" height="300" className="img-fluid rounded mx-auto d-block" alt="Coffee mug on book" />
                  <TitleText content={PageContent.eventSection.content2} />
               </Col>
            </Row>
         </Container>
      </>
   );
}

export default About;