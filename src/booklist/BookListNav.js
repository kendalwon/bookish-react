import React from 'react';
import './BookListNav.css';
import {Link} from 'react-router-dom';

function BookListNav() {
  return (
    <div className="bookLists">
      <h1 className="bookListTitle">Book Lists By Age</h1>
      <ul className="bookListMenu">
        <li className="bookListItem">
          <Link to="/booklistinfant2" className="bookListLink">infant - 2 years</Link>
        </li>
        <li className="bookListItem">
          <Link to="/booklist35" className="bookListLink">3 - 5 years</Link>
        </li>
        <li className="bookListItem">
          <Link to="/booklist68" className="bookListLink">6 - 8 years</Link>
        </li>
        <li className="bookListItem">
          <Link to="/booklist912" className="bookListLink">9 - 12  years</Link>
        </li>
        <li className="bookListItem">
          <Link to="/booklist13up" className="bookListLink">13 years & up</Link>
        </li>
      </ul>
    </div>
  );
};

export default BookListNav;