import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import HomeBody from './HomeBody';
import TipsBody from './TipsBody';
import ReadsBody from './ReadsBody';
import BookLists from './BookLists';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

ReactDOM.render(
  <div>
    <NavBar /> 
    <ReadsBody />
    <BookLists />
    <EmailSignup />
    <Footer />
  </div>,
  document.getElementById('root')
);

