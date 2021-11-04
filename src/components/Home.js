import React from 'react';
import Slider from "./Slider/Slider";
import SliderInfo from "./Slider/SliderInfo";
import { Container, Col, Row } from 'reactstrap';
import TitleText from './TitleText';
import { PageContent } from './PageContent';
import macarons from '../assets/images/pages/bao-macarons.jpg';
import outdoor from '../assets/images/pages/cafe-outside.jpg';

function Home() {
  return (
    <main>
      <Slider images={SliderInfo}/>
      <Container className="pt-5 px-5">
        <Row>
          <Col>
            <TitleText title={PageContent.homePage.title} content={PageContent.homePage.content} />
          </Col>
          <Col lg={5}>
            <img src={macarons} width="600" height="300" className="img-fluid rounded float-right" alt="Bao themed macarons" />
          </Col>
        </Row>
      </Container>
      <Container className="pt-5 px-5">
        <Row>
          <Col lg={5} className="d-none d-lg-block">
            <img src={outdoor} width="500" height="300" className="img-fluid rounded" alt="The cafe outside" />
          </Col>
          <Col>
            <TitleText title={PageContent.loungeSection.title} content={PageContent.loungeSection.content} />
            {/* <NavLink to="/reserve">Reserve Workspace</NavLink> */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;