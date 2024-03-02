import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const names = ["alice", "bob", "charlie"];

// const capNames = names.map((element)=> element[0].toUpperCase()+ element.slice(1));
// console.log(console.log(capNames));

