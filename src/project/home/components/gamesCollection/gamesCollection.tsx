import "project/home/components/gamesCollection/gamesCollection.scss";

import { GameCard } from "project/home/components/gameCard/gameCard";
import { Loader } from "common/components/loader/loader";
import { OrderButtons } from "project/home/components/orderButtons/orderButtons";
import { GamesData } from "interfaceses";

interface GamesCollectionProps {
  gamesData: GamesData | null;
  isLoadingData: boolean;
}
export const GamesCollection = ({gamesData, isLoadingData}: GamesCollectionProps) => {
  const listGames = gamesData && gamesData.results.map((item) =>
    <GameCard key={item.id} 
    metacritic={item.metacritic} 
    name={item.name}
    platforms={item.platforms}
    background_image={item.background_image}
    id={item.id}/>
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