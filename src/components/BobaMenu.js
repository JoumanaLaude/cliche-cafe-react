import React from 'react';
import MenuItem from './MenuItem';
import milkytwist from '../assets/images/boba/baileys-boba.png';
import byejou from '../assets/images/boba/strawcream-boba.png';
import coconutboba from '../assets/images/boba/rum-coconut.png';
import sojupearls from '../assets/images/boba/coconut-pearls.png';
import { Col, Row } from 'reactstrap';

const BobaMenu = () => {
   return (
      <>
         <div className="container mt-5">
            <h3 className="text-center">Bubble Tea (Alcoholic)</h3>
            <Row>
               <Col lg={6}>
                  <MenuItem
                     name="Milky Twist"
                     src={milkytwist}
                     price="$10"
                     desc="Brown sugar milk tea made with cream liqueur and vodka. Comes with tapioca bubbles."
                     origin="Brown sugar milk tea is Asia's most popular milk tea."
                  />
                  <MenuItem
                     name="Bye Jou"
                     src={byejou}
                     price="$15"
                     desc="Bubble tea made with baijiu liquor and strawberries & cream liqueur for a sweeter taste."
                     origin="Baiju is one of China's most popular and strongest liquors."
                  />
               </Col>
               <Col lg={6}>
                  <MenuItem
                     name="Coconut Boba"
                     src={coconutboba}
                     price="$12"
                     desc="Mixed with sake, rum, and coconut water and topped with tapioca and fresh lychee jelly."
                     origin="Sake is a Japanese rice wine made from fermenting rice and has a refreshing taste."
                  />
                  <MenuItem
                     name="Soju Pearls"
                     src={sojupearls}
                     price="$12"
                     desc="Coconut milk mixed with your choice of soju flavor and topped with tapioca pearls."
                     origin="Soju is one of South Korea's most popular alcoholic beverage made from rice."
                  />
               </Col>
            </Row>
         </div>
      </>
   )
}


export default BobaMenu;