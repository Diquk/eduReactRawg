import { Link } from "react-router-dom";

import "common/components/rating/rating.scss";
import "project/home/components/gameCard/gameCard.scss";

import { getUniqPlatforms } from "common/components/platform/utils/getUniqPlatforms";
import { Platform } from "common/components/platform/platform";
 
export const GameCard = ({rating, name, platforms, imageURL, gameId}) => {
  const listOfPlatforms = getUniqPlatforms(platforms).map(item => {
    return <Platform platform={item} key={item} />
  });
  
  return(
    <Link to={`/game-details/${gameId}`} className="link">
      <div className="game-card" style={{backgroundImage: `url(${imageURL})`}}>
        {rating && <span className="rating game-card__rating">{rating}</span>}
        <h4 className="game-card__title">{name}</h4>
        <div className="game-card__platforms">
          {listOfPlatforms}
        </div>
      </div>
    </Link>
  );
}