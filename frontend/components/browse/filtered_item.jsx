import React from 'react';
import { Link } from 'react-router-dom';

class FilteredItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.updateItem = this.updateItem.bind(this);
    // debugger
  }

  renderList(){
    if(this.props.onlist){
      return(
        <div className="circle-list-btn">-
          <i className="fa fa-caret-up with-msg"></i>
          <div className="circle-msg">Remove from my list</div>
        </div>
      );
    } else {
      return(
        <div className="circle-list-btn">+
          <i className="fa fa-caret-up with-msg"></i>
          <div className="circle-msg right-list"> Add to my list</div>
        </div>
      );
    }
  }

  updateItem(){
    if(this.props.onlist){
      let itemId;
      for(let i = 0; i < this.props.list_items.length; i++){
        if(this.props.list_items[i].movie_id === this.props.movie.id){
          itemId = this.props.list_items[i].id;
        }
      }
      this.props.deleteListItem(itemId);
    } else {
      const list_id = this.props.list_id;
      const movie_id = this.props.movie.id;
      this.props.createListItem({
        list_item: {
          list_id,
          movie_id
        }
      });
    }
  }

  render() {
    return(
      <div className="filtered-item">
        {/* <img className="movie-tn" src={this.props.movie.thumbnail} /> */}
        <img className="movie-tn" src={window.oldtn} />


        <div className="search-overlay">

          <div className="search-play">
            <Link to={`/watch/${this.props.movie.id}`}>
              <i className="fa fa-play-circle-o"></i>
            </Link>
          </div>

        </div>

        <p className="filter-title">{this.props.movie.title}</p>
        <div className="circle-list" onClick={this.updateItem}>
          {this.renderList()}
        </div>
      </div>
    );
  }
};

export default FilteredItem;