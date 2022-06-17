import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import 'app.scss';

import { Header } from 'common/components/header/header';
import { GamesCollection } from 'project/home/components/gamesCollection/gamesCollection';
import { GameContent } from 'project/gameDetails/components/gameContent/gameContent';
import { GamesData } from 'interfaceses';

export const App = () => {
  const [gamesData, setGamesData] = useState<GamesData | null>(null);
  let [isLoadingData, setLoadingData] = useState(true);

  return (
    <div className="app">
      <Header
        setGamesData={setGamesData}
        setLoadingData={setLoadingData}
      />
      <Routes>
        <Route
          path="/home"
          element={
            <GamesCollection
              gamesData={gamesData}
              isLoadingData={isLoadingData}
            />
          }
        />
        <Route
          path="/game-details/:gameId"
          element={
            <GameContent
              setLoadingData={setLoadingData}
              isLoadingData={isLoadingData}
            />
          }
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};
