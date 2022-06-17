import 'common/components/rating/rating.scss';
import 'project/gameDetails/components/titleInfo/titleInfo.scss';

import { getUniqPlatforms } from 'common/components/platform/utils/getUniqPlatforms';
import { Platform } from 'common/components/platform/platform';
import { getGameGenres } from 'project/gameDetails/components/titleInfo/utils/getGameGenres';
import { GameItem } from 'interfaceses';

export const TitleInfo = ({
  name,
  released,
  metacritic,
  genres,
  platforms,
  background_image,
}: GameItem) => {
  const listOfPlatforms = getUniqPlatforms(platforms).map((item) => {
    return <Platform platform={item} key={item} mod={'title'} />;
  });

  return (
    <div
      className="title-info"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <h1 className="title-info__title">{name}</h1>
      {released && (
        <p className="title-info__release">
          Release: {released}
          {metacritic && (
            <span className="rating rating_title title-info__rating">
              {metacritic}
            </span>
          )}
        </p>
      )}
      <p className="title-info__genres">{getGameGenres(genres)}</p>
      <div className="title-info__platforms">{listOfPlatforms}</div>
    </div>
  );
};
