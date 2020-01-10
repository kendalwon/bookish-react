import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import HomeBody from './HomeBody';
import TipsBody from './TipsBody';
import ReadsBody from './ReadsBody';
import ToysBody from './ToysBody';
import BookListInfant2 from './BookListInfant2';
import BookList35 from './BookList35';
import BookList68 from './BookList68';
import BookList912 from './BookList912';
import BookList13up from './BookList13up';
import BookListNav from './BookListNav';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

ReactDOM.render(
  <div>
    <NavBar /> 
    <ToysBody />
    <BookListNav />
    <EmailSignup />
    <Footer />
  </div>,
  document.getElementById('root')
);

