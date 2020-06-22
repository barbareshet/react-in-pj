import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './style/dark.css';
import Content from "./content";
import Switch from "./switch";
import Button from "./button";
import Input from "./input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
const App = () => {
    const [dark, setDark] = useState(false);
    // const [mode, setMode]  = useState(true);
    // const dark = false;
    function handleToggle() {
        setDark(dark => !dark );

        console.log( 'dark is: '+dark);
        // console.log( 'mode is: '+mode);
    }
     return (
      <>
          <pre>{JSON.stringify(dark)}</pre>
          <div className={dark == true ? 'mode-light' : 'mode-dark'}>
              <div className="main-container">
                  <Switch dark={dark} handleToggle={handleToggle}/>
                  {/*<button className="icon dark-mode-switch" onClick={handleToggle}>*/}
                  {/*    <FontAwesomeIcon icon={dark!=mode ? faMoon : faSun } />*/}
                  {/*</button>*/}
                  <Content/>
                  <div className="input-wrap">
                      <Input type="text" placeHolder="username*"/>
                      <Input type="password" placeHolder="password"/>
                      <div className="btn-wrap">
                          <Button title="save" type="btn btn-pink"/>
                          <Button title="Submit" type="btn btn-purple"/>
                      </div>
                  </div>

              </div>
          </div>
      </>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
