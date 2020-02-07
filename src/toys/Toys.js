import React from 'react';
import NavBar from '../navbar/NavBar';
import ToysBody from './ToysBody';
import BookListNav from '../booklist/BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class Toys extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <NavBar /> 
        <ToysBody />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  }
};

export default Toys;