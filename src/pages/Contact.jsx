import React, { useRef, useState } from "react";

// Importing social media icons from react-icons
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

// EmailJS library for sending form submissions directly via email
import emailjs from "@emailjs/browser";

// Import styles for this page
import "./Contact.css";

function Contact() {
  // useRef gives us direct access to the form DOM element
  const formRef = useRef();

  // Local state to show success/error message after form submission
  const [status, setStatus] = useState("");

  // Function triggered on form submit
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default browser form behavior

    // Send the form data using EmailJS
    emailjs
      .sendForm(
        "service_1voudlj",       // ✅ Your EmailJS service ID
        "template_4t4m3s5",      // ✅ Your EmailJS template ID
        formRef.current,         // Form reference for EmailJS to read input values
        "CLyIOuA1MQvHqqIPt"      // ✅ Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setStatus("Thank you! Your message has been sent."); // Show success message
          formRef.current.reset(); // Clear the form fields
        },
        (error) => {
          console.error("FAILED:", error.text);
          setStatus("Oops! Something went wrong. Please try again."); // Show error message
        }
      );

    // Automatically clear the status message after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="container contact-page">
      {/* Page Heading */}
      <h1>Contact the Author</h1>
      <p className="intro-text">
        Whether it’s feedback, collaboration, or a simple hello — I’d love to hear from you!
      </p>

      {/* Contact Form */}
      <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        {/* Hidden field (optional): can be used to identify the form */}
        <input type="hidden" name="title" value="New Book Inquiry" />

        {/* Name field */}
        <input type="text" name="name" placeholder="Your Name" required />

        {/* Email field */}
        <input type="email" name="email" placeholder="Your Email" required />

        {/* Message field */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Send Message</button>

        {/* Success or error message */}
        {status && <p className="form-status success-message">✅ {status}</p>}
      </form>

      {/* Contact Info & Social Media Links */}
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:hauteculturejp@gmail.com">hauteculturejp@gmail.com</a>
        </p>

        <div className="social-links">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sahil.ur.memer?igsh=MWI0NHF3ajVndGRydw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1EeLGT7VBZ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF /> Facebook
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/SahilSingh_CR?t=mLBRWmwP6Kx5fuDPrqlzMw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
