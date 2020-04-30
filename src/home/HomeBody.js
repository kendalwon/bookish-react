import React from 'react';
import './HomeBody.css';
import LibraryImg from "../images/library-baby.jpeg";
import {Link} from 'react-router-dom';

const HomeBody = () => {
  return (
    <div>
      <ul className="articleContainer" >
        <li className="articleItemHome">
          <Link to="/tips" className="articleTitle">Thinking about starting a reading log? Here's why you should.</Link>
          <p className="articleTag">four minute read</p>
        </li>
        <li className="articleItemHome">
          <Link to="/booklist68" className="articleTitle">Excellent reads for imaginative early-elementary students</Link>
          <p className="articleTag">two minute read</p>
        </li>
        <li className="articleItemHome">
          <Link to="/toys" className="articleTitle">Improve language skills in preschoolers through play</Link>
          <p className="articleTag">five minute read</p>
        </li>
      </ul>
      <div className="imgBox">
        <img src={LibraryImg} alt="Book-Loving Baby" />
      </div>
    </div>
  );
};

export default HomeBody;