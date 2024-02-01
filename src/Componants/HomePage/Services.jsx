/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../css/homePage.css";


function checkCondition(activeTab, s) {
  if (activeTab === "all") {
    return true;
  }

  // Check other conditions
  console.log(activeTab === "graphics" && s.graphics);
  return (
    (activeTab === "grphics" && s.graphics) ||
    (activeTab === "uiUx" && s.uiUx) ||
    (activeTab === "branding" && s.branding)
  );
}
function renderService(s) {
  return (
    
    <div key={s.sId} data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="col-xl-3 col-md-4 col-sm-6 ">
      {/* Display service */}
      <a
        href="#"
        className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
      >
        <img className="card-img" src={s.imgPath} alt="Card image" />
        <div className="service-work-vertical card-img-overlay d-flex align-items-end">
          <div className="service-work-content text-left text-light">
            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
              {s.btnLabel}
            </span>
            <p className="card-text">{s.cardText}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const service = [
    {
      sId: 1,
      
      imgPath: "../../img/services-01.jpg",
      btnLabel: "UI/UX design",
      cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      graphics: false,
      uiUx: true,
      branding: true,
    },
    {
      sId: 2,
      imgPath: "../../img/services-02.jpg",
      btnLabel: "Social Media",
      cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      graphics: true,
      uiUx: true,
      branding: false,
    },
    {
      sId: 3,
      imgPath: "../../img/services-03.jpg",
      btnLabel: "Marketing",
      cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      graphics: false,
      uiUx: false,
      branding: true,
    },
    {
      sId: 4,
      imgPath: "../../img/services-04.jpg",
      btnLabel: "Graphic",
      cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      graphics: true,
      uiUx: true,
      branding: false,
    },
    {
      sId: 5,
      imgPath: "../../img/services-05.jpg",
      btnLabel: "Digtal Marketing",
      cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      graphics: true,
      uiUx: true,
      branding: false,
    },
    {
      sId: 6,
      imgPath: "../../img/services-06.jpg",
      btnLabel: "Market Research",
      cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      graphics: false,
      uiUx: false,
      branding: true,
    },
    {
      sId: 7,
      imgPath: "../../img/services-07.jpg",
      btnLabel: "Business",
      cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      graphics: false,
      uiUx: false,
      branding: true,
    },
    {
      sId: 8,
      imgPath: "../../img/services-08.jpg",
      btnLabel: "Branding",
      cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      graphics: true,
      uiUx: true,
      branding: true,
    },
  ];
  
  return (
    <>
      <Container fluid>
        <Row>
          <h2 className="h2 text-center col-12 py-5 semi-bold-600">Services</h2>
          <div className="service-header col-2 col-lg-3 text-end light-300">
            <Icon.Cart4 className="bx bx-gift h3 mt-1"></Icon.Cart4>
          </div>
          <div className="service-heading col-10 col-lg-9 text-start float-end light-300">
            <h2 className="h3 pb-4 typo-space-line">Make Success for future</h2>
          </div>
          <Row>
          <div className="service-header col-2 col-lg-3 text-end light-300">
            {null}
          </div>
          <p className="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3  text-muted ">
            You are free to use this template for your commercial or business
            websites. You are not allowed to re-distribute this template ZIP
            file on any template collection websites. It is too easy to
            illegally copy and repost this template.
          </p>
          </Row>
        </Row>

        <div className=" my-5 py-5 services_border">
          <div className="col-md-12">
            <ul className="nav d-flex justify-content-center">
              <li className="nav-item mx-lg-4">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`filter-btn1 nav-link btn-outline-primary rounded-pill text-light px-4 light-300 ${
                    activeTab === "all" ? "active" : ""
                  }`}
                >
                  All
                </button>
              </li>
              <li className="nav-item mx-lg-4">
                <button
                  onClick={() => setActiveTab("grphics")}
                  className={`filter-btn1 nav-link btn-outline-primary rounded-pill text-light px-4 light-300 ${
                    activeTab === "grphics" ? "active" : ""
                  }`}
                >
                  Graphics
                </button>
              </li>
              <li className="nav-item mx-lg-4">
                <button
                  onClick={() => setActiveTab("uiUx")}
                  className={`filter-btn1 nav-link btn-outline-primary rounded-pill text-light px-4 light-300 ${
                    activeTab === "uiUx" ? "active" : ""
                  }`}
                >
                  UI/UX
                </button>
              </li>
              <li className="nav-item mx-lg-4">
                <button
                  onClick={() => setActiveTab("branding")}
                  className={`filter-btn1 nav-link btn-outline-primary rounded-pill text-light px-4 light-300 ${
                    activeTab === "branding" ? "active" : ""
                  }`}
                >
                  Branding
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className=" container overflow-hidden  py-5" >
          
            <Row className="gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
              {service.map((service)  => {
                if (checkCondition(activeTab, service)) {
                  return renderService(service);
                }
              })}
            </Row>
          
        </div>

        
      </Container>
    </>
  );
}
export default Services;
