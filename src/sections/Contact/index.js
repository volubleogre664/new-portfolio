import React from "react";

import "./Contact.css";

function ContactForm() {
  return (
    <section className="app__contact" id="contact">
      <h2 className="app__contactTitle">Contact</h2>

      <h3 className="app__contactSubtitle">Get in touch and let's talk.</h3>
      <p style={{ textAlign: "center", color: "#fff" }}>
        The form does not work
      </p>

      <form className="app__contactForm">
        <input
          type="text"
          placeholder="Name(s)"
          className="app__contactFormInput"
        />

        <input
          type="text"
          placeholder="Email"
          className="app__contactFormInput"
        />

        <textarea
          className="app__contactFormInput"
          placeholder="Your Message"
        ></textarea>

        <button type="submit" className="app__contactFormBtn">
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
