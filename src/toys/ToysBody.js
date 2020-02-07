import React from 'react';
import './ToysBody.css';
import Carousel from './Carousel';

function ToysBody() {
  return (
      <div>
        <div className="toysIntro">
            <p>Young children learn best through play. We have curated an up-to-date collection of toys and games that kids will love to learn from!
            </p>
        </div>
        <Carousel />
      </div>
    );
  };
  
  export default ToysBody;