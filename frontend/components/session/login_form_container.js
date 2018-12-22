import React from 'react';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mstp = (state, ownProps) => {
  return ({
    formType: 'Sign In',
    errors: state.errors.session,
    navLink: <Link to="/signup">Sign up now</Link>
  });
};

const mdtp = (dispatch, ownProps) => {
  return ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default withRouter(connect(
  mstp,
  mdtp
)(SessionForm));