import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from "react-redux";

import thunk from "redux-thunk";
import { AppReducer } from './reducers';

import Dog from "./components/dogs"

const store = createStore(AppReducer, applyMiddleware());

function App(){
  return (
    <div className="App">
      <Dog />

    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement);
