import React from 'react';
import NavBar from './NavBar';
import ToysBody from './ToysBody';
import BookListNav from './BookListNav';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

function Toys() {
  return (
    <div>
      <NavBar /> 
      <ToysBody />
      <BookListNav />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Toys;