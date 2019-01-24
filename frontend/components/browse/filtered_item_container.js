import { connect } from 'react-redux';
import FilteredItem from './filtered_item';

const mstp = (state, ownProps) => {
  const list_ids = Object.values(state.entities.list_items).map(item => item.movie_id);
  // debugger
  return ({
    movie: ownProps.movie,
    onlist: list_ids.includes(ownProps.movie.id)
  });
};

const mdtp = dispatch => {
  return ({

  });
};

export default connect(mstp, mdtp)(FilteredItem);