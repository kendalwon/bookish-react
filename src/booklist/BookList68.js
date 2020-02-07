import React from 'react';
import NavBar from '../navbar/NavBar';
import BookList68Body from './BookList68Body';
import BookListNav from './BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class BookList68 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <NavBar /> 
        <BookList68Body />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  };
}

export default BookList68;