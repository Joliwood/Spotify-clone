import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from "./reducer.js";
import { DataLayer } from "./DataLayer.js";


ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
