import React from 'react';
import './BookListGrid.css';
import Data from './data/list-infant-2';

const BookListInfant2Body = () => {
  return (
      <div>
        <div className="gridIntro">
            <p>Babies love books! From traditional favorites to modern classics, here are some fantastic books for the littlest of littles.
            </p>
        </div>
        <div className="bookGrid">
            {Data.books.map(book => (
            <div className="bookItem" key={book.index}>
                <a className="bookLink" href={book.link} target="_blank" rel="noopener noreferrer"><img className="bookImg" src={book.image} alt="Book Cover" />
                <h1 className="bookTitle font-small">{book.title}</h1>
                <h2 className="bookAuthor font-xs">{book.author}</h2></a>
                <p className="bookDesc">{book.description}</p>
            </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default BookListInfant2Body;