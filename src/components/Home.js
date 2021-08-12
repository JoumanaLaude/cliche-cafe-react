import React from 'react';
import Slider from "./Slider"
import SliderInfo from "../constants/sliderInfo"
import { Col, Row } from 'reactstrap';
import { HomePageContent } from '../constants/homeConst';
import macarons from '../assets/images/pages/bao-macarons.jpg';
import outdoor from '../assets/images/pages/cafe-outside.jpg';
import TitleText from './TitleText';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <Slider images={SliderInfo}/>
      <div className="container pt-4 px-5">
        <Row>
          <Col>
            <TitleText titleText={HomePageContent.introParagraph.titleText} bodyText={HomePageContent.introParagraph.bodyText} />
          </Col>
          <Col lg={5}>
            <img src={macarons} width="600" height="300" className="img-fluid rounded float-right" alt="Bao themed macarons" />
          </Col>
        </Row>
      </div>
      <div className="container pt-3 pb-3 px-5">
        <Row className="justify-content-md-center">
          <Col lg={9} className="d-none d-lg-block">
            <TitleText titleText={HomePageContent.foodParagraph.titleText} bodyText={HomePageContent.foodParagraph.bodyText} />
            <p className="text-left"><NavLink to="/menu">View Full Menu</NavLink></p>
          </Col>
        </Row>
      </div>
      <div className="container px-5">
        <Row>
          <Col lg={5} className="d-none d-lg-block">
            <img src={outdoor} width="600" height="300" className="img-fluid rounded" alt="The cafe outside" />
          </Col>
          <Col>
            <TitleText titleText={HomePageContent.workspaceParagraph.titleText} bodyText={HomePageContent.workspaceParagraph.bodyText} />
            <NavLink to="/reserve">Reserve Workspace</NavLink>
          </Col>
        </Row>
      </div>

    </>

  );
}


export default Home;