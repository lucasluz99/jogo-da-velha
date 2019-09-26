import React from 'react';
import './styles.css';

const LabelGame = ({content,htmlFor}) => {
   return(<label className="label-game" htmlFor={htmlFor}>{content}</label>)
}

export default LabelGame;