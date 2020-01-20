import React from 'react';
import './BookListGrid.css';
import Data from './data/list-13-up';

function BookList13upBody() {
  return (
      <div>
        <div class="gridIntro">
            <p>Kids age 9-12 are able to read both longer and more difficult books. They crave independence, so hand them this list of book recommendations and let them decide what to read next!
            </p>
        </div>
        <div class="bookGrid">
            {Data.books.map(book => (
              <div class="bookItem">
                <a class="bookLink" href={book.link} target="_blank" rel="noopener noreferrer"><img class="bookImg" src={book.image} alt="Book Cover" />
                <h1 class="bookTitle font-small">{book.title}</h1>
                <h2 class="bookAuthor font-xs">{book.author}</h2></a>
                <p class="bookDesc">{book.description}</p>
            </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default BookList13upBody;
