import React from 'react';
import MenuItem from './MenuItem';
import tridango from '../assets/images/food/tri-dango-sticks.png';
import ricecakes from '../assets/images/food/rice-cakes.png';
import avocadocake from '../assets/images/food/avocado-cake.png';
import lycheepann from '../assets/images/food/lychee-pannacotta.png';
import { Col, Row } from 'reactstrap';

const FoodMenu = () => {
   return (
         <div className="container mt-5">
            <h3 className="text-center">Food</h3>
            <Row>
               <Col lg={6}>
                  <MenuItem
                     name="Tri Dango Sticks"
                     src={tridango}
                     price="$4"
                     desc="Sweetened rice flours mixed and moulded into bite-size treats. Flavors include matcha, red bean, and sweet rice."
                     origin="Tri color dango is a traditional spring dessert in Japan."
                  />
                  <MenuItem
                     name="Rice Cake"
                     src={ricecakes}
                     price="$3"
                     desc="Steamed mini cakes made with rice flour and colored with natural ingredients. Comes with your choice of cheese or coconut topping."
                     origin="This dessert is a traditional food in many Asian countries."
                  />
               </Col>
               <Col lg={6}>
                  <MenuItem
                     name="Avocado Cake (slice)"
                     src={avocadocake}
                     price="$5"
                     desc="Gluten-free and vegan avocado cake made with ripe avocados, vanilla, and lime juice."
                     origin="Inspired by Vietnam's popular avocado smoothie."
                  />
                  <MenuItem
                     name="Lychee Panna Cotta Bowl"
                     src={lycheepann}
                     price="$7"
                     desc="Contains panna cotta with fresh lychee and dragonfruit. A sweet cold soup perfect for warm days."
                     origin="In Vietnamese this is called khuc bach and contains a wide range of flavors and toppings."
                  />
            </Col>
            </Row>
         </div>
   )
}


export default FoodMenu;