import React from 'react';
import './ReadsBody.css';
import FoxImg from "./images/fox-book.jpeg";
import FloorImg from "./images/reading-floor.jpg";
import LibraryImg from "./images/library-kid.jpeg";
import BackpackImg from "./images/backpack-book.jpg";
import WindowImg from "./images/window-book.jpg";

function ReadsBody() {
  return (
    <div>
      <div class="intro">
        <p>Finding great books to introduce to your kids is the first step to raising kids who love to read. We have curated lists of the best books for each age group. So get out your library card and enjoy!</p>
      </div>
      <div class="readsList">
        <div class="readsCategory">
            <a href="books-infant-2.html"><img class="ageImg" src={FoxImg} alt="Baby Reading Book" /></a>    
            <a class="categoryLink" href="books-infant-2.html"><h1 class="categoryHeading">Infant - Age 2</h1>
            <p class="categoryContent">From traditional favorites to modern classics, here are some fantastic books for the littlest of littles.</p></a>
        </div>
        <div class="readsCategory">
            <a href="books-3-5.html" ><img class="ageImg" src={FloorImg} alt="Mom and Daughters Reading" /></a>
            <a class="categoryLink" href="books-3-5.html"><h1 class="categoryHeading">Ages 3 - 5</h1>
            <p class="categoryContent">Preschoolers are ready to absorb stories, so make sure you have great ones on hand! These books will keep 3-5 year olds coming back for more.</p></a>
        </div>
        <div class="readsCategory">
            <a href="books-6-8.html" ><img class="ageImg" src={LibraryImg} alt="Kid in Library" /></a>
            <a class="categoryLink" href="books-6-8.html" ><h1 class="categoryHeading">Ages 6 - 8</h1>
            <p class="categoryContent">Each of the incredible books we've selected can be read by newly independent readers or would work well as a family read-aloud.</p></a>
        </div>
        <div class="readsCategory">
            <a href="books-9-12.html"><img class="ageImg" src={BackpackImg} alt="Kids Studying" /></a>
            <a class="categoryLink" href="books-9-12.html" ><h1  class="categoryHeading">Ages 9 - 12</h1>
            <p class="categoryContent">Kids this age crave independence, so hand them this list of book recommendations and let them decide what to read next!</p></a>
        </div>
        <div class="readsCategory">
            <a href="books-13-up.html" ><img class="ageImg" src={WindowImg} alt="Girl Reading in Window" /></a>
            <a class="categoryLink" href="books-13-up.html" ><h1 class="categoryHeading">Ages 13 & up</h1>
            <p class="categoryContent">This book list for kids 13 and up includes a variety of genres. Every teen can find something that will get them excited about reading!</p></a>
        </div>
      </div>
    </div>
    );
  };
  
  export default ReadsBody;