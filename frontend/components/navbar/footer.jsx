import React from 'react';

const Footer = props => {
  return (
    <div className="footer-wrapper">
      <p className="questions">Questions? Call <span>1-866-579-3241</span></p>
      <div className="footer-links">
        <div className="links-list">
          <div>FAQ</div>
          <div>Help Center</div>
          <div>Account</div>
          <div>Media Center</div>
          <div>Investor Relations</div>
          <div>Jobs</div>
          <div>Redeem Gift Cards</div>
          <div>Buy Gift Cards</div>
          <div>Ways to Watch</div>
          <div>Terms of Use</div>
          <div>Privacy</div>
          <div>Cookie References</div>
          <div>Corporate Information</div>
          <div>Contact Us</div>
          <div>Speed Test</div>
          <div>Legal Notices</div>
          <div>Chillflix Originals</div>
        </div>
      </div>

      <div className="footer-prof">
        <div>
          Created by <a className="go-white" href="http://jondoom.com">Jon Dominguez</a>
        </div>
        <a href="https://github.com/jon-dominguez94">
          <div className="fa fa-github social" />
        </a>
        <a href="https://www.linkedin.com/in/jondominguez94/">
          <div className="fa fa-linkedin social" />
        </a>
      </div>
    </div>
  );
};

export default Footer;