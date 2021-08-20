import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { AboutUsContent } from '../constants/aboutConst';
import TitleText from './TitleText';

class About extends Component {
   render() {
      return (
         <>
            <div className="container pt-4 px-5">
               <Row>
                  <Col lg={6} pr={1}>
                     <TitleText titleText={AboutUsContent.aboutUs.titleText} bodyText={AboutUsContent.aboutUs.bodyText} />
                     <TitleText bodyText={AboutUsContent.aboutUs.bodyText2} />
                  </Col>
                  <Col>
                  <img src={AboutUsContent.aboutUs.img} width="600" height="300" className="img-fluid rounded float-right pt-5 d-none d-md-block" alt="Halo-halo dessert" />
                  </Col>
               </Row>
            </div>
            <div className="container pt-3 px-5">
               <Row>
                  <Col>
                     <TitleText titleText={AboutUsContent.eventSection.titleText} bodyText={AboutUsContent.eventSection.bodyText} />
                     <img src={AboutUsContent.eventSection.img} width="800" height="300" className="img-fluid rounded mx-auto d-block" alt="Coffee mug on book" />
                     <TitleText bodyText={AboutUsContent.eventSection.bodyText2} />
                  </Col>
               </Row>
            </div>
         </>
      );
   }
}

export default About;