import React from "react";
import "./Service.css";

const Program = () => {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <section class="section services-section" id="services">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon"></div>
                <div class="feature-content">
                  <h5>Plumbing</h5>
                  <p>
                    Plumbing is any system that conveys fluids for a wide range
                    of applications. Plumbing uses pipes, valves, plumbing
                    fixtures, tanks, and other apparatuses to convey fluids.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon"></div>
                <div class="feature-content">
                  <h5>Water Treatment</h5>
                  <p>
                    Water treatment—Conventional water treatment involves four
                    processes: coagulation, clarification, filtration, and
                    disinfection. Beyond this, advanced purification techniques
                    like activated carbon, reverse osmosis, and advanced
                    oxidation processes should be applied.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon"></div>
                <div class="feature-content">
                  <h5>Commerical Property Maintenance</h5>
                  <p>
                    Commercial property maintenance refers to any regular tasks
                    that need to be completed to maintain appearances and keep
                    the building functional. This can include anything from
                    mowing lawns and washing windows to HVAC servicing and
                    plumbing inspections
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon"></div>
                <div class="feature-content">
                  <h5>Preventative Maintenance</h5>
                  <p>
                    Preventive maintenance is the act of performing regularly
                    scheduled maintenance activities to help prevent unexpected
                    failures in the future. Put simply, it's about fixing things
                    before they break.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
