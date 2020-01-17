import React from 'react';
import NavBar from './NavBar';
import BookListNav from './BookListNav';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

function Stores() {
  return (
    <div>
      <NavBar /> 
      
      <BookListNav />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Stores;