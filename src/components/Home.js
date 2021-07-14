import React from 'react';
import Slider from "./Slider"
import Images from "../images"
import { Row } from 'reactstrap';
import macarons from '../assets/images/pages/bao-macarons.png';
import pudding from '../assets/images/pages/mango-pudding-jelly.jpg';
import outdoor from '../assets/images/pages/cafe-outside.jpg';
import TitleText from './TitleText';
import { HomePageContent } from '../constants/homeConst';

function Home() {
  return (
    <>
      <Slider images={Images} />
      <div className="container mt-3 pt-5 px-5">
        <Row>
          <div className="col col-sm pr-1">
            <TitleText titleText={HomePageContent.introParagraph.titleText} bodyText={HomePageContent.introParagraph.bodyText} />
            <a href="about.html" className="lead"><strong>Learn more...</strong></a>
          </div>
          <div className="col d-none d-lg-block my-3">
            <img src={macarons} width="600" height="300" className="img-fluid rounded float-right" alt="Bao themed macarons" />
          </div>
        </Row>
      </div>

      <hr />
      <div className="container pt-3 pb-3 px-5">
        <Row className="justify-content-md-center">
          <div className="col col-4 d-none d-lg-block">
          <TitleText titleText={HomePageContent.foodParagraph.titleText} bodyText={HomePageContent.foodParagraph.bodyText} />
          </div>
          <div className="col">
          <TitleText titleText={HomePageContent.menuParagraph.titleText} bodyText={HomePageContent.menuParagraph.bodyText} />
            <p className="text-left"><a href="menus.html" className="lead"><strong>View Full Menu</strong></a></p>
            <img src={pudding} width="300" height="220" className="img-fluid rounded" alt="Popular mango jelly pudding" />
          </div>
          <div className="col-4 d-none d-lg-block">
          <TitleText titleText={HomePageContent.drinksParagraph.titleText} bodyText={HomePageContent.drinksParagraph.bodyText} />
          </div>
        </Row>
      </div>

      <hr />
      <div className="container py-3 px-5">
        <Row>
          <div className="col d-none d-lg-block">
            <img src={outdoor} width="600" height="300" className="img-fluid rounded" alt="The cafe outside" />
          </div>
          <div className="col col-sm">
          <TitleText titleText={HomePageContent.workspaceParagraph.titleText} bodyText={HomePageContent.workspaceParagraph.bodyText} />
            <a href="reserve.html" className="text-right lead"><strong>Reserve Workspace</strong></a>
          </div>
        </Row>
      </div>

    </>

  );
}


export default Home;