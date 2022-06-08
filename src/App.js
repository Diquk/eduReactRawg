import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { Header } from "common/components/header/header";
import { GamesCollection } from "common/components/gamesCollection/gamesCollection";

export const App = () => {

  const [gamesData, setGamesData] = useState(null);
  let [isLoadingData, setLoadingData] = useState(true);

  function getGamesData(value) {
    setGamesData(value);
  }

  return (
    <div className="App">
      <Header gamesData={gamesData} 
        getGamesData={getGamesData} 
        setLoadingData={setLoadingData} />
      <Routes>
        <Route path="/home" 
          element={<GamesCollection 
            gamesData={gamesData} 
            isLoadingData={isLoadingData}/>}/>
        <Route
          path="*"
          element={<Navigate to="/home" replace />}/>
      </Routes>
    </div>
  );
}