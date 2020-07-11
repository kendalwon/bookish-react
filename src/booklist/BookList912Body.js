import React from 'react';
import './BookListGrid.css';
import Data from './data/list-9-12';

const BookList912Body = () => {
  return (
      <div>
        <div className="gridIntro">
            <p>Kids age 9-12 are able to read both longer and more difficult books. They crave independence, so hand them this list of book recommendations and let them decide what to read next!
            </p>
        </div>
        <div className="bookGrid">
            {Data.books.map(book => (
              <div className="bookItem" key={book.index}>
                <a className="bookLink" href={book.link} target="_blank" rel="noopener noreferrer"><img className="bookImg" src={process.env.PUBLIC_URL + book.image} alt="Book Cover" />
                <h1 className="bookTitle font-small">{book.title}</h1>
                <h2 className="bookAuthor font-xs">{book.author}</h2></a>
                <p className="bookDesc">{book.description}</p>
            </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default BookList912Body;