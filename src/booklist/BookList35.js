import React from 'react';
import NavBar from '../navbar/NavBar';
import BookList35Body from './BookList35Body';
import BookListNav from './BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class BookList35 extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <NavBar /> 
        <BookList35Body />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  };
}

export default BookList35;