import React from 'react';
import NavBar from '../navbar/NavBar';
import ReadsBody from './ReadsBody';
import BookListNav from '../booklist/BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class Reads extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <NavBar /> 
        <ReadsBody />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  }
};

export default Reads;