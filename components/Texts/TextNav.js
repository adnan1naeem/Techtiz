import React from 'react';
import Styles from '../../styles/TextNav.module.css';
import { Typography } from '@mui/material';

function TextNav({label,color}) {
  return (
    <div className={Styles.TextNav}>
      <span className={Styles.textNavLabel} style={{color : color, fontFamily: "'Mont-Regular', sans-serif"}}>{label}</span>
    </div>
  );
}

export default TextNav;
