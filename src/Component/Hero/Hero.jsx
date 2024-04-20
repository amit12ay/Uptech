import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>Building with confidence</p>
        <h1>Building And Maintaining Your Dreams</h1>
        <p>Fast, friendly home repair servie done right the first time!!</p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
