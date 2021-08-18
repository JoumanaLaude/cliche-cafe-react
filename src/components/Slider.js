import React, { useRef } from 'react';
import useSlider from '../hooks/useSlider'
import '../css/slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const Slider = ({images}) => {
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
          <div className="slider" ref={slideImage}>
            <div className="slider-content">
              <button onClick={goToPreviousSlide} className="slider-button-left">
              <FontAwesomeIcon icon={faArrowLeft} />
              </button>
             <div className="slider-feature">
                <h1 className="feature-title">Cliche Cafe</h1>
                <p ref={slideText} className="feature-text"></p>
                <NavLink to="/about"><Button className="slider-button">Learn more</Button></NavLink>
              </div>
              <button onClick={goToNextSlide} className="slider-button-right">
              <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
        </div>
    );
}

export default Slider; 