import "common/components/rating/rating.scss";

import { Platform } from "common/components/platform/platform";

export const TitleInfo = ({gameName, gameReleaseDate, gameRating, gameGenres, gamePlatforms}) => {
  let uniqPlatform = new Set();
  const listPlatforms = gamePlatforms?.map(item => { 
    let platformName = item.platform.name.split(" ")[0];
    if (!uniqPlatform.has(platformName)) {
      uniqPlatform.add(platformName);
      return <Platform platform={platformName}  
        key={platformName}/>;
    }
  }) ?? [];

  const gameGenresString = gameGenres && 
    gameGenres.map(item => item.name).join(" ");

  return (
    <div className="title-info">
      <h1 className="title-info__title">{gameName}</h1>
      <p className="title-info__release">
        Release: {gameReleaseDate} 
        <span className="rating">{gameRating}</span>
      </p>
      <p className="title-info__genres">{gameGenresString}</p>
      <div className="title-info__platforms">
        {listPlatforms}
      </div>
    </div>
  );
}