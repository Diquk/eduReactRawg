import { useEffect } from 'react';
import { useParams } from 'react-router';

import 'project/gameDetails/components/gameContent/gameContent.scss';

import { TitleInfo } from 'project/gameDetails/components/titleInfo/titleInfo';
import { Tabs } from 'project/gameDetails/components/tabs/tabs';
import { Loader } from 'common/components/loader/loader';
import { EmptyResults } from 'project/gameDetails/components/emptyResults/emptyResults';
import {
  useAppDispatch,
  useAppSelector,
} from 'common/hooks/reduxHooks';
import {
  fetchGameById,
  selectGame,
} from 'project/gameDetails/slices/gameSlice';

export default function GameContent() {
  const gameId = useParams().gameId;
  const dispatch = useAppDispatch();
  const gameData = useAppSelector(selectGame);

  useEffect(() => {
    if (gameId) {
      dispatch(fetchGameById(gameId));
    }
  }, []);

  return gameData.loading ? (
    <Loader />
  ) : gameData.error ? (
    <EmptyResults />
  ) : (
    gameData && (
      <div className="game-content">
        <TitleInfo />
        <Tabs />
      </div>
    )
  );
}
