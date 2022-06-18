import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "App.scss";

import { Header } from "common/components/header/header";
import { GamesCollection } from "project/home/components/gamesCollection/gamesCollection";
import { GameContent } from "project/gameDetails/components/gameContent/gameContent";
import { GamesData } from "common/models/interfaces";

export const App = () => {

  const [gamesData, setGamesData] = useState<GamesData | null>(null);
  const [isLoadingData, setLoadingData] = useState(true);

  return (
    <div className="App">
      <Header setGamesData={setGamesData} 
        setLoadingData={setLoadingData} />
      <Routes>
        <Route path="/home" 
          element={<GamesCollection 
            gamesData={gamesData} 
            isLoadingData={isLoadingData}/>}/>
        <Route path="/game-details/:gameId"
          element={<GameContent 
            setLoadingData={setLoadingData}
            isLoadingData={isLoadingData}/>}/>
        <Route
          path="*"
          element={<Navigate to="/home" replace />}/>
      </Routes>
    </div>
  );
}