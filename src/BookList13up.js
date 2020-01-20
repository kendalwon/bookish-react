import React from 'react';
import NavBar from './NavBar';
import BookList13upBody from './BookList13upBody';
import BookListNav from './BookListNav';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

function BookList13up() {
  return (
    <div>
      <NavBar /> 
      <BookList13upBody />
      <BookListNav />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default BookList13up;