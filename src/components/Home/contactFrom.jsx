import React from 'react';
import '../Navbar/navBar.css';

export const ContactFrom = () => {
  return (
    <>
      <section id="from-details" className="section-p1 from-details">
        <form action="#">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" cols="10" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="normal">Submit</button>
        </form>
        {/* <div className="people">
          <div>
            <img src="./logo/logo.jpg" alt="Jk Coder" />
            <p><span>Jk Coder</span> Lorem ipsum dolor sit <br /> Phone: +91 7667363767 <br /> Email: hackervlogs6@gmail.com</p>
          </div>
        </div> */}
      </section>
    </>
  );
};
