import 'project/home/components/gamesCollection/gamesCollection.scss';

import { GameCard } from 'project/home/components/gameCard/gameCard';
import { Loader } from 'common/components/loader/loader';
import { OrderButtons } from 'project/home/components/orderButtons/orderButtons';
import { GamesData } from 'common/models/interfaces';

interface GamesCollectionProps {
  gamesData: GamesData | null;
  isLoadingData: boolean;
}
export const GamesCollection = ({
  gamesData,
  isLoadingData,
}: GamesCollectionProps) => {
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
        {isLoadingData ? <Loader /> : listGames}
      </div>
    </div>
  );
};
