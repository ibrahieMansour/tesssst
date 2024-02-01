/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link }  from "react-router-dom";
import {
    ArrowRight,
    
    Buildings,
    
    EnvelopeAt,
  Facebook,
  
  Linkedin,
  Medium,
  
  RecordFill,
  Telephone,
  Whatsapp,
} from "react-bootstrap-icons";
import "./css/main.css"


function PageFooter() {
  return (
    <>
      <footer className="services_border pt-4">
        <Container>
          <Row className="row py-4">
            <div className="col-lg-3 col-12 align-left">
              <Link className="navbar-brand" to="/">
                <Buildings className=" text-light"/>
                <span className="text-light h5">Purple</span>{" "}
                <span className="text-light h5 semi-bold-600">Buzz</span>
              </Link>
              <p className="text-light my-lg-4 my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <ul className=" row list-inline footer-icons justify-content-start align-items-center light-300">
                <li className=" col-2 list-inline-item m-0">
                  <Link
                    className="text-light"
                    target="_blank"
                    to="http://facebook.com"
                  >
                    <Facebook className="square bx-md" />
                  </Link>
                </li>
                <li className="col-2  list-inline-item m-0">
                  <Link
                    className="text-light"
                    target="_blank"
                    to="https://www.linkedin.com"
                  >
                    <Linkedin className="bx square bx-md" />
                  </Link>
                </li>
                <li className="col-2 list-inline-item m-0">
                  <Link
                    className="text-light square"
                    target="_blank"
                    to="https://www.whatsapp.com"
                  >
                    <Whatsapp className="bx  bx-md" />
                  </Link>
                </li>
                <li className="col-2  list-inline-item m-0">
                  <Link
                    className="text-light square"
                    target="_blank"
                    to="https://www.flickr.com"
                  >
                    <span>
                    <RecordFill className=" flickr square1 " />

                    </span>
                    <span>

                    <RecordFill className=" flickrs square2 " />
                    </span>
                  </Link>
                </li>
                <li className=" col-2 list-inline-item m-0">
                  <Link
                    className="text-light"
                    target="_blank"
                    to="https://www.medium.com"
                  >
                    <Medium className="bx square bx-md" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h3 className="h4 pb-lg-3 text-light light-300">Our Company</h3>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1 "></ArrowRight>
                  <Link
                    className="text-decoration-none text-light"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="pb-2">
                  <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                  <Link
                    className="text-decoration-none text-light py-1"
                    to="/About"
                  >
                    About Us
                  </Link>
                </li>
                <li className="pb-2">
                  <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                  <Link
                    className="text-decoration-none text-light py-1"
                    to="/Work"
                  >
                    Work
                  </Link>
                </li>
                <li className="pb-2">
                  <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                  <Link
                    className="text-decoration-none text-light py-1"
                    to="/Pricing"
                  >
                    Price
                  </Link>
                </li>
                <li className="pb-2">
                  <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                  <Link
                    className="text-decoration-none text-light py-1"
                    to="/Contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="pb-2">
                  <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                  <Link
                    className="text-decoration-none text-light py-1"
                    to="/Product"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>
         

          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 className="h4 pb-lg-3 text-light light-300">Our Works</h2>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                <a className="text-decoration-none text-light py-1" href="#">
                  Branding
                </a>
              </li>
              <li className="pb-2">
                <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                <a className="text-decoration-none text-light py-1" href="#">
                  Business
                </a>
              </li>
              <li className="pb-2">
                <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                <a className="text-decoration-none text-light py-1" href="#">
                  Marketing
                </a>
              </li>
              <li className="pb-2">
                <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                <a className="text-decoration-none text-light py-1" href="#">
                  Social MediLink
                </a>
              </li>
              <li className="pb-2">
                <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                <a className="text-decoration-none text-light py-1" href="#">
                  Digital Solution
                </a>
              </li>
              <li className="pb-2">
                <ArrowRight className="bx-fw bx bxs-chevron-right bx-xs me-1"></ArrowRight>
                <a className="text-decoration-none text-light py-1" href="#">
                  Graphic
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 className="h4 pb-lg-3 text-light light-300">For Client</h2>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <Telephone className="bx-fw bx bx-phone bx-xs me-1"/>
                <Link
                  className="text-decoration-none text-light py-1"
                  href="tel:010-020-0340"
                >
                  010-020-0340
                </Link>
              </li>
              <li className="pb-2">
                <EnvelopeAt className="bx-fw bx bx-mail-send bx-xs me-1"/>
                <Link
                  className="text-decoration-none text-light py-1"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </Link>
              </li>
            </ul>
          </div>
          </Row>
        </Container>

        <div className="w-100 bg-primary py-3">
          <Container>
            <div className="row pt-2">
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-start text-center text-light light-300">
                  © Copyright 2023 ProTech Company. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-end text-center text-light light-300">
                  Designed by{" "}
                  <Link
                    rel="sponsored"
                    className="text-decoration-none text-light"
                    href="https://templatemo.com/"
                    target="_blank"
                  >
                    <strong>TemplateMo</strong>
                  </Link>
                </p>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
export default PageFooter;
