import React from 'react';
import './TextNav.css'; // Import your CSS file

function TextNav({label,color}) {
  return (
    <div className="TextNav">
      <span className="textNavLabel" style={{color : color}}>{label}</span>
    </div>
  );
}

export default TextNav;
