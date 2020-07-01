import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorldFunction from './components/hello-world/HelloWorldFunction';
import HelloWorldClass from './components/hello-world/HelloWorldClass';
import CountdownClass from './components/countdown/CountdownClass';
import CountdownFunction from './components/countdown/CountdownFunction';

function App() {
  const [
    isCountdownClassShown, 
    setIsCountdownClassShown
  ] = useState(true);
  
  return (
    <div className="App">
      <h1>Function components VS class components</h1>

      <HelloWorldFunction message={'message from parent'} />

      <HelloWorldClass message={'message from parent'} />

      <CountdownFunction />
      {
        isCountdownClassShown && (
          <CountdownClass destructuringCb={setIsCountdownClassShown} />
        )
      }
      
    </div>
  );
}

export default App;
