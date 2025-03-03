import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import Sample from "./Sample";

const Contact = () => {
  return (
    <div>
      <Sample/>
    <div className="contact-section">
      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Content Container */}
      <div className="contact-content">
        <h2 className="contact-title">Contact Us</h2>

        {/* Contact Details - Row Layout */}
        <div className="contact-details">
          {/* Address Section */}
          <div className="contact-box">
            <FaMapMarkerAlt className="contact-icon address-icon" />
            <div>
              <h4 className="contact-label">Address</h4>
              <p className="contact-info">
                <strong>BMS College Of Engineering</strong> <br />
                Bangalore
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="contact-box">
            <FaEnvelope className="contact-icon email-icon" />
            <div>
              <h4 className="contact-label">Email</h4>
              <p>
                <a href="mailto:augment_ai@bmsce.ac.in" className="email-link">
                  augment_ai@bmsce.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="contact-box">
            <FaInstagram className="contact-icon insta-icon" />
            <div>
              <h4 className="contact-label">Instagram</h4>
              <p>
                <a href="https://www.instagram.com/bmsce_augment.ai?igsh=MWJhOGU0aGRnZmYxZw==" target="_blank" rel="noopener noreferrer" className="instagram-link">
                  bmsce_augment.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

