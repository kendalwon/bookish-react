import React from 'react';
import NavBar from '../navbar/NavBar';
import BookListInfant2Body from './BookListInfant2Body';
import BookListNav from './BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class BookListInfant2 extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <NavBar /> 
        <BookListInfant2Body />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  };
}

export default BookListInfant2;