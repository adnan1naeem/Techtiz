import React from 'react';
import Styles from '../../styles/TextNav.module.css';

function TextNav({label,color}) {
  return (
    <div className={Styles.TextNav}>
      <span className={Styles.textNavLabel} style={{color : color}}>{label}</span>
    </div>
  );
}

export default TextNav;
