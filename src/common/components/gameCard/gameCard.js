import "common/components/gameCard/gameCard.scss";
import "common/components/rating/rating.scss";

import { Platform } from "common/components/platform/platform";
 
export const GameCard = ({rating, name, platforms, imageURL}) => {

  let uniqPlatform = new Set();
  const listPlatforms = platforms?.map(item => { 
    let platformName = item.platform.name.split(" ")[0];
    if (!uniqPlatform.has(platformName)) {
      uniqPlatform.add(platformName);
      return <Platform platform={platformName}  
        key={platformName}/>;
    }
  }) ?? [];

  return(
    <div className="game-card" style={{backgroundImage: `url(${imageURL})`}}>
      {rating && <span className="rating game-card__rating">{rating}</span>}
      <h4 className="game-card__title">{name}</h4>
      <div className="game-card__platforms">
        {listPlatforms}
      </div>
    </div>
  );
}