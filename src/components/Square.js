import React from 'react';
import './Square.css';

export const Square = ({value, onClick}) => {
  // const style = value === "X" ? "square x" : "square o";
  const marker = (value != null) ? <div class={value}></div> : <div class={value}></div>;
  return(
      <button className={'square'} onClick={onClick}>{marker}</button>
  )
}

export default Square;