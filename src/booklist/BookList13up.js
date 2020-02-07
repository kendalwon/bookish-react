import React from 'react';
import NavBar from '../navbar/NavBar';
import BookList13upBody from './BookList13upBody';
import BookListNav from './BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class BookList13up extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <NavBar /> 
        <BookList13upBody />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  };
}

export default BookList13up;