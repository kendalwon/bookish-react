import React from 'react';
import NavBar from '../navbar/NavBar';
import BookList912Body from './BookList912Body';
import BookListNav from './BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class BookList912 extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
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
}

export default BookList912;