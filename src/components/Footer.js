import React from 'react';
import {
   faYelp,
   faInstagram,
   faYoutube,
   faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
   return (
      <footer className="site-footer">
         <div className="container">
            <div className="row">
               <div className="col-6 text-center mt-2">
                  <a href="http://yelp.com/" aria-label="Yelp" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYelp} className="fa-2x fa-fw icon-space" /></a>
                  <a href="http://instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-2x fa-fw icon-space" /></a>
                  <a href="http://youtube.com/" aria-label="Youtube" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className="fa-2x fa-fw icon-space" /></a>
                  <a href="http://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="fa-2x fa-fw icon-space" /></a>
               </div>
               <div className="col text-right">
                  Hours & Contact Us
                  <br />
                  <span className="small">Cliche Cafe &copy; Joumana Laude for Nucamp Bootcamp</span><br />
               </div>
            </div>
         </div>
      </footer>
   );
}


export default Footer;
