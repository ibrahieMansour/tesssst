/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Buildings,  LightningChargeFill, ShieldCheck, SuitClub } from "react-bootstrap-icons";

function Partner(){

    return(
        <>
        <section class="services_border  py-3">
        <div class="container py-5">
            <h2 class="h2 text-white text-center py-5">Our Partner</h2>
            <div class="row text-center">
                <div class="col-md-3 mb-3">
                    <div class="card partner-wap py-5">
                        <a href="#"><Buildings class='display-1 text-white bx bxs-buildings'></Buildings></a>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card partner-wap py-5">
                        <a href="#"><ShieldCheck class='display-1 bx text-white bxs-check-shield bx-lg'/></a>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card partner-wap py-5">
                        <a href="#"><LightningChargeFill class='display-1 text-white bx bxs-bolt-circle'/></a>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card partner-wap py-5">
                        <a href="#"><SuitClub class='display-1 text-white bx bxs-spa'/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Partner;