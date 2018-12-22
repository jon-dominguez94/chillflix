import { connect } from 'react-redux';
import MovieInfo from './movie_info';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {

  const movieId = ownProps.match.params.movieId;
  const spinnerId = ownProps.match.params.spinnerId;
  const movieIds = ownProps.movies.map(movie => movie.id);
  const has_movie = movieIds.includes(movieId);
  const valid_movie = state.entities.movies.hasOwnProperty(movieId);
  const same_spinner = (ownProps.order === spinnerId);
  const valid_spinner = (spinnerId === "1" || spinnerId === "2" || spinnerId === "3" || spinnerId === "4")
  const valid = valid_movie && same_spinner && valid_spinner;

  return ({
    valid,
    valid_movie,
    movie: state.entities.movies[movieId]
  });
};

const mdtp = dispatch => {
  return ({
    fetchMovie: id => dispatch(fetchMovie(id))
  });
};

export default withRouter(connect(mstp, mdtp)(MovieInfo));