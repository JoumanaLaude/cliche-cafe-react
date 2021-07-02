import React from 'react';
import { CarouselData } from './CarouselData';

const CarouselSlider = () => {
   return (
      <div>
        {CarouselData.map((item, index) => {
          return <img src={item.image} alt="hi" />;
      })}
      </div>
   );
}

export default CarouselSlider
