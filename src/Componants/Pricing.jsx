import React from 'react'
import { BoxSeam, CircleFill} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <>
    {/* <!-- Start pricing -->*/}
    <div class="container-lg py-5">
        <div class="col-md-12 m-auto text-center py-5">
            <h1 class="pricing-header  text-center semi-bold-600">Pricing</h1>
            <p class="pricing-footer">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.
            </p>
        </div>


        <div class="row px-lg-3">


            <div class="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
                <div class="pricing-table card h-100 shadow-sm border-0 py-5">
                    <div class="pricing-table-body card-body rounded-pill text-center align-self-center p-md-0">
                        <BoxSeam class="pricing-table-icon display-3 bx  "></BoxSeam>
                        <h2 class="pricing-table-heading h5 semi-bold-600">Free Plan</h2>
                        <p>$0</p>
                        <ul class="pricing-table-body text-start text-dark px-4 list-unstyled light-300">
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>5 Users</li>
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>2 TB space</li>
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Community Forums</li>
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Email Support</li>
                        </ul>
                        <div class="pricing-table-footer pt-5">
                            <Link href="#" class="btn rounded-pill px-4 btn-outline-primary light-300">Get Now</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4 pt-sm-0 pt-3 px-xl-3">
                <div class="pricing-table card services_border h-100 card-rounded shadow-sm border-0 py-5">
                    <div class="pricing-table-body card-body text-center text-white align-self-center p-md-0">
                        <BoxSeam class="pricing-table-icon display-3 bx bx-package text-white py-3"></BoxSeam>
                        <h2 class="pricing-table-heading h5 semi-bold-600">Standard Plan</h2>
                        <p>$120/Year</p>
                        <ul class="pricing-table-list text-start text-dark px-4 list-unstyled light-300">
                            <li class="text-white"><CircleFill class="bx bxs-circle me-2"></CircleFill>25 to 99 Users</li>
                            <li class="text-white"><CircleFill class="bx bxs-circle me-2"></CircleFill>10 TB space</li>
                            <li class="text-white"><CircleFill class="bx bxs-circle me-2"></CircleFill>Source Files</li>
                            <li class="text-white"><CircleFill class="bx bxs-circle me-2"></CircleFill>Live Chat</li>
                        </ul>
                        <div class="pricing-table-footer pt-5 pb-2">
                            <Link href="#" class="btn rounded-pill px-4 btn-outline-light light-300">Get Now</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
                <div class="pricing-table card h-100 shadow-sm border-0 py-5">
                    <div class="pricing-table-body card-body text-center align-self-center p-md-0">
                        <BoxSeam class="pricing-table-icon display-3 bx "></BoxSeam>
                        <h2 class="pricing-table-heading h5 semi-bold-600">Enterprise</h2>
                        <p>$840/Year</p>
                        <ul class="pricing-table-list text-start text-dark px-4 list-unstyled light-300">
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>100 users or more</li>
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>80 TB space</li>
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Full Access Sources</li>
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Live Chat</li>
                            <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Customizations</li>
                        </ul>
                        <div class="pricing-table-footer pt-1">
                            <Link href="#" class="btn rounded-pill px-4 btn-outline-primary light-300">Get Now</Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
   {/* <!-- End Content -->*/}





   {/* <!-- Start Pricing Horizontal Section -->*/}
    <section class="bg-light pt-sm-0 py-5">
        <div class="container py-5">

            <h1 class="h2 semi-bold-600 text-center mt-2">Our Pricing</h1>
            <p class="text-center pb-5 light-300">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</p>

           {/* <!-- Start Pricing Horizontal -->*/}
            <div class="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white">
                <div class="pricing-horizontal-icon col-md-3 text-center services_border text-light py-4">
                    <BoxSeam class="display-1 bx bx-package pt-4"></BoxSeam>
                    <h5 class="h5 semi-bold-600 pb-4 text-center text-white light-300">Free</h5>
                </div>
                <div class="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
                    <ul class="text-left px-4 list-unstyled mb-0 light-300">
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>5 Users</li>
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>2 TB space</li>
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Community Forums</li>
                    </ul>
                </div>
                <div class="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
                    <div class="w-100 light-300">
                        <p>$0</p>
                        <Link href="#" class="btn rounded-pill px-4 btn-outline-primary mb-3">Get Now</Link>
                    </div>
                </div>
            </div>
           {/* <!-- End Pricing Horizontal -->*/}

           {/* <!-- Start Pricing Horizontal -->*/}
            <div class="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden my-5 bg-white">
                <div class="pricing-horizontal-icon col-md-3 text-center services_border text-light py-4">
                    <BoxSeam class="display-1 bx bx-package pt-4"></BoxSeam>
                    <h5 class="h5 semi-bold-600 pb-4 text-center text-white light-300">Standard</h5>
                </div>
                <div class="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
                    <ul class="text-left px-4 list-unstyled mb-0 light-300">
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>25 to 99 Users</li>
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>25 to 99 Users</li>
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>10 TB space</li>
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Live Chat</li>
                    </ul>
                </div>
                <div class="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
                    <div class="w-100 light-300">
                        <p>$120/Year</p>
                        <Link href="#" class="btn rounded-pill px-4 btn-outline-primary mb-3">Get Now</Link>
                    </div>
                </div>
            </div>
           {/* <!-- End Pricing Horizontal -->*/}

           {/* <!-- Start Pricing Horizontal -->*/}
            <div class="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white">
                <div class="pricing-horizontal-icon col-md-3 text-center services_border text-light py-4">
                    <BoxSeam class="display-1 bx bx-package pt-4"></BoxSeam>
                    <h5 class="h5 semi-bold-600 pb-4 text-center text-white light-300">Enterprise</h5>
                </div>
                <div class="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
                    <ul class="text-left px-4 list-unstyled mb-0 light-300">
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>100 users or more</li>
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>80 TB space</li>
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Full Access</li>
                        <li><CircleFill class="bx bxs-circle me-2"></CircleFill>Customizations</li>
                    </ul>
                </div>
                <div class="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
                    <div class="w-100 light-300">
                        <p>$840/Year</p>
                        <Link href="#" class="btn rounded-pill px-4 btn-outline-primary mb-3">Get Now</Link>
                    </div>
                </div>
            </div>
           {/* <!-- End Pricing Horizontal -->*/}

        </div>
    </section>
   {/* <!--End Pricing Horizontal Section-->*/} 
    </>
  )
}

export default Pricing
