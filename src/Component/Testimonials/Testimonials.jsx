import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/man.jpg";
import user_2 from "../../assets/girl.jpg";
import user_3 from "../../assets/man-2.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForword = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForword} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slider">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sandarba Dawadi</h3>
                  <span> KTM</span>
                </div>
              </div>
              <p>
                We ahve used Your Buiness Name LLC for serveral years and
                consider Tim ans his men as a part of our country. Great
                customer service and very fast service. I'm thankful to have
                such a reliable, express and trustworthy company to work with.
              </p>
            </div>
          </li>
          <li>
            <div className="slider">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Nikki</h3>
                  <span>KTM</span>
                </div>
              </div>
              <p>
                We ahve used Your Buiness Name LLC for serveral years and
                consider Tim ans his men as a part of our country. Great
                customer service and very fast service. I'm thankful to have
                such a reliable, express and trustworthy company to work with.
              </p>
            </div>
          </li>
          <li>
            <div className="slider">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Ajit Kumar</h3>
                  <span>KTM</span>
                </div>
              </div>
              <p>
                We ahve used Your Buiness Name LLC for serveral years and
                consider Tim ans his men as a part of our country. Great
                customer service and very fast service. I'm thankful to have
                such a reliable, express and trustworthy company to work with.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
