/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Team() {
  return (
    <>
      <section class="container py-5">
        <div class="pt-5 pb-3 d-lg-flex align-items-center gx-5">

            <div class="col-lg-3">
                <h2 class="h2 py-5 typo-space-line">Our Team</h2>
                <p class="text-muted light-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div class="col-lg-9 row">
                <div class="team-member col-md-4">
                    <img class="team-member-img img-fluid rounded-circle p-4" src="../../img/team-01.jpg" alt="Card image"/>
                    <ul class="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                        <li>John Doe</li>
                        <li>Business Development</li>
                    </ul>
                </div>
                <div class="team-member col-md-4">
                    <img class="team-member-img img-fluid rounded-circle p-4" src="../../img/team-02.jpg" alt="Card image"/>
                    <ul class="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                        <li>Jane Doe</li>
                        <li>Media Development</li>
                    </ul>
                </div>
                <div class="team-member col-md-4">
                    <img class="team-member-img img-fluid rounded-circle p-4" src="../../img/team-03.jpg" alt="Card image"/>
                    <ul class="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                        <li>Sam</li>
                        <li>Developer</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
    </>
  );
}
export default Team;
