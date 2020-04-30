import React from 'react';
import NavBar from '../navbar/NavBar';
import TipsBody from './TipsBody';
import BookListNav from '../booklist/BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class Tips extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <NavBar /> 
        <TipsBody />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  }
};

export default Tips;