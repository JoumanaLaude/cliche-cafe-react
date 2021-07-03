import React, { useRef } from 'react';
import useSlider from '../hooks/useSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Slider = ({images}) => {
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
          <div className="slider" ref={slideImage}>
            <div className="slider--content">
              <button onClick={goToPreviousSlide} className="slider__btn-left">
              <FontAwesomeIcon icon={faArrowLeft} />
              </button>
             <div className="slider--feature">
                <h1 className="feature--title">Cliche Cafe</h1>
                <p ref={slideText} className="feature--text"></p>
                <button className="feature__btn">Learn more</button>
              </div>
              <button onClick={goToNextSlide} className="slider__btn-right">
              <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
        </div>
    );
}

export default Slider; 