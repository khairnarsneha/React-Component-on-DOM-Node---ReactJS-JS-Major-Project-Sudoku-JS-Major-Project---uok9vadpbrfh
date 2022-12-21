import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
ReactDOM.render(<App />, document.getElementById('root'));
/* Make App component a functional component */
import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
