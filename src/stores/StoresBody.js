import React from 'react';
import './StoresBody.css';
//import LoaderBar from "../images/loader.gif";
import Container from './map/Container';

const StoresBody = () => {
  return (
    <section className="mainStores">
      <div className="storesIntro">
        <p>A local bookstore is the perfect place to find everything you need for your little reader. Check out some of these booksellers near you.</p>
      </div>
      <Container />
    </section>
  )
};

export default StoresBody;