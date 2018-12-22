import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MoviesIndexContainer from '../movies/movies_index_container';
import {Route, Switch, Redirect } from 'react-router-dom';
import SearchResultsContainer from './search_results_container';

class Browse extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  render(){
    if(this.props.movies === undefined){
      return(
        <div></div>
      );
    } else {
      return (
        <div className="browse-container">
          <MoviesIndexContainer />
        </div>
      );
    }
  }
};

export default Browse;