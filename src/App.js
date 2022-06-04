import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/header/header.js';

function App() {

  const [data, setData] = useState(null);

  function getData(value) {
    console.log(value);
    setData(value);
  }

  return (
    <div className="App">
      <Header data={data} getData={getData}/>
    </div>
  );
}

export default App;