import React, { useState, useEffect } from 'react';
import './App.scss';
import { Header } from './components/header/header.js';
import { GamesCollection } from './components/games-collecion/games-collection';

export function App() {

  const [data, setData] = useState(null);

  function getData(value) {
    console.log(value);
    setData(value);
  }

  return (
    <div className="App">
      <Header data={data} getData={getData}/>
      {data && 
        <GamesCollection data={data}/>
      }
    </div>
  );
}