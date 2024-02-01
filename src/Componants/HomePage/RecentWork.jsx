/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Image } from "react-bootstrap";
import { CalendarMinusFill } from "react-bootstrap-icons";
import { Container, Row } from "reactstrap";


function RecentWork(){

    return(

       
        <section >
            <section className="services_border">
        <Container className=" py-5">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-2 col-12 text-light align-items-center">
                    <CalendarMinusFill className='display-1 bx bxs-box bx-lg'/>{}
                </div>
                <div className="col-lg-7 col-12 text-light pt-2">
                    <h3 className="h4 light-300">Great transformations successful</h3>
                    <span className="light-300 text-white text-center">Quis ipsum suspendisse ultrices gravida.</span>
                </div>
                <div className="col-lg-3 col-12 pt-4">
                    <a href="#" className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300 btn-block shadow px-4 py-2">View Our Work</a>
                </div>
            </div>
        </Container>
    </section>
            <Container className="py-5 mb-5">
                <Row className="recent-work-header  text-center pb-5">
                    <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Recent Works</h2>
                </Row>
                <Row className=" gy-5 g-lg-5 mb-4">
    
                   
                    <div className="col-md-4 mb-3">
                        <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                            <Image className="recent-work-img card-img" src="../../img/recent-work-01.jpg" alt="Card image"/>
                            <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                    <h3 className="card-title light-300">Social Media</h3>
                                    <p className="card-text">Ullamco laboris nisi ut aliquip ex</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                 
                    <div className="col-md-4 mb-3">
                        <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                            <Image className="recent-work-img card-img" src="../../img/recent-work-02.jpg" alt="Card image"/>
                            <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                    <h3 className="card-title light-300">Web Marketing</h3>
                                    <p className="card-text">Psum officia anim id est laborum.</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    
                    <div className="col-md-4 mb-3">
                        <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                            <Image className="recent-work-img card-img" src="../../img/recent-work-03.jpg" alt="Card image"/>
                            <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                    <h3 className="card-title light-300">R & D</h3>
                                    <p className="card-text">Sum dolor sit consencutur</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    
                    <div className="col-md-4 mb-3">
                        <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                            <Image className="recent-work-img card-img" src="../../img/recent-work-04.jpg" alt="Card image"/>
                            <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                    <h3 className="card-title light-300">Public Relation</h3>
                                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                   
                    <div className="col-md-4 mb-3">
                        <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                            <Image className="recent-work-img card-img" src="../../img/recent-work-05.jpg" alt="Card image"/>
                            <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                    <h3 className="card-title light-300">Branding</h3>
                                    <p className="card-text">Put enim ad minim veniam</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    
                    <div className="col-md-4 mb-3">
                        <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                            <Image className="recent-work-img card-img" src="../../img/recent-work-06.jpg" alt="Card image"/>
                            <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                    <h3 className="card-title light-300">Creative Design</h3>
                                    <p className="card-text">Mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                </Row>
            </Container>
        </section>
       
    
    )
}
export default RecentWork;