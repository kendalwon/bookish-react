import React from 'react';
import './BookListGrid.css';
import Data from './data/list-6-8';

const BookList68Body = () => {
  return (
      <div>
        <div className="gridIntro">
            <p>Early elementary students need books that meet their interests. The books we've selected can be read by newly independent readers or would work well as a family read-aloud.
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
  
  export default BookList68Body;