import { connect } from 'react-redux';
import Browse from './browse';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movies_actions';

const mstp = (state, ownProps) => {
  return ({
    movies: Object.values(state.entities.movies),
  });
};

const mdtp = (dispatch) => {
  return ({
    fetchMovies: () => dispatch(fetchMovies())
  });
};

export default withRouter(connect(mstp, mdtp)(Browse));