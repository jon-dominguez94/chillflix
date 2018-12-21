import React from 'react';

import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './navbar/navbar_container';
import Splash from './session/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import BrowseContainer from './browse/browse_container';
// import SearchResultsContainer from './browse/search_results_container';
import CurrentMovieContainer from './movies/current_movie_container';

const App = () => (
  <div className="overall">

    <NavbarContainer />

    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
  
      <ProtectedRoute path="/browse" component={BrowseContainer} />
      {/* <ProtectedRoute path="/search" component={SearchResultsContainer} /> */}
      <ProtectedRoute path="/watch/:movieId" component={CurrentMovieContainer} />
      {/* <ProtectedRoute path="/list" component={ListContainer} /> */}
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;