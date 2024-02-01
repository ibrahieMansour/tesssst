/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "react";
import "../css/homePage.css";

function MyCro() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <div className="slide">
      <h5 className=" display-3 mb-0 pb-5 mx-0 px-0 typo-space-line">
        Develop <strong>Strategies</strong> for
        <br />
        your business
      </h5>

      <p className="banner-body homeP py-3 mx-0 px-0">
        Purple Buzz is a corporate HTML template with Bootstrap 5 Beta 1. This
        CSS template is 100% free to download provided by{" "}
        <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">
          TemplateMo
        </a>
        . Total 6 HTML pages included in this template. Icon fonts by{" "}
        <a rel="nofollow" href="https://boxicons.com/" target="_blank">
          Boxicons
        </a>
        . Photos are from{" "}
        <a rel="nofollow" href="https://unsplash.com/" target="_blank">
          Unsplash
        </a>{" "}
        and{" "}
        <a rel="nofollow" href="https://icons8.com/" target="_blank">
          Icons 8
        </a>
        .
      </p>
      <a
        class=" btn rounded-pill btn-outline-primary btn-lg px-4"
        href="#"
        role="button"
      >
        Get Started
      </a>
    </div>,
    <div className="slide">
      <h5 className=" display-3  mb-0 pb-5 mx-0 px-0 typo-space-line">
        HTML CSS Template with <br />
        Bootstrap 5 Beta 1
      </h5>

      <p className="banner-body  homeP py-3 mx-0 px-0">
        You are not allowed to re-distribute this Purple Buzz HTML template as a
        downloadable ZIP file on any kind of Free CSS collection websites. This
        is strongly prohibited. Please contact TemplateMo for more information.
      </p>
      <a
        class=" btn rounded-pill btn-outline-primary btn-lg px-4"
        href="#"
        role="button"
      >
        Get Started
      </a>
    </div>,
    <div className="slide">
      <h5 className=" display-3 mb-0 pb-5 mx-0 px-0 typo-space-line">
        Cupidatat non proident, sunt in culpa qui officia
      </h5>

      <p className="banner-body homeP py-3 mx-0 px-0">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat.{" "}
      </p>
      <a
        class=" btn rounded-pill btn-outline-primary btn-lg px-4"
        href="#"
        role="button"
      >
        Get Started
      </a>
    </div>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    
    <div style={{position: 'relative'}}>
      <div className="carousel d-flex">
        <button
          className="col-2 cro-btn"
          onClick={() => {
            setCurrentIndex(
              currentIndex === slides.length - 1 ? 0 : currentIndex + 1
            );
          }}
        >
          {">"}
        </button>
        <div className="carousel_Item col-8">{slides[currentIndex]}</div>
        <button
          className="col-2 cro-btn"
          onClick={() => {
            setCurrentIndex(
              currentIndex === 0 ? slides.length - 1 : currentIndex - 1
            );
          }}
        >
          {"<"}
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center " 
      style={{
        width: 120,
    position: 'absolute',
    button: 0,
    left: '50%', 
    transform: 'translate(-50%, -25px)'
  }}>
      <div  className= {currentIndex ===0 ? 'active carouselUnderLine' : 'carouselUnderLine'}  
      style={{height: '3px', width: '35px'}} 
      onClick={() => { setCurrentIndex(0);}}>
        
      </div>
      <div  className= {currentIndex===1 ? 'active carouselUnderLine' : 'carouselUnderLine'}
       style={{height: '3px', width: '35px'}}
       onClick={() => { setCurrentIndex(1);}}>
      
       </div>
      <div  className= {currentIndex===2 ? 'active carouselUnderLine' : 'carouselUnderLine'} 
       style={{height: '3px', width: '35px'}}
       onClick={() => { setCurrentIndex(2);}}>
        
       </div>

      </div>
    </div>
   
  );
}
export default MyCro;
