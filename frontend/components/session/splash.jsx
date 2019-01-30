import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
    <div className="splash-container">

      <div className="main-header">
        <Link to="/">
          <img className="main-logo" src="https://fontmeme.com/permalink/181212/c5c4b3134061f86d06de9895b1ea5522.png" border="0" />
        </Link>
        <div className="session-btn signin" >
          <Link className="session-btn signin" to='/login'>Sign In</Link>
        </div>
      </div>

      <div className="signup-container">
        <div className="signup-msg">
          No pesky contracts
            </div>
        <div className="signup-sub-msg">
          Join today, cancel anytime.
            </div>
        <div className="session-btn signup" >
          <Link className="session-btn signup" to='/signup'>S I G N U P</Link>
        </div>
      </div>

    <div className="footer">
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

export default Splash;