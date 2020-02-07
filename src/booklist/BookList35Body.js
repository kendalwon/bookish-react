import React from 'react';
import './BookListGrid.css';
import Data from './data/list-3-5';

function BookList35Body() {
  return (
      <div>
        <div className="gridIntro">
            <p>Preschoolers are ready to absorb stories, so make sure you have great ones on hand! These books will keep 3-5 year olds coming back for more.
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
  
  export default BookList35Body;