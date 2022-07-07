import { useRef, useEffect, useCallback } from 'react';

import 'project/home/components/gamesCollection/gamesCollection.scss';

import { Loader } from 'common/components/loader/loader';
import {
  useAppSelector,
  useAppDispatch,
} from 'common/hooks/reduxHooks';
import { GameCard } from 'project/home/components/gameCard/gameCard';
import { OrderButtons } from 'project/home/components/orderButtons/orderButtons';
import { gamesSelector } from 'project/home/slices/gamesSlice';
import { fetchGamesByScrolling } from 'project/home/slices/gamesSlice';

export default function GamesCollection() {
  const gamesData = useAppSelector(gamesSelector.selectAll);
  const nextPage = useAppSelector((state) => state.games.next);
  const isLoading = useAppSelector((state) => state.games.loading);
  const loaderNext = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  let listGames = gamesData?.map((game) => (
    <GameCard
      key={game.id}
      metacritic={game.metacritic}
      name={game.name}
      platforms={game.platforms}
      background_image={game.background_image}
      id={game.id}
    />
  ));

  const handleIntersectionNext = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        if (nextPage && !isLoading) {
          dispatch(fetchGamesByScrolling(nextPage));
        }
      }
    },
    [nextPage]
  );

  useEffect(() => {
    const option = {
      root: null as Element | null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(
      handleIntersectionNext,
      option
    );
    if (loaderNext.current && !isLoading) {
      observer.observe(loaderNext.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleIntersectionNext]);

  return (
    <>
      <OrderButtons />
      <div className="games-collection">{listGames}</div>
      {isLoading && <Loader />}
      {isLoading || <div ref={loaderNext} />}
    </>
  );
}
