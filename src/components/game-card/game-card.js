import "./game-card.scss";
import "../rating/rating.scss";
import { Platform } from "../platform/platform";
 
export function GameCard(props) {

  const listPlatforms = props.platforms?.map(item => 
    <Platform platform={item.platform.name}  key={item.platform.id}/>
  ) ?? [];

  let uniqPlatform = new Set();
  const newListPlatforms = listPlatforms.filter((item) => {
    if(!uniqPlatform.has(item.props.platform.split(" ")[0])) {
      uniqPlatform.add(item.props.platform.split(" ")[0]);
      return true;
    }
    return false;
  });
  
  return(
    <div className="game-card" style={{backgroundImage: `url(${props.imageURL})`}}>
      {props.rating && <span className="rating game-card__rating">{props.rating}</span>}
      <h4 className="game-card__title">{props.name}</h4>
      <div className="game-card__platforms">
        {newListPlatforms}
      </div>
    </div>
  );
}