import React from 'react';
// import FilteredItem from '../';

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies,
      list_items: props.list_items
    };
  }

  componentWillMount() {
    this.props.fetchMovies();
    this.props.fetchListItems();
  }

  componentWillReceiveProps(newState){
    this.setState({
      movies: newState.movies,
      list_items: newState.list_items
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

    // const filtered = this.state.filtered.map(movie =>
    //   (
    //     <div key={movie.id} className="filtered-movie-container">
    //       <FilteredItem key={movie.id} movie={movie} />
    //     </div>
    //   )
    // );

    return (
      <div className="search-results-container">
        {this.state.list_items.map(item => item.movie_id)}
        {/* {filtered} */}
      </div>
    );
  }
}

export default ListItems;