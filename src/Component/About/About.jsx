import React from "react";
import "./About.css";
import about_img from "../../assets/watertreatment.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>About Our Company</h3>
        <h2>Your Business Name LLC</h2>
        <p>
          We are a locally owned and operate company with 20 years of industry
          experience. We value honesty and integrity in all aspect of our
          business. We offer a variety of Home improvement service hat are
          customizable to each individual project.
        </p>
        <p>
          We specialize in handyman work and a variety of related service and
          repair projects.we pride ourservice on thequality of our work as well
          as our commitment to outstanding results.we look forward to building
          lasting relationships with our clients and guarantee your
          satisfaction!
        </p>
      </div>
    </div>
  );
};

export default About;
