import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  const [apiRes, setApiRes] = useState('');
  const [sunrise, setSunrise] = useState('Sunrise: unknown');
  const [sunset, setSunset] = useState('Sunset: unknown');

  function callAPI () {
      fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => {
        setApiRes(res.name + ', ' + res.sys.country + '  ' + res.main.temp + "\u00B0");
        setSunrise('Sunrise: ' + new Date(res.sys.sunrise * 1000).toLocaleString());
        setSunset('Sunset: ' + new Date(res.sys.sunset * 1000).toLocaleString());
      })
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
        <p>
          {sunrise}
        </p>
        <p>
          {sunset}
        </p>
      </header>
    </div>
  );
}

export default App;
