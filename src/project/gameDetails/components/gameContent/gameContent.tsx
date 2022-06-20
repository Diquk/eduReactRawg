import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import 'project/gameDetails/components/gameContent/gameContent.scss';

import {
  setLoadingTrue,
  setLoadingFalse,
  selectLoading,
} from 'common/slices/loadingSlice';
import { TitleInfo } from 'project/gameDetails/components/titleInfo/titleInfo';
import { getGameData } from 'project/gameDetails/services/getGameData';
import { getGameScreenshots } from 'project/gameDetails/services/getGameScreenshots';
import { getGameVideos } from 'project/gameDetails/services/getGamesVideos';
import { Tabs } from 'project/gameDetails/components/tabs/tabs';
import { Loader } from 'common/components/loader/loader';
import { EmptyResults } from 'project/gameDetails/components/emptyResults/emptyResults';
import { GameItem } from 'common/models/interfaces';
import {
  GameScreenshots,
  GameVideos,
} from 'project/gameDetails/models/gameModels';

export const GameContent = () => {
  const [gameData, setGameData] = useState<GameItem | null>(null);
  const [gameScreenshots, setGameScreenshots] =
    useState<GameScreenshots | null>(null);
  const [gameVideos, setGamesVideos] = useState<GameVideos | null>(
    null
  );
  const [responseError, setResponseError] = useState(null);
  const gameId = useParams().gameId;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (gameId) {
      dispatch(setLoadingTrue());
      Promise.all([
        getGameData(gameId).catch((error) => setResponseError(error)),
        getGameScreenshots(gameId).catch((error) =>
          setResponseError(error)
        ),
        getGameVideos(gameId).catch((error) =>
          setResponseError(error)
        ),
      ]).then(
        ([gameDataLocal, gameScreenshotsLocal, gameVideosLocal]) => {
          setGameData(gameDataLocal as GameItem);
          setGameScreenshots(gameScreenshotsLocal as GameScreenshots);
          setGamesVideos(gameVideosLocal as GameVideos);
          dispatch(setLoadingFalse());
        }
      );
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : responseError ? (
    <EmptyResults />
  ) : (
    gameData && (
      <div className="game-content">
        <TitleInfo
          name={gameData.name}
          released={gameData.released}
          metacritic={gameData.metacritic}
          genres={gameData.genres}
          platforms={gameData.platforms}
          background_image={gameData.background_image}
        />
        <Tabs
          gameDescription={gameData.description}
          gameScreenshots={gameScreenshots?.results}
          gameVideos={gameVideos?.results}
        />
      </div>
    )
  );
};
