/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
function checkCondition(activeTab, s) {
    if (activeTab === "all") {
      return true;
    }
  
    // Check other conditions
    
    return (
      (activeTab === "graphic" && s.graphic) ||
      (activeTab === "marketing" && s.marketing) ||
      (activeTab === "business" && s.business) || 
      (activeTab === "social" && s.social)
    );
  }
  function renderWorks(s) {
    return (
      <Col key={s.sId} className="col-sm-6 col-lg-4 mb-3  text-decoration-none project">
      <Card  className="amr-card">
      <Card.Img variant="top" src={s.imgPath} />
      <Card.Body>
        <Card.Title>{s.cardTitle}</Card.Title>
        <Card.Text>
        {s.cardText}
        </Card.Text>
        <Button variant="primary">Read more </Button>
      </Card.Body>
    </Card>
    </Col>  
    );
  }

    

function OurWork() {
    const [activeTab, setActiveTab] = useState("all");
  
    const Works = [
      {
        sId: 1,
        imgPath: "../../img/our-work-01.jpg",
        cardTitle: "Digital Marketing",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolor.",
        project: true,
        business: false,
        marketing: true,
        social: true,
        graphic: false
      },
      {
        sId: 2,
        imgPath: "../../img/our-work-02.jpg",
        cardTitle: "Corporate Branding",
        cardText: " Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat.",
        project: true,
        business: false,
        marketing: false,
        social: true,
        graphic: true
      },
      {
        sId: 3,
        imgPath: "../../img/our-work-03.jpg",
        cardTitle: "Leading Digital Solution",
        cardText: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdolore eu fugiat nulla pariatur.",
        project: false,
        business: true,
        marketing: true,
        social: false,
        graphic: true
      },
      {
        sId:4,
        imgPath: "../../img/our-work-04.jpg",
        cardTitle: "Smart Applications",
        cardText: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        project: true,
        business: true,
        marketing: false,
        social: true,
        graphic: false
      },
      {
        sId:5,
        imgPath: "../../img/our-work-05.jpg",
        cardTitle: "Corporate Stationary",
        cardText: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        project: true,
        business: true,
        marketing: false,
        social: false,
        graphic: false
      },
      {
        sId:6,
        imgPath: "../../img/our-work-06.jpg",
        cardTitle: "8 Financial Tips",
        cardText: " Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat..",
        project: true,
        business: true,
        marketing: false,
        social: false,
        graphic: true
      },
      
    ];
return(

    <section className="container py-5">
    <div className="row justify-content-center text-center col-auto my-5">
        
            <Button   
            onClick={() => setActiveTab("all")}
            className={`filter-btn btn rounded-pill col-md-2 mb-2 border-0 m-md-2 px-md-4  ${
              activeTab === "all" ? "active" : ""
            }`} >All</Button>
            <Button 
            onClick={() => setActiveTab("business")}
            className={`filter-btn btn rounded-pill col-6 col-md-2  mb-2 border-0 m-md-2 px-md-4  ${
              activeTab === "business" ? "active" : ""
            }`} >Business</Button>
            <Button 
            onClick={() => setActiveTab("marketing")}
            className={`filter-btn btn rounded-pill col-6 col-md-2 mb-2 border-0 m-md-2 px-md-4 ${
              activeTab === "marketing" ? "active" : ""
            }`} >Marketing</Button>
            <Button 
            onClick={() => setActiveTab("social")}
            className={`filter-btn  rounded-pill col-6 col-md-2 mb-2 border-0 m-md-2 px-md-4 ${
              activeTab === "social" ? "active" : ""
            }`}>Social Media</Button>
            <Button 
            onClick={() => setActiveTab("graphic")}
            className={`filter-btn  rounded-pill col-6 col-md-2 mb-2 border-0 m-md-2 px-md-4 ${
              activeTab === "graphic" ? "active" : ""
            }`}>Graphic</Button>
        
    </div>

    <div className="row projects align-content-stretch gx-lg-5">
    {Works.map((service) => {
                if (checkCondition(activeTab, service)) {
                  return renderWorks(service);
                }
              })}
    </div>
    <div className="row">
        <div className="btn-toolbar justify-content-center pb-4" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary text-white">Previous</button>
            </div>
            <div className="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-light">1</button>
            </div>
            <div className="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary text-white">2</button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-secondary text-white">Next</button>
            </div>
        </div>
    </div>
</section>
)

}
export default OurWork;