import "common/components/gamesCollection/gamesCollection.scss";

import { GameCard } from "common/components/gameCard/gameCard";
import { Loader } from "common/components/loader/loader";
import { OrderButtons } from "common/components/orderButtons/orderButtons";


export const GamesCollection = ({gamesData, isLoadingData}) => {
  const listGames = gamesData && gamesData.results.map((item) =>
    <GameCard key={item.id} 
    rating={item.metacritic} 
    name={item.name}
    platforms={item.platforms}
    imageURL={item.background_image}/>
  );

  return (
    <div className="content">
      <OrderButtons />
      <div className="games-collection">
        {isLoadingData ? <Loader /> : listGames}
      </div>
    </div>
  );
}