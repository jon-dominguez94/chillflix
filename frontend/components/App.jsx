import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseContainer from './browse/browse_container';
// import SearchContainer from './browse/search_results_container';
import CurrentMovieContainer from './movies/current_movie_container';
// import SearchPage from './browse/search_page.jsx';
import Splash from './session/splash';

const App = () => (
  <div className="overall">

    <NavbarContainer />

    <Switch>
      <ProtectedRoute path="/" component={NavbarContainer} />
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
  
      <ProtectedRoute path="/browse" component={BrowseContainer} />
      {/* <ProtectedRoute path="/list" component={NavbarContainer} /> */}
      <ProtectedRoute path="/watch/:movieId" component={CurrentMovieContainer} />
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;