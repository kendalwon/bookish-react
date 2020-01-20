import React from 'react';
import NavBar from './NavBar';
import BookListInfant2Body from './BookListInfant2Body';
import BookListNav from './BookListNav';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

function BookListInfant2() {
  return (
    <div>
      <NavBar /> 
      <BookListInfant2Body />
      <BookListNav />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default BookListInfant2;