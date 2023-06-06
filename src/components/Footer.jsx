import React from 'react';


const footerStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Translucent green color
  borderRadius: '10px', // Rounded border
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  marginBottom: '10px',
  marginTop: '50px',

  left: 0,
  bottom: 0,
  width: '100%',
  height: '64px', // Adjust the height value as needed
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

};


export const Footer = () => {
  return (
    <div style={footerStyles}>Footer</div>
  );
};

