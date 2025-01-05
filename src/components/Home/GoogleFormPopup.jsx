import React, { useState } from 'react';
import { EnrolForm } from './enrolForm';

const GoogleFormPopup = () => {
  const [showForm, setShowForm] = useState(false);

  // Toggle Popup
  const togglePopup = () => {
    setShowForm(!showForm);

    // Body Blur Effect
    if (!showForm) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  };

  return (
    <>
      {/* Open Button */}
      <button onClick={togglePopup}>यहाँ Click करें </button>

      {/* Modal */}
      {showForm && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
            backdropFilter: 'blur(5px)', // Blur effect
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div 
            style={{
              background: 'white',
              padding: '0px ',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              width: '100%',
              height: "100%",
              maxWidth: '900px',
              position: 'relative',
            }}
          >
            {/* Close Button */}
            <button 
              onClick={togglePopup} 
              style={{
                position: 'absolute',
                top: '35px',
                right: '25px',
                fontSize: '26px',
                padding : "10px 20px",
                cursor: 'pointer',
                border: 'none',
                background: 'none',
              }}
            >
              &times;
            </button>
            <EnrolForm />
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleFormPopup;
