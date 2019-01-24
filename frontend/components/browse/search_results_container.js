import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movies_actions';
import { fetchListItems } from "../../actions/list_items_actions";
import SearchResults from './search_results';


const mstp = (state, ownProps) => {

  let pathname = ownProps.location.pathname;
  let search = ownProps.location.search;
  let query = "";
  if (pathname === '/search' && search.length > 2) {
    query = search.split('=')[1];
  }

  return ({
    movies: Object.values(state.entities.movies),
    query: query.toLowerCase()
  });
};


const mdtp = (dispatch) => {
  return ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchListItems: () => dispatch(fetchListItems())
  });
};

export default withRouter(connect(mstp, mdtp)(SearchResults));