import React from 'react';
import FilteredItem from '../browse/filtered_item';

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list_items: []
    };
  }

  componentWillMount() {
    this.props.fetchMovies()
    .then(
      () => this.props.fetchListItems()
    );
  }

  componentWillReceiveProps(newState){
    const indices = newState.list_items.map(item => item.movie_id);
    const filtered = indices.map(i => newState.movies[i]);
    // debugger
    this.setState({
      list_items: filtered
    });
  }

  render() {
    if (this.props.movies === undefined) {
      return (
        <div>
          rerender
          {alert("empty")}
        </div>
      );
    }

    const filtered = this.state.list_items.map(movie =>
      (
        <div key={movie.id} className="filtered-movie-container">
          <FilteredItem key={movie.id} movie={movie} />
        </div>
      )
    );
    // debugger
    return (
      <div className="search-results-container">
        {/* {this.state.list_items.map(item => item.title)} */}
        {filtered}
      </div>
    );
  }
}

export default ListItems;