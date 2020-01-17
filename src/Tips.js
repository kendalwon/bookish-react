import React from 'react';
import NavBar from './NavBar';
import TipsBody from './TipsBody';
import BookListNav from './BookListNav';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

function Tips() {
  return (
    <div>
      <NavBar /> 
      <TipsBody />
      <BookListNav />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Tips;