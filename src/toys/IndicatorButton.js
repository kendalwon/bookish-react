import React from 'react';

const IndicatorButton = (props) => {
  return (
    <button 
      id={props.index} 
      type="button" 
      className={props.stateIndex === props.index ? "indicatorButton indicatorButton-active" : "indicatorButton"} 
      onClick= {props.clickFunction} >
    </button>
  );
}

export default IndicatorButton;