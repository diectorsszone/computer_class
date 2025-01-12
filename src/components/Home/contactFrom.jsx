import React from 'react';
import '../Navbar/navBar.css';

export const ContactFrom = () => {
  return (
    <>
      <section id="from-details" className="section-p1 from-details">
        <form method='post' action="https://data.groupofsszone.org/submit-form">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" name="name" placeholder="Your Name"  />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="text" name="subject" placeholder="Subject"  />
          <textarea name="message" cols="10" rows="5" placeholder="Your Message" ></textarea>
          <button type="submit" className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <img src="./logo/logo.jpg" alt="Jk Coder" />
            <p><span>Jk Coder</span> Lorem ipsum dolor sit <br /> Phone: +91 7667363767 <br /> Email: hackervlogs6@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};
