import { connect } from 'react-redux';
import SearchResults from './search_results';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movies_actions';


const mstp = (state, ownProps) => {

  let pathname = ownProps.location.pathname;
  let search = ownProps.location.search;
  let query = "";
  if (pathname === '/search' && search.length > 2) {
    query = search.split('=')[1];
  }

  return ({
    movies: Object.values(state.entities.movies),
    query: query
  });
};


const mdtp = (dispatch) => {
  return ({
    fetchMovies: () => dispatch(fetchMovies())
  });
};

export default withRouter(connect(mstp, mdtp)(SearchResults));