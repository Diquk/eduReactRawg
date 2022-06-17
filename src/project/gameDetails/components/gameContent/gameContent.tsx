import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import 'project/gameDetails/components/gameContent/gameContent.scss';

import { TitleInfo } from 'project/gameDetails/components/titleInfo/titleInfo';
import { getGameData } from 'project/gameDetails/services/getGameData';
import { getGameScreenshots } from 'project/gameDetails/services/getGameScreenshots';
import { getGameVideos } from 'project/gameDetails/services/getGamesVideos';
import { Tabs } from 'project/gameDetails/components/tabs/tabs';
import { Loader } from 'common/components/loader/loader';
import { EmptyResults } from 'project/gameDetails/components/emptyResults/emptyResults';
import { GameItem, GameScreenshots, GameVideos } from 'interfaceses';

interface GameContentProps {
  setLoadingData: (a: boolean) => void;
  isLoadingData: boolean;
}
export const GameContent = ({
  setLoadingData,
  isLoadingData,
}: GameContentProps) => {
  let [gameData, setGameData] = useState<GameItem | null>(null);
  let [gameScreenshots, setGameScreenshots] =
    useState<GameScreenshots | null>(null);
  let [gameVideos, setGamesVideos] = useState<GameVideos | null>(
    null
  );
  let [responseError, setResponseError] = useState(null);
  const gameId = useParams().gameId;

  useEffect(() => {
    if (gameId) {
      setLoadingData(true);
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
          setLoadingData(false);
        }
      );
    }
  }, []);

  return isLoadingData ? (
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
