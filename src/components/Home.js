import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import TitleText from './TitleText';
import { PageContent } from './PageContent';
import macarons from '../assets/images/pages/bao-macarons.jpg';

function Home() {
  return (
      <Container className="pt-5 px-5">
        <Row className="home-height col-margin">
          <Col lg={4} xs={12} className="mb-4">
            <img src={macarons} width="600" height="300" className="img-fluid rounded bao-img" alt="Bao themed macarons" />
          </Col>
          <Col>
            <h1>Cliche Cafe</h1>
            <TitleText title={PageContent.homePage.title} content={PageContent.homePage.content} />
          </Col>
        </Row>
      </Container>
  );
}

export default Home;