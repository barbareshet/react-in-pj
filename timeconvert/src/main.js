import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TimeConvert from "./timeConvert";
import Input from "./input";
const App = () => {

  return (
    <div>
      <Input title="Seconds: "/>
      <TimeConvert/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
