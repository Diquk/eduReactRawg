import { Link } from 'react-router-dom';

import 'common/components/rating/rating.scss';
import 'project/home/components/gameCard/gameCard.scss';

import { getUniqPlatforms } from 'common/components/platform/utils/getUniqPlatforms';
import { Platform } from 'common/components/platform/platform';
import { GameItem } from 'interfaceses';

export const GameCard = ({
  metacritic,
  name,
  platforms,
  background_image,
  id,
}: GameItem) => {
  const listOfPlatforms = getUniqPlatforms(platforms).map((item) => {
    return <Platform platform={item} key={item} />;
  });

  return (
    <Link to={`/game-details/${id}`} className="link">
      <div
        className="game-card"
        style={{ backgroundImage: `url(${background_image})` }}
      >
        {metacritic && (
          <span className="rating game-card__rating">
            {metacritic}
          </span>
        )}
        <h4 className="game-card__title">{name}</h4>
        <div className="game-card__platforms">{listOfPlatforms}</div>
      </div>
    </Link>
  );
};
