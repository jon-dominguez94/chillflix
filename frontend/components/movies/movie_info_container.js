import { connect } from 'react-redux';
import MovieInfo from './movie_info';
import { withRouter } from 'react-router-dom';
import {
  deleteListItem,
  createListItem
} from "../../actions/list_items_actions";


const mstp = (state, ownProps) => {

  const list_ids = Object.values(state.entities.list_items).map(item => item.movie_id);

  const movieId = ownProps.match.params.movieId;
  const spinnerId = ownProps.match.params.spinnerId;

  const valid_movie = state.entities.movies.hasOwnProperty(movieId);
  const same_spinner = (ownProps.order === spinnerId);
  const valid_spinner = (spinnerId === "1" || spinnerId === "2" || spinnerId === "3" || spinnerId === "4")
  const valid = valid_movie && same_spinner && valid_spinner;
  // debugger
  // alert(movieId);
  return ({
    valid,
    valid_movie,
    movie: state.entities.movies[movieId],
    list_items: Object.values(state.entities.list_items),
    list_id: state.entities.users[state.session.id].list_id,
    onlist: list_ids.includes(parseInt(movieId))
  });
};

const mdtp = dispatch => {
  return ({
    fetchMovie: id => dispatch(fetchMovie(id)),
    createListItem: data => dispatch(createListItem(data)),
    deleteListItem: id => dispatch(deleteListItem(id))
  });
};

export default withRouter(connect(mstp, mdtp)(MovieInfo));