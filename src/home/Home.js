import React from 'react';
import NavBar from '../navbar/NavBar';
import HomeBody from './HomeBody';
import BookListNav from '../booklist/BookListNav';
import EmailSignup from '../email/EmailSignup';
import Footer from '../footer/Footer';

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <NavBar /> 
        <HomeBody />
        <BookListNav />
        <EmailSignup />
        <Footer />
      </div>
    );
  }
};

export default Home;