import React from 'react';
import '../Navbar/navBar.css';

export const Contact = () => {
  return (
    <>
      <section id="contact-details" className="section-p1 contact-details">
        <div className="details">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <i className="fa-regular fa-map"></i>
              <p>Sakatpur hat</p>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <p>hackervlogs6@gmail.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>+91 7667363767</p>
            </li>
            <li>
              <i className="fa-regular fa-clock"></i>
              <p>Monday: 9.00am to 16.00pm</p>
            </li>
          </ul>
        </div>
        <div className="map">
            <h2>Our Location</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7160.968719850609!2d86.24743263895975!3d26.1809176365153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edd801e9b0b37f%3A0x1dc90e7d8f671f48!2sSakatraipur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1734445759922!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
