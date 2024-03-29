import React from 'react';
import SpinnerItem from './spinneritem_container';
import { Route } from 'react-router-dom';
import MovieInfoContainer from './movie_info_container';
import { CSSTransitionGroup } from 'react-transition-group';

class Spinner extends React.Component {
  
  constructor(props) {
    super(props);

    const movies = props.movies.map(movie => {
      if(movie){
        return (
          <SpinnerItem key={movie.id} movie={movie} order={props.order}/>
        );
      }
    });

    this.state = {
      movies: movies
    };

    this.scroll = this.scroll.bind(this);
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props && this.props.category === "My List"){
      const movies = this.props.movies.map(movie => {
        if (movie) {
          return (
            <SpinnerItem key={movie.id} movie={movie} order={this.props.order} />
          );
        }
      });

      this.setState({
        movies: movies
      });
    }
  }

  scroll(direction) {
    let newMovies = Array.from(this.state.movies);
    if(direction === "left"){
      newMovies.push(newMovies.shift());
      newMovies.push(newMovies.shift());
    } else {
      newMovies.unshift(newMovies.pop());
      newMovies.unshift(newMovies.pop());
    }
    this.setState({ movies: newMovies });
  }

  renderInfo(){
    
  }

  render() {
    return (
      <div id={`spinner-${this.props.order}`} className="spinner">
        <h1 id={this.props.category.split(' ').join('')} className="category-header">{this.props.category}</h1>
        
        <div id={`scaler-${this.props.order}`} className="tn-scale">

          {/* <div className="tn-wrapper"> */}
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              className="tn-wrapper">
            {this.state.movies}
            </CSSTransitionGroup>
          {/* </div> */}

        </div>
        
        <Route 
          exact path="/browse/:spinnerId/:movieId"
          render={(routeProps) => (
            <MovieInfoContainer {...routeProps} {...this.props} />
        )} />

        <div className={`right scroll scroll-${this.props.order}`}  onClick={() => this.scroll('left')}>
          <i className="fa fa-angle-right scroll-btn"></i>
        </div>
        <div className={`left scroll scroll-${this.props.order}`} onClick={() => this.scroll('right')}>
          <i className="fa fa-angle-left scroll-btn"></i>
        </div>
      </div>
    );
  }
};

export default Spinner;