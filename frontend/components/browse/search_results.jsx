import React from 'react';
import FilteredItem from './filtered_item';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtered: props.movies,
      query: this.props.query
    };
  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  componentDidUpdate(prevProps){
    debugger
    console.log('updated');
    if (this.props.location.search !== prevProps.location.search || this.props.query !== prevProps.query) {
      
      let pathname = window.location.href;
      if (pathname.includes('search?=')) {
        const queryString = pathname.split('=')[1];
        const filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.props.query));
        // debugger
        this.setState({
          query: queryString,
          filtered: filteredMovies
        });
      } else {
        this.setState({
          query: "",
          filtered: this.props.movies
         });
      }
    }

    // if (this.props.location.search !== prevProps.location.search) {
    //   let pathname = window.location.href;
    //   if (pathname.includes('search?=')) {
    //     this.setState({
    //       query: pathname.split('=')[1],
    //       filtered: this.props.filtered
    //   });
    //   } else {
    //     this.setState({
    //       query: "",
    //       filtered: this.props.filtered
    //     });
    //   }
    // }
    // if (this.props.query !== prevProps.query) {
    //   const filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.props.query));
    //   this.setState({ 
    //     query: this.props.query,
    //     filtered: filteredMovies
    //   });
    // }
  }

  render() {
    if(this.props.movies === undefined){
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

export default SearchResults;