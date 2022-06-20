import { useSelector } from 'react-redux';

import 'project/home/components/gamesCollection/gamesCollection.scss';

import { Loader } from 'common/components/loader/loader';
import { selectLoading } from 'common/slices/loadingSlice';
import { GameCard } from 'project/home/components/gameCard/gameCard';
import { OrderButtons } from 'project/home/components/orderButtons/orderButtons';
import { selectGames } from 'project/home/slices/gamesSlice';

export const GamesCollection = () => {
  const gamesData = useSelector(selectGames);
  const isLoading = useSelector(selectLoading);
  const listGames =
    gamesData &&
    gamesData.results.map((game) => (
      <GameCard
        key={game.id}
        metacritic={game.metacritic}
        name={game.name}
        platforms={game.platforms}
        background_image={game.background_image}
        id={game.id}
      />
    ));

  return (
    <div className="content">
      <OrderButtons />
      <div className="games-collection">
        {isLoading ? <Loader /> : listGames}
      </div>
    </div>
  );
};
