import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  const [apiRes, setApiRes] = useState('');
  const [sunrise, setSunrise] = useState('Sunrise: unknown');
  const [sunset, setSunset] = useState('Sunset: unknown');

  const localOffset = new Date().getTimezoneOffset();
  console.log(localOffset)

  function callAPI () {
      fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => {
        setApiRes(res.current.temp + "\u00B0");
        setSunrise('Sunrise: ' + new Date((res.current.sunrise + res.timezone_offset + localOffset * 60) * 1000).toLocaleString());
        setSunset('Sunset: ' + new Date((res.current.sunset + res.timezone_offset + localOffset * 60) * 1000).toLocaleString());
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
