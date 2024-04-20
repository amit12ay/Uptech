import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";

import phone_icon from "../../assets/phone-icon.png";

import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c2c7a1d-5846-4189-b57b-cdb933258b10");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h1>Request A Free Quote</h1>
        <form onSubmit={onSubmit}>
          <label></label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label></label>
          <input
            type="tel"
            name="phone"
            placeholder="Contact number"
            required
          />
          <label></label>
          <input type="text" name="name" placeholder="Service title" required />
          <label></label>
          <textarea
            name="message"
            rows="6"
            placeholder="Service Description "
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <spam>{result}</spam>
      </div>
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We ahve used Your Buiness Name LLC for serveral years and consider Tim
          ans his men as a part of our country. Great customer service and very
          fast service. I'm thankful to have such a reliable, express and
          trustworthy company to work with.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            contact@business.np
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +977-9810001010
          </li>
          <li>
            <img src={location_icon} alt="" />
            Imadol, Bojepokhari, Lalitpur
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
