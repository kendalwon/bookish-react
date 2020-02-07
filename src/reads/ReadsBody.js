import React from 'react';
import './ReadsBody.css';
import FoxImg from '../images/fox-book.jpeg';
import FloorImg from '../images/reading-floor.jpg';
import LibraryImg from '../images/library-kid.jpeg';
import BackpackImg from '../images/backpack-book.jpg';
import WindowImg from '../images/window-book.jpg';
import {Link} from 'react-router-dom';

function ReadsBody() {
  return (
    <div>
      <div className="intro">
        <p>Finding great books to introduce to your kids is the first step to raising kids who love to read. We have curated lists of the best books for each age group. So get out your library card and enjoy!</p>
      </div>
      <div className="readsList">
        <div className="readsCategory">
            <Link to="/booklistinfant2"><img className="ageImg" src={FoxImg} alt="Baby Reading Book" /></Link>   
            <Link to="/booklistinfant2" className="categoryLink"><h1 className="categoryHeading">Infant - Age 2</h1>
            <p className="categoryContent">From traditional favorites to modern classics, here are some fantastic books for the littlest of littles.</p></Link>
        </div>
        <div className="readsCategory"> 
            <Link to="/booklist35"><img className="ageImg" src={FloorImg} alt="Mom and Daughters Reading" /></Link>   
            <Link to="/booklist35" className="categoryLink"><h1 className="categoryHeading">Ages 3 - 5</h1>
            <p className="categoryContent">Preschoolers are ready to absorb stories, so make sure you have great ones on hand! These books will keep 3-5 year olds coming back for more.</p></Link>
        </div>
        <div className="readsCategory">
            <Link to="/booklist68"><img className="ageImg" src={LibraryImg} alt="Kid in Library" /></Link>   
            <Link to="/booklist68" className="categoryLink"><h1 className="categoryHeading">Ages 6 - 8</h1>
            <p className="categoryContent">Each of the incredible books we've selected can be read by newly independent readers or would work well as a family read-aloud.</p></Link>
        </div>
        <div className="readsCategory">
            <Link to="/booklist912"><img className="ageImg" src={BackpackImg} alt="Kids Studying" /></Link>   
            <Link to="/booklist912" className="categoryLink"><h1 className="categoryHeading">Ages 9 - 12</h1>
            <p className="categoryContent">Kids this age crave independence, so hand them this list of book recommendations and let them decide what to read next!</p></Link>
        </div>
        <div className="readsCategory">
            <Link to="/booklist13up"><img className="ageImg" src={WindowImg} alt="Girl Reading in Window" /></Link>   
            <Link to="/booklist13up" className="categoryLink"><h1 className="categoryHeading">Ages 13 & up</h1>
            <p className="categoryContent">This book list for kids 13 and up includes a variety of genres. Every teen can find something that will get them excited about reading!</p></Link>
        </div>
      </div>
    </div>
    );
  };
  
  export default ReadsBody;