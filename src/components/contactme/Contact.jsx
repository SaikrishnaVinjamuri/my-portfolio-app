import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      {/* <p className="contact-description">Feel free to reach out to me via the form below!</p> */}
      <div className="google-form-container">
        {/* Embed Google Form here */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfGlyDAl0nyWNiCIdGjFXrpz74izwqsFwGyT7TbYMyY8jR-Zg/viewform?usp=header"
          width="100%"
          height="1000px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
