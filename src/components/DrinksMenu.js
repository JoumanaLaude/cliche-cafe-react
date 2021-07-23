import React from 'react';
import MenuItem from './MenuItem';
import eggcoffee from '../assets/images/drinks/viet-egg-coffee.png';
import calamansiade from '../assets/images/drinks/matcha-calamansi-lemonade.png';
import taroicedtea from '../assets/images/drinks/taro-iced-tea.png';
import dalgonacoffee from '../assets/images/drinks/dalgona-coffee.png';
import { Col, Row } from 'reactstrap';

const DrinksMenu = () => {
   return (
      <>
         <div className="container mt-5 pt-5 px-5">
            <h3 className="text-center">Drinks</h3>
            <Row>
               <Col lg={6}>
                  <MenuItem
                     name="Egg Coffee"
                     src={eggcoffee}
                     price="$5"
                     desc="Egg yolk and sweetened condensed milk made into a fluff and poured on top of coffee and finished with cocoa powder."
                     origin="Traditional coffee called 'ca phe trung' in Vietnam."
                  />
                  <MenuItem
                     name="Calamansi-ade with Matcha"
                     src={calamansiade}
                     price="$4"
                     desc="Freshly squeezed calamansi juice and matcha mixed together and contains many health benefits such as immunity boost and collagen production."
                     origin="Calamansi juice is known as the Filipino lemonade."
                  />
               </Col>
               <Col lg={6}>
                  <MenuItem
                     name="Taro Iced Tea"
                     src={taroicedtea}
                     price="$5"
                     desc="Fresh taro blended together with milk and tea to produce a refreshing taste."
                     origin="Taro is a root vegetable that originates from Asia that helps with your digestive system."
                  />
                  <MenuItem
                     name="Dalgona Coffee"
                     src={dalgonacoffee}
                     price="$4"
                     desc="Sweet coffee whipped until silky and smooth."
                     origin="The name of this coffee comes from a very popular Korean sugar candy called 'dalgona' which translates into 'it's sweet.'"
                  />
               </Col>
            </Row>
         </div>
      </>
   )
}


export default DrinksMenu;