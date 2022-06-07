import React, { useState } from "react";
import { Header } from "./components/header/header.js";
import { GamesCollection } from "./components/gamesCollecion/gamesCollection";
import { Route, Routes, Navigate } from "react-router-dom";

export const App = () => {

  const [data, setData] = useState(null);
  let [isLoading, setLoading] = useState(true);

  function getData(value) {
    setData(value);
  }

  return (
    <div className="App">
      <Header data={data} 
        getData={getData} 
        setLoading={setLoading} />
      <Routes>
        <Route path="/home" 
          element={<GamesCollection 
            data={data} 
            isLoading={isLoading}/>}/>
        <Route
          path="*"
          element={<Navigate to="/home" replace />}/>
      </Routes>
    </div>
  );
}