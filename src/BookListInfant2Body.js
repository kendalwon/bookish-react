import React from 'react';
import './BookListGrid.css';
import Data from './data/list-infant-2';

function BookListInfant2Body() {
  return (
      <div>
        <div class="gridIntro">
            <p>Babies love books! From traditional favorites to modern classics, here are some fantastic books for the littlest of littles.
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
  
  export default BookListInfant2Body;