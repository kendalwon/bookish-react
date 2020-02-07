import React from 'react';
import './EmailSignup.css';

function EmailSignup() {
  let arrow = "\u2192";
  return (
    <div className="emailSignup">
      <h1 className="emailIntro">Get more tips in your inbox.</h1>
      <p className="emailTagline">A newsletter about raising readers.</p>
      <input className="emailInput" type="text" id="email" name="email" required minLength="6" size="30" placeholder="name@email.com"></input>
      <button className="emailSubmit" type="button">{arrow}</button>
    </div>
  );
};

export default EmailSignup;