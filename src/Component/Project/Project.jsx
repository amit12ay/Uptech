import React from "react";
import "./Project.css";
import gallery_1 from "../../assets/p4.jpg";
import gallery_2 from "../../assets/p5.jpg";
import gallery_3 from "../../assets/p6.jpg";
import gallery_4 from "../../assets/p7.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Project = () => {
  return (
    <div className="project">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Project;
