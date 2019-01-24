import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import * as list_util from './util/list_item_api_util';

window.fetchListItem = list_util.fetchListItem;
window.fetchListItems = list_util.fetchListItems;
window.deleteListItem = list_util.deleteListItem;
window.createListItem = list_util.createListItem;


document.addEventListener("DOMContentLoaded", () => {

  window.addEventListener("scroll", (e) => {
    const header = document.getElementsByClassName("logged-header");
    if(header.length > 0){
      if(window.scrollY > 20){
        header[0].classList.add('black-bg');
      } else {
        header[0].classList.remove('black-bg');
      }
    } 
  });

  let store;
  if(window.currentUser){
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});