import React, { Component } from 'react';
import { Row } from 'reactstrap';
import halohalo from '../assets/images/food/halo-halo.jpg';
import coffeemug from '../assets/images/pages/yellowmug-coffee-book.png';

class About extends Component {
   render() {
      return (
         <>
            <div className="container mt-5 pt-5 px-5">
               <Row>
                  <div className="col col-sm pr-1">
                     <h2 className="mt-0">About Us</h2>
                     <p className="lead">Our goal for Cliche Cafe is to be an open community space for the public to find a place where
                        they can relax, work on things with our charging outlets, and try something new by experiencing the foods and
                        drinks we have to offer.</p>
                     <p className="lead d-none d-lg-block">We have a seasonal rotating menu for food and drinks to keep things fresh and
                        new. Menu items are all inspired by Asian cuisine to help people learn more about different food and cultures.
                        We also have a special bubble tea bar with original drinks where people can enjoy the combination of bubble
                        tea flavors & alcohol.</p>
                  </div>
                  <div className="col d-none d-lg-block my-3">
                     <img src={halohalo} className="img-fluid rounded float-right pt-5 d-none d-md-block" alt="Halo-halo dessert" />
                  </div>
               </Row>
            </div>

            <hr />
            <div className="container pt-3 pb-3 px-5">
               <Row>
                  <div className="col d-none d-lg-block">
                     <h2>Events</h2>
                     <p className="lead">Some of Cliche Cafe's monthly events include book club meets, mahjong games and lessons, guest
                        speakers, board game nights, and cooking events.</p>
                     <p><img src={coffeemug} className="img-fluid rounded mx-auto d-block" alt="Coffee mug on book" /></p>
                     <p className="lead">We do our best to support the local community by hosting live music performances by local
                        musicians, showcasing art created by locals every season, and we also have events with information and
                        resources to help guide people on the right path for new skills or career changes.</p>
                  </div>
               </Row>
            </div>

         </>

      );
   }
}


export default About;