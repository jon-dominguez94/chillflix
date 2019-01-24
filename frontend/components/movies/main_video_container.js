import { connect } from 'react-redux';
import MainVideo from './main_video';
import { deleteListItem, createListItem } from '../../actions/list_items_actions';

const mstp = (state, ownProps) => {
  const list_ids = Object.values(state.entities.list_items).map(item => item.movie_id);
  return ({
    list_items: Object.values(state.entities.list_items),
    list_id: state.entities.users[state.session.id].list_id,
    onlist: list_ids.includes(ownProps.video.id)
  });
};

const mdtp = dispatch => {
  return ({
    createListItem: data => dispatch(createListItem(data)),
    deleteListItem: id => dispatch(deleteListItem(id))
  });
};

export default connect(mstp, mdtp)(MainVideo);