import React from 'react';
import NavBar from './NavBar';
import BookList912Body from './BookList912Body';
import BookListNav from './BookListNav';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

function BookList912() {
  return (
    <div>
      <NavBar /> 
      <BookList912Body />
      <BookListNav />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default BookList912;