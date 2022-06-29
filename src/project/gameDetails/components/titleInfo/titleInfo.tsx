import 'common/components/rating/rating.scss';
import 'project/gameDetails/components/titleInfo/titleInfo.scss';

import { getUniqPlatforms } from 'common/components/platform/utils/getUniqPlatforms';
import { Platform } from 'common/components/platform/platform';
import { useAppSelector } from 'common/hooks/reduxHooks';
import { getGameGenres } from 'project/gameDetails/components/titleInfo/utils/getGameGenres';

export const TitleInfo = () => {
  const gameItem = useAppSelector((state) => state.game.game);
  const listOfPlatforms = getUniqPlatforms(gameItem?.platforms).map(
    (platform) => {
      return (
        <Platform platform={platform} key={platform} mod={'title'} />
      );
    }
  );

  return (
    <div
      className="title-info"
      style={{
        backgroundImage: `url(${gameItem?.background_image})`,
      }}
    >
      <h1 className="title-info__title">{gameItem?.name}</h1>
      {gameItem?.released && (
        <p className="title-info__release">
          Release: {gameItem?.released}
          {gameItem?.metacritic && (
            <span className="rating rating_title title-info__rating">
              {gameItem?.metacritic}
            </span>
          )}
        </p>
      )}
      <p className="title-info__genres">
        {getGameGenres(gameItem?.genres)}
      </p>
      <div className="title-info__platforms">{listOfPlatforms}</div>
    </div>
  );
};
