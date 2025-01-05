import React from 'react';
import '../Navbar/navBar.css';

export const EnrolForm = () => {
  return (
    <>
      <section id="from-details" className="section-p1 from-details">
        <form action="https://data.groupofsszone.org/submit-form" method="post" style={{width:"500px", height: "50%"}}>
          <h2>जुरने के समपर्क करे !</h2>
          <input type="text" name="name" placeholder="नाम"  />
          <input type="email" name="email" placeholder="ईमेल (optional)" />
          <input type="text" name="address" placeholder="पता"  />
          <input type="number" name="number" placeholder="फ़ोन नंबर"  />
          <label>आप से बात करने की समय &#9660;</label>
        
          <button type="submit" className="normal">जमा करे</button>
        </form>
      </section>
    </>
  );
};
