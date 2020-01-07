import React from 'react';
import './BookLists.css';

function BookLists() {
  return (
    <div className="bookLists">
      <h1 className="bookListTitle">Book Lists By Age</h1>
      <ul className="bookListMenu">
        <li className="bookListItem"><a href="." className="bookListLink">infant - 2 years</a></li>
        <li className="bookListItem"><a href="." className="bookListLink">3 - 5 years</a></li>
        <li className="bookListItem"><a href="." className="bookListLink">6 - 8 years</a></li>
        <li className="bookListItem"><a href="." className="bookListLink">9 - 12 years</a></li>
        <li className="bookListItem"><a href="." className="bookListLink">13 years & up</a></li>
      </ul>
    </div>
  );
};

export default BookLists;