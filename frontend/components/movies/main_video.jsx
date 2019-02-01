import React from 'react';
import { Link } from 'react-router-dom';


class MainVideo extends React.Component {
  constructor(props){
    super(props);

    this.renderButton = this.renderButton.bind(this);
    this.handleList = this.handleList.bind(this);
  }

  renderButton(){
    if(this.props.onlist){
      return (<i className="fa fa-check" />); 
    } else {
      return (<i className="fa fa-plus" />);
    }
  }

  handleList(){
    if (this.props.onlist) {
      let itemId;
      for (let i = 0; i < this.props.list_items.length; i++) {
        if (this.props.list_items[i].movie_id === this.props.video.id) {
          itemId = this.props.list_items[i].id;
        }
      }
      this.props.deleteListItem(itemId);
    } else {
      const list_id = this.props.list_id;
      const movie_id = this.props.video.id;
      this.props.createListItem({
        list_item: {
          list_id,
          movie_id
        }
      });
    }
  }

  render() {
    return (
      <div className="main-thumb">
        <div className="main-gif"></div>
        {/* <img src={window.oldtn}/> */}

        <div className="main-video-info">
          <h1 className="main-video-title">{this.props.video.title}</h1>
          <div className="main-video-links">
            <Link to={`/watch/${this.props.video.id}`}>
              <div className="play-btn">
                <div className="main-video-link">
                  <button className="button play" />
                  <span>Play</span>
                </div>
              </div>
            </Link>

            <div className="list-btn" onClick={this.handleList}>
              <div className="main-video-link">
                <div className="plus-wrapper">
                  {/* <i className="fa fa-plus"></i> */}
                  {this.renderButton()}
                </div>
                <span>My List</span>
              </div>
            </div>
          </div>
          <h2 className="main-video-description">
            {this.props.video.description}
          </h2>
        </div>
      </div>
    );
  }
};

export default MainVideo;