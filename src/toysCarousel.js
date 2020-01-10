import React from 'react';
import './ToysBody.css';
import Data from './data/toys-data';

const Slide = ({ name, image, link, desc }) => {
  return (
    <a class="slide fade" href={ link } target="_blank" rel="noopener noreferrer">
      <div class="nameContainer">
        <p class="toyName">{ name }</p>
      </div>   
      <img class="toyImg" src={ image } alt={ name } />
      <div class="descContainer">
        <p class="toyDesc">{ desc }</p>
      </div>
    </a>
  )
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slide-arrow ${direction} `}
    onClick={ clickFunction }>
    { glyph }
  </div>
);

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {currentSlideIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = Data.toys.length - 1;
    const { currentSlideIndex } = this.state;
    const shouldResetIndex = currentSlideIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentSlideIndex - 1;

    this.setState({
      currentSlideIndex: index
    });
  }

  nextSlide() {
    const lastIndex = Data.toys.length - 1;
    const { currentSlideIndex } = this.state;
    const shouldResetIndex = currentSlideIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentSlideIndex + 1;

    this.setState({
      currentSlideIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <Arrow  
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        <Slide name={Data.toys[this.state.currentSlideIndex].name} image={Data.toys[this.state.currentSlideIndex].image} link={Data.toys[this.state.currentSlideIndex].link} desc={Data.toys[this.state.currentSlideIndex].desc} />

        <Arrow  
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;
