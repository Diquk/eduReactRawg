import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { TitleInfo } from "project/gameDetails/components/titleInfo/titleInfo";
import { getGameData } from "project/gameDetails/services/getGameData/getGameData";
import { Tabs } from "project/gameDetails/components/tabs/tabs";
import { Loader } from "common/components/loader/loader";

export const GameContent = ({setLoadingData, isLoadingData}) => {
  let [gameData, setGameData] = useState(null);
  const gameId = useParams().gameId;
  
  useEffect(() => {
    setLoadingData(true);
    getGameData(gameId)
      .then(data => {console.log(data); setGameData(data); setLoadingData(false);}); 
  }, []);

  return(
    isLoadingData ? <Loader /> : gameData && 
    <div className="game-content">
      <TitleInfo gameName={null || gameData.name}
        gameReleaseDate={null || gameData.released}
        gameRating={null || gameData.metacritic}
        gameGenres={null || gameData.genres}
        gamePlatforms={null || gameData.platforms}/>
      <Tabs gameDescription={null || gameData.description}/>
    </div>
  );
}