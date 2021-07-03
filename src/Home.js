import React, { Component } from 'react';
//import CarouselHero from './CarouselHero';
import Slider from "./components/Slider"
import Images from "./images"
import { Row } from 'reactstrap';
import macarons from './assets/images/pages/bao-macarons.png';
import pudding from './assets/images/pages/mango-pudding-jelly.jpg';
import outdoor from './assets/images/pages/cafe-outside.jpg';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <>
      <Slider images={Images} />
        <div className="container mt-3 pt-5 px-5">
          <Row>
            <div className="col col-sm pr-1">
              <h2>About Us</h2>
              <p className="lead">Cliche Cafe is a cafe and lounge area where we provide people with a new experience for food,
                work, and relaxation. Our cafe side includes a seasonal rotating menu and bubble tea bar where people can
                enjoy the combination of boba flavors & alcohol. The cafe provides indoor and outdoor seating where people can
                do work or just kick back and take a breather. <a href="about.html"><strong>Learn more...</strong></a>
              </p>
            </div>
            <div className="col d-none d-lg-block my-3">
              <img src={macarons} width="600" height="337" className="img-fluid rounded float-right pt-5" alt="Bao themed macarons" />
            </div>
          </Row>
        </div>
        
        <hr />
        <div className="container pt-3 pb-3 px-5">
          <Row>
            <div className="col col-4 d-none d-lg-block">
              <h2>Food</h2>
              <p className="lead">Our food menu consists of mostly small bites and desserts inspired by dishes from Asian
                countries. We research and select special foods that fit with each season, and select those as the ingredients
                of our cafe's creations. Each dish has a story to tell and provides people with the opportunity to learn about
                the area the food is from.</p>
            </div>
            <div className="col pr-5">
              <h2>Current Menu</h2>
              <p className="lead">We serve a different menu each season. Currently serving our spring menu.
                <br /><a href="menus.html"><strong>View Full Menu</strong></a></p>
              <img src={pudding} className="img-fluid rounded" alt="Popular mango jelly pudding" />
            </div>
            <div className="col-4 d-none d-lg-block">
              <h2>Drinks</h2>
              <p className="lead">We have a selection of coffees, cold and warm drinks, and alcholic bubble tea. Just like our
                food, our drinks are inspired by Asian ingredients and may contain more unique and hard to find flavors. We
                encourage our customers to try something new so they can expand their knowledge of other cultures.</p>
            </div>
          </Row>
        </div>
        
        <hr />
        <div className="container py-3 px-5">
          <Row>
            <div className="col d-none d-lg-block">
              <img src={outdoor} width="600" height="400" className="img-fluid rounded" alt="The cafe outside" />
            </div>
            <div className="col col-sm">
              <h2>Lounge & Workspace</h2>
              <p className="lead">Cliche has seating for the cafe area, bar, and both indoor & outdoor tables with seating. We
                provide a community space for people to come in and work on their laptops with our outlets, read, or just
                relax.</p>
              <p className="lead">Workspace areas are first-come, first-serve unless reserved ahead of time.</p>
              <p className="text-right"><a href="reserve.html">Reserve Workspace</a></p>
            </div>
          </Row>
        </div>

        <div className="site-footer py-3">
        <Footer></Footer>
        </div>
        
      </>

    );
  }
}


export default Home;