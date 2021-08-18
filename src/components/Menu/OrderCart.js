import React, { useState } from 'react';
import { Button, Row } from 'reactstrap';
import tridango from '../assets/images/food/tri-dango-sticks.png';
import ricecakes from '../assets/images/food/rice-cakes.png';
import avocadocake from '../assets/images/food/avocado-cake.png';
import lycheepann from '../assets/images/food/lychee-pannacotta.png';
import eggcoffee from '../assets/images/drinks/viet-egg-coffee.png';
import calamansiade from '../assets/images/drinks/matcha-calamansi-lemonade.png';
import taroicedtea from '../assets/images/drinks/taro-iced-tea.png';
import dalgonacoffee from '../assets/images/drinks/dalgona-coffee.png';

function OrderCart() {
   const [menuItems] = useState([
      {
         src: { tridango },
         name: 'Tri Dango Sticks',
         price: '$4'
      },
      {
         src: { ricecakes },
         name: 'Rice Cake',
         price: '$3'
      },
      {
         src: { avocadocake },
         name: 'Avocado Cake Slice',
         price: '$5'
      },
      {
         src: { lycheepann },
         name: 'Lychee Panna Cotta Bowl',
         price: '$7'
      },
      {
         src: { eggcoffee },
         name: 'Egg Coffee',
         price: '$5'
      },
      {
         src: { calamansiade },
         name: 'Calamansi-ade with Matcha',
         price: '$4'
      },
      {
         src: { taroicedtea },
         name: 'Taro Iced Tea',
         price: '$5'
      },
      {
         src: { dalgonacoffee },
         name: 'Dalgona Coffee',
         price: '$4'
      }
   ]);

   //const [count, setCount] = useState( () => { return 0 });
   
   const [cart, setCart] = useState([]);

   const addToCart = (menuItem) => {
      setCart([...cart, menuItem]);
   };

   // function incrementCount() {
   //    setCount(prevCount => prevCount + 1)
   // }

   // function decrementCount() {
   //    setCount(prevCount => prevCount - 1)
   // }

   return (
      <>
         <Row>
            {menuItems.map((menuItem, index) => (
               <div className="container" key={index}>
                  <img src={menuItem.src} alt={menuItem.name} />
                  <span className="menuTitle">{menuItem.name} {menuItem.price}</span>

                  {/* <Button onClick={decrementCount}> - </Button> */}
                  <Button onClick={() => addToCart(menuItem)}> + </Button>
               </div>
            ))}
         </Row>
      </>
   )
}



export default OrderCart;