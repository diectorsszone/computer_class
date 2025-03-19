import React from 'react';
import '../Navbar/navBar.css';
import FuterCard from '../api/allCourses.json';
import Img from "../api/logo.jpg"

export const AllCourses = () => {
  return (
    <>
      <section id="feature" className="section-p1 feature">
<<<<<<< HEAD
        {FuterCard.map((futers) => {
=======
        {FuterCard.slice().reverse().map((futers) => {
>>>>>>> 58c054c (sszone)
          return (
            <div className="fe-box" key={futers.id}>
            <iframe
              src={futers.cardurl}
              title={futers.titelname}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className='iframe'
            ></iframe>
            <h1>{futers.titelname}</h1>
          </div>
          );
        })}
      </section>
    </>
  );
};
