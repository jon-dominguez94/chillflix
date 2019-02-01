import { connect } from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies } from '../../actions/movies_actions';
import { fetchListItems } from '../../actions/list_items_actions';
import { selectMovie } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mstp = state => {
  return {
    // movies: state.entities.movies,
    movies: Object.values(state.entities.movies),
    selectMovie: selectMovie,
    list_items: Object.values(state.entities.list_items)
  };
};

const mdtp = dispatch => {
  return ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchListItems: () => dispatch(fetchListItems())
  });
};

export default withRouter(connect(
  mstp,
  mdtp
)(MoviesIndex));