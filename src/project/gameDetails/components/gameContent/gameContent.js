import { useState, useEffect } from "react";
import { useParams } from "react-router";

import "project/gameDetails/components/gameContent/gameContent.scss";

import { TitleInfo } from "project/gameDetails/components/titleInfo/titleInfo";
import { getGameData } from "project/gameDetails/services/getGameData";
import { getGameScreenshots } from "project/gameDetails/services/getGameScreenshots";
import { getGameVideos } from "project/gameDetails/services/getGamesVideos";
import { Tabs } from "project/gameDetails/components/tabs/tabs";
import { Loader } from "common/components/loader/loader";
import { EmptyResults } from "project/gameDetails/components/emptyResults/emptyResults";

export const GameContent = ({setLoadingData, isLoadingData}) => {
  let [gameData, setGameData] = useState(null);
  let [gameScreenshots, setGameScreenshots] = useState(null);
  let [gameVideos, setGamesVideos] = useState(null);
  let [responseError, setResponseError] = useState(null);
  const gameId = useParams().gameId;
  
  useEffect(() => {
    setLoadingData(true);
    Promise.all([
      getGameData(gameId).catch(error => setResponseError(error)),
      getGameScreenshots(gameId).catch(error => setResponseError(error)),
      getGameVideos(gameId).catch(error => setResponseError(error))
    ])
    .then(([gameDataLocal, gameScreenshotsLocal, gameVideosLocal]) => {
      setGameData(gameDataLocal);
      setGameScreenshots(gameScreenshotsLocal);
      setGamesVideos(gameVideosLocal);
      setLoadingData(false);
    });
  }, []);

  return(
    isLoadingData ? <Loader /> : responseError ? <EmptyResults /> : gameData && 
    <div className="game-content">
      <TitleInfo gameName={gameData.name}
        gameReleaseDate={gameData.released}
        gameRating={gameData.metacritic}
        gameGenres={gameData.genres}
        gamePlatforms={gameData.platforms}
        gameTitleImage={gameData.background_image}/>
      <Tabs gameDescription={gameData.description}
        gameScreenshots={gameScreenshots.results}
        gameVideos={gameVideos.results}/>
    </div>
  );
}