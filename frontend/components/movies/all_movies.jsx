import React from 'react';
import Spinner from './spinner';
import FooterContainer from "../navbar/footer_container";


const AllVideos = (props) => {
  // debugger
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  let movies1 = Array.from(props.movies);
  let movies2 = Array.from(props.movies);
  let movies3 = Array.from(props.list_movies);

  shuffle(movies1);
  shuffle(movies2);

  function renderList(){
    if(props.list_movies.length){
      return (
        <Spinner category="My List" movies={movies3} order="1" />
      );
    }
  }

  return (
    <div className="spinner-container">
      {renderList()}
      <Spinner category="Recently Added" movies={movies1.slice(0,8)} order="2"/>
      <Spinner category="Popular on Chillflix" movies={movies1.slice(8)} order="3"/>
      <Spinner category="Chill Night" movies={shuffle(movies2).slice(0,8)} order="4"/>
      <Spinner category="Coming Soon" movies={shuffle(movies2).slice(8)} order="5"/>
      <div className="logged-footer">
        <FooterContainer />
      </div>
    </div>
    
  );
};

export default AllVideos;