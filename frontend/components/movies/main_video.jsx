import React from 'react';
import { Link } from 'react-router-dom';


class MainVideo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="main-thumb">
        {/* <div className="main-gif"></div> */}
        <img src={window.oldtn}/>
        

        <div className="main-video-info">

          <h1 className="main-video-title">{this.props.video.title}</h1>
          <div className="main-video-links">
            <Link to={`/watch/${this.props.video.id}`}>
              <div className="play-btn">
                <div className="main-video-link">
                  <button className='button play'></button>
                  <span>Play</span>
                </div>
              </div>
            </Link>

            <div className="list-btn">
              <div className="main-video-link">
                <div className="plus-wrapper">
                  <i className="fa fa-plus"></i>
                  </div>
                <span>My List</span>
              </div>  
            </div>
          </div>
          <h2 className="main-video-description">{this.props.video.description}</h2>
        </div>
      </div>
    );
  }
};

export default MainVideo;