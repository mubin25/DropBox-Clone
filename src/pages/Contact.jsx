import React from "react";

const Contact = () => {
  return (
    <div className="container text-center mt-5">
      <h1 data-aos="fade-up" className="fw-bold">Contact Us</h1>
      <p data-aos="fade-up" data-aos-delay="300">We’d love to hear from you!</p>
      <div className="row justify-content-center">
        <div className="col-md-6" data-aos="zoom-in">
          <form className="shadow-sm p-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>
            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
