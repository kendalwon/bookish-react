import React from 'react';
import './BookListGrid.css';
import Data from './data/list-13-up';

const BookList13upBody = () => {
  return (
      <div>
        <div className="gridIntro">
            <p>This book list for kids 13 and up includes a variety of genres. Every teen can find something that will get them excited about reading!
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
  
  export default BookList13upBody;
