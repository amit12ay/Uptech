import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Service from "./Component/Service/Service";
import Title from "./Component/Title/Title";
import About from "./Component/About/About";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Project from "./Component/Project/Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle="What we are offering" title="Our Services" />
        <Service />
        <Title subTitle="Honorable Mentions" title="Featured Projects" />

        <Project />
        <Title subTitle="What our clients say" title="Client's Tesrimonials" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
