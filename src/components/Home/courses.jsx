import React from 'react';
import '../Navbar/navBar.css';
import FuterCard from '../api/courses.json';
import Img from "../api/logo.jpg"

export const Courses = () => {
  return (
    <>
      <section id="feature" className="section-p1 feature">
        {FuterCard.map((futers) => {
          return (
            <div className="fe-box" key={futers.id}>
                <img src={Img} alt="feature" />
                <h4>{futers.futer_titel}</h4>
                <h5>{futers.futer_dis}</h5>
                <h6>{futers.button_name}</h6>
            </div>
          );
        })}
      </section>
    </>
  );
};
