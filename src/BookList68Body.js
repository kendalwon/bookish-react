import React from 'react';
import './BookListGrid.css';
import Data from './data/list-6-8';

function BookList68Body() {
  return (
      <div>
        <div class="gridIntro">
            <p>Early elementary students need books that meet their interests. The books we've selected can be read by newly independent readers or would work well as a family read-aloud.
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
  
  export default BookList68Body;