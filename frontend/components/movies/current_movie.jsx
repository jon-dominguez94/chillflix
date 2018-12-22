import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class CurrentMovie extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (this.props.movies.length < 5) {
      this.props.fetchMovies();
    }
    if(this.props.movie === undefined){
      const movieId = this.props.match.params.movieId;
      this.props.fetchMovie(movieId);
    }
  }

  componentDidUpdate(){
    if (!this.props.movie === undefined) {
      this.props.history.push("/");
    }
  }

  render(){
    if(this.props.movie === undefined) {
      return (
        <div className="not-found">
          <p>Sorry, nothing to see here</p>
          <Link className="nav-link-item" to="/">
            <div className="back-btn-container">
              <button className="back-btn" >
                <i className="fa fa-arrow-left"></i>
                <span className="back-text">Back to Browse</span>
              </button>
            </div>
          </Link>
        </div>);
    }
    if (!this.props.valid) {
      return (
        <Redirect to="/" />
      );
    }
    return(
      
      <div id="video-container">
        <video 
          className="current-video" 
          width="100vw" 
          height="auto" 
          src={this.props.movie.url}
          // src={window.oldvid}
          controls 
          autoPlay
        >
          Your browser does not support the video tag.
        </video>

        <Link className="nav-link-item" to="/">
        <div className="back-btn-container">
          <button className="back-btn" >
            <i className="fa fa-arrow-left"></i>
            <span className="back-text">Back to Browse</span>
          </button>
        </div>
        </Link>
        
      </div>

    );
  }
};

export default CurrentMovie;