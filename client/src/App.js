import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  const [apiRes, setApiRes] = useState('');

  function callAPI () {
      fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiRes(res))
      .catch(err => err);
  }

  useEffect (() => {
    callAPI();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiRes}
        </p>
      </header>
    </div>
  );
}

export default App;
