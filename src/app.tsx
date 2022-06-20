import { Route, Routes, Navigate } from 'react-router-dom';

import 'app.scss';

import { Header } from 'common/components/header/header';
import { GamesCollection } from 'project/home/components/gamesCollection/gamesCollection';
import { GameContent } from 'project/gameDetails/components/gameContent/gameContent';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/home" element={<GamesCollection />} />
        <Route
          path="/game-details/:gameId"
          element={<GameContent />}
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};
