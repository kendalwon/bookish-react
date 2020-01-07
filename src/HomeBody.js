import React from 'react';
import './HomeBody.css';
import LibraryImg from "./images/library-baby.jpeg";

function HomeBody() {
  return (
    <div>
      <ul class="articleContainer" >
        <li class="articleItem">
          <a href="pages/tips.html" class="articleTitle">Thinking about starting a reading log? Here's why you should.</a>
          <p class="articleTag">four minute read</p>
        </li>
        <li class="articleItem">
          <a href="pages/books-6-8.html" class="articleTitle">Excellent reads for imaginative early-elementary students</a>
          <p class="articleTag">two minute read</p>
        </li>
        <li class="articleItem">
          <a href="pages/toys.html" class="articleTitle">Improve language skills in preschoolers through play</a>
          <p class="articleTag">five minute read</p>
        </li>
      </ul>
      <div class="imgBox">
        <img src={LibraryImg} alt="Book-Loving Baby" />
      </div>
    </div>
  );
};

export default HomeBody;