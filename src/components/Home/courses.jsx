import React from 'react';
import '../Navbar/navBar.css';
import FuterCard from '../api/courses.json';

export const Courses = () => {
  return (
    <>
      <section id="feature" className="section-p1 feature">
        {FuterCard.map((futers) => {
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
