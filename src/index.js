import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import 'index.css'
import reducer, { initialState } from 'reducer';
import { StateProvider } from 'StateProvider';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} basket={undefined}>
      <App />
    </StateProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

