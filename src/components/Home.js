import React from 'react';
import Slider from "./Slider/Slider"
import SliderInfo from "./Slider/sliderInfo"
import { Col, Row } from 'reactstrap';
import TitleText from './TitleText';
import { NavLink } from 'react-router-dom';
import { PageContent } from './PageContent'

function Home() {
  return (
    <>
      <Slider images={SliderInfo}/>
      <div className="container pt-4 px-5">
        <Row>
          <Col>
            <TitleText title={PageContent.homePage.title} content={PageContent.homePage.content} />
          </Col>
          <Col lg={5}>
            <img src={PageContent.homePage.img} width="600" height="300" className="img-fluid rounded float-right" alt="Bao themed macarons" />
          </Col>
        </Row>
      </div>
      <div className="container pt-3 pb-3 px-5">
        <Row className="justify-content-md-center">
          <Col lg={9} className="d-none d-lg-block">
            <TitleText title={PageContent.foodSection.title} content={PageContent.foodSection.content} />
            <p className="text-left"><NavLink to="/menu">View Full Menu</NavLink></p>
          </Col>
        </Row>
      </div>
      <div className="container px-5">
        <Row>
          <Col lg={5} className="d-none d-lg-block">
            <img src={PageContent.loungeSection.img} width="600" height="300" className="img-fluid rounded" alt="The cafe outside" />
          </Col>
          <Col>
            <TitleText title={PageContent.loungeSection.title} content={PageContent.loungeSection.content} />
            <NavLink to="/reserve">Reserve Workspace</NavLink>
          </Col>
        </Row>
      </div>

    </>

  );
}


export default Home;