import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faFacebookSquare, faInstagram, faTwitter)



function Footer() {
  const copyright = "\u00A9";
  return (
    <div className="footer">
      <ul className="footerList">
        <li><a class="link" href="mailto: nobody@kendalwon.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a></li>
        <li><a class="link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
        <li><a class="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a class="link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
      </ul>
      <p className="copyright">{copyright}2019 Kendal Won</p>
    </div>
  );
};

export default Footer;