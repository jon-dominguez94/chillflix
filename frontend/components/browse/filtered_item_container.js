import { connect } from 'react-redux';
import FilteredItem from './filtered_item';
import { createListItem, deleteListItem } from '../../actions/list_items_actions';

const mstp = (state, ownProps) => {
  const list_ids = Object.values(state.entities.list_items).map(item => item.movie_id);
  return ({
    list_items: Object.values(state.entities.list_items),
    movie: ownProps.movie,
    onlist: list_ids.includes(ownProps.movie.id)
  });
};

const mdtp = dispatch => {
  return ({
    createListItem: data => dispatch(createListItem(data)),
    deleteListItem: id => dispatch(deleteListItem(id))
  });
};

export default connect(mstp, mdtp)(FilteredItem);