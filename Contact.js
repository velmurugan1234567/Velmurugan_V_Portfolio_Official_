import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jkdq88n",     // replace
      "template_ekgs5xs",    // replace
      form.current,
      "t9fMUjLrxZaWpbTWA"      // replace
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
        console.log(error.text);
      }
    );
  };

  return (
    <section className="about-section">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit" className="read-more-btn">
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;