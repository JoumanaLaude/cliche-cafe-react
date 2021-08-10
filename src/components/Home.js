import React from 'react';
import Slider from "./Slider"
import SliderInfo from "../constants/sliderInfo"
import { Col, Row } from 'reactstrap';
import macarons from '../assets/images/pages/bao-macarons.png';
import pudding from '../assets/images/pages/mango-pudding-jelly.jpg';
import outdoor from '../assets/images/pages/cafe-outside.jpg';
import TitleText from './TitleText';
import { HomePageContent } from '../constants/homeConst';

function Home() {
  return (
    <>
      <Slider images={SliderInfo}/>
      <div className="container mt-3 pt-3 px-5">
        <Row>
          <Col>
            <TitleText titleText={HomePageContent.introParagraph.titleText} bodyText={HomePageContent.introParagraph.bodyText} />
            <p className="lead"><a href="about.html"><strong>Learn more...</strong></a></p>
          </Col>
          <Col lg={5}>
            <img src={macarons} width="600" height="300" className="img-fluid rounded float-right" alt="Bao themed macarons" />
          </Col>
        </Row>
      </div>

      <hr />
      <div className="container pt-3 pb-3 px-5">
        <Row className="justify-content-md-center">
          <Col lg={4} className="d-none d-lg-block">
            <TitleText titleText={HomePageContent.foodParagraph.titleText} bodyText={HomePageContent.foodParagraph.bodyText} />
          </Col>
          <Col>
            <TitleText titleText={HomePageContent.menuParagraph.titleText} bodyText={HomePageContent.menuParagraph.bodyText} />
            <p className="text-left"><a href="menus.html" className="lead"><strong>View Full Menu</strong></a></p>
            <img src={pudding} width="300" height="220" className="img-fluid rounded d-none d-lg-block" alt="Popular mango jelly pudding" />
          </Col>
          <Col lg={4} className="d-none d-lg-block">
            <TitleText titleText={HomePageContent.drinksParagraph.titleText} bodyText={HomePageContent.drinksParagraph.bodyText} />
          </Col>
        </Row>
      </div>

      <hr />
      <div className="container py-3 px-5">
        <Row>
          <Col lg={5} className="d-none d-lg-block">
            <img src={outdoor} width="600" height="300" className="img-fluid rounded" alt="The cafe outside" />
          </Col>
          <Col>
            <TitleText titleText={HomePageContent.workspaceParagraph.titleText} bodyText={HomePageContent.workspaceParagraph.bodyText} />
            <a href="reserve.html" className="text-right lead"><strong>Reserve Workspace</strong></a>
          </Col>
        </Row>
      </div>

    </>

  );
}


export default Home;