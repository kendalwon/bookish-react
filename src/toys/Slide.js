import React from 'react';

const Slide = props => {
    return (
      <div id={ `slide-${ props.index }` } className="slide fade">
        <a className="link" href={ props.link } target="_blank" rel="noopener noreferrer">
        <div className="nameContainer">
          <p className="toyName">{ props.name }</p>
        </div>
        <div className="imgContainer">   
          <img className="toyImg" src={ props.image } alt={ props.name } />
        </div>
        <div className="descContainer">
          <p className="toyDesc">{ props.desc }</p>
        </div>
      </a>
    </div>
  )
}

export default Slide;