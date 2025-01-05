import React from 'react';
import '../Navbar/navBar.css';
import { Courses } from './courses';
import GoogleFormPopup from './GoogleFormPopup';

export const MainContent = () => {

  return (
   <>
     <section id="hero" className="hero">
        <h2>हम आपको ! सभी तरह  के   </h2>
        <h2>Computer Courses और SCIENCE के </h2 ><h2>सभी CONCEPTS को सीखाने और </h2 >
        <h2>समझाने हेतु तत्पर हैं  ...</h2 >
        <br />
        <h1 className='bakbak-one-regular '>हम से जुरने के लिए ,<span><GoogleFormPopup/></span> </h1>        
    </section>
   </>
  );
};

export const FuterComponants = () => {

  return (
   <>
    <Courses />
    
   </>
  );
};
