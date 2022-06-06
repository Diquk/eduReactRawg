import { GameCard } from "../game-card/game-card";
import "./games-collection.scss";

export function GamesCollection(props) {
  const listGames = props.data.results.map((item) =>
    <GameCard key={item.id} 
    rating={item.metacritic} 
    name={item.name}
    platforms={item.platforms}
    imageURL={item.background_image}/>
  );
  
  return (
    <div className="games-collection">
      {listGames}
    </div>
  );
}