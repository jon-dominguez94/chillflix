import React from 'react';
import MoviesIndexContainer from '../movies/movies_index_container';


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