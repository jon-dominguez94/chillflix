import React from 'react';
import { Link } from 'react-router-dom';

class FilteredItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList(){
    if(this.props.onlist){
      return(
        <div className="circle-list-btn">-</div>
      );
    } else {
      return(
        <div className="circle-list-btn">+</div>
      );
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
        <div className="circle-list">
          {this.renderList()}
        </div>
      </div>
    );
  }
};

export default FilteredItem;