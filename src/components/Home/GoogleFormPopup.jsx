import React, { useState } from 'react';

const GoogleFormPopup = () => {
  const [showForm, setShowForm] = useState(false);

  const togglePopup = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Google Form</button>

      {showForm && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '80%',
              height: '80%',
              backgroundColor: 'white',
              padding: '10px',
              position: 'relative',
            }}
          >
            <button
              onClick={togglePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              X
            </button>
            <iframe
              src="https://forms.gle/AtBG67WW7Y212RLt6"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading...
            </iframe >
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleFormPopup;
