import React, { useEffect, useState } from 'react';
import './SliderHomePage.scss';
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';
import slider4 from '../../assets/images/slider4.jpg';

function SliderHomePage(props) {
  const [counter, setCounter] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  useEffect(() => {
    const slides = document.querySelectorAll('.slides .image-slider');
    let sizeImg = slides[0].clientWidth;
    let newMarginLeft = -(counter * sizeImg);
    setMarginLeft(newMarginLeft);
  }, [counter]);

  function handlePrevious() {
    if (counter <= 0) return;
    let newCounter = counter - 1;
    setCounter(newCounter);
  }

  function handleNext() {
    const slides = document.querySelectorAll('.slides .image-slider');
    if (counter >= slides.length - 1) return;
    let newCounter = counter + 1;
    setCounter(newCounter);
  }

  function handleChange(event) {
    let newCounter = +event.target.value;
    setCounter(newCounter);
  }

  return (
    <div className="SliderHomePage">
      <div className="SliderHomePage__top">
        <div className="navigation">
          <input
            type="radio"
            name="r"
            value="0"
            onChange={handleChange}
            checked={counter === 0 ? true : false}
          />
          <input
            type="radio"
            name="r"
            value="1"
            onChange={handleChange}
            checked={counter === 1 ? true : false}
          />
          <input
            type="radio"
            name="r"
            value="2"
            onChange={handleChange}
            checked={counter === 2 ? true : false}
          />
          <input
            type="radio"
            name="r"
            value="3"
            onChange={handleChange}
            checked={counter === 3 ? true : false}
          />
        </div>
        <div
          className="slides"
          style={{ marginLeft: `${marginLeft}px` }}
        >
          <a href="#." className="image-slider">
            <img src={slider1} alt="slider-1" />
          </a>
          <a href="#." className="image-slider">
            <img src={slider2} alt="slider-1" />
          </a>
          <a href="#." className="image-slider">
            <img src={slider3} alt="slider-1" />
          </a>
          <a href="#." className="image-slider">
            <img src={slider4} alt="slider-1" />
          </a>
        </div>

        <div className="controls">
          <button className="control-left" onClick={handlePrevious}>
            <i className="zmdi zmdi-chevron-left"></i>
          </button>
          <button className="control-right" onClick={handleNext}>
            <i className="zmdi zmdi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderHomePage;
