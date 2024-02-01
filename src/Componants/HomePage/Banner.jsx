import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import './banner.css'
import { Link } from 'react-router-dom';
function Banner() {
  
  return (
    
    <Carousel data-bs-theme="dark" className='carousel'>
      <Carousel.Item className='ca_items'>
      <Carousel.Caption className="d-flex flex-column text-left  h-100 align-items-left  justify-content-center">
          <h5 className=' display-3 mb-0 pb-5 mx-0 px-0 typo-space-line'>
            Develop <strong>Strategies</strong> for 
            <br/>your business
            </h5>
          
          <p className="banner-body homeP  py-3 mx-0 px-0">
          Purple Buzz is a corporate HTML template with Bootstrap 5 Beta 1. This CSS template is 100% free to download provided by <Link rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</Link>. Total 6 HTML pages included in this template. Icon fonts by <Link rel="nofollow" href="https://boxicons.com/" target="_blank">Boxicons</Link>. Photos are from <Link rel="nofollow" href="https://unsplash.com/" target="_blank">Unsplash</Link> and <Link rel="nofollow" href="https://icons8.com/" target="_blank">Icons 8</Link>.
          </p>
          <Link class=" btn rounded-pill btn-outline-primary btn-lg px-4" href="#" role="button">Get Started</Link>

          
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="../../img/banner-bg-01.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption className="d-flex flex-column text-left  h-100 align-item-center justify-content-center">
          <h5 className=' display-3 mb-0 pb-5 mx-0 px-0 typo-space-line'>
          HTML CSS Template with <br/>Bootstrap 5 Beta 1
            </h5>
          
          <p className="banner-body homeP py-3 mx-0 px-0">
          You are not allowed to re-distribute this Purple Buzz HTML template as a downloadable ZIP file on any kind of Free CSS collection websites. This is strongly prohibited. Please contact TemplateMo for more information.
          </p>
          <Link class=" btn rounded-pill btn-outline-primary btn-lg px-4" href="#" role="button">Get Started</Link>

          
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="../../img/banner-bg-01.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption className="d-flex flex-column text-left  h-100  justify-content-center">
          <h5 className=' display-3 mt-2 mb-0 pb-5 mx-0 px-0 '>
          HTML CSS Template with <br/>Bootstrap 5 Beta 1
            </h5>
          
          <p className="banner-body homeP py-3 mx-0 px-0">
          You are not allowed to re-distribute this Purple Buzz HTML template as a downloadable ZIP file on any kind of Free CSS collection websites. This is strongly prohibited. Please contact TemplateMo for more information.
          </p>
          <Link class=" btn rounded-pill btn-outline-primary btn-lg px-4" href="#" role="button">Get Started</Link>

          
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="../../img/banner-bg-01.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Banner;