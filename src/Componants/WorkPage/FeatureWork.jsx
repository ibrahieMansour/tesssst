/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

function FeatureWork()
{
    return (
<section className="bg-light py-5">
        <div className="feature-work container my-4">
            <div className="row d-flex d-flex align-items-center">
                <div className="col-lg-5">
                    <h3 className="feature-work-title h4 text-muted light-300">Featured Work</h3>
                    <h1 className="feature-work-heading h2 py-3 semi-bold-600">Transform with us</h1>
                    <p className="feature-work-body text-muted light-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <p className="feature-work-footer text-muted light-300">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="col-lg-6 offset-lg-1 align-left">
                    <div className="row">
                        <Link className="col" data-type="image" data-fslightbox="gallery" to="../../img/feature-work-1-large.jpg">
                            <img className="img-fluid" src="../../img/feature-work-1.jpg"/>
                        </Link>
                        <Link className="col" data-type="image" data-fslightbox="gallery" to="../../img/feature-work-2-large.jpg">
                            <img className="img-fluid" src="../../img/feature-work-2.jpg"/>
                        </Link>
                    </div>
                    <div className="row pt-4">
                        <Link className="col" data-type="image" data-fslightbox="gallery" to="../../img/feature-work-3-large.jpg">
                            <img className="img-fluid" src="../../img/feature-work-3.jpg"/>
                        </Link>
                        <Link className="col" data-type="image" data-fslightbox="gallery" to="../../img/feature-work-4-large.jpg">
                            <img className="img-fluid" src="../../img/feature-work-4.jpg"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}
export default FeatureWork;