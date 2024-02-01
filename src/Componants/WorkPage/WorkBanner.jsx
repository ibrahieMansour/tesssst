/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";

function WorkBanner() {
  return (
    <>
      <div id="work_banner" className="banner-wrapper bg-light w-100 py-5">
        <div className="banner-vertical-center-work container text-light d-flex justify-content-center align-items-center py-5 p-0">
          <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
            <h1 className="banner-heading h2 display-3 pb-5 semi-bold-600 typo-space-line-center">
              Our Work
            </h1>
            <h3 className="h4 pb-2 regular-400">
              Elit, sed do eiusmod tempor incididunt
            </h3>
            <p className="banner-body pb-2 text-white light-300">
              Vector illustration{" "}
              <Link
                className="text-white"
                href="http://freepik.com/"
                target="_blank"
              >
                Freepik
              </Link>
              {" "}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus.
            </p>
            <button
              type="submit"
              className="btn rounded-pill btn-outline-light px-4 me-4 light-300"
            >
              Learn More
            </button>
            <button
              type="submit"
              className="btn rounded-pill services_border text-light px-4 light-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default WorkBanner;
