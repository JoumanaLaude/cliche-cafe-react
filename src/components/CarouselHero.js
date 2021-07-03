import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import slide1 from './assets/images/slider/boba.jpg';
import slide2 from './assets/images/slider/bingsoo.jpg';
import slide3 from './assets/images/slider/latte.jpg';

const items = [
  {
    src: slide1,
    altText: 'Slide 1',
    title: 'Cliche Cafe',
    caption: 'Cafe, bar, and lounge.'
  },
  {
    src: slide2,
    altText: 'Slide 2',
    title: 'Seasonal Menu',
    caption: 'Currently serving for spring season.'
  },
  {
    src: slide3,
    altText: 'Slide 3',
    title: 'Reserve Space',
    caption: 'Reserve a space to hangout or do work.'
  }
];

const CarouselHero = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.title} captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
}

export default CarouselHero;