import React, { Component } from 'react';
//import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col col-8 text-center">
                  <FontAwesomeIcon icon={faStar} size="2x" className="pt-2 mx-3" />
                  <FontAwesomeIcon icon={faStar} size="2x" className="pt-2 mx-3" />
                  <FontAwesomeIcon icon={faStar} size="2x" className="pt-2 mx-3" />
                  <FontAwesomeIcon icon={faStar} size="2x" className="pt-2 mx-3" />
               </div>
               <div className="col text-right">
                  Hours & Contact Us
                  <br />
                  <span className="small">Cliche Cafe &copy; Joumana Laude for Nucamp Bootcamp</span><br />
               </div>
            </div>
         </div>
      );
   }
}


export default Footer;
