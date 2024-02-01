/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Container, Image, Row } from "react-bootstrap";

function BannerAbout() {
  return (
    <>
      <section className="bg-light w-100">
        <Container >
          <Row className="row d-flex align-items-center py-5">
            <div className="col-lg-6 text-start">
              <h1 className="h2 py-5 text-primary typo-space-line">About Us</h1>
              <p className="light-300">
                Vector illustration credit goes to{" "}
                <a rel="nofollow" href="http://freepik.com/" target="_blank">
                  FreePik
                </a>{" "}
                website. Purple Buzz is provided by TemplateMo. Lorem ipsum
                dolor sit amet, consectetur.
              </p>
            </div>
            <div className="col-lg-6 work_banner">
              <Image src="../../img/banner-img-02.svg" />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default BannerAbout;
