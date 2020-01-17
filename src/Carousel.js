import React from 'react';
import './ToysBody.css';
import Data from './data/toys-data';
import IndicatorButton from './IndicatorButton';
import Arrow from './Arrow';
import Slide from './Slide';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toys: Data.toys,
      toy: Data.toys[0]
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = Data.toys.length - 1;
    const currentSlideIndex = this.state.toy.index;
    const shouldResetIndex = currentSlideIndex === 0;
    const newIndex = shouldResetIndex ? lastIndex : currentSlideIndex - 1;

    this.setState({
      toy: Data.toys[newIndex]
    });
  }

  nextSlide() {
    const lastIndex = Data.toys.length - 1;
    const currentSlideIndex = this.state.toy.index;
    const shouldResetIndex = currentSlideIndex === lastIndex;
    const newIndex = shouldResetIndex ? 0 : currentSlideIndex + 1;

    this.setState({
      toy: Data.toys[newIndex]
    });
  }

  goToSlide(e) {
    const newIndex = e;
    this.setState({
      toy: Data.toys[newIndex]
    });
  }

  render() {
    const {toys, toy} = this.state;
    return (
      <div className="carousel">
        <Arrow  
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;" />

        <div className="indicator">
          {
            toys.map((toy) => <IndicatorButton
              key={toy.index} 
              index={toy.index} 
              stateIndex={this.state.toy.index}
              clickFunction={() => this.goToSlide(toy.index)} 
              />
            )
          }
        </div>

        <div className={`slidesBox active-slide-${toy.index}`}>
          <div className="slidesWrapper">
            {
              toys.map(toy => <Slide key={toy.index} index={toy.index} name={toy.name} image={toy.image} link={toy.link} desc={toy.desc} />)
            }
          </div>
        </div>

        <Arrow  
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;
