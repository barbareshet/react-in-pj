import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';


// import '../css/main.css';

const App = () => {

  return (
    <div>
      <h1>Hello World!!</h1>
      <Person name="Lihi" gender="girl" age="8.5" />
      <Person name="Guy" gender="boy" age="5.4" />
      <Person name="Or" gender="boy" age="3.4" />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
