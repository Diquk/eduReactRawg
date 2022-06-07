import { GameCard } from "../game-card/game-card";
import "./games-collection.scss";
import { useParams } from "react-router-dom";
import { Loader } from "../loading/loader";
import { OrderButtons } from "../orderButtons/orderButtons";


export function GamesCollection(props) {
  const listGames = props.data && props.data.results.map((item) =>
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
        {props.isLoading ? <Loader /> : listGames}
      </div>
    </div>
  );
}