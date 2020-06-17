import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TimeConvert from "./timeConvert";
import Input from "./input";
const App = () => {

  return (
    <div>
        <h2>Class</h2>
      <Input title="Seconds: "/>
      <hr/>
      <h2>Functional</h2>
      <TimeConvert/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
