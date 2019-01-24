import React from 'react';
import FilteredItem from './filtered_item';

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtered: props.movies
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      const filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.props.query));
      this.setState({
        filtered: filteredMovies
      });
    }
  }

  render() {
    if (this.props.movies === undefined) {
      return (
        <div>
          rerender
        </div>
      );
    }

    const filtered = this.state.filtered.map(movie =>
      (
        <div key={movie.id} className="filtered-movie-container">
          <FilteredItem key={movie.id} movie={movie} />
        </div>
      )
    );

    return (
      <div className="search-results-container">
        {filtered}
      </div>
    );
  }
}

export default ListItems;