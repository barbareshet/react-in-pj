import React from 'react';
import { useState } from 'react';

export default function Counter(props) {

  const [count, setCount] = useState(0);
  const { delta, isTen } = props;

  function inc() {
    setCount(oldValue => oldValue + delta);
  }
  function resetOnTen(){
    if (count == 10 ){
      reset();
    }
  }
  function reset(){
    setCount(1);
  }

  return (
    <div>
      <>
      <pre>{JSON.stringify(props)}</pre>
      <p>
        I was clicked {count >= 10 ? reset() : count} times        
        <button onClick={inc}>Click Me</button>
        <button onClick={reset}>Reset</button>
      </p>
      </>
    </div>
  );
}
