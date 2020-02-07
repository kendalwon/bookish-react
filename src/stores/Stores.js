import React from 'react';
import NavBar from '../navbar/NavBar';
import StoresBody from './StoresBody';
import BookListNav from '../booklist/BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class Stores extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <NavBar /> 
        <StoresBody />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  }
};

export default Stores;