import "common/components/rating/rating.scss";
import "project/gameDetails/components/titleInfo/titleInfo.scss";

import { getUniqPlatforms } from "common/components/platform/utils/getUniqPlatforms";
import { Platform } from "common/components/platform/platform";
import { getGameGenres } from "project/gameDetails/components/titleInfo/utils/getGameGenres";

export const TitleInfo = ({gameName, gameReleaseDate, gameRating, gameGenres, gamePlatforms, gameTitleImage}) => {
  const listOfPlatforms = getUniqPlatforms(gamePlatforms).map(item => {
    return <Platform platform={item} key={item} mod={"title"}/>
  });

  return (
    <div className="title-info" style={{backgroundImage: `url(${gameTitleImage})`}}>
      <h1 className="title-info__title">{gameName}</h1>
      {gameReleaseDate && <p className="title-info__release">
        Release: {gameReleaseDate} 
        {gameRating && <span className="rating rating_title title-info__rating">{gameRating}</span>}
      </p>}
      <p className="title-info__genres">{getGameGenres(gameGenres)}</p>
      <div className="title-info__platforms">
        {listOfPlatforms}
      </div>
    </div>
  );
}