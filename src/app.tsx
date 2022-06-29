import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import 'app.scss';

import { Header } from 'common/components/header/header';
import { Loader } from 'common/components/loader/loader';
const GamesCollection = lazy(
  () =>
    import('project/home/components/gamesCollection/gamesCollection')
);

const GameContent = lazy(
  () =>
    import('project/gameDetails/components/gameContent/gameContent')
);

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home" element={<GamesCollection />} />
          <Route
            path="/game-details/:gameId"
            element={<GameContent />}
          />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};
