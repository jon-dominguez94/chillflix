import React from 'react';
import Spinner from './spinner';
import FooterContainer from "../navbar/footer_container";


const AllVideos = (props) => {

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

  shuffle(movies1);
  shuffle(movies2);


  return (
    <div className="spinner-container">
      <Spinner category="Recently Added" movies={movies1.slice(0,8)} order="1"/>
      <Spinner category="Popular on Chillflix" movies={movies1.slice(8)} order="2"/>
      <Spinner category="Chill Night" movies={shuffle(movies2).slice(0,8)} order="3"/>
      <Spinner category="Coming Soon" movies={shuffle(movies2).slice(8)} order="4"/>
      <div className="logged-footer">
        <FooterContainer />
      </div>
    </div>
    
  );
};

export default AllVideos;