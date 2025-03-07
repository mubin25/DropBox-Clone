import React from "react";

const Features = () => {
  return (
    <div className="container text-center mt-5">
      <h1 data-aos="fade-up" className="fw-bold">Key Features</h1>
      <p data-aos="fade-up" data-aos-delay="300">Explore what makes our cloud storage unique.</p>
      <div className="row mt-4">
        <div className="col-md-4" data-aos="flip-left">
          <div className="card shadow-sm p-4">
            <h3>Secure Storage</h3>
            <p>Your files are encrypted and protected.</p>
          </div>
        </div>
        <div className="col-md-4" data-aos="flip-up">
          <div className="card shadow-sm p-4">
            <h3>File Sharing</h3>
            <p>Share files with a single link.</p>
          </div>
        </div>
        <div className="col-md-4" data-aos="flip-right">
          <div className="card shadow-sm p-4">
            <h3>Collaboration</h3>
            <p>Work with your team in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
