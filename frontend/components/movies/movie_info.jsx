import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class MovieInfo extends React.Component {
  constructor(props){
    super(props);

    this.close = this.close.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.handleList = this.handleList.bind(this);
  }

  componentDidMount() {
    if(!this.props.movie === undefined){
      let movieId = this.props.match.params.movieId;
      this.props.fetchMovie(movieId);
    }
    this.addEffects();
  }

  addEffects() {
    let spinnerId = this.props.match.params.spinnerId;
    let movieId = this.props.match.params.movieId;
    
    const current = document.getElementById(`spinner-${spinnerId}-${movieId}`);
    if(current !== null) {
      current.style.border = "4px solid white";
      current.classList.remove('enlarge');
      document.getElementById(`spinner-${spinnerId}`).classList.add('buffed');
    }
    const caret = document.getElementById(`expand-${spinnerId}-${movieId}`);
    if(caret !== null){
      caret.style.display = "block";
    }
  }

  removeEffects() {
    const allSpinners = document.getElementsByClassName("spinner-item");
    const allCarets = document.getElementsByClassName("expand-down");
    for (let i = 0; i < allSpinners.length; i++) {
      allSpinners[i].style.border = "0";
      allSpinners[i].classList.add('enlarge');
      allCarets[i].style.display = "none";
    }
  }

  close() {

    this.removeEffects();
    let spinnerId = this.props.match.params.spinnerId;
    
    document.getElementsByClassName("movie-info-container")[0].style.visibility = "hidden";
    document.getElementsByClassName("movie-info-container")[0].style.opacity = "0";
    document.getElementsByClassName("movie-info-container")[0].style.height = "0";
    document.getElementById(`spinner-${spinnerId}`).classList.remove('buffed');
    this.props.history.push('/browse');

  }

  renderButton() {
    if (this.props.onlist) {
      return (<i className="fa fa-check" />);
    } else {
      return (<i className="fa fa-plus" />);
    }
  }

  handleList() {
    if (this.props.onlist) {
      let itemId;
      for (let i = 0; i < this.props.list_items.length; i++) {
        if (this.props.list_items[i].movie_id === this.props.movie.id) {
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

    this.removeEffects();
    this.addEffects();

    if (!this.props.valid) {
      return(
        <div></div>
      );
    } else if (!this.props.valid_movie){
      return (
        <Redirect to="/browse" />
      );
    }

    
    return <div className="movie-info-container">
        <div className="attached-info">
          <div className="popup-controls">
            <div className="main-video-info on-popup">
              <h1 className="main-video-title">{this.props.movie.title}</h1>
              <h2 className="main-video-description space-below">
                {this.props.movie.description}
              </h2>
              <div className="main-video-links">
                <Link to={`/watch/${this.props.movie.id}`}>
                  <div className="play-btn">
                    <div className="main-video-link info-red">
                      <button className="button play" />
                      <span>PLAY</span>
                    </div>
                  </div>
                </Link>

                <div className="list-btn" onClick={this.handleList}>
                  <div className="main-video-link info-black">
                    <div className="plus-wrapper">
                      {/* <i className="fa fa-plus"></i> */}
                      {this.renderButton()}
                    </div>
                    <span>MY LIST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="drop-info-pic">
            {/* <img src={window.oldtn} /> */}
            <img className="movie-tn" src={this.props.movie.thumbnail} />
          </div>
        </div>
        <div className="info-close" onClick={this.close}>
          <i className="fa fa-close" />
        </div>
      </div>;
  }
}

export default MovieInfo;