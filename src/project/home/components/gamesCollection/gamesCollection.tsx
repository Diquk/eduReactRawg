import 'project/home/components/gamesCollection/gamesCollection.scss';

import { Loader } from 'common/components/loader/loader';
import { useAppSelector } from 'common/hooks/reduxHooks';
import { GameCard } from 'project/home/components/gameCard/gameCard';
import { OrderButtons } from 'project/home/components/orderButtons/orderButtons';
import { gamesSelector } from 'project/home/slices/gamesSlice';

export default function GamesCollection() {
  const gamesData = useAppSelector(gamesSelector.selectAll);
  const isLoading = useAppSelector((state) => state.games.loading);
  const listGames =
    gamesData &&
    gamesData?.map((game) => (
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
}
