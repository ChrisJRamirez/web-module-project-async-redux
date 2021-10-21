import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from "react-redux";

import { AppReducer } from './reducers';

import Joke from "./components/joke"

const store = createStore(AppReducer, applyMiddleware());

function App(){
  return (
    <div className="App">
      <Joke />

    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement);
