import React from 'react';
import NavBar from './NavBar';
import HomeBody from './HomeBody';
import BookListNav from './BookListNav';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <NavBar /> 
      <HomeBody />
      <BookListNav />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Home;